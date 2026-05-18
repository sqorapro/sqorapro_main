/* SQORA PRO — bilingual content + form/AI integration */

const CONTENT = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      demos: "Demos",
      process: "Process",
      about: "About",
      contact: "Contact",
      cta: "Let's Talk →"
    },
    hero: {
      badge: "● DIGITAL PRODUCT STUDIO",
      sub: "We design and build high-performance digital products for startups and ambitious businesses.",
      cta_primary: "Start a Project →",
      cta_secondary: "View Our Work",
      trusted: "TRUSTED EXPERIENCE WITH"
    },
    showreel: {
      eyebrow: "CAPABILITY SHOWREEL",
      headline: "Every section proves we can build.",
      sub: "Not decorative motion. Product-grade interfaces clients can imagine inside their own business.",
      card1_title: "Interactive systems",
      card1_desc: "Dashboards, workflows, and operational software that feels alive.",
      card2_title: "AI routing",
      card2_desc: "Smart intake, scoring, analysis, and automated next-step logic.",
      card3_title: "Multi-platform polish",
      card3_desc: "Web, mobile, Telegram, and admin panels in one clean product language.",
      card4_title: "Launch velocity",
      card4_desc: "Fast prototypes that still look like the company has taste."
    },
    proof: {
      eyebrow: "TEAM EXPERIENCE",
      stat1_label: "Corporate projects",
      stat1_note: "EBRD grant",
      stat2_label: "SaaS products live",
      stat3_label: "Mobile apps shipped"
    },
    services: {
      eyebrow: "SERVICES",
      headline: "Software that feels sharp from the first click.",
      sub: "Full-cycle delivery for modern launches, internal tools, and customer-facing digital products.",
      s1_name: "Web Development",
      s1_desc: "Premium marketing sites, dashboards, and production apps with crisp UX and scalable architecture.",
      s2_name: "Mobile Apps",
      s2_desc: "Native-feeling iOS and Android products built for fast release cycles and clean maintenance.",
      s3_name: "Telegram Bots & Mini Apps",
      s3_desc: "Telegram-native workflows, automations, and mini apps for teams already living in chat.",
      s4_name: "MVP in 5 Days",
      s4_desc: "AI-assisted prototyping to validate a product direction before the roadmap gets expensive."
    },
    aibrief: {
      eyebrow: "AI BRIEF",
      headline: "A smarter first conversation.",
      sub: "Turn a rough idea into a practical scope, timeline, and fit score before the kickoff call.",
      input_label: "What are we building?",
      placeholder: "Describe your task… e.g. Need a Telegram bot for client booking, CRM integration, launch in a month.",
      chip1: "Website",
      chip2: "Mobile App",
      chip3: "Telegram Bot",
      chip4: "MVP",
      analyst: "AI analyst",
      fit: "Fit score",
      send: "Send Brief",
      analysing: "Analysing…",
      timeline_label: "Timeline",
      fit_label: "Fit"
    },
    work: {
      eyebrow: "CASE STUDY",
      case_tag1: "Web Dashboard",
      case_tag2: "Telegram Bot",
      case_tag3: "EdTech",
      case_tag4: "EBRD Grant",
      m1_label: "mentees managed",
      m2_label: "mentors onboarded",
      m3_label: "weeks to launch",
      m4_label: "vs SaaS alternatives",
      quote: "Mentors do not fill out any Excel sheets. Everything goes through their phone in Telegram in 30 seconds.",
      demo: "View Live Demo →"
    },
    process: {
      eyebrow: "PROCESS",
      headline: "Lean enough to move fast. Structured enough to ship.",
      s1_title: "Discovery",
      s1_desc: "Scope, users, constraints, and the first version of the outcome.",
      s2_title: "Proposal",
      s2_desc: "Clear budget, timeline, milestones, and product risks.",
      s3_title: "Design & Prototype",
      s3_desc: "Interface direction, key flows, and clickable product logic.",
      s4_title: "Build & Iterate",
      s4_desc: "Weekly progress, tight feedback loops, and production code.",
      s5_title: "Launch & Support",
      s5_desc: "Deploy, measure, stabilize, and keep improving after release.",
      note: "Our MD responds within 2 hours →"
    },
    testimonials: {
      eyebrow: "TESTIMONIALS",
      headline: "Clients remember calm delivery.",
      pause: "Pause",
      play: "Play",
      p2_quote: "This slot is reserved for the next client testimonial.",
      p3_quote: "We will update this with a real quote after the next project.",
      p4_quote: "Fourth slot — real testimonial coming after project completion.",
      p_name: "Future Client",
      p_role: "To be announced"
    },
    products: {
      eyebrow: "OUR PRODUCTS",
      headline: "We do not just build for clients. We build products ourselves.",
      sub: "This means we understand your business from the inside.",
      cheqon_desc: "Invoice and act generator for freelancers and micro-business in Kazakhstan.",
      leqalo_desc: "5 mandatory legal documents for your Kazakhstani website — generated in 2 minutes.",
      skidqi_desc: "Discount marketplace where every listing shows the real before and after price.",
      runqit_desc: "AI-powered marketing plans for small business.",
      live: "Live",
      soon: "Coming Soon"
    },
    team: {
      eyebrow: "TEAM",
      headline: "Small senior team. Direct ownership.",
      sub: "You work directly with the people building your product. No account managers.",
      r1_name: "Co-Founder & Managing Director",
      r1_tags: "PhD · UNESCO · Business Strategy",
      r1_bio: "25 years in science, education and business. PhD, UNESCO expert. Leads every client conversation and sets project strategy.",
      r2_name: "Со-основатель и Mobile Lead",
      r2_tags: "Swift · Kotlin · iOS & Android · 12+ years",
      r2_bio: "12+ years of native mobile engineering. Has shipped apps for FC Kairat, Tulpar-Card, Gamisoft and many others.",
      r3_name: "Backend Engineer",
      r3_tags: "Node.js · PostgreSQL · API · 10+ лет",
      r3_bio: "10+ years in backend engineering. Joins complex projects and builds systems that scale without drama.",
      r4_name: "Web Dev & AI Specialist",
      r4_tags: "React · Telegram Bots · MVP · 18+ years",
      r4_bio: "18+ years in web. Builds MVPs, bots and web apps using AI tools — results in days, not months."
    },
    contact: {
      eyebrow: "CONTACT",
      headline1: "Got an idea?",
      headline2: "Let's build it.",
      promise1: "⚡ Reply within 2 hours",
      promise2: "🎯 Free 30-min consultation",
      promise3: "📋 Proposal in 24 hours",
      address: "Almaty, Chaikovskogo 131",
      telegram_btn: "Write on Telegram →",
      f_name: "Name",
      f_name_ph: "Your name",
      f_contact: "Email or Telegram",
      f_contact_ph: "@username or email",
      f_type: "Project type",
      f_type_opt1: "Web Development",
      f_type_opt2: "Mobile App",
      f_type_opt3: "Telegram Bot",
      f_type_opt4: "MVP in 5 Days",
      f_type_opt5: "Other",
      f_budget: "Budget",
      f_budget_opt1: "Under $1K",
      f_budget_opt2: "$1K – $3K",
      f_budget_opt3: "$3K – $5K",
      f_budget_opt4: "$5K – $10K",
      f_budget_opt5: "$10K – $15K",
      f_budget_opt6: "$15K – $30K",
      f_budget_opt7: "$30K+",
      f_budget_opt8: "Let's discuss",
      f_msg: "Message",
      f_msg_ph: "Tell us the goal, timeline, and what already exists.",
      f_submit: "Send it →",
      f_validation: "Please fill in name and contact",
      f_sending: "Sending…",
      success_title: "Application sent!",
      success_sub: "We will reply within 2 hours."
    },
    footer: {
      kind: "Digital Product Studio · Almaty, Kazakhstan",
      nav_title: "Navigation",
      contact_title: "Contact",
      l_privacy: "Privacy Policy",
      l_data: "Data Processing",
      l_cookie: "Cookie Policy",
      l_terms: "Terms of Use",
      l_offer: "Public Offer",
      legal_note: "Legal documents generated by Leqalo.com",
      copy: "© 2026 SQORA PRO. All rights reserved.",
      built: "Built with ♥ by SQORA PRO"
    }
  },

  ru: {
    nav: {
      services: "Услуги",
      work: "Работы",
      demos: "Демо",
      process: "Процесс",
      about: "О нас",
      contact: "Контакты",
      cta: "Обсудить проект →"
    },
    hero: {
      badge: "● DIGITAL PRODUCT STUDIO",
      sub: "Проектируем и создаём высокопроизводительные цифровые продукты для стартапов и амбициозных компаний.",
      cta_primary: "Начать проект →",
      cta_secondary: "Смотреть работы",
      trusted: "РАБОТАЛИ С"
    },
    showreel: {
      eyebrow: "ЧТО МЫ УМЕЕМ",
      headline: "Каждая секция — это живой продукт, не картинка.",
      sub: "Не декоративные анимации. Интерфейсы которые клиент сразу представляет у себя в бизнесе.",
      card1_title: "Живые системы",
      card1_desc: "Дашборды, рабочие процессы и операционные инструменты — не таблицы, а продукты.",
      card2_title: "AI внутри",
      card2_desc: "Приём заявок, скоринг, анализ и автоматические следующие шаги — без ручного труда.",
      card3_title: "Везде одинаково красиво",
      card3_desc: "Веб, мобайл, Telegram и админ-панели — всё в едином стиле, без компромиссов.",
      card4_title: "Быстро и без потерь",
      card4_desc: "Быстрые прототипы которые выглядят дорого — даже когда бюджет небольшой."
    },
    proof: {
      eyebrow: "ОПЫТ КОМАНДЫ",
      stat1_label: "Корпоративные проекты",
      stat1_note: "Грант ЕБРР",
      stat2_label: "Собственных SaaS",
      stat3_label: "Мобильных приложений"
    },
    services: {
      eyebrow: "УСЛУГИ",
      headline: "Продукты которые работают с первого запуска.",
      sub: "Полный цикл — от идеи до релиза. Веб, мобайл, Telegram и всё что между ними.",
      s1_name: "Веб-разработка",
      s1_desc: "Корпоративные сайты, лендинги, SaaS-дашборды и веб-приложения. Быстро, чисто, с умом.",
      s2_name: "Мобильные приложения",
      s2_desc: "Нативные iOS и Android приложения. Не кросс-платформенные компромиссы — настоящая инженерия.",
      s3_name: "Telegram Боты и Mini Apps",
      s3_desc: "Автоматизируйте бизнес там где уже сидит ваша аудитория. Боты, Mini Apps, интеграции с CRM.",
      s4_name: "MVP за 5 дней",
      s4_desc: "Есть идея? Соберём живой кликабельный MVP за 5 рабочих дней — покажете инвесторам уже в пятницу."
    },
    aibrief: {
      eyebrow: "ИИ-БРИФ",
      headline: "Опишите задачу — получите план.",
      sub: "Расскажите об идее своими словами. Получите оценку сроков и первый набросок — за 30 секунд.",
      input_label: "Что строим?",
      placeholder: "Опишите задачу… Например: нужен Telegram-бот для записи клиентов, интеграция с CRM, запуск через месяц.",
      chip1: "Веб-сайт",
      chip2: "Мобильное приложение",
      chip3: "Telegram Bot",
      chip4: "MVP",
      analyst: "ИИ-аналитик",
      fit: "Совпадение",
      send: "Отправить бриф",
      analysing: "ИИ анализирует…",
      timeline_label: "Срок",
      fit_label: "Совпадение"
    },
    work: {
      eyebrow: "КЕЙС",
      case_tag1: "Веб-дашборд",
      case_tag2: "Telegram Бот",
      case_tag3: "EdTech",
      case_tag4: "Грант ЕБРР",
      m1_label: "менти в системе",
      m2_label: "менторов",
      m3_label: "недели до запуска",
      m4_label: "vs SaaS-альтернативы",
      quote: "Менторы не заполняют никаких Excel-таблиц. Всё через телефон в Telegram за 30 секунд.",
      demo: "Открыть демо →"
    },
    process: {
      eyebrow: "ПРОЦЕСС",
      headline: "Двигаемся быстро. Запускаем надёжно.",
      s1_title: "Исследование",
      s1_desc: "Разбираемся в задаче, аудитории и ограничениях. Формулируем что именно строим.",
      s2_title: "Предложение",
      s2_desc: "Вы получаете конкретное предложение — что входит, сколько стоит, когда будет готово.",
      s3_title: "Дизайн и прототип",
      s3_desc: "Показываем как будет выглядеть продукт до того как написана основная часть кода.",
      s4_title: "Разработка и итерации",
      s4_desc: "Еженедельные демо. Никаких сюрпризов в конце. Всегда понятно что сделано и что дальше.",
      s5_title: "Запуск и поддержка",
      s5_desc: "Запускаем и остаёмся на связи. 30 дней поддержки включены в каждый проект.",
      note: "Наш руководитель отвечает на каждое обращение в течение 2 часов →"
    },
    testimonials: {
      eyebrow: "ОТЗЫВЫ",
      headline: "Клиенты ценят предсказуемый результат.",
      pause: "Пауза",
      play: "Играть",
      p2_quote: "Это место зарезервировано под следующий клиентский отзыв.",
      p3_quote: "Сюда мы добавим настоящую цитату после следующего проекта.",
      p4_quote: "Четвёртый слот — настоящий отзыв появится после сдачи проекта.",
      p_name: "Future Client",
      p_role: "To be announced"
    },
    products: {
      eyebrow: "НАШИ ПРОДУКТЫ",
      headline: "Мы сами строим продукты — и знаем как это работает изнутри.",
      sub: "Поэтому понимаем боли вашего бизнеса лучше чем студия которая только рисует макеты.",
      cheqon_desc: "Генератор счетов и актов для фрилансеров и микробизнеса в Казахстане.",
      leqalo_desc: "5 обязательных юридических документов для вашего казахстанского сайта — за 2 минуты.",
      skidqi_desc: "Маркетплейс скидок, где каждое объявление показывает реальную цену до и после.",
      runqit_desc: "AI-маркетинговые планы для малого бизнеса.",
      live: "Работает",
      soon: "Скоро"
    },
    team: {
      eyebrow: "КОМАНДА",
      headline: "Небольшая команда. Senior-уровень. Работаете с нами напрямую.",
      sub: "Никаких посредников. Вы общаетесь напрямую с разработчиками, которые строят ваш продукт.",
      r1_name: "Со-основатель и управляющий директор",
      r1_tags: "PhD · Эксперт ЮНЕСКО · Бизнес-стратегия · 25 лет",
      r1_bio: "Кандидат наук, эксперт ЮНЕСКО. Директор школы, предприниматель, 20 лет в высшей школе. Ведёт переговоры с клиентами и формирует стратегию проектов.",
      r2_name: "Со-основатель и Mobile Lead",
      r2_tags: "Swift · Kotlin · iOS и Android · 12+ лет",
      r2_bio: "12+ лет нативной разработки под iOS и Android. Запускал приложения для ФК Кайрат, Тулпар-Карт, Gamisoft и других.",
      r3_name: "Backend Engineer",
      r3_tags: "Node.js · PostgreSQL · API · 10+ лет",
      r3_bio: "10+ лет в бэкенд-разработке. Берётся за сложные задачи и проектирует системы которые работают годами без сбоев.",
      r4_name: "Веб-мастер и ИИ-специалист",
      r4_tags: "React · Telegram Боты · MVP · 18+ лет",
      r4_bio: "18+ лет в вебе. Собирает MVP, боты и веб-приложения с помощью ИИ-инструментов — результат за дни, не месяцы."
    },
    contact: {
      eyebrow: "КОНТАКТЫ",
      headline1: "Есть идея?",
      headline2: "Давайте сделаем это.",
      promise1: "⚡ Ответим за 2 часа",
      promise2: "🎯 Бесплатная 30-минутная консультация",
      promise3: "📋 Предложение за 24 часа",
      address: "Алматы, ул. Чайковского 131",
      telegram_btn: "Написать в Telegram →",
      f_name: "Имя",
      f_name_ph: "Ваше имя",
      f_contact: "Email или Telegram",
      f_contact_ph: "@username или email",
      f_type: "Тип проекта",
      f_type_opt1: "Веб-разработка",
      f_type_opt2: "Мобильное приложение",
      f_type_opt3: "Telegram Бот",
      f_type_opt4: "MVP за 5 дней",
      f_type_opt5: "Другое",
      f_budget: "Бюджет",
      f_budget_opt1: "До $1K",
      f_budget_opt2: "$1K – $3K",
      f_budget_opt3: "$3K – $5K",
      f_budget_opt4: "$5K – $10K",
      f_budget_opt5: "$10K – $15K",
      f_budget_opt6: "$15K – $30K",
      f_budget_opt7: "$30K+",
      f_budget_opt8: "Обсудим",
      f_msg: "Сообщение",
      f_msg_ph: "Расскажите о цели, сроках и что уже есть.",
      f_submit: "Отправить →",
      f_validation: "Пожалуйста заполните имя и контакт",
      f_sending: "Отправляем…",
      success_title: "Заявка отправлена!",
      success_sub: "Ответим в течение 2 часов."
    },
    footer: {
      kind: "Digital Product Studio · Алматы, Казахстан 🇰🇿",
      nav_title: "Навигация",
      contact_title: "Контакты",
      l_privacy: "Политика конфиденциальности",
      l_data: "Обработка данных",
      l_cookie: "Cookie",
      l_terms: "Условия использования",
      l_offer: "Публичная оферта",
      legal_note: "Юридические документы сгенерированы Leqalo.com",
      copy: "© 2026 SQORA PRO. Все права защищены.",
      built: "Сделано с ♥ командой SQORA PRO"
    }
  }
};

