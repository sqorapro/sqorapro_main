document.documentElement.classList.add("js");
document.documentElement.dataset.motion = "balanced";

const root = document.documentElement;
const motionLevels = {
  subtle: 0.55,
  balanced: 1,
  bold: 1.55
};

function currentMotion() {
  return motionLevels[root.dataset.motion || "balanced"] || 1;
}

function initNav() {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;
  const update = () => {
    nav.classList.toggle("scrolled", window.scrollY > 24);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });

  const toggle = nav.querySelector(".nav-toggle");
  const menu = nav.querySelector("#mobileMenu");
  if (toggle && menu) {
    const setOpen = (open) => {
      nav.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menu.setAttribute("aria-hidden", open ? "false" : "true");
    };
    toggle.addEventListener("click", () => {
      setOpen(!nav.classList.contains("menu-open"));
    });
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1120) setOpen(false);
    });
  }
}

function initReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  const formatter = new Intl.NumberFormat("en-US");

  const animate = (el) => {
    if (el.dataset.counted === "true") return;
    el.dataset.counted = "true";

    const target = Number(el.dataset.target || "0");
    const suffix = el.dataset.suffix || "";
    const duration = 1300 / currentMotion();
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      el.textContent = `${formatter.format(value)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${formatter.format(target)}${suffix}`;
      }
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.36 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initAiBrief() {
  // The new AI Brief integration lives in i18n.js (initAiBriefClaude).
  // This stub remains for backward compatibility — it does nothing on its own.
}

function initChips() {
  document.querySelectorAll(".chip-row").forEach((row) => {
    row.addEventListener("click", (event) => {
      const target = event.target.closest("button");
      if (!target) return;
      row.querySelectorAll("button").forEach((button) => button.classList.remove("active"));
      target.classList.add("active");
    });
  });
}

function hexToRgb(value) {
  const trimmed = value.trim();
  const hex = trimmed.startsWith("#") ? trimmed.slice(1) : trimmed;
  if (hex.length !== 6) return { r: 0, g: 198, b: 255 };
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  };
}

function getCssRgb(name) {
  const value = getComputedStyle(root).getPropertyValue(name);
  return hexToRgb(value);
}

