/* SQORA PRO — Live Demos catalog: filters + render */

(function () {
  // Bilingual labels for filter pills + filter-row labels
  const LABELS = {
    en: {
      eyebrow: "LIVE DEMOS",
      headline: "See it live. Order yours.",
      sub: "Every demo is a fully deployed product. Explore — then order a similar one for your business.",
      f_type: "Type",
      f_sub: "Category",
      f_industry: "Industry",
      f_budget: "Budget",
      filters: "Filters ▼",
      filters_open: "Filters ▲",
      reset: "Reset filters",
      live: "Live",
      soon: "Coming Soon",
      from: "from",
      empty: "No demos match the selected filters. Try a different combination.",
      types: {
        all: "All",
        web: "Website",
        telegram: "Telegram Bot",
        miniapp: "Mini App"
      },
      subs: {
        all: "All",
        landing: "Landing",
        corporate: "Corporate",
        ecommerce: "E-commerce",
        catalog: "Catalog",
        booking: "Booking App"
      },
      industries: {
        all: "All",
        medical: "Medical",
        restaurant: "Restaurant",
        "real-estate": "Real Estate",
        beauty: "Beauty",
        education: "Education",
        sport: "Sport",
        legal: "Legal",
        auto: "Auto",
        retail: "Retail",
        other: "Other"
      },
      budgets: {
        all: "All",
        "1k": "Up to 300K ₸",
        "3k": "300K – 600K ₸",
        "5k": "600K – 1M ₸",
        "5k+": "1M+ ₸"
      }
    },
    ru: {
      eyebrow: "ЖИВЫЕ ДЕМО",
      headline: "Живые примеры. Закажите похожее.",
      sub: "Каждое демо — реально задеплоенный продукт. Изучите пример и закажите похожий для своего бизнеса.",
      f_type: "Тип",
      f_sub: "Вид",
      f_industry: "Отрасль",
      f_budget: "Бюджет",
      filters: "Фильтры ▼",
      filters_open: "Фильтры ▲",
      reset: "Сбросить фильтры",
      live: "В работе",
      soon: "Скоро",
      from: "от",
      empty: "Под выбранные фильтры ничего нет. Попробуйте другую комбинацию.",
      types: {
        all: "Все",
        web: "Веб-сайт",
        telegram: "Telegram Bot",
        miniapp: "Mini App"
      },
      subs: {
        all: "Все",
        landing: "Лендинг",
        corporate: "Корпоративный",
        ecommerce: "Магазин",
        catalog: "Каталог",
        booking: "Приложение записи"
      },
      industries: {
        all: "Все",
        medical: "Медицина",
        restaurant: "Ресторан",
        "real-estate": "Недвижимость",
        beauty: "Красота",
        education: "Образование",
        sport: "Спорт",
        legal: "Юридические",
        auto: "Авто",
        retail: "Торговля",
        other: "Прочее"
      },
      budgets: {
        all: "Все",
        "1k": "До 300 000 ₸",
        "3k": "300–600 тыс. ₸",
        "5k": "600 тыс. – 1 млн ₸",
        "5k+": "От 1 млн ₸"
      }
    }
  };

  const TYPE_KEYS = ["all", "web", "telegram", "miniapp"];
  const SUB_KEYS = ["all", "landing", "corporate", "ecommerce", "catalog", "booking"];
  // Industries — only those represented in DEMOS
  const INDUSTRY_KEYS = [
    "all", "medical", "restaurant", "real-estate", "beauty",
    "education", "sport", "legal", "auto", "retail", "other"
  ];
  const BUDGET_KEYS = ["all", "1k", "3k", "5k", "5k+"];

  const state = {
    type: "all",
    sub: "all",
    industry: "all",
    budget: "all"
  };

  function getLang() {
    return document.documentElement.lang === "en" ? "en" : "ru";
  }

  function renderPills() {
    const lang = getLang();
    const L = LABELS[lang];

    const build = (groupId, keys, dict) => {
      const host = document.getElementById(groupId);
      if (!host) return;
      host.innerHTML = "";
      keys.forEach((key) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "filter-btn" + (state[groupId.replace("filter-", "")] === key ? " active" : "");
        btn.dataset.group = groupId.replace("filter-", "");
        btn.dataset.value = key;
        btn.textContent = dict[key] || key;
        btn.addEventListener("click", () => onFilterClick(btn));
        host.appendChild(btn);
      });
    };

    build("filter-type", TYPE_KEYS, L.types);
    build("filter-sub", SUB_KEYS, L.subs);
    build("filter-industry", INDUSTRY_KEYS, L.industries);
    build("filter-budget", BUDGET_KEYS, L.budgets);

    // Also update filter row labels (data-i18n keys not in CONTENT — handle here)
    document.querySelectorAll(".filter-row-label").forEach((el) => {
      const key = el.dataset.i18n;
      if (!key || !key.startsWith("demos.")) return;
      const short = key.replace("demos.", "");
      if (L[short]) el.textContent = L[short];
    });

    // Hero translations (data-i18n="demos.*")
    document.querySelectorAll("[data-i18n^='demos.']").forEach((el) => {
      const key = el.dataset.i18n.replace("demos.", "");
      if (L[key] !== undefined && typeof L[key] === "string") {
        el.textContent = L[key];
      }
    });
    updateFilterToggleLabel();

    // Toggle sub filter row visibility based on type
    const subRow = document.querySelector(".filter-row-sub");
    if (subRow) subRow.style.display = state.type === "web" ? "" : "none";
  }

  function updateSubFilterState() {
    document.querySelectorAll('.filter-btn[data-group="sub"]').forEach((b) => {
      b.classList.toggle("active", b.dataset.value === state.sub);
    });
  }

  function updateFilterToggleLabel() {
    const toggle = document.getElementById("filters-toggle");
    if (!toggle) return;
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.textContent = expanded ? LABELS[getLang()].filters_open : LABELS[getLang()].filters;
  }

  function resetFilters() {
    state.type = "all";
    state.sub = "all";
    state.industry = "all";
    state.budget = "all";
    renderPills();
    applyFilters();
  }

  function setupFilterControls() {
    const reset = document.getElementById("reset-filters");
    if (reset && !reset.dataset.bound) {
      reset.addEventListener("click", resetFilters);
      reset.dataset.bound = "true";
    }

    const toggle = document.getElementById("filters-toggle");
    const sidebar = document.querySelector(".demos-sidebar");
    if (toggle && sidebar && !toggle.dataset.bound) {
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        sidebar.classList.toggle("is-collapsed", expanded);
        updateFilterToggleLabel();
      });
      toggle.dataset.bound = "true";
      updateFilterToggleLabel();
    }
  }

  function onFilterClick(btn) {
    const group = btn.dataset.group;
    const value = btn.dataset.value;
    state[group] = value;

    // Update active class within group
    document.querySelectorAll(`.filter-btn[data-group="${group}"]`).forEach((b) => {
      b.classList.toggle("active", b.dataset.value === value);
    });

    // Toggle sub-filter visibility on type change
    if (group === "type") {
      const subRow = document.querySelector(".filter-row-sub");
      if (subRow) subRow.style.display = value === "web" ? "" : "none";
      // Reset sub when leaving web
      if (value !== "web") {
        state.sub = "all";
        updateSubFilterState();
      }
    }

    applyFilters();
  }

  function applyFilters() {
    const grid = document.getElementById("demos-grid");
    if (!grid) return;
    const cards = grid.querySelectorAll(".demo-card");
    let shown = 0;
    cards.forEach((card) => {
      const ok =
        (state.type === "all" || card.dataset.type === state.type) &&
        (state.sub === "all" || card.dataset.subtype === state.sub) &&
        (state.industry === "all" || card.dataset.industry === state.industry) &&
        (state.budget === "all" || card.dataset.budget === state.budget);
      card.style.display = ok ? "" : "none";
      if (ok) shown += 1;
    });

    let empty = grid.querySelector(".demo-empty");
    if (shown === 0) {
      if (!empty) {
        empty = document.createElement("div");
        empty.className = "demo-empty";
        grid.appendChild(empty);
      }
      empty.textContent = LABELS[getLang()].empty;
    } else if (empty) {
      empty.remove();
    }
  }

  function renderCards() {
    const grid = document.getElementById("demos-grid");
    if (!grid || !window.DEMOS) return;
    const lang = getLang();
    const L = LABELS[lang];

    grid.innerHTML = "";

    window.DEMOS.forEach((d) => {
      const a = document.createElement("a");
      a.className = "demo-card" + (d.status === "soon" ? " is-soon" : "");
      a.href = `demos/${d.id}.html`;
      a.dataset.type = d.type;
      a.dataset.subtype = d.subtype;
      a.dataset.industry = d.industry;
      a.dataset.budget = d.budgetKey;

      const typeLabel = L.types[d.type] || d.type;
      const subLabel = d.subtype && L.subs[d.subtype] ? L.subs[d.subtype] : "";
      const statusBadge =
        d.status === "soon"
          ? `<span class="demo-badge badge-soon">${L.soon}</span>`
          : "";

      const tagPills = (d.stack || [])
        .slice(0, 3)
        .map((t) => `<span>${t}</span>`)
        .join("");

      const thumbContent = d.thumb
        ? `<img src="${d.thumb}" alt="${d.name[lang]}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">`
        : `<div aria-hidden="true">${d.emoji}</div>`;

      a.innerHTML = `
        <div class="demo-thumb ${d.status === "live" ? "is-live" : "is-soon"}" style="${d.thumb ? "background:none;overflow:hidden;" : ""}">
          <div class="demo-badges">
            <span class="demo-badge badge-type">${typeLabel}</span>
            ${statusBadge}
          </div>
          ${thumbContent}
        </div>
        <div class="demo-info">
          <h3 class="demo-name">${d.name[lang]}</h3>
          <p class="demo-industry">${d.industry_label[lang]}</p>
          <div class="demo-tags">${tagPills}</div>
          <div class="demo-footer">
            <span>${d.budget}</span>
            <span class="demo-arrow" aria-hidden="true">→</span>
          </div>
        </div>`;

      grid.appendChild(a);
    });

    applyFilters();
  }

  function init() {
    if (!document.getElementById("demos-grid")) return; // only on demos.html
    setupFilterControls();
    renderPills();
    renderCards();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Re-render on language switch — monkey-patch i18n.switchLang
  const tryHook = () => {
    if (typeof window.switchLang === "function" && !window.__demosHooked) {
      const original = window.switchLang;
      window.switchLang = function (lang) {
        original(lang);
        renderPills();
        renderCards();
      };
      window.__demosHooked = true;
    } else if (window.__sqora && window.__sqora.switchLang && !window.__demosHooked) {
      const original = window.__sqora.switchLang;
      window.__sqora.switchLang = function (lang) {
        original(lang);
        renderPills();
        renderCards();
      };
      // Also wire the language toggle buttons directly
      document.querySelectorAll(".language-toggle button[data-lang]").forEach((b) => {
        b.addEventListener("click", () => {
          setTimeout(() => {
            renderPills();
            renderCards();
          }, 30);
        });
      });
      window.__demosHooked = true;
    }
  };
  // Try hooking after i18n loads
  setTimeout(tryHook, 100);
  setTimeout(tryHook, 500);
})();