let currentLang = "ru";

function lookupKey(dict, path) {
  const parts = path.split(".");
  let val = dict;
  for (const p of parts) {
    if (val == null) return undefined;
    val = val[p];
  }
  return val;
}

function applyTextNode(el, val) {
  // Preserve any trailing chevron span by setting textContent only on first text node
  // For simple case: just set textContent
  const chevron = el.querySelector("span[aria-hidden='true']");
  if (chevron) {
    // Clear all text, then re-add value and chevron
    const cleanVal = val.replace(/\s*→\s*$/, "");
    el.textContent = cleanVal + " ";
    el.appendChild(chevron);
  } else {
    el.textContent = val;
  }
}

function switchLang(lang) {
  if (!CONTENT[lang]) return;
  currentLang = lang;
  const dict = CONTENT[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = lookupKey(dict, el.dataset.i18n);
    if (val === undefined) return;
    applyTextNode(el, val);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const val = lookupKey(dict, el.dataset.i18nPlaceholder);
    if (val !== undefined) el.setAttribute("placeholder", val);
  });

  document.querySelectorAll("[data-i18n-options]").forEach((select) => {
    const prefix = select.dataset.i18nOptions;
    const lastDot = prefix.lastIndexOf(".");
    const parentPath = prefix.slice(0, lastDot);
    const fieldName = prefix.slice(lastDot + 1);
    const parent = lookupKey(dict, parentPath);
    if (!parent) return;
    Array.from(select.options).forEach((opt, i) => {
      const key = `${fieldName}_opt${i + 1}`;
      if (parent[key]) opt.textContent = parent[key];
    });
  });

  // Lang toggle states
  document.querySelectorAll(".language-toggle button[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

function initLang() {
  document.querySelectorAll(".language-toggle button[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => switchLang(btn.dataset.lang));
  });
  switchLang(currentLang);
}