function initGlobe() {
  const canvas = document.getElementById("globeCanvas");
  const stage = document.getElementById("globeStage");
  if (!canvas || !stage) return;

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let radius = 0;
  let dpr = 1;
  let points = [];
  let edges = [];
  let projections = [];
  let rotation = 0;
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let lastFrame = performance.now();

  const createSphere = () => {
    const count = 188;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    points = [];

    for (let i = 0; i < count; i += 1) {
      const y = 1 - (i / (count - 1)) * 2;
      const radial = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      points.push({
        x: Math.cos(theta) * radial,
        y,
        z: Math.sin(theta) * radial
      });
    }

    const linksPerPoint = new Array(count).fill(0);
    edges = [];

    for (let i = 0; i < count; i += 1) {
      for (let j = i + 1; j < count; j += 1) {
        if (linksPerPoint[i] >= 5 || linksPerPoint[j] >= 5) continue;
        const a = points[i];
        const b = points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (distance < 0.36) {
          edges.push([i, j]);
          linksPerPoint[i] += 1;
          linksPerPoint[j] += 1;
        }
      }
    }
  };

  const resize = () => {
    const rect = stage.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    radius = Math.min(width, height) * 0.34;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  const project = (point, angleY, angleX) => {
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);

    const x1 = point.x * cosY - point.z * sinY;
    const z1 = point.x * sinY + point.z * cosY;
    const y1 = point.y;
    const y2 = y1 * cosX - z1 * sinX;
    const z2 = y1 * sinX + z1 * cosX;
    const depth = 2.55;
    const scale = depth / (depth - z2);

    return {
      x: width / 2 + x1 * radius * scale,
      y: height / 2 + y2 * radius * scale,
      z: z2,
      scale,
      alpha: Math.max(0.08, Math.min(1, (z2 + 1.18) / 2.18))
    };
  };

  const draw = (now) => {
    const delta = Math.min(now - lastFrame, 36);
    lastFrame = now;
    const motion = currentMotion();
    rotation += delta * 0.00016 * motion;
    mouseX += (targetMouseX - mouseX) * 0.055;
    mouseY += (targetMouseY - mouseY) * 0.055;

    const accent = getCssRgb("--accent");
    const cyan = getCssRgb("--accent-2");
    const angleY = rotation + mouseX * 0.5;
    const angleX = -0.22 + mouseY * 0.4;

    ctx.clearRect(0, 0, width, height);

    const glow = ctx.createRadialGradient(width / 2, height / 2, radius * 0.1, width / 2, height / 2, radius * 1.45);
    glow.addColorStop(0, `rgba(${cyan.r}, ${cyan.g}, ${cyan.b}, 0.16)`);
    glow.addColorStop(0.48, `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.08)`);
    glow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius * 1.6, 0, Math.PI * 2);
    ctx.fill();

    projections = points.map((point) => project(point, angleY, angleX));

    edges.forEach(([aIndex, bIndex]) => {
      const a = projections[aIndex];
      const b = projections[bIndex];
      const alpha = Math.min(a.alpha, b.alpha) * 0.28;
      ctx.strokeStyle = `rgba(${cyan.r}, ${cyan.g}, ${cyan.b}, ${alpha})`;
      ctx.lineWidth = Math.max(0.7, Math.min(1.4, (a.scale + b.scale) * 0.38));
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    });

    projections.forEach((point) => {
      const size = Math.max(1.1, point.scale * 2.2);
      ctx.fillStyle = `rgba(255, 255, 255, ${0.15 + point.alpha * 0.45})`;
      ctx.beginPath();
      ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
      ctx.fill();

      if (point.alpha > 0.72) {
        ctx.fillStyle = `rgba(${cyan.r}, ${cyan.g}, ${cyan.b}, ${(point.alpha - 0.68) * 0.7})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size * 2.6, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    requestAnimationFrame(draw);
  };

  stage.addEventListener("pointermove", (event) => {
    const rect = stage.getBoundingClientRect();
    targetMouseX = (event.clientX - rect.left) / rect.width - 0.5;
    targetMouseY = (event.clientY - rect.top) / rect.height - 0.5;
  });

  stage.addEventListener("pointerleave", () => {
    targetMouseX = 0;
    targetMouseY = 0;
  });

  createSphere();
  resize();
  window.addEventListener("resize", resize, { passive: true });
  requestAnimationFrame(draw);
}

function initCarousel() {
  const track = document.getElementById("testimonialTrack");
  const button = document.querySelector(".pause-carousel");
  if (!track || !button) return;

  const cards = Array.from(track.children);
  let index = 0;
  let paused = false;
  let timer = null;

  const visibleCount = () => (window.matchMedia("(max-width: 760px)").matches ? 1 : 2);

  const setPosition = () => {
    const first = cards[0];
    if (!first) return;
    const gap = parseFloat(getComputedStyle(track).gap || "0");
    const step = first.getBoundingClientRect().width + gap;
    track.style.transform = `translate3d(${-index * step}px, 0, 0)`;
  };

  const advance = () => {
    const maxIndex = Math.max(0, cards.length - visibleCount());
    index = index >= maxIndex ? 0 : index + 1;
    setPosition();
  };

  const start = () => {
    timer = window.setInterval(() => {
      if (!paused) advance();
    }, 3600 / currentMotion());
  };

  button.addEventListener("click", () => {
    paused = !paused;
    button.textContent = paused ? "Play" : "Pause";
    button.setAttribute("aria-pressed", String(paused));
  });

  window.addEventListener("resize", setPosition, { passive: true });
  setPosition();
  start();
}

function initTweaks() {
  const palettes = {
    blue: ["#0078ff", "#00c6ff"],
    violet: ["#7c3aed", "#22d3ee"],
    indigo: ["#4f46e5", "#38bdf8"]
  };

  document.querySelectorAll("[data-accent]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.accent;
      const palette = palettes[key] || palettes.blue;
      root.style.setProperty("--accent", palette[0]);
      root.style.setProperty("--accent-2", palette[1]);
      document.querySelectorAll("[data-accent]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });

  document.querySelectorAll("[data-motion]").forEach((button) => {
    button.addEventListener("click", () => {
      root.dataset.motion = button.dataset.motion || "balanced";
      document.querySelectorAll("[data-motion]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

function initFloatCards() {
  const stage = document.getElementById("globeStage");
  if (!stage) return;
  const cards = stage.querySelectorAll(".float-card");
  if (!cards.length) return;

  const close = () => {
    stage.classList.remove("has-active");
    cards.forEach((c) => c.classList.remove("is-active"));
  };

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      const wasActive = card.classList.contains("is-active");
      cards.forEach((c) => c.classList.remove("is-active"));
      if (wasActive) {
        stage.classList.remove("has-active");
      } else {
        card.classList.add("is-active");
        stage.classList.add("has-active");
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!stage.classList.contains("has-active")) return;
    if (!stage.contains(event.target)) close();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });
}

function initInteractiveCards() {
  const cards = document.querySelectorAll(".service-card, .showreel-card, .product-card");

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);

      const visual = card.querySelector(".service-visual, .product-preview, .code-rain, .route-map, .device-stack, .launch-meter");
      if (!visual) return;
      const tiltX = (y - 50) * -0.04;
      const tiltY = (x - 50) * 0.04;
      visual.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-2px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "50%");
      const visual = card.querySelector(".service-visual, .product-preview, .code-rain, .route-map, .device-stack, .launch-meter");
      if (visual) {
        visual.style.transform = "";
      }
    });
  });
}

initNav();
initReveal();
initCounters();
initAiBrief();
initChips();
initGlobe();
initFloatCards();
initCarousel();
initTweaks();
initInteractiveCards();

// Bilingual + Claude AI Brief + Telegram form submission (from i18n.js)
if (window.__sqora) {
  window.__sqora.initLang();
  window.__sqora.initContactForm();
  window.__sqora.initAiBriefClaude();
}
