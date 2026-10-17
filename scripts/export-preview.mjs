import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const dist = resolve(root, 'dist')
const types = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.html': 'text/html', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.webm': 'video/webm' }
const cache = new Map()
function embedded(path) {
  if (cache.has(path)) return cache.get(path)
  const file = resolve(dist, path.slice(1))
  if (!existsSync(file)) throw new Error(`Preview asset is missing: ${path}`)
  const extension = path.slice(path.lastIndexOf('.'))
  if (!types[extension]) throw new Error(`Unsupported preview type: ${path}`)
  const value = `data:${types[extension]};base64,${readFileSync(file).toString('base64')}`
  cache.set(path, value)
  return value
}

let html = readFileSync(resolve(dist, 'index.html'), 'utf8')
const entry = /<script\b[^>]*src="(\/assets\/[^"]+\.js)"[^>]*><\/script>/.exec(html)
if (!entry) throw new Error('Build the portfolio before exporting its preview.')
let js = readFileSync(resolve(dist, entry[1].slice(1)), 'utf8').replace(/\/\/# sourceMappingURL=.*$/gm, '')
// All portfolio images, icons, and sample documents use complete public paths in the content data.
js = js.replace(/(["'`])(\/(?:avatar\.png|about-photo\.png|brand\/[^"'`]+\.svg|icons\/[^"'`]+\.(?:svg|png)|(?:projects|showcase)\/[^"'`]+\.(?:png|svg|html|jpe?g|webp|mp4|webm)))\1/g, (_, quote, path) => JSON.stringify(embedded(path)))
html = html.replace(/url\((['"]?)(\/fonts\/[^)'"\s]+)\1\)/g, (_, quote, path) => `url("${embedded(path)}")`)
html = html.replace(/(?:href|src)="(\/(?:favicon\.svg|apple-touch-icon\.png|fonts\/[^"\s]+))"/g, (whole, path) => whole.replace(path, embedded(path)))
html = html.replace(entry[0], () => `<script type="module">${js.replace(/<\/script/gi, '<\\/script')}</script>`)
if (/<script\b[^>]*\bsrc="\/assets\//.test(html)) throw new Error('The preview still has an external entry script.')
if (cache.size < 30) throw new Error('The preview did not embed the expected portfolio assets.')
writeFileSync(resolve(root, 'V2-Preview.html'), html)
console.log(`Created V2-Preview.html with ${cache.size} embedded assets. Open it directly in a browser to explore the portfolio offline.`)