/* ─────────── Contact form: validation + Telegram send ─────────── */

const BOT_TOKEN = ""; // fill before VPS deploy
const ADMIN_CHAT_ID = ""; // fill before VPS deploy

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const submitBtn = form.querySelector("#contactSubmit");
  if (!submitBtn) return;

  const t = () => CONTENT[currentLang].contact;

  submitBtn.addEventListener("click", async () => {
    const name = form.querySelector("[name='name']")?.value?.trim();
    const contact = form.querySelector("[name='contact']")?.value?.trim();
    const type = form.querySelector("[name='project-type']")?.value;
    const budget = form.querySelector("[name='budget']")?.value;
    const message = form.querySelector("[name='message']")?.value?.trim();

    if (!name || !contact) {
      alert(t().f_validation);
      return;
    }

    const originalLabel = submitBtn.innerHTML;
    submitBtn.textContent = t().f_sending;
    submitBtn.disabled = true;

    const datetime = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" });

    const text =
      "🔔 *Новая заявка с сайта sqorapro.com*\n\n" +
      `👤 *Имя:* ${name}\n` +
      `📱 *Контакт:* ${contact}\n` +
      `💼 *Тип:* ${type}\n` +
      `💰 *Бюджет:* ${budget}\n` +
      `📝 *Сообщение:* ${message || "—"}\n\n` +
      `🕐 *Время:* ${datetime}\n` +
      `📌 *Источник:* sqorapro.com`;

    if (BOT_TOKEN && ADMIN_CHAT_ID) {
      try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: ADMIN_CHAT_ID, text, parse_mode: "Markdown" })
        });
      } catch (e) {
        console.error("Telegram send failed:", e);
      }
    } else {
      console.info("[contact form] dry-run payload:", text);
    }

    form.innerHTML = `
      <div class="form-success">
        <div class="form-success-icon">✅</div>
        <div class="form-success-title">${t().success_title}</div>
        <div class="form-success-sub">${t().success_sub}</div>
      </div>`;
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalLabel;
  });
}

