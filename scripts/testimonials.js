function setupTestimonials(root) {
  const slides = [
    ...root.querySelectorAll("[data-quote-slide]")
  ];

  const dots = [
    ...root.querySelectorAll("[data-quote-index]")
  ];

  const pauseButton = root.querySelector("[data-quote-pause]");
  const motion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const controller = new AbortController();
  const { signal } = controller;

  let current = 0;
  let timer = 0;
  let exitTimer = 0;
  let paused = false;
  let hovered = root.matches(":hover");
  let focused = root.contains(document.activeElement);
  let visible = false;

  function updatePauseButton() {
    if (!pauseButton) return;

    pauseButton.textContent = paused ? "Play" : "Pause";
    pauseButton.setAttribute("aria-pressed", String(paused));

    pauseButton.setAttribute(
      "aria-label",
      paused
        ? "Play automatic testimonials"
        : "Pause automatic testimonials"
    );
  }

  function show(next, instant = false) {
    if (next === current && !instant) return;

    clearTimeout(exitTimer);
    current = next;

    slides.forEach((slide, index) => {
      if (index === current) {
        slide.dataset.state = "active";
      } else if (instant) {
        slide.dataset.state = "inactive";
      } else if (slide.dataset.state === "active") {
        slide.dataset.state = "leaving";
      }

      slide.setAttribute(
        "aria-hidden",
        String(index !== current)
      );
    });

    dots.forEach((dot, index) => {
      dot.setAttribute(
        "aria-pressed",
        String(index === current)
      );
    });

    if (!instant) {
      exitTimer = setTimeout(() => {
        slides.forEach((slide, index) => {
          if (index !== current) {
            slide.dataset.state = "inactive";
          }
        });
      }, 620);
    }
  }

  function syncAuto() {
    clearTimeout(timer);

    if (
      signal.aborted ||
      root.dataset.autoplay !== "true" ||
      slides.length < 2 ||
      motion.matches ||
      paused ||
      hovered ||
      focused ||
      !visible ||
      document.hidden
    ) return;

    timer = setTimeout(() => {
      show((current + 1) % slides.length);
      syncAuto();
    }, 4000);
  }

  root.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const dot = event.target.closest(
      "button[data-quote-index]"
    );

    if (dot && root.contains(dot) && !motion.matches) {
      const next = Number(dot.dataset.quoteIndex);

      if (
        !Number.isInteger(next) ||
        next < 0 ||
        next >= slides.length
      ) return;

      show(next);
      paused = false;
      updatePauseButton();
      syncAuto();
      return;
    }

    if (
      pauseButton &&
      event.target.closest("[data-quote-pause]") === pauseButton
    ) {
      paused = !paused;
      updatePauseButton();
      syncAuto();
    }
  }, { signal });

  root.addEventListener("mouseenter", () => {
    hovered = true;
    syncAuto();
  }, { signal });

  root.addEventListener("mouseleave", () => {
    hovered = false;
    syncAuto();
  }, { signal });

  root.addEventListener("focusin", () => {
    focused = true;
    syncAuto();
  }, { signal });

  root.addEventListener("focusout", () => {
    queueMicrotask(() => {
      focused = root.contains(document.activeElement);
      syncAuto();
    });
  }, { signal });

  document.addEventListener(
    "visibilitychange",
    syncAuto,
    { signal }
  );

  motion.addEventListener("change", () => {
    if (motion.matches) show(0, true);
    syncAuto();
  }, { signal });

  const observer = new IntersectionObserver((entries) => {
    visible = entries.some(
      (entry) =>
        entry.isIntersecting &&
        entry.intersectionRatio >= 0.25
    );

    syncAuto();
  }, { threshold: 0.25 });

  show(0, true);
  updatePauseButton();
  observer.observe(root);

  return () => {
    controller.abort();
    observer.disconnect();
    clearTimeout(timer);
    clearTimeout(exitTimer);
  };
}

class PortfolioTestimonials extends HTMLElement {
  connectedCallback() {
    queueMicrotask(() => {
      if (!this.isConnected || this.cleanupTestimonials) return;

      this.cleanupTestimonials = setupTestimonials(this);
    });
  }

  disconnectedCallback() {
    this.cleanupTestimonials?.();
    this.cleanupTestimonials = null;
  }
}

if (!customElements.get("portfolio-testimonials")) {
  customElements.define(
    "portfolio-testimonials",
    PortfolioTestimonials
  );
}