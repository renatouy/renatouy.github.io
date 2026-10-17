import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useShowcaseScroll } from './use-showcase-scroll'
import { Link } from 'react-router'
import { ArrowUpRight, CalendarBlank, Kanban, Tray, Airplane, Table, ImageSquare, FilmStrip, MagnifyingGlassPlus, X } from '@phosphor-icons/react'
import { PageMeta } from '@/app/PageMeta'
import type { PageRoute } from '@/app/routes'
import { PageHeader } from '@/components/page/PageHeader'
import { showcasePage, showcaseRooms, type ShowcaseMedia, type ShowcaseRoom } from '@/content/showcase'
import { ContactBand } from '@/features/portfolio/Shared'
import '@/features/portfolio/portfolio.css'
import './showcase.css'

type ImageSample = Extract<ShowcaseMedia, { type: 'image' }>
const roomIcons = [CalendarBlank, Kanban, Tray, Airplane, Table, ImageSquare, FilmStrip]
const pad = (n: number) => String(n).padStart(2, '0')

function RoomMedia({ room, number, onExpand }: { room: ShowcaseRoom; number: number; onExpand: (sample: ImageSample) => void }) {
  const media = room.media
  if (!media) return <div className="showcase-empty"><span className="showcase-empty__number" aria-hidden="true">{pad(number)}</span><div><p className="eyebrow">{room.label}</p><p className="showcase-empty__title">Sample coming next.</p><p>This room will be filled as the sample is ready.</p></div></div>
  if (media.type === 'image') return <button className="showcase-image" type="button" onClick={() => onExpand(media)} aria-label={`Enlarge ${media.title}`}><img src={media.src} alt={media.alt} width={media.width} height={media.height} decoding="async" loading="lazy" /><span className="showcase-image__hint"><MagnifyingGlassPlus size={17} aria-hidden="true" /> Enlarge sample</span></button>
  if (media.type === 'video') return <video className="showcase-video" controls playsInline preload="metadata" poster={media.poster} aria-label={media.title}><source src={media.src} type={media.mime} /><a href={media.src}>Open {media.title}</a></video>
  return <iframe className="showcase-document" src={media.src} title={media.title} sandbox="" loading="lazy" />
}

export function ShowcasePage({ page, nested = false }: { page: PageRoute; nested?: boolean }) {
  const Root = nested ? 'section' : 'div'
  const SectionHeading = nested ? 'h3' : 'h2'
  const RoomHeading = nested ? 'h4' : 'h3'
  const [selected, setSelected] = useState(0)
    const roomsRef = useRef<HTMLElement>(null)
  const jumpToRoom = useShowcaseScroll(
    roomsRef,
    showcaseRooms.length,
    setSelected,
  )
  const [zoomed, setZoomed] = useState<ImageSample | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const current = showcaseRooms[selected]!

  useEffect(() => {
    const dialog = dialogRef.current
    if (!zoomed || !dialog) return
    if (!dialog.open) dialog.showModal()
    const previousLock = document.documentElement.dataset.scrollLocked
    document.documentElement.dataset.scrollLocked = 'true'
    return () => {
      if (dialog.open) dialog.close()
      if (previousLock === undefined) delete document.documentElement.dataset.scrollLocked
      else document.documentElement.dataset.scrollLocked = previousLock
    }
  }, [zoomed])

  return (
    <Root id={nested ? 'showcase' : undefined} className={`pg showcase-page${nested ? ' pg--section' : ''}`} aria-labelledby={nested ? 'showcase-title' : undefined}>
      {!nested && <PageMeta page={page} />}
      <PageHeader {...showcasePage} level={nested ? 2 : 1} id={nested ? 'showcase-title' : undefined}>
        <div className="showcase-intro"><Link className="text-link" to="/projects">Explore the case studies <ArrowUpRight size={17} aria-hidden="true" /></Link><p>Simulated portfolio work. New samples are added as they are ready.</p></div>
      </PageHeader>

            <section
        ref={roomsRef}
        className="showcase-rooms"
        aria-labelledby="showcase-rooms-title"
        style={{ '--room-count': showcaseRooms.length } as CSSProperties}
      >
        <div className="showcase-rooms__pin">
        <div className="showcase-roomnav">
          <p className="eyebrow">Choose a room</p>
          <SectionHeading id="showcase-rooms-title">The work, in focus.</SectionHeading>
          <nav aria-label="Showcase rooms"><ol>{showcaseRooms.map((room, index) => {
            const Icon = roomIcons[index] ?? ImageSquare
            return <li key={room.id}><button type="button" id={`room-choice-${room.id}`} aria-controls={`showcase-room-${room.id}`} aria-pressed={selected === index} onClick={() => jumpToRoom(index)}><span className="showcase-roomnav__number">{pad(index + 1)}</span><Icon size={19} weight={selected === index ? 'fill' : 'regular'} aria-hidden="true" /><span>{room.label}<small>{room.media ? 'Sample ready' : 'Coming next'}</small></span></button></li>
          })}</ol></nav>
          <p className="showcase-position" role="status">{pad(selected + 1)} / {pad(showcaseRooms.length)}<span>{current.label}</span></p>
        </div>

        <div className="showcase-roompanes">
          {showcaseRooms.map((room, index) => (
            <section className="showcase-room" key={room.id} id={`showcase-room-${room.id}`} aria-labelledby={`room-choice-${room.id}`} hidden={selected !== index}>
              <figure>
                <div className="showcase-frame">
                  <div className="showcase-frame__bar"><span><i aria-hidden="true" data-ready={Boolean(room.media)} />{room.label}</span><small>{room.media ? 'Simulated work sample' : 'Sample coming next'}</small></div>
                  <RoomMedia room={room} number={index + 1} onExpand={setZoomed} />
                </div>
                <figcaption><p className="eyebrow">Room {pad(index + 1)} / {pad(showcaseRooms.length)}</p><RoomHeading>{room.title}</RoomHeading><p>{room.description}</p><ul className="tag-list" aria-label={room.media ? 'Skills shown' : 'Planned sample focus'}>{room.focus.map((focus) => <li key={focus}>{focus}</li>)}</ul>{room.project ? <Link className="text-link" to={`/projects/${room.project.id}`}>{room.project.label} <ArrowUpRight size={16} aria-hidden="true" /></Link> : null}</figcaption>
              </figure>
            </section>
          ))}
        </div>
        </div>
      </section>

      {!nested && <ContactBand />}
      <dialog className="sample-lightbox" ref={dialogRef} aria-label={zoomed?.title ?? 'Enlarged work sample'} onClose={() => setZoomed(null)} onClick={(event) => { if (event.target === event.currentTarget) setZoomed(null) }}><div className="sample-lightbox__bar"><span>{zoomed?.title ?? 'Work sample'}</span><button type="button" className="icon-button" aria-label="Close enlarged sample" onClick={() => setZoomed(null)}><X size={22} aria-hidden="true" /></button></div>{zoomed ? <img src={zoomed.src} alt={zoomed.alt} width={zoomed.width} height={zoomed.height} /> : null}</dialog>
    </Root>
  )
}