/* ─────────── AI Brief: call Claude via window.claude.complete ─────────── */

async function sendAiBrief(userText, chipLabel) {
  const systemPrompt = `You are a project analyst at SQORA PRO digital studio in Almaty, Kazakhstan.
Analyze the client brief and respond ONLY with valid JSON, no markdown, no extra text:
{
  "line1": "Ниша: [business niche in 8 words max]",
  "line2": "Решение: [recommended solution in 10 words max]",
  "line3": "MVP scope: [3-4 key features, comma separated]",
  "line4": "Риск: [main risk and 1 mitigation in 10 words]",
  "timeline": "[realistic timeline like 2-3 недели]",
  "fit": [number between 88 and 97]
}`;

  if (window.claude && typeof window.claude.complete === "function") {
    const messages = [
      {
        role: "user",
        content: `${systemPrompt}\n\n---\n\nClient brief: ${userText}\nProject type: ${chipLabel}`
      }
    ];
    const raw = await window.claude.complete({ messages });
    // Try to extract JSON even if the model wrapped it in code fences
    const match = raw && raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("No JSON in response");
    return JSON.parse(match[0]);
  }

  // Fallback for environments without window.claude
  throw new Error("Claude SDK not available");
}

const FALLBACK_LINES = [
  "Ниша: B2B education ops with mentor matching.",
  "Решение: Telegram Bot for mentor reports + web dashboard for coordinators.",
  "MVP scope: onboarding, pair tracking, progress status, weekly analytics.",
  "Риск: data quality. Mitigation: short Telegram prompts and automated reminders."
];

async function typeLine(row, text, speed = 18) {
  for (let i = 0; i <= text.length; i += 1) {
    row.textContent = text.slice(0, i);
    await new Promise((r) => setTimeout(r, speed));
  }
}

async function renderAiResult(result) {
  const output = document.getElementById("aiLines");
  const timelineEl = document.getElementById("aiTimeline");
  const fitEl = document.getElementById("aiFitScore");
  if (!output) return;
  output.innerHTML = "";

  const lines = [result.line1, result.line2, result.line3, result.line4].filter(Boolean);
  for (const line of lines) {
    const row = document.createElement("div");
    output.appendChild(row);
    await typeLine(row, line);
    await new Promise((r) => setTimeout(r, 220));
  }

  const dict = CONTENT[currentLang].aibrief;
  if (timelineEl && result.timeline) {
    timelineEl.textContent = `${dict.timeline_label}: ${result.timeline}`;
  }
  if (fitEl && result.fit) {
    fitEl.textContent = `${dict.fit_label}: ${result.fit}%`;
  }
}

async function sendBriefAndRender(userText, chipLabel) {
  const output = document.getElementById("aiLines");
  if (output) {
    output.innerHTML = `<div class="ai-analysing">${CONTENT[currentLang].aibrief.analysing}</div>`;
  }

  let result;
  try {
    result = await sendAiBrief(userText, chipLabel);
  } catch (err) {
    console.warn("AI Brief fallback:", err);
    result = {
      line1: FALLBACK_LINES[0],
      line2: FALLBACK_LINES[1],
      line3: FALLBACK_LINES[2],
      line4: FALLBACK_LINES[3],
      timeline: "2-3 недели",
      fit: 96
    };
  }

  await renderAiResult(result);

  // Telegram notification (fire-and-forget)
  if (BOT_TOKEN && ADMIN_CHAT_ID) {
    const datetime = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" });
    const text =
      "📋 *Новый AI-бриф с сайта*\n\n" +
      `📝 *Запрос:* ${userText}\n` +
      `🏷 *Тип:* ${chipLabel}\n\n` +
      "*Анализ:*\n" +
      `${result.line1}\n${result.line2}\n${result.line3}\n${result.line4}\n\n` +
      `⏱ *Срок:* ${result.timeline}\n` +
      `🎯 *Совпадение:* ${result.fit}%\n` +
      `🕐 ${datetime}`;
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: ADMIN_CHAT_ID, text, parse_mode: "Markdown" })
    }).catch((e) => console.error("Telegram (AI brief) failed:", e));
  }
}

function initAiBriefClaude() {
  const sendBtn = document.querySelector(".send-brief");
  const textarea = document.getElementById("projectBrief");
  if (!sendBtn || !textarea) return;

  sendBtn.addEventListener("click", () => {
    const userText = textarea.value.trim();
    const chip = document.querySelector(".chip-row button.active");
    const chipLabel = chip ? chip.textContent.trim() : "—";
    sendBriefAndRender(userText, chipLabel);
  });
}

// Expose to global so script.js can call after DOM is ready
window.__sqora = {
  initLang,
  switchLang,
  initContactForm,
  initAiBriefClaude
};
