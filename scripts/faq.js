function setExpanded(button, expanded) {
  const item = button.closest(".faq-item");
  const group = button.closest("[data-faq]");
  const panel = document.getElementById(
    button.getAttribute("aria-controls")
  );

  if (!item || !group || !panel || !group.contains(panel)) {
    return;
  }

  button.setAttribute("aria-expanded", String(expanded));
  item.dataset.open = String(expanded);

  panel.setAttribute("aria-hidden", String(!expanded));
  panel.inert = !expanded;
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;

  const button = event.target.closest(
    "button[data-faq-trigger]"
  );

  if (!(button instanceof HTMLButtonElement)) return;

  const group = button.closest("[data-faq]");
  if (!group) return;

  const opening = button.getAttribute("aria-expanded") !== "true";

  // Keep one answer open at a time.
  if (opening) {
    group.querySelectorAll(
      'button[data-faq-trigger][aria-expanded="true"]'
    ).forEach((other) => {
      if (other !== button) {
        setExpanded(other, false);
      }
    });
  }

  setExpanded(button, opening);
});