# SQORA PRO — Claude Design Prompt
# Fix bilingual support + content corrections
# Status: DRAFT v1 — to be expanded

---

You are working on an existing website for SQORA PRO — a Digital Product Studio from Almaty, Kazakhstan.
The site is vanilla HTML + CSS + JS (no framework). 
Apply ALL changes below without breaking any existing animations, globe, carousel, or reveal effects.

---

## TASK 1: BILINGUAL SUPPORT (RU / EN)

The site currently has RU and EN buttons in the navbar but they do nothing. 
Implement full bilingual switching.

### Implementation approach:

1. Add `data-i18n="key.path"` attributes to every text node in index.html that needs translation.
   Do NOT add data-i18n to: logo, brand name "SQORA PRO", tagline "Think. Build. Ship." (stays EN always),
   product names (Cheqon.com, Leqalo.com, Skidqi.com, Runqit.com), tech stack tags,
   URLs, phone numbers, email, address.

2. In script.js add a CONTENT object with all translations, and a switchLang() function.
   Default language on page load: RU.

3. Wire the existing RU/EN buttons (both in desktop nav and mobile menu) to call switchLang().
   Active button gets class "active". On load, RU button is active.

### Full translation content:

```javascript
const CONTENT = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      process: "Process",
      about: "About",
      contact: "Contact",
      cta: "Let's Talk"
    },
    hero: {
      badge: "DIGITAL PRODUCT STUDIO",
      sub: "We design and build high-performance digital products for startups and ambitious businesses.",
      cta_primary: "Start a Project",
      cta_secondary: "View Our Work",
      trusted: "TRUSTED EXPERIENCE WITH",
      stat1: "MVP in 5 days",
      stat2: "iOS + Android native",
      stat3: "4 products live"
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
      headline: "Our team has shipped for",
      stat1_label: "Corporate project",
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
      s1_time: "From 2 weeks",
      s2_name: "Mobile Apps",
      s2_desc: "Native-feeling iOS and Android products built for fast release cycles and clean maintenance.",
      s2_time: "From 1 month",
      s3_name: "Telegram Bots & Mini Apps",
      s3_desc: "Telegram-native workflows, automations, and mini apps for teams already living in chat.",
      s3_time: "From 1 week",
      s4_name: "MVP in 5 Days",
      s4_desc: "AI-assisted prototyping to validate a product direction before the roadmap gets expensive.",
      s4_time: "5 working days",
      learn: "Learn more"
    },
    aibrief: {
      eyebrow: "AI BRIEF",
      headline: "A smarter first conversation.",
      sub: "Turn a rough idea into a practical scope, timeline, and fit score before the kickoff call.",
      input_label: "What are we building?",
      placeholder: "Describe your task... e.g. Need a Telegram bot for client booking, CRM integration, launch in a month.",
      chip1: "Website",
      chip2: "Mobile App",
      chip3: "Telegram Bot",
      chip4: "MVP",
      analyst: "AI analyst",
      fit: "Fit score",
      send: "Send Brief"
    },
    work: {
      eyebrow: "CASE STUDY",
      headline: "Real problems. Real solutions.",
      case_tag1: "Web Dashboard",
      case_tag2: "Telegram Bot",
      case_tag3: "EdTech",
      case_tag4: "EBRD Grant",
      case_title: "MENTOR EXCELLENCE SYSTEM",
      case_desc: "Replaced WhatsApp chaos with a digital management system for 1,335 mentees and 153 mentors across 14 teams.",
      m1_label: "mentees managed",
      m2_label: "mentors onboarded",
      m3_label: "weeks to launch",
      m4_label: "vs SaaS alternatives",
      quote: "Mentors do not fill out any Excel sheets. Everything goes through their phone in Telegram in 30 seconds.",
      demo: "View Live Demo",
      team_label: "TEAM EXPERIENCE"
    },
    stats: {
      p1_label: "participants",
      p2_label: "weeks to launch",
      p3_label: "mobile apps tested",
      p4_label: "SaaS products live"
    },
    process: {
      eyebrow: "PROCESS",
      headline: "Lean enough to move fast. Structured enough to ship.",
      s1_title: "Discovery",
      s1_desc: "Scope, users, constraints, and the first version of the outcome.",
      s1_time: "Day 1",
      s2_title: "Proposal",
      s2_desc: "Clear budget, timeline, milestones, and product risks.",
      s2_time: "24 hours",
      s3_title: "Design & Prototype",
      s3_desc: "Interface direction, key flows, and clickable product logic.",
      s3_time: "3–5 days",
      s4_title: "Build & Iterate",
      s4_desc: "Weekly progress, tight feedback loops, and production code.",
      s4_time: "Project timeline",
      s5_title: "Launch & Support",
      s5_desc: "Deploy, measure, stabilize, and keep improving after release.",
      s5_time: "After delivery",
      note: "Our MD responds within 2 hours"
    },
    testimonials: {
      eyebrow: "TESTIMONIALS",
      headline: "Clients remember calm delivery.",
      pause: "Pause",
      play: "Play"
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
      soon: "Coming Soon",
      open: "Open"
    },
    team: {
      eyebrow: "TEAM",
      headline: "Small senior team. Direct ownership.",
      sub: "You work directly with the people building your product. No account managers.",
      r1_name: "Co-Founder & MD",
      r1_tags: "PhD · UNESCO · Business Strategy",
      r1_bio: "25 years at the intersection of science, business and education. Leads client conversations and project strategy.",
      r2_name: "Mobile Lead",
      r2_tags: "Swift · Kotlin · iOS & Android",
      r2_bio: "8+ years of native mobile engineering. Has shipped apps used by tens of thousands in Kazakhstan.",
      r3_name: "Backend Engineer",
      r3_tags: "Node.js · PostgreSQL · API",
      r3_bio: "Joins complex projects. Builds scalable systems that handle load without drama.",
      r4_name: "AI Builder & Web",
      r4_tags: "React · Telegram Bots · MVP",
      r4_bio: "Turns ideas into live products fast. Orchestrates AI tools so you get results in days, not months."
    },
    contact: {
      eyebrow: "CONTACT",
      headline1: "Got an idea?",
      headline2: "Let's build it.",
      promise1: "⚡ Reply within 2 hours",
      promise2: "🎯 Free 30-min consultation",
      promise3: "📋 Proposal in 24 hours",
      address: "Almaty, Чайковского 131",
      telegram_btn: "Write on Telegram",
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
      f_submit: "Send it",
      success: "Application sent! We will reply within 2 hours."
    },
    footer: {
      tagline: "Think. Build. Ship.",
      kind: "Digital Product Studio · Almaty, Kazakhstan",
      nav_title: "Navigation",
      contact_title: "Contact",
      legal_note: "Legal documents generated by Leqalo.com",
      copy: "© 2026 SQORA PRO. All rights reserved.",
      built: "Built with ♥ by SQORA PRO"
    }
  },

  ru: {
    nav: {
      services: "Услуги",
      work: "Работы",
      process: "Процесс",
      about: "О нас",
      contact: "Контакты",
      cta: "Обсудить проект"
    },
    hero: {
      badge: "DIGITAL PRODUCT STUDIO",
      sub: "Проектируем и создаём высокопроизводительные цифровые продукты для стартапов и амбициозных компаний.",
      cta_primary: "Начать проект",
      cta_secondary: "Смотреть работы",
      trusted: "РАБОТАЛИ С",
      stat1: "MVP за 5 дней",
      stat2: "iOS + Android нативно",
      stat3: "4 продукта в проде"
    },
    showreel: {
      eyebrow: "ВИТРИНА ВОЗМОЖНОСТЕЙ",
      headline: "Каждая секция доказывает, что мы умеем строить.",
      sub: "Не декоративные анимации. Продуктовые интерфейсы, которые клиент может представить в своём бизнесе.",
      card1_title: "Интерактивные системы",
      card1_desc: "Дашборды, рабочие процессы и операционный софт, который ощущается живым.",
      card2_title: "AI-маршрутизация",
      card2_desc: "Умный приём, скоринг, анализ и автоматизированная логика следующего шага.",
      card3_title: "Кросс-платформенное качество",
      card3_desc: "Веб, мобайл, Telegram и админ-панели в едином продуктовом языке.",
      card4_title: "Скорость запуска",
      card4_desc: "Быстрые прототипы, которые выглядят так, будто у компании есть вкус."
    },
    proof: {
      eyebrow: "ОПЫТ КОМАНДЫ",
      headline: "Наша команда уже выпускала продукты для",
      stat1_label: "Корпоративный проект",
      stat1_note: "Грант ЕБРР",
      stat2_label: "Собственных SaaS",
      stat3_label: "Мобильных приложений"
    },
    services: {
      eyebrow: "УСЛУГИ",
      headline: "Программное обеспечение, которое работает с первого клика.",
      sub: "Полный цикл для современных запусков, внутренних инструментов и клиентских цифровых продуктов.",
      s1_name: "Веб-разработка",
      s1_desc: "Премиальные маркетинговые сайты, дашборды и production-приложения с чётким UX и масштабируемой архитектурой.",
      s1_time: "От 2 недель",
      s2_name: "Мобильные приложения",
      s2_desc: "Нативные iOS и Android продукты для быстрых релизных циклов и чистой поддержки.",
      s2_time: "От 1 месяца",
      s3_name: "Telegram Боты и Mini Apps",
      s3_desc: "Telegram-нативные рабочие процессы, автоматизации и мини-приложения для команд, которые уже живут в чате.",
      s3_time: "От 1 недели",
      s4_name: "MVP за 5 дней",
      s4_desc: "AI-assisted прототипирование для проверки направления продукта до того, как роадмап станет дорогим.",
      s4_time: "5 рабочих дней",
      learn: "Подробнее"
    },
    aibrief: {
      eyebrow: "AI-БРИФ",
      headline: "Умный первый разговор.",
      sub: "Превратите черновую идею в практический скоуп, сроки и оценку совпадения — до стартового звонка.",
      input_label: "Что строим?",
      placeholder: "Опишите задачу... Например: нужен Telegram-бот для записи клиентов, интеграция с CRM, запуск через месяц.",
      chip1: "Веб-сайт",
      chip2: "Мобильное приложение",
      chip3: "Telegram Bot",
      chip4: "MVP",
      analyst: "AI аналитик",
      fit: "Совпадение",
      send: "Отправить бриф"
    },
    work: {
      eyebrow: "КЕЙС",
      headline: "Реальные задачи. Реальные решения.",
      case_tag1: "Веб-дашборд",
      case_tag2: "Telegram Бот",
      case_tag3: "EdTech",
      case_tag4: "Грант ЕБРР",
      case_title: "MENTOR EXCELLENCE SYSTEM",
      case_desc: "Заменили хаос в WhatsApp на цифровую систему управления для 1 335 менти и 153 менторов в 14 командах.",
      m1_label: "менти в системе",
      m2_label: "менторов",
      m3_label: "недели до запуска",
      m4_label: "vs SaaS-альтернативы",
      quote: "Менторы не заполняют никаких Excel-таблиц. Всё через телефон в Telegram за 30 секунд.",
      demo: "Открыть демо",
      team_label: "ОПЫТ КОМАНДЫ"
    },
    stats: {
      p1_label: "участников",
      p2_label: "недели до запуска",
      p3_label: "мобильных приложений",
      p4_label: "SaaS-продукта в проде"
    },
    process: {
      eyebrow: "ПРОЦЕСС",
      headline: "Достаточно гибкие чтобы двигаться быстро. Достаточно структурированные чтобы запускать.",
      s1_title: "Исследование",
      s1_desc: "Скоуп, пользователи, ограничения и первая версия результата.",
      s1_time: "День 1",
      s2_title: "Предложение",
      s2_desc: "Чёткий бюджет, сроки, вехи и риски продукта.",
      s2_time: "24 часа",
      s3_title: "Дизайн и прототип",
      s3_desc: "Направление интерфейса, ключевые флоу и кликабельная логика продукта.",
      s3_time: "3–5 дней",
      s4_title: "Разработка и итерации",
      s4_desc: "Еженедельный прогресс, плотные обратные связи и production-код.",
      s4_time: "По срокам проекта",
      s5_title: "Запуск и поддержка",
      s5_desc: "Деплой, измерение, стабилизация и постоянное улучшение после релиза.",
      s5_time: "После сдачи",
      note: "Наш MD отвечает в течение 2 часов"
    },
    testimonials: {
      eyebrow: "ОТЗЫВЫ",
      headline: "Клиенты запоминают спокойную доставку.",
      pause: "Пауза",
      play: "Играть"
    },
    products: {
      eyebrow: "НАШИ ПРОДУКТЫ",
      headline: "Мы не просто строим для клиентов. Мы строим продукты сами.",
      sub: "Это значит, что мы понимаем ваш бизнес изнутри.",
      cheqon_desc: "Генератор счетов и актов для фрилансеров и микробизнеса в Казахстане.",
      leqalo_desc: "5 обязательных юридических документов для вашего казахстанского сайта — за 2 минуты.",
      skidqi_desc: "Маркетплейс скидок, где каждое объявление показывает реальную цену до и после.",
      runqit_desc: "AI-маркетинговые планы для малого бизнеса.",
      live: "Работает",
      soon: "Скоро",
      open: "Открыть"
    },
    team: {
      eyebrow: "КОМАНДА",
      headline: "Маленькая senior-команда. Прямое владение.",
      sub: "Вы работаете напрямую с теми, кто строит ваш продукт. Без аккаунт-менеджеров.",
      r1_name: "Со-основатель и MD",
      r1_tags: "PhD · ЮНЕСКО · Бизнес-стратегия",
      r1_bio: "25 лет на пересечении науки, бизнеса и образования. Ведёт переговоры с клиентами и стратегию проекта.",
      r2_name: "Mobile Lead",
      r2_tags: "Swift · Kotlin · iOS и Android",
      r2_bio: "8+ лет нативной мобильной разработки. Запустил приложения которыми пользуются десятки тысяч казахстанцев.",
      r3_name: "Backend Engineer",
      r3_tags: "Node.js · PostgreSQL · API",
      r3_bio: "Подключается к сложным проектам. Строит масштабируемые системы, которые не падают под нагрузкой.",
      r4_name: "AI Builder и Веб",
      r4_tags: "React · Telegram Боты · MVP",
      r4_bio: "Превращает идеи в живые продукты быстро. Оркестрирует AI-инструменты — результат за дни, не месяцы."
    },
    contact: {
      eyebrow: "КОНТАКТЫ",
      headline1: "Есть идея?",
      headline2: "Давайте построим её.",
      promise1: "⚡ Ответим за 2 часа",
      promise2: "🎯 Бесплатная консультация 30 минут",
      promise3: "📋 Предложение за 24 часа",
      address: "Алматы, ул. Чайковского 131",
      telegram_btn: "Написать в Telegram",
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
      f_submit: "Отправить",
      success: "Заявка отправлена! Ответим в течение 2 часов."
    },
    footer: {
      tagline: "Think. Build. Ship.",
      kind: "Digital Product Studio · Алматы, Казахстан",
      nav_title: "Навигация",
      contact_title: "Контакты",
      legal_note: "Юридические документы сгенерированы Leqalo.com",
      copy: "© 2026 SQORA PRO. Все права защищены.",
      built: "Сделано с ♥ командой SQORA PRO"
    }
  }
};
```

### switchLang function:

```javascript
let currentLang = 'ru';

function switchLang(lang) {
  currentLang = lang;
  const t = CONTENT[lang];

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const keys = key.split('.');
    let val = t;
    for (const k of keys) val = val?.[k];
    if (val !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Update select options separately
  document.querySelectorAll('[data-i18n-options]').forEach(select => {
    const prefix = select.dataset.i18nOptions;
    const keys = prefix.split('.');
    let opts = t;
    for (const k of keys) opts = opts?.[k];
    if (opts) {
      Array.from(select.options).forEach((opt, i) => {
        const key = `opt${i + 1}`;
        if (opts[key]) opt.textContent = opts[key];
      });
    }
  });

  // Update lang buttons
  document.querySelectorAll('.language-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim() === lang.toUpperCase());
  });

  // Update html lang attribute
  document.documentElement.lang = lang;
}
```

Add to bottom of init functions: `switchLang('ru');`

Wire buttons:
```javascript
document.querySelectorAll('.language-toggle button').forEach(btn => {
  btn.addEventListener('click', () => {
    switchLang(btn.textContent.trim().toLowerCase());
  });
});
```

---

## TASK 2: CONTENT FIXES

### 2.1 Contact section
- Fix email href: change `hello@sqora.pro` to `info@sqorapro.com` (both the href AND displayed text)
- Fix phone href: change `tel:+77000000000` to `tel:+77772894949`
- Fix Telegram button href: change `https://t.me/` to `https://t.me/sqorapro`
- Address displayed: use data-i18n so it shows "Almaty, Чайковского 131" in EN and "Алматы, ул. Чайковского 131" in RU

### 2.2 Contact form — expand budget options
Replace current 3 budget options with 8:
Under $1K / $1K – $3K / $3K – $5K / $5K – $10K / $10K – $15K / $15K – $30K / $30K+ / Let's discuss
Add `data-i18n-options="contact.f_budget"` to the budget select element.

### 2.3 Contact form — add "Other" option to project type
Add fifth option "Other" to project type select.
Add `data-i18n-options="contact.f_type"` to the project type select.

### 2.4 Products section
Fix descriptions (currently wrong):
- Cheqon: "Receipt intelligence and spending workflows for modern teams."
  → "Invoice and act generator for freelancers and micro-business in Kazakhstan."
- Leqalo: "Legal and policy automation for faster digital operations."
  → "5 mandatory legal documents for your Kazakhstani website — generated in 2 minutes."
- Skidqi: "Local deals, discounts, and loyalty journeys in one product."
  → "Discount marketplace where every listing shows the real before and after price."
- Runqit: "Performance tooling for teams building with momentum."
  → "AI-powered marketing plans for small business."

All product descriptions should get data-i18n attributes for RU translation.

### 2.5 Testimonials — keep only real content
Keep all 4 cards but make cards 2, 3, 4 clearly placeholder styled.
Cards 2-4: add a subtle "Coming soon" badge overlay, reduce opacity to 0.65, 
and change the quotes to neutral placeholder text that does NOT invent fake client names.
Keep card 1 (Mentor Excellence) exactly as is — it is real.

Cards 2-4 new content:
- Card 2: Quote: "This slot is reserved for the next client testimonial." · Name: "Future Client" · Role: "To be announced"
- Card 3: Quote: "We will update this with a real quote after the next project." · Name: "Future Client" · Role: "To be announced"
- Card 4: Quote: "Fourth slot — real testimonial coming after project completion." · Name: "Future Client" · Role: "To be announced"

### 2.6 Footer fixes
- Email: keep `info@sqorapro.com` (already correct in footer, just verify)
- Phone: keep `+7 777 289 49 49` (already correct in footer)
- Address: add "Чайковского 131" — change "Almaty, Kazakhstan" to "Almaty, Чайковского 131"
- Legal row: expand from 3 links to 5:
  Privacy Policy · Data Processing · Cookie Policy · Terms of Use · Public Offer
- Legal note: change "powered by Leqalo.com" to "Legal documents generated by Leqalo.com"
  In RU: "Юридические документы сгенерированы Leqalo.com"
- Copyright: change "© 2026 SQORA PRO" to "© 2026 SQORA PRO. All rights reserved."
  Add below: "Built with ♥ by SQORA PRO" (right-aligned)
- Footer tagline "Think.Build.Ship." → add spaces: "Think. Build. Ship."

### 2.7 Team section — add bio text
Currently team cards only show role and tech stack tags but no bio text.
Add bio paragraph under tags for each card:
- Co-Founder & MD: "25 years at the intersection of science, business and education. Leads client conversations and project strategy."
- Mobile Lead: "8+ years of native mobile engineering. Has shipped apps used by tens of thousands in Kazakhstan."
- Backend Engineer: "Joins complex projects. Builds scalable systems that handle load without drama."
- AI Builder & Web: "Turns ideas into live products fast. Orchestrates AI tools so you get results in days, not months."

All bio texts get data-i18n attributes.

---

## TASK 3: FORM SUBMISSION TO TELEGRAM

Add form submission handler in script.js inside a new function `initContactForm()`, called at the end.

```javascript
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  // Fill these before deploying to VPS:
  const BOT_TOKEN = '';
  const ADMIN_CHAT_ID = '';

  const submitBtn = form.querySelector('button[type="button"]');

  submitBtn.addEventListener('click', async () => {
    const name = form.querySelector('[name="name"]')?.value?.trim();
    const contact = form.querySelector('[name="contact"]')?.value?.trim();
    const type = form.querySelector('[name="project-type"]')?.value;
    const budget = form.querySelector('[name="budget"]')?.value;
    const message = form.querySelector('[name="message"]')?.value?.trim();

    if (!name || !contact) {
      alert(currentLang === 'ru' ? 'Пожалуйста заполните имя и контакт' : 'Please fill in name and contact');
      return;
    }

    submitBtn.textContent = currentLang === 'ru' ? 'Отправляем...' : 'Sending...';
    submitBtn.disabled = true;

    const datetime = new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' });

    const text = `🔔 *Новая заявка с сайта sqorapro.com*\n\n` +
      `👤 *Имя:* ${name}\n` +
      `📱 *Контакт:* ${contact}\n` +
      `💼 *Тип:* ${type}\n` +
      `💰 *Бюджет:* ${budget}\n` +
      `📝 *Сообщение:* ${message || '—'}\n\n` +
      `🕐 *Время:* ${datetime}\n` +
      `📌 *Источник:* sqorapro.com`;

    if (BOT_TOKEN && ADMIN_CHAT_ID) {
      try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: ADMIN_CHAT_ID, text, parse_mode: 'Markdown' })
        });
      } catch (e) {
        console.error('Telegram send failed:', e);
      }
    }

    // Show success
    form.innerHTML = `
      <div style="text-align:center;padding:40px 0">
        <div style="font-size:56px;margin-bottom:16px">✅</div>
        <div style="font-size:20px;font-weight:700;margin-bottom:8px">
          ${currentLang === 'ru' ? 'Заявка отправлена!' : 'Application sent!'}
        </div>
        <div style="opacity:0.65;font-size:15px">
          ${currentLang === 'ru' ? 'Ответим в течение 2 часов.' : 'We will reply within 2 hours.'}
        </div>
      </div>`;
  });
}
```

---

## IMPORTANT NOTES

- Do NOT touch the globe canvas, carousel timing, counter animation, reveal logic, or tweaks panel
- Do NOT remove the `<style id="__om-edit-overrides">` block at the bottom of HTML
- All data-i18n keys must exactly match the CONTENT object structure
- After all changes, verify: switching RU→EN→RU works on all visible text
- The tagline "Think. Build. Ship." stays in English regardless of language
- Product names (Cheqon.com etc), tech tags, email, phone, URLs never translate

---

## TASK 4: VISUAL FIXES (added after review)

### 4.1 Products — "Live" badge fix
The Live/Coming Soon badge is stretching full card width.
Fix: add `width: fit-content` and `display: inline-flex` to `.status` class.
The badge should be a compact pill, not a full-width bar.

### 4.2 Products — Leqalo preview fix
The blue bars in the Leqalo legal-preview are too wide and overlap the checkmark circle.
Fix: reduce bar widths in `.legal-preview span` so they sit clearly to the left of the checkmark.
Max width for bars: 55% of container. Add right margin so they never touch the circle.

### 4.3 Process — "Our MD responds" button
Make this button a real anchor link: `<a href="#contact">Our MD responds within 2 hours →</a>`
Style it as before (blue pill outline) but cursor: pointer and smooth scroll to contact section.

### 4.4 Process steps — visual enhancement
The 5 step cards are visually flat. Improve each card:
- Add a colored gradient number (large, top-left, gradient from --blue to --cyan, opacity 0.15 default → 1 on hover)
- Add a subtle top border that becomes a gradient line on hover (3px, gradient blue→cyan)
- On hover: card background shifts to very light blue tint (rgba(0,120,255,0.02))
- Add a relevant icon SVG (24px) above the step title:
  01 Discovery: magnifier icon
  02 Proposal: document icon  
  03 Design & Prototype: pen/wireframe icon
  04 Build & Iterate: code brackets icon
  05 Launch & Support: rocket icon
  Use simple inline SVG with stroke style (stroke: var(--blue), fill: none, strokeWidth: 1.5)

### 4.5 Stats section — fix confusing mix of metrics
Current labels are misleading — numbers from different contexts mixed together.
Rewrite the labels with clear context:

  1,335 → label: "mentees in one project" · sublabel: "Mentor Excellence · EBRD"
  3     → label: "weeks to first launch" · sublabel: "average MVP timeline"  
  20+   → label: "mobile apps tested" · sublabel: "Google Play & App Store"
  4     → label: "own SaaS products" · sublabel: "live in production"

Add a sublabel element under each main label (smaller, more muted, ~13px).
This gives context so the numbers make sense individually.

### 4.6 AI Brief block — connect to real Claude API
The right panel currently shows hardcoded static text. Replace with real AI response.

When user clicks "Send Brief":
1. Take the textarea content + selected chip
2. Call Anthropic API (claude-sonnet-4-20250514) with this system prompt:
   "You are a project analyst at SQORA PRO digital studio. 
   Analyze the client's brief and respond in exactly this JSON format:
   {
     line1: 'Ниша: [identify the business niche in 8 words max]',
     line2: 'Решение: [recommended solution in 10 words max]',
     line3: 'MVP scope: [3-4 key features, comma separated]',
     line4: 'Срок: [realistic timeline]',
     fit: [number 85-99]
   }
   Respond ONLY with valid JSON, no markdown, no extra text."
3. Show lines in the right panel with typewriter animation (same as current)
4. Show fit score badge with the number from API response
5. After showing response, also send to Telegram bot:
   Message: "📋 *AI Бриф отправлен*\n\n*Запрос:* {textarea text}\n*Тип:* {selected chip}\n\n*Анализ:*\n{all 4 lines}\n*Совпадение:* {fit}%"

BOT_TOKEN and ADMIN_CHAT_ID — same placeholders as contact form (empty strings, fill before VPS deploy).

Error handling: if API fails, show the hardcoded fallback text silently.


---

## TASK 5: REMOVE STATS SECTION

Remove the entire dark stats section (the one with 1,335 / 3 / 20+ / 4 numbers on dark background).
Delete its HTML completely.
The page should flow directly from the Case Study section to the Process section.
Make sure there is no visual gap or spacing issue at the junction.

## TASK 6: REPLACE EMOJI ICONS WITH CUSTOM PNG ICONS

The client has provided 10 custom premium PNG icons in the `icons/` folder.
All icons have dark rounded square backgrounds matching the brand style.

Icon files and their usage:

| File | Used for |
|------|----------|
| `icons/глобус.png` | Web Development service card |
| `icons/мобила код.png` | Mobile Apps service card |
| `icons/телеграм.png` | Telegram Bots service card |
| `icons/молния.png` | MVP in 5 Days service card |
| `icons/щит.png` | Team — Co-Founder & MD card |
| `icons/мобила код.png` | Team — Mobile Lead card |
| `icons/хранилище.png` | Team — Backend Engineer card |
| `icons/облако.png` | Team — AI Builder & Web card |
| `icons/лупа.png` | Process step 01 — Discovery |
| `icons/документ.png` | Process step 02 — Proposal |
| `icons/браузер.png` | Process step 03 — Design & Prototype |
| `icons/мобила код.png` | Process step 04 — Build & Iterate |
| `icons/ракета9.png` | Process step 05 — Launch & Support |

Note: files `ikhlas.webp` and the two ChatGPT composite images are NOT icons — ignore them.

Implementation:
Replace all emoji (🌐 📱 ✈️ ⚡ etc) and any SVG icons with <img> tags:
```html
<img src="icons/глобус.png" alt="Web Development" class="section-icon">
```

CSS for icons:
```css
.section-icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
  border-radius: 14px;
  flex-shrink: 0;
}
.section-icon.icon-sm {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
.section-icon.icon-xs {
  width: 28px;
  height: 28px;
  border-radius: 8px;
}
```

Sizing by location:
- Service cards: 56px (default .section-icon)
- Team cards: 56px (default .section-icon)
- Process steps: 40px (.section-icon.icon-sm)
- Contact details: do NOT use icons there — keep text only

Do NOT add Lucide library. Do NOT use emoji anywhere on the site after this change.
Hero float cards (Web / Mobile / Telegram / MVP) — replace emoji with same icons, sized 32px.

## TASK 7: AI BRIEF — CONNECT TO CLAUDE API

The right panel of the AI Brief block currently shows hardcoded static text.
Replace with real Claude API call when user clicks Send Brief button.

Implementation:

```javascript
async function sendAiBrief(userText, chipLabel) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      system: `You are a project analyst at SQORA PRO digital studio in Almaty, Kazakhstan.
Analyze the client brief and respond ONLY with valid JSON, no markdown, no extra text:
{
  "line1": "Ниша: [business niche in 8 words max]",
  "line2": "Решение: [recommended solution in 10 words max]",
  "line3": "MVP scope: [3-4 key features, comma separated]",
  "line4": "Риск: [main risk and 1 mitigation in 10 words]",
  "timeline": "[realistic timeline like 2-3 недели]",
  "fit": [number between 88 and 97]
}`,
      messages: [{ role: 'user', content: `Client brief: ${userText}\nProject type: ${chipLabel}` }]
    })
  });
  const data = await response.json();
  const text = data.content?.[0]?.text || '';
  return JSON.parse(text);
}
```

On Send Brief click:
1. Show loading state in right panel (animated dots or "Analysing..." text)
2. Call sendAiBrief() with textarea value and active chip label
3. On success: animate lines in one by one with typewriter effect (same speed as current)
4. Update timeline badge and fit score badge with real values from API
5. On error: fall back to current hardcoded lines silently

Also after showing response — send Telegram notification (same BOT_TOKEN/ADMIN_CHAT_ID placeholders):
Message format:
📋 *Новый AI-бриф с сайта*

📝 *Запрос:* {userText}
🏷 *Тип:* {chipLabel}

*Анализ:*
{line1}
{line2}
{line3}
{line4}

⏱ *Срок:* {timeline}
🎯 *Совпадение:* {fit}%
🕐 {datetime Almaty timezone}

---

## TASK 8: GLOBE FLOAT CARDS — fix translation + add animation

### 8.1 Translation fix
The 4 floating cards around the globe currently show Russian text regardless of language.
They must use the CONTENT translations like all other elements.

Add data-i18n attributes to each float card title and description:
- Card "Web Dev": title data-i18n="services.s1_name", desc data-i18n="hero.card1_desc" (add short version to CONTENT)
- Card "Mobile Apps": title data-i18n="services.s2_name", desc data-i18n="hero.card2_desc"
- Card "Telegram Bots": title data-i18n="services.s3_name", desc data-i18n="hero.card3_desc"
- Card "MVP in 5 Days": title data-i18n="services.s4_name", desc data-i18n="hero.card4_desc"

Add short hero card descriptions to CONTENT both languages:
en: card1_desc: "Fast, scalable web apps", card2_desc: "Native iOS & Android", card3_desc: "Smart automation", card4_desc: "Idea to live product"
ru: card1_desc: "Быстрые веб-приложения", card2_desc: "Нативный iOS и Android", card3_desc: "Умная автоматизация", card4_desc: "Идея в живой продукт"

### 8.2 Float card animation
Currently cards only float vertically. Add gentle multi-directional floating:
Each card gets a unique CSS animation combining translateY and translateX with different timing:

```css
@keyframes floatA {
  0%,100% { transform: translate(0px, 0px); }
  25% { transform: translate(4px, -6px); }
  50% { transform: translate(-3px, -10px); }
  75% { transform: translate(-5px, -4px); }
}
@keyframes floatB {
  0%,100% { transform: translate(0px, 0px); }
  25% { transform: translate(-5px, -8px); }
  50% { transform: translate(3px, -12px); }
  75% { transform: translate(4px, -5px); }
}
@keyframes floatC {
  0%,100% { transform: translate(0px, 0px); }
  25% { transform: translate(3px, -5px); }
  50% { transform: translate(-4px, -8px); }
  75% { transform: translate(-2px, -3px); }
}
@keyframes floatD {
  0%,100% { transform: translate(0px, 0px); }
  25% { transform: translate(-4px, -7px); }
  50% { transform: translate(5px, -9px); }
  75% { transform: translate(3px, -4px); }
}
```

Apply: card top=floatA 6s ease-in-out infinite, card right=floatB 7s 1s ease-in-out infinite,
card bottom=floatC 6.5s 2s ease-in-out infinite, card left=floatD 7.5s 0.5s ease-in-out infinite.

---

## TASK 9: MOBILE RESPONSIVE FIXES

### 9.1 Navbar mobile
The navbar is breaking on mobile — logo and menu are being cut off.
Fix:

```css
@media (max-width: 768px) {
  .site-nav .nav-inner {
    padding: 0 16px;
    height: 56px;
  }
  .wordmark {
    font-size: 18px;
  }
  .wordmark .pro-label {
    font-size: 10px;
  }
  .nav-links {
    display: none;
  }
  .nav-toggle {
    display: flex;
  }
  .nav-cta-desktop {
    display: none;
  }
  .language-toggle {
    display: flex;
  }
}
```

Make sure the mobile menu (#mobileMenu) when open:
- Takes full width
- Has proper padding 16px
- Links are 16px font, 44px min tap target height
- Has smooth slide-down animation (max-height transition)

### 9.2 Globe section mobile
On mobile the 4 float cards around the globe are overflowing and overlapping.
Fix for mobile:

```css
@media (max-width: 768px) {
  #globeStage {
    height: 360px;
    position: relative;
  }
  .float-card {
    width: 140px;
    padding: 10px 12px;
    font-size: 12px;
  }
  .float-card-top {
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
  .float-card-right {
    top: 30%;
    right: 2px;
    transform: none;
  }
  .float-card-bottom {
    bottom: 2%;
    left: 50%;
    transform: translateX(-50%);
  }
  .float-card-left {
    top: 30%;
    left: 2px;
    transform: none;
  }
}

@media (max-width: 480px) {
  /* On very small screens show only 2 cards, hide left and right */
  .float-card-left,
  .float-card-right {
    display: none;
  }
  .float-card-top {
    top: 5%;
  }
  .float-card-bottom {
    bottom: 5%;
  }
}
```

### 9.3 Hero section mobile layout
On mobile hero text and globe should stack vertically:

```css
@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 100px 16px 40px;
  }
  .hero-text {
    order: 1;
    text-align: center;
  }
  .hero-headline {
    font-size: clamp(52px, 14vw, 72px);
  }
  .hero-sub {
    font-size: 15px;
    max-width: 100%;
  }
  .hero-ctas {
    justify-content: center;
  }
  .trusted-row {
    justify-content: center;
    flex-wrap: wrap;
  }
  .hero-globe-wrap {
    order: 2;
    height: 380px;
    margin: 0 -16px;
  }
  .hero-stat-pills {
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0 16px 40px;
  }
}
```

---

## TASK 10: LIVE DEMOS CATALOG — /demos.html + individual pages

### Overview
Create a showcase catalog of live demos. Structure:
- `demos.html` — main catalog page with filters and cards grid
- `demos/[id].html` — individual page for each demo (one file per demo)

Link to demos from main navbar: add "Demos" link between "Work" and "Process".

---

### 10.1 demos.html — Catalog page

#### Hero section (dark background, same as main site hero):
```
Eyebrow: LIVE DEMOS / ЖИВЫЕ ДЕМО
Headline: "See it live. Order yours."
RU: "Смотрите живые примеры. Заказывайте похожее."
Sub EN: "Every demo is a fully deployed product. Click to explore — then order a similar one for your business."
Sub RU: "Каждое демо — это реально задеплоенный продукт. Посмотрите живой пример и закажите похожий для вашего бизнеса."
CTA button: "Start a Project →" → links to index.html#contact
```

#### Filter system (sticky bar below hero):
Three filter groups displayed horizontally. Each group is a label + pills row.
Active pill: blue background. Multiple selections allowed within a group.
Selecting a filter instantly hides non-matching cards (JS filter, no page reload).

```
Group 1 — TYPE (Тип):
[All / Все] [Website / Веб-сайт] [Telegram Bot] [Mini App]

Group 2 — SITE TYPE (Вид сайта) — only shows when "Website" is selected:
[Landing / Лендинг] [Corporate / Корпоративный] [E-commerce / Магазин]
[Catalog / Каталог] [Dashboard / Дашборд] [Portfolio / Портфолио]

Group 3 — INDUSTRY (Отрасль):
[Medical / Медицина] [Restaurant / Ресторан] [Real Estate / Недвижимость]
[Beauty / Красота] [Education / Образование] [Sport / Спорт]
[Legal / Юридические] [Construction / Строительство] [Auto / Авто]
[Finance / Финансы] [IT] [Tourism / Туризм] [Retail / Торговля]

Group 4 — BUDGET (Бюджет):
[Under $1K] [$1K–$3K] [$3K–$5K] [$5K+]
```

#### Demo cards grid (3 columns desktop, 2 tablet, 1 mobile):

Each card:
```html
<a href="demos/[id].html" class="demo-card" 
   data-type="web" data-subtype="landing" 
   data-industry="medical" data-budget="1k">
  
  <div class="demo-thumb">
    <!-- If live: real screenshot -->
    <!-- If soon: placeholder with emoji + gradient bg -->
    <div class="demo-thumb-placeholder">🦷</div>
    <div class="demo-badges">
      <span class="badge-type">Лендинг</span>
      <span class="badge-status live">● Live</span>
      <!-- OR -->
      <span class="badge-status soon">Coming Soon</span>
    </div>
  </div>
  
  <div class="demo-info">
    <h3 class="demo-name">Стоматология Premium</h3>
    <p class="demo-industry">Медицина · Лендинг</p>
    <div class="demo-tags">
      <span>React</span><span>Онлайн-запись</span>
    </div>
    <div class="demo-footer">
      <span class="demo-budget">от $800</span>
      <span class="demo-arrow">→</span>
    </div>
  </div>
</a>
```

Card hover: lift translateY(-6px), shadow grows, arrow shifts right.
"Coming Soon" cards: slightly desaturated, cursor still pointer (clicking goes to detail page).

---

### 10.2 Individual demo pages — demos/[id].html

Each file is a standalone HTML page with same navbar and footer as main site.
Page layout: two-column on desktop, single column on mobile.

**LEFT column (55%) — Demo info:**
```
Eyebrow: [industry tag] · [type tag]
Headline: [demo name]
Sub: [description — 2-3 sentences]

"Кому подойдёт:" section with icon list (3-4 items)
"Что внутри:" section — feature list with checkmark icons (6-8 items)

Info row:
  💰 Бюджет: [budget range]
  ⏱ Срок: [timeline]
  🛠 Стек: [tech tags]

Two CTA buttons:
  [Открыть Live Demo →] — links to actual deployed URL (disabled/grayed if "soon")
  [Заказать похожий →] — links to index.html#contact with pre-filled params
```

**RIGHT column (45%) — Visual preview:**
```
Large preview area:
- If live: iframe embed of the actual demo site (with fallback screenshot)
- If soon: large placeholder with emoji, gradient background, "Demo coming soon" text

Below preview:
  Small "Share this demo:" row with copy-link button
```

**Bottom section — Related demos (3 cards):**
```
"Похожие демо" / "Related demos"
Show 3 other cards from same industry or type
```

---

### 10.3 Demo data — JS array (shared between pages)

Create file `demos/demos-data.js` included in both demos.html and individual pages:

```javascript
const DEMOS = [
  {
    id: "american-butler",
    status: "live",
    type: "web",
    subtype: "corporate",
    industry: "other",
    budget: "$1,500 – $3,000",
    budgetKey: "3k",
    timeline: "1–2 weeks / 1–2 недели",
    stack: ["React", "TanStack", "Cloudflare"],
    emoji: "🏢",
    thumb: null, // will be screenshot
    liveUrl: "https://premier-usa-living.sqorapros.workers.dev",
    name: { en: "American Butler", ru: "American Butler" },
    industry_label: { en: "Concierge · Corporate", ru: "Консьерж-сервис · Корпоративный" },
    headline: { 
      en: "Premium concierge & relocation services site",
      ru: "Сайт премиального консьерж и релокационного сервиса"
    },
    description: {
      en: "Multi-page corporate website for a US-based concierge and relocation company. Clean premium design targeting high-income clients.",
      ru: "Многостраничный корпоративный сайт для консьерж и релокационного сервиса в США. Чистый премиальный дизайн для состоятельной аудитории."
    },
    forWhom: {
      en: ["Concierge & lifestyle services", "Relocation companies", "Luxury service businesses", "B2B service providers"],
      ru: ["Консьерж и лайфстайл-сервисы", "Компании по релокации", "Премиальный сервисный бизнес", "B2B поставщики услуг"]
    },
    features: {
      en: ["Multi-page structure", "Services catalog", "About & team section", "Contact form", "Mobile responsive", "Fast loading"],
      ru: ["Многостраничная структура", "Каталог услуг", "Раздел о команде", "Форма обратной связи", "Мобильная версия", "Быстрая загрузка"]
    }
  },
  {
    id: "mentor-excellence",
    status: "live",
    type: "telegram",
    subtype: "bot-dashboard",
    industry: "education",
    budget: "$3,000 – $5,000",
    budgetKey: "5k",
    timeline: "3–4 weeks / 3–4 недели",
    stack: ["Node.js", "Grammy", "PostgreSQL", "React"],
    emoji: "🎓",
    thumb: null,
    liveUrl: "https://mentorbot.ru",
    name: { en: "Mentor Excellence System", ru: "Mentor Excellence System" },
    industry_label: { en: "Education · Telegram Bot + Dashboard", ru: "Образование · Telegram Бот + Дашборд" },
    headline: {
      en: "Mentoring program management system",
      ru: "Система управления менторинговой программой"
    },
    description: {
      en: "Full system for managing 1,335 mentees and 153 mentors. Replaced WhatsApp chaos with a Telegram bot + web dashboard. Built for EBRD grant project.",
      ru: "Полная система для управления 1335 менти и 153 менторами. Заменила хаос в WhatsApp на Telegram-бота и веб-дашборд. Создана для проекта по гранту ЕБРР."
    },
    forWhom: {
      en: ["Business schools & mentoring programs", "HR departments with mentoring", "NGOs with EBRD/USAID grants", "Corporate training centers"],
      ru: ["Бизнес-школы и менторинговые программы", "HR-отделы с менторингом", "НКО с грантами ЕБРР/USAID", "Корпоративные учебные центры"]
    },
    features: {
      en: ["Web dashboard for admins", "Telegram bot for mentors", "1,335+ participant database", "Weekly auto-reports to channel", "Team & pair management", "Rating & activity tracking", "Excel import/export", "Role-based access"],
      ru: ["Веб-дашборд для администраторов", "Telegram-бот для менторов", "База 1335+ участников", "Еженедельные авто-отчёты в канал", "Управление командами и парами", "Рейтинг и отслеживание активности", "Импорт/экспорт Excel", "Ролевой доступ"]
    }
  },
  {
    id: "dental-clinic",
    status: "soon",
    type: "web",
    subtype: "landing",
    industry: "medical",
    budget: "$800 – $1,500",
    budgetKey: "1k",
    timeline: "1–2 weeks / 1–2 недели",
    stack: ["React", "TanStack"],
    emoji: "🦷",
    thumb: null,
    liveUrl: "",
    name: { en: "Dental Clinic Landing", ru: "Сайт стоматологии" },
    industry_label: { en: "Medical · Landing", ru: "Медицина · Лендинг" },
    headline: { en: "Converting landing for dental clinic", ru: "Конвертирующий лендинг для стоматологии" },
    description: {
      en: "Premium landing page for dental clinic with online appointment booking. Addresses patient concerns: pricing, doctors, convenience.",
      ru: "Премиальный лендинг для стоматологии с онлайн-записью к врачу. Закрывает главные возражения пациента: цены, врачи, удобство."
    },
    forWhom: {
      en: ["Private dental clinics", "Medical centers", "Specialist doctors", "Beauty & health clinics"],
      ru: ["Частные стоматологии", "Медицинские центры", "Врачи-специалисты", "Клиники красоты и здоровья"]
    },
    features: {
      en: ["Online appointment form", "Services & pricing", "Doctor profiles", "Patient reviews", "Before/after gallery", "Interactive map"],
      ru: ["Форма онлайн-записи", "Услуги и цены", "Профили врачей", "Отзывы пациентов", "Галерея до/после", "Интерактивная карта"]
    }
  },
  {
    id: "restaurant",
    status: "soon",
    type: "web",
    subtype: "landing",
    industry: "restaurant",
    budget: "$800 – $1,500",
    budgetKey: "1k",
    timeline: "1–2 weeks / 1–2 недели",
    stack: ["React", "TanStack"],
    emoji: "🍕",
    thumb: null,
    liveUrl: "",
    name: { en: "Restaurant & Cafe", ru: "Ресторан и кафе" },
    industry_label: { en: "Food & Beverage · Landing", ru: "Ресторан · Лендинг" },
    headline: { en: "Restaurant site with menu and reservations", ru: "Сайт ресторана с меню и бронированием" },
    description: {
      en: "Appetizing restaurant website with digital menu, table reservation and delivery info. Optimized for local search.",
      ru: "Аппетитный сайт ресторана с цифровым меню, бронированием столика и информацией о доставке. Оптимизирован под локальный поиск."
    },
    forWhom: {
      en: ["Restaurants & cafes", "Bars & clubs", "Food delivery services", "Catering companies"],
      ru: ["Рестораны и кафе", "Бары и клубы", "Службы доставки еды", "Кейтеринговые компании"]
    },
    features: {
      en: ["Digital menu with photos", "Table reservation form", "Delivery info", "Chef & concept section", "Events & specials", "Location & hours"],
      ru: ["Цифровое меню с фото", "Форма бронирования столика", "Информация о доставке", "Раздел о шефе и концепции", "События и спецпредложения", "Адрес и часы работы"]
    }
  },
  {
    id: "real-estate",
    status: "soon",
    type: "web",
    subtype: "catalog",
    industry: "real-estate",
    budget: "$1,500 – $3,000",
    budgetKey: "3k",
    timeline: "2–3 weeks / 2–3 недели",
    stack: ["React", "TanStack"],
    emoji: "🏠",
    thumb: null,
    liveUrl: "",
    name: { en: "Real Estate Agency", ru: "Агентство недвижимости" },
    industry_label: { en: "Real Estate · Catalog", ru: "Недвижимость · Каталог" },
    headline: { en: "Property listings catalog with lead capture", ru: "Каталог объектов недвижимости с захватом лидов" },
    description: {
      en: "Full-featured real estate site with property catalog, filters, map view and CRM-ready lead forms.",
      ru: "Полноценный сайт агентства с каталогом объектов, фильтрами, картой и формами для сбора лидов."
    },
    forWhom: {
      en: ["Real estate agencies", "Property developers", "Individual realtors", "Commercial property companies"],
      ru: ["Агентства недвижимости", "Застройщики", "Частные риелторы", "Компании коммерческой недвижимости"]
    },
    features: {
      en: ["Property catalog with filters", "Map view", "Property detail pages", "Lead capture forms", "Agent profiles", "Mortgage calculator"],
      ru: ["Каталог объектов с фильтрами", "Вид на карте", "Страницы объектов", "Формы захвата лидов", "Профили агентов", "Ипотечный калькулятор"]
    }
  },
  {
    id: "fitness",
    status: "soon",
    type: "web",
    subtype: "landing",
    industry: "sport",
    budget: "$800 – $1,500",
    budgetKey: "1k",
    timeline: "1–2 weeks / 1–2 недели",
    stack: ["React", "TanStack"],
    emoji: "💪",
    thumb: null,
    liveUrl: "",
    name: { en: "Fitness Club", ru: "Фитнес-клуб" },
    industry_label: { en: "Sport · Landing", ru: "Спорт · Лендинг" },
    headline: { en: "Fitness club site with schedule and memberships", ru: "Сайт фитнес-клуба с расписанием и абонементами" },
    description: {
      en: "Energetic fitness club website with class schedule, membership plans and trainer profiles.",
      ru: "Энергичный сайт фитнес-клуба с расписанием занятий, тарифами абонементов и профилями тренеров."
    },
    forWhom: {
      en: ["Fitness clubs & gyms", "Yoga & pilates studios", "Dance schools", "Sports sections"],
      ru: ["Фитнес-клубы и тренажёрные залы", "Студии йоги и пилатеса", "Школы танцев", "Спортивные секции"]
    },
    features: {
      en: ["Class schedule", "Membership plans", "Trainer profiles", "Online trial signup", "Photo gallery", "Mobile app link"],
      ru: ["Расписание занятий", "Тарифы абонементов", "Профили тренеров", "Запись на пробное занятие", "Фотогалерея", "Ссылка на мобильное приложение"]
    }
  },
  {
    id: "law-firm",
    status: "soon",
    type: "web",
    subtype: "corporate",
    industry: "legal",
    budget: "$1,000 – $2,000",
    budgetKey: "3k",
    timeline: "1–2 weeks / 1–2 недели",
    stack: ["React", "TanStack"],
    emoji: "⚖️",
    thumb: null,
    liveUrl: "",
    name: { en: "Law Firm", ru: "Юридическая фирма" },
    industry_label: { en: "Legal · Corporate", ru: "Юридические услуги · Корпоративный" },
    headline: { en: "Trust-building corporate site for law firm", ru: "Корпоративный сайт юридической фирмы вызывающий доверие" },
    description: {
      en: "Solid corporate website for law firm. Emphasizes expertise, case history and attorney profiles to build trust.",
      ru: "Солидный корпоративный сайт юридической фирмы. Акцент на экспертизе, практике и профилях адвокатов для формирования доверия."
    },
    forWhom: {
      en: ["Law firms & attorneys", "Notaries", "Legal consultants", "Arbitration centers"],
      ru: ["Юридические фирмы и адвокаты", "Нотариусы", "Юридические консультанты", "Арбитражные центры"]
    },
    features: {
      en: ["Practice areas", "Attorney profiles", "Case results", "Consultation request form", "Client testimonials", "FAQ section"],
      ru: ["Области практики", "Профили адвокатов", "Результаты дел", "Форма записи на консультацию", "Отзывы клиентов", "Раздел FAQ"]
    }
  },
  {
    id: "beauty-salon",
    status: "soon",
    type: "web",
    subtype: "landing",
    industry: "beauty",
    budget: "$800 – $1,500",
    budgetKey: "1k",
    timeline: "1 week / 1 неделя",
    stack: ["React", "TanStack"],
    emoji: "💇",
    thumb: null,
    liveUrl: "",
    name: { en: "Beauty Salon", ru: "Салон красоты" },
    industry_label: { en: "Beauty · Landing", ru: "Красота · Лендинг" },
    headline: { en: "Beauty salon site with online booking", ru: "Сайт салона красоты с онлайн-записью" },
    description: {
      en: "Elegant beauty salon website with service menu, masters portfolio and online appointment booking.",
      ru: "Элегантный сайт салона красоты с меню услуг, портфолио мастеров и онлайн-записью."
    },
    forWhom: {
      en: ["Beauty salons & barbershops", "Nail studios", "SPA & wellness centers", "Individual beauty masters"],
      ru: ["Салоны красоты и барбершопы", "Ногтевые студии", "СПА и велнес-центры", "Частные мастера"]
    },
    features: {
      en: ["Services & pricing", "Masters portfolio", "Online booking form", "Before/after gallery", "Promotions section", "Gift certificates"],
      ru: ["Услуги и цены", "Портфолио мастеров", "Форма онлайн-записи", "Галерея до/после", "Акции и скидки", "Подарочные сертификаты"]
    }
  },
  {
    id: "ecommerce-fashion",
    status: "soon",
    type: "web",
    subtype: "ecommerce",
    industry: "retail",
    budget: "$3,000 – $5,000",
    budgetKey: "5k",
    timeline: "3–4 weeks / 3–4 недели",
    stack: ["React", "TanStack", "Node.js"],
    emoji: "👗",
    thumb: null,
    liveUrl: "",
    name: { en: "Fashion E-commerce", ru: "Магазин одежды" },
    industry_label: { en: "Retail · E-commerce", ru: "Торговля · Интернет-магазин" },
    headline: { en: "Online fashion store with cart and checkout", ru: "Интернет-магазин одежды с корзиной и оплатой" },
    description: {
      en: "Full-featured online clothing store with catalog, filtering, cart, wishlist and payment integration.",
      ru: "Полноценный интернет-магазин одежды с каталогом, фильтрами, корзиной, избранным и интеграцией оплаты."
    },
    forWhom: {
      en: ["Clothing & accessories brands", "Multi-brand boutiques", "Sportswear stores", "Kids clothing shops"],
      ru: ["Бренды одежды и аксессуаров", "Мультибрендовые бутики", "Магазины спортивной одежды", "Детские магазины"]
    },
    features: {
      en: ["Product catalog with filters", "Size guide", "Shopping cart", "Wishlist", "Payment integration", "Order tracking", "Mobile optimized"],
      ru: ["Каталог товаров с фильтрами", "Таблица размеров", "Корзина покупок", "Список желаний", "Интеграция оплаты", "Отслеживание заказа", "Мобильная оптимизация"]
    }
  },
  {
    id: "auto-service",
    status: "soon",
    type: "web",
    subtype: "landing",
    industry: "auto",
    budget: "$800 – $1,500",
    budgetKey: "1k",
    timeline: "1–2 weeks / 1–2 недели",
    stack: ["React", "TanStack"],
    emoji: "🔧",
    thumb: null,
    liveUrl: "",
    name: { en: "Auto Service", ru: "Автосервис" },
    industry_label: { en: "Auto · Landing", ru: "Авто · Лендинг" },
    headline: { en: "Auto service landing with online appointment", ru: "Лендинг автосервиса с онлайн-записью" },
    description: {
      en: "Clean auto service website with service list, pricing calculator and online appointment form.",
      ru: "Чистый сайт автосервиса со списком услуг, калькулятором стоимости и формой онлайн-записи."
    },
    forWhom: {
      en: ["Auto repair shops", "Car wash & detailing", "Tire service", "Car dealerships"],
      ru: ["Автомастерские", "Автомойки и детейлинг", "Шиномонтаж", "Автосалоны"]
    },
    features: {
      en: ["Services & pricing", "Cost calculator", "Online booking", "Work examples", "Certifications", "Map & contacts"],
      ru: ["Услуги и цены", "Калькулятор стоимости", "Онлайн-запись", "Примеры работ", "Сертификаты", "Карта и контакты"]
    }
  }
];
```

---

### 10.4 Individual page template — demos/[id].html

Create one template file `demos/_template.html` and generate all 10 individual pages from it.

Each page includes `demos/demos-data.js` and renders based on the page's own ID.

Page structure:
```html
<!doctype html>
<html>
<head>
  <!-- Same fonts, same styles.css -->
  <!-- Plus demos/demo-page.css for this page's specific styles -->
  <title>[Demo Name] — SQORA PRO Live Demo</title>
</head>
<body>
  <!-- Same navbar as main site (copy exact HTML) -->

  <main class="demo-page">

    <!-- Breadcrumb -->
    <div class="demo-breadcrumb">
      <a href="../index.html">Home</a> →
      <a href="../demos.html">Live Demos</a> →
      <span>[Demo Name]</span>
    </div>

    <!-- Two-column layout -->
    <div class="demo-page-grid">

      <!-- LEFT: Info -->
      <div class="demo-page-left">
        <div class="demo-page-tags">
          <span class="tag-industry">[industry]</span>
          <span class="tag-type">[type]</span>
          <span class="badge-status live/soon">[status]</span>
        </div>

        <h1 class="demo-page-headline">[headline]</h1>
        <p class="demo-page-desc">[description]</p>

        <div class="demo-page-section">
          <h3>Кому подойдёт / For whom:</h3>
          <ul class="for-whom-list">
            <!-- forWhom items with → bullets -->
          </ul>
        </div>

        <div class="demo-page-section">
          <h3>Что внутри / Features:</h3>
          <ul class="features-list">
            <!-- features items with ✓ checkmarks in blue -->
          </ul>
        </div>

        <div class="demo-page-meta">
          <div class="meta-item">
            <span class="meta-icon">💰</span>
            <span class="meta-label">Бюджет / Budget</span>
            <span class="meta-value">[budget]</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">⏱</span>
            <span class="meta-label">Срок / Timeline</span>
            <span class="meta-value">[timeline]</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">🛠</span>
            <span class="meta-label">Стек / Stack</span>
            <span class="meta-value">[stack tags]</span>
          </div>
        </div>

        <div class="demo-page-ctas">
          <!-- If live: -->
          <a href="[liveUrl]" target="_blank" class="btn btn-primary">
            Открыть Live Demo / Open Live Demo →
          </a>
          <!-- If soon: -->
          <button class="btn btn-disabled" disabled>
            Demo Coming Soon
          </button>

          <a href="../index.html#contact" class="btn btn-secondary">
            Заказать похожий / Order similar →
          </a>
        </div>

        <!-- Share row -->
        <div class="demo-share">
          <span>Поделиться:</span>
          <button class="copy-link-btn" onclick="copyLink()">
            📋 Скопировать ссылку
          </button>
        </div>
      </div>

      <!-- RIGHT: Preview -->
      <div class="demo-page-right">
        <div class="demo-preview-frame">
          <!-- If live: iframe -->
          <iframe src="[liveUrl]" class="demo-iframe"
            sandbox="allow-scripts allow-same-origin"
            loading="lazy">
          </iframe>
          <!-- Fallback / overlay for soon: -->
          <div class="demo-soon-overlay">
            <div class="demo-soon-emoji">[emoji]</div>
            <div class="demo-soon-text">Demo in production</div>
            <div class="demo-soon-sub">Launching soon</div>
          </div>
        </div>

        <!-- Open in new tab link -->
        <a href="[liveUrl]" target="_blank" class="demo-open-full">
          Открыть на полный экран ↗
        </a>
      </div>

    </div>

    <!-- Related demos section -->
    <section class="demo-related">
      <h2>Похожие демо / Related demos</h2>
      <div class="demo-related-grid">
        <!-- 3 cards from DEMOS array, same industry or type, excluding current -->
      </div>
    </section>

  </main>

  <!-- Same footer as main site -->
</body>
</html>
```

---

### 10.5 CSS for demos pages

Add `demos/demo-page.css`:

```css
.demo-page { max-width: 1200px; margin: 0 auto; padding: 100px 32px 80px; }
.demo-breadcrumb { font-size: 13px; color: var(--text-2); margin-bottom: 32px; }
.demo-breadcrumb a { color: var(--accent); }
.demo-page-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
.demo-page-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px; }
.demo-page-headline { font-family: var(--font-display); font-weight: 800; font-size: clamp(28px, 4vw, 44px); letter-spacing: -0.02em; margin-bottom: 16px; }
.demo-page-desc { font-size: 17px; color: var(--text-2); line-height: 1.6; margin-bottom: 32px; }
.demo-page-section { margin-bottom: 28px; }
.demo-page-section h3 { font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-2); margin-bottom: 12px; }
.for-whom-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.for-whom-list li::before { content: "→ "; color: var(--accent); font-weight: 600; }
.features-list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 8px 16px; }
.features-list li::before { content: "✓ "; color: var(--accent); font-weight: 700; }
.demo-page-meta { display: flex; flex-direction: column; gap: 12px; padding: 24px; background: var(--surface-2); border-radius: 16px; margin-bottom: 28px; }
.meta-item { display: flex; align-items: center; gap: 12px; font-size: 15px; }
.meta-label { color: var(--text-2); flex: 1; }
.meta-value { font-weight: 600; }
.demo-page-ctas { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
.demo-page-ctas .btn { justify-content: center; text-align: center; }
.btn-disabled { opacity: 0.4; cursor: not-allowed; background: var(--border); color: var(--text-2); }
.demo-share { display: flex; align-items: center; gap: 12px; font-size: 13px; color: var(--text-2); }
.copy-link-btn { padding: 6px 12px; border: 1px solid var(--border); border-radius: 6px; font-size: 12px; cursor: pointer; transition: all 180ms; }
.copy-link-btn:hover { border-color: var(--accent); color: var(--accent); }
.demo-preview-frame { border-radius: 16px; overflow: hidden; border: 1px solid var(--border); background: var(--surface-2); aspect-ratio: 4/3; position: relative; box-shadow: var(--shadow-lg); }
.demo-iframe { width: 100%; height: 100%; border: none; }
.demo-soon-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: linear-gradient(135deg, var(--surface-1) 0%, #0D1F3C 100%); }
.demo-soon-emoji { font-size: 72px; }
.demo-soon-text { font-family: var(--font-display); font-weight: 800; font-size: 24px; color: white; }
.demo-soon-sub { font-size: 14px; color: rgba(255,255,255,0.5); }
.demo-open-full { display: inline-flex; align-items: center; gap: 6px; margin-top: 12px; font-size: 13px; color: var(--accent); }
.demo-related { margin-top: 80px; padding-top: 60px; border-top: 1px solid var(--border); }
.demo-related h2 { font-family: var(--font-display); font-weight: 800; font-size: 28px; margin-bottom: 32px; }
.demo-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

@media (max-width: 900px) {
  .demo-page-grid { grid-template-columns: 1fr; }
  .demo-page-right { order: -1; }
  .features-list { grid-template-columns: 1fr; }
  .demo-related-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .demo-related-grid { grid-template-columns: 1fr; }
}
```

---

### 10.6 Filter JS for demos.html

```javascript
function initDemosFilter() {
  const cards = document.querySelectorAll('.demo-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!cards.length) return;

  let activeFilters = { type: 'all', subtype: 'all', industry: 'all', budget: 'all' };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      const value = btn.dataset.value;

      // Toggle active in group
      document.querySelectorAll(`.filter-btn[data-group="${group}"]`)
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilters[group] = value;

      // Show/hide subtype filters
      if (group === 'type') {
        const subtypeRow = document.querySelector('.filter-group-subtype');
        if (subtypeRow) {
          subtypeRow.style.display = value === 'web' ? 'flex' : 'none';
        }
      }

      // Filter cards
      cards.forEach(card => {
        const matchType = activeFilters.type === 'all' || card.dataset.type === activeFilters.type;
        const matchSubtype = activeFilters.subtype === 'all' || card.dataset.subtype === activeFilters.subtype;
        const matchIndustry = activeFilters.industry === 'all' || card.dataset.industry === activeFilters.industry;
        const matchBudget = activeFilters.budget === 'all' || card.dataset.budget === activeFilters.budget;
        card.style.display = (matchType && matchSubtype && matchIndustry && matchBudget) ? '' : 'none';
      });
    });
  });
}
```

