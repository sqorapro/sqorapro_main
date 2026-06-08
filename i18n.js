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
      cta_primary: "Let's Talk →",
      cta_secondary: "View Our Work",
      trusted: "TRUSTED EXPERIENCE WITH",
      card1_desc: "Marketing sites, SaaS dashboards and production apps — sharp UX, scalable architecture, fast delivery.",
      card2_desc: "Native iOS and Android apps built for real release cycles — no cross-platform shortcuts.",
      card3_desc: "Bots, Mini Apps and CRM integrations for teams already living inside Telegram.",
      card4_desc: "A clickable, investor-ready MVP in 5 working days — AI-assisted, production-quality."
    },
    demos_block: {
      eyebrow: "LIVE DEMOS",
      headline: "See what we've already built",
      text: "Ready-made sites, landing pages, Telegram bots and Mini Apps across industries — open the catalog and order a similar project for your business.",
      cta: "Open demo catalog →",
      stat1: "10+", stat1l: "live demos",
      stat2: "5 days", stat2l: "to an MVP"
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
      stat1_note: "EBRD & UNESCO",
      stat2_label: "SaaS products live",
      stat3_label: "Mobile apps tested",
      funded: "funded by"
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
      fit: "Complexity",
      send: "Send Brief",
      analysing: "Analysing…",
      timeline_label: "Timeline",
      fit_label: "Complexity"
    },
    work: {
      eyebrow: "CASE STUDY",
      case_sub: "An EBRD-supported business school moved 153 mentors and 1,335 participants from Excel to Telegram — in 4 weeks",
      case_tag1: "Web Dashboard",
      case_tag2: "Telegram Bot",
      case_tag3: "EdTech",
      case_tag4: "EBRD-supported",
      m1_val: "1,335",
      m1_label: "mentees enrolled",
      m2_label: "mentors connected",
      m3_label: "vs Western SaaS",
      m4_label: "to log activity",
      quote: "The team leader used to spend hours collecting data from 14 mentors. Now the system does it automatically.",
      demo: "View Live Demo →",
      dash_title: "Mentor Ops",
      dash_synced: "96% synced",
      dash_mentors: "153 mentors",
      dash_mentees: "1,335 mentees",
      dash_report: "30 sec report",
      dash_col1: "MENTOR",
      dash_col2: "REGION",
      dash_col3: "STATUS",
      dash_almaty: "Almaty",
      dash_astana: "Astana",
      dash_shymkent: "Shymkent",
      dash_karaganda: "Karaganda",
      dash_active: "Active",
      dash_matched: "Matched",
      dash_review: "Review",
      feed1: "Telegram report synced",
      feed2: "Mentor pair updated",
      feed3: "Dashboard refreshed"
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
      q1_text: "\u201cBefore the system, community leaders manually gathered data from their mentors and transferred it into spreadsheets. Now mentors log their own activity via Telegram bot, and we see the picture across the entire programme in real time.\u201d",
      q1_name: "Elnura K.",
      q1_role: "Programme Director, Eurasian School of Business and Entrepreneurship",
      q2_text: "\u201cThe project required building a structured database of intangible cultural heritage objects linked to an interactive map of Kazakhstan. The team built the web platform from scratch \u2014 from database architecture to hosting and domain localisation \u2014 within the UNESCO timeline and spec.\u201d",
      q2_name: "Vasily Sh.",
      q2_role: "Director, Allmax Ok",
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
      skidqi_desc: "Classifieds board with discounts and deals in Kazakhstan.",
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
      f_contact: "Email or Phone",
      f_contact_ph: "email@example.com or +7...",
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
      f_consent: "I agree to the <a href=\"legal/terms.html\" target=\"_blank\">Terms of Service</a>, <a href=\"legal/privacy-policy.html\" target=\"_blank\">Privacy Policy</a>, <a href=\"legal/cookie-policy.html\" target=\"_blank\">Cookie Policy</a> and give <a href=\"legal/data-consent.html\" target=\"_blank\">consent to data processing</a>.",
      f_submit: "Send it →",
      f_validation: "Please fill in name and contact",
      f_consent_required: "Please tick the consent box to continue.",
      f_error: "Couldn't send your request. Please email us directly: info@sqorapro.com",
      f_sending: "Sending…",
      success_title: "Request sent!",
      success_sub: "Thank you — we'll get back to you within 2 hours."
    },
    footer: {
      kind: "Digital Product Studio · Almaty, Kazakhstan",
      nav_title: "Navigation",
      contact_title: "Contact",
      l_privacy: "Privacy Policy",
      l_data: "Data Consent",
      l_cookie: "Cookie Policy",
      l_terms: "Terms of Service",
      legal_note: "Legal documents generated by",
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
      sub: "Создаём цифровые продукты для стартапов и растущих компаний — от идеи до релиза.",
      cta_primary: "Обсудить проект →",
      cta_secondary: "Смотреть работы",
      trusted: "НАМ ДОВЕРЯЮТ",
      card1_desc: "Корпоративные сайты, SaaS-дашборды и веб-приложения — продуманный UX, масштабируемая архитектура.",
      card2_desc: "Нативные приложения для iOS и Android — полноценная мобильная разработка без компромиссов.",
      card3_desc: "Боты, Mini Apps и интеграции с CRM для команд, которые уже работают в Telegram.",
      card4_desc: "Кликабельный MVP за 5 рабочих дней — с помощью ИИ, готовый показать инвесторам."
    },
    demos_block: {
      eyebrow: "ЖИВЫЕ ДЕМО",
      headline: "Посмотрите, что мы уже построили",
      text: "Готовые сайты, лендинги, Telegram-боты и Mini Apps по разным отраслям — откройте каталог и закажите похожий проект для своего бизнеса.",
      cta: "Открыть каталог демо →",
      stat1: "10+", stat1l: "живых демо",
      stat2: "5 дней", stat2l: "до MVP"
    },
    showreel: {
      eyebrow: "НАШИ ВОЗМОЖНОСТИ",
      headline: "Каждый блок — работающий продукт, а не иллюстрация.",
      sub: "Никакой декоративной анимации ради эффекта. Только интерфейсы, которые клиент сразу видит в своём бизнесе.",
      card1_title: "Интерактивные системы",
      card1_desc: "Дашборды, рабочие процессы и операционные инструменты — функциональные продукты, а не таблицы.",
      card2_title: "ИИ в продукте",
      card2_desc: "Умный приём заявок, скоринг, анализ и автоматизация следующих шагов — без ручной работы.",
      card3_title: "Единый стиль везде",
      card3_desc: "Веб, мобильные приложения, Telegram и админ-панели — всё в одном продуктовом языке.",
      card4_title: "Скорость без потери качества",
      card4_desc: "Быстрые прототипы, которые выглядят дорого — даже при ограниченном бюджете."
    },
    proof: {
      eyebrow: "ОПЫТ КОМАНДЫ",
      stat1_label: "Корпоративных проекта",
      stat1_note: "ЕБРР и ЮНЕСКО",
      stat2_label: "Собственных SaaS-продукта",
      stat3_label: "Протестировано приложений",
      funded: "при финансировании"
    },
    services: {
      eyebrow: "УСЛУГИ",
      headline: "Продукты, которые работают с первого запуска.",
      sub: "Полный цикл разработки — от идеи до релиза. Веб, мобильные приложения, Telegram и всё между ними.",
      s1_name: "Веб-разработка",
      s1_desc: "Корпоративные сайты, лендинги, SaaS-дашборды и веб-приложения с продуманным UX и масштабируемой архитектурой.",
      s2_name: "Мобильные приложения",
      s2_desc: "Нативные приложения для iOS и Android — не кросс-платформенные компромиссы, а полноценная мобильная разработка.",
      s3_name: "Telegram-боты и Mini Apps",
      s3_desc: "Автоматизация бизнес-процессов там, где уже находится ваша аудитория. Боты, Mini Apps, интеграции с CRM.",
      s4_name: "MVP за 5 дней",
      s4_desc: "Есть идея? Соберём кликабельный MVP за 5 рабочих дней — уже в пятницу покажете инвесторам или первым клиентам."
    },
    aibrief: {
      eyebrow: "ИИ-БРИФ",
      headline: "Опишите задачу — получите готовый план.",
      sub: "Расскажите об идее своими словами. За 30 секунд вы получите оценку сроков и первый набросок объёма работ.",
      input_label: "Что будем делать?",
      placeholder: "Опишите задачу… Например: нужен Telegram-бот для записи клиентов, интеграция с CRM, запуск через месяц.",
      chip1: "Веб-сайт",
      chip2: "Мобильное приложение",
      chip3: "Telegram-бот",
      chip4: "MVP",
      analyst: "ИИ-аналитик",
      fit: "Сложность",
      send: "Отправить бриф",
      analysing: "Анализируем…",
      timeline_label: "Срок",
      fit_label: "Сложность"
    },
    work: {
      eyebrow: "КЕЙС",
      case_sub: "Образовательная программа при поддержке ЕБРР перевела 153 ментора и 1 335 участников из Excel в Telegram — за 4 недели",
      case_tag1: "Веб-дашборд",
      case_tag2: "Telegram-бот",
      case_tag3: "EdTech",
      case_tag4: "При поддержке ЕБРР",
      m1_val: "1 335",
      m1_label: "участников в системе",
      m2_label: "ментора подключено",
      m3_label: "дешевле западных аналогов",
      m4_label: "внести активность",
      quote: "Раньше лидер команды тратил часы на сбор данных от 14 менторов. Теперь система делает это сама.",
      demo: "Открыть демо →",
      dash_title: "Система менторов",
      dash_synced: "96% синхронизировано",
      dash_mentors: "153 ментора",
      dash_mentees: "1 335 участников",
      dash_report: "отчёт за 30 сек",
      dash_col1: "МЕНТОР",
      dash_col2: "РЕГИОН",
      dash_col3: "СТАТУС",
      dash_almaty: "Алматы",
      dash_astana: "Астана",
      dash_shymkent: "Шымкент",
      dash_karaganda: "Қарағанды",
      dash_active: "Активен",
      dash_matched: "В паре",
      dash_review: "На проверке",
      feed1: "Отчёт отправлен в Telegram",
      feed2: "Пара менторов обновлена",
      feed3: "Дашборд обновлён"
    },
    process: {
      eyebrow: "КАК МЫ РАБОТАЕМ",
      headline: "Быстро — потому что структура. Надёжно — потому что опыт.",
      s1_title: "Погружение",
      s1_desc: "Разбираемся в задаче, аудитории и ограничениях. Формулируем, что именно и зачем мы строим.",
      s2_title: "Коммерческое предложение",
      s2_desc: "Вы получаете чёткое предложение: состав работ, стоимость, сроки и риски.",
      s3_title: "Дизайн и прототип",
      s3_desc: "Показываем, как будет выглядеть продукт, до того как написана основная часть кода.",
      s4_title: "Разработка",
      s4_desc: "Еженедельные демо, короткие итерации, никаких сюрпризов в финале. Всегда понятно, что сделано и что дальше.",
      s5_title: "Запуск и поддержка",
      s5_desc: "Релизим и остаёмся на связи. 30 дней поддержки включены в каждый проект.",
      note: "Управляющий директор отвечает на каждый запрос в течение 2 часов →"
    },
    testimonials: {
      eyebrow: "ОТЗЫВЫ",
      headline: "Клиенты ценят предсказуемость.",
      pause: "Пауза",
      play: "Воспроизвести",
      q1_text: "«До внедрения системы лидеры каждого сообщества вручную собирали данные от своих менторов и переносили их в таблицы. Теперь менторы сами фиксируют активность через Telegram-бот, а мы видим картину по всей программе в реальном времени.»",
      q1_name: "Эльнура К.",
      q1_role: "Директор программы, Евразийская школа бизнеса и предпринимательства",
      q2_text: "«Проект требовал создания структурированной базы данных по объектам нематериального культурного наследия с привязкой к интерактивной карте Казахстана. Команда реализовала веб-платформу с нуля — от архитектуры базы данных до хостинга и локализации домена — в рамках сроков и ТЗ ЮНЕСКО.»",
      q2_name: "Василий Ш.",
      q2_role: "Директор, Allmax Ok",
      p2_quote: "Это место зарезервировано под следующий отзыв клиента.",
      p3_quote: "Здесь появится настоящая цитата после завершения следующего проекта.",
      p4_quote: "Четвёртый слот — реальный отзыв добавим после сдачи проекта.",
      p_name: "Будущий клиент",
      p_role: "Скоро объявим"
    },
    products: {
      eyebrow: "СОБСТВЕННЫЕ ПРОДУКТЫ",
      headline: "Мы сами строим продукты — и понимаем, как это работает изнутри.",
      sub: "Поэтому знаем боли вашего бизнеса лучше, чем студия, которая только рисует макеты.",
      cheqon_desc: "Сервис для выставления счетов и актов — для фрилансеров и малого бизнеса в Казахстане.",
      leqalo_desc: "5 обязательных юридических документов для сайта — генерируются за 2 минуты.",
      skidqi_desc: "Доска объявлений со скидками в Казахстане.",
      runqit_desc: "Маркетинговые планы для малого бизнеса на основе ИИ.",
      live: "Работает",
      soon: "Скоро"
    },
    team: {
      eyebrow: "КОМАНДА",
      headline: "Небольшая команда senior-уровня. Работаете напрямую с нами.",
      sub: "Никаких менеджеров-посредников. Вы общаетесь напрямую с людьми, которые делают ваш продукт.",
      r1_name: "Сооснователь и управляющий директор",
      r1_tags: "PhD · Эксперт ЮНЕСКО · Бизнес-стратегия · 25 лет",
      r1_bio: "Кандидат наук, эксперт ЮНЕСКО, директор школы и предприниматель с 20-летним опытом в высшей школе. Ведёт переговоры с клиентами и определяет стратегию каждого проекта.",
      r2_name: "Сооснователь и руководитель мобильной разработки",
      r2_tags: "Swift · Kotlin · iOS и Android · 12+ лет",
      r2_bio: "Более 12 лет нативной разработки под iOS и Android. Среди запущенных приложений — ФК Кайрат, Тулпар-Карт, Gamisoft и ряд других.",
      r3_name: "Backend-инженер",
      r3_tags: "Node.js · PostgreSQL · API · 10+ лет",
      r3_bio: "Более 10 лет в бэкенд-разработке. Берётся за нетривиальные задачи и проектирует системы, которые работают годами без сбоев.",
      r4_name: "Веб-разработчик и специалист по ИИ",
      r4_tags: "React · Telegram-боты · MVP · 18+ лет",
      r4_bio: "Более 18 лет в веб-разработке. Собирает MVP, боты и веб-приложения с использованием ИИ-инструментов — результат за дни, а не месяцы."
    },
    contact: {
      eyebrow: "КОНТАКТЫ",
      headline1: "Есть идея?",
      headline2: "Давайте воплотим её.",
      promise1: "Ответим в течение 2 часов",
      promise2: "Бесплатная консультация 30 минут",
      promise3: "Коммерческое предложение за 24 часа",
      address: "Алматы, ул. Чайковского 131",
      telegram_btn: "Написать в Telegram →",
      f_name: "Имя",
      f_name_ph: "Ваше имя",
      f_contact: "Email или Телефон",
      f_contact_ph: "email@example.com или +7...",
      f_type: "Тип проекта",
      f_type_opt1: "Веб-разработка",
      f_type_opt2: "Мобильное приложение",
      f_type_opt3: "Telegram-бот",
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
      f_msg_ph: "Расскажите о задаче, желаемых сроках и что уже сделано.",
      f_consent: "Я соглашаюсь с <a href=\"legal/terms.html\" target=\"_blank\">Пользовательским соглашением</a>, <a href=\"legal/privacy-policy.html\" target=\"_blank\">Политикой конфиденциальности</a>, <a href=\"legal/cookie-policy.html\" target=\"_blank\">Политикой Cookie</a> и даю <a href=\"legal/data-consent.html\" target=\"_blank\">согласие на обработку данных</a>.",
      f_submit: "Отправить →",
      f_validation: "Пожалуйста, заполните имя и контакт",
      f_consent_required: "Пожалуйста, отметьте согласие, чтобы продолжить.",
      f_error: "Не удалось отправить заявку. Напишите нам напрямую: info@sqorapro.com",
      f_sending: "Отправляем…",
      success_title: "Заявка отправлена!",
      success_sub: "Спасибо — мы ответим вам в течение 2 часов."
    },
    footer: {
      kind: "Digital Product Studio · Алматы, Казахстан 🇰🇿",
      nav_title: "Навигация",
      contact_title: "Контакты",
      l_privacy: "Политика конфиденциальности",
      l_data: "Согласие на обработку ПД",
      l_cookie: "Политика Cookie",
      l_terms: "Пользовательское соглашение",
      legal_note: "Юридические документы сгенерированы",
      copy: "© 2026 SQORA PRO. Все права защищены.",
      built: "Сделано с ♥ командой SQORA PRO"
    }
  }
};

let currentLang = (function() {
  try { return localStorage.getItem('sqora_lang') || 'ru'; } catch(e) { return 'ru'; }
})();

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

  // Promise row — has icon images, updated via innerHTML to preserve them
  const promiseIcons = ["icons/lightning.png", "icons/rocket.png", "icons/document.png"];
  const promiseKeys = ["contact.promise1", "contact.promise2", "contact.promise3"];
  document.querySelectorAll(".promise-row span[data-i18n]").forEach((el, i) => {
    const key = el.dataset.i18n;
    const val = lookupKey(dict, key);
    if (val !== undefined && promiseIcons[i]) {
      el.innerHTML = `<img src="${promiseIcons[i]}" alt="" style="width:20px;height:20px;object-fit:contain;vertical-align:middle;margin-right:6px"> ${val}`;
    }
  });

  // Legal note — HTML content with link, updated via innerHTML
  const legalNoteEl = document.getElementById("legalNote");
  if (legalNoteEl) {
    const noteText = lang === "en" ? "Legal documents generated by" : "Юридические документы сгенерированы";
    legalNoteEl.innerHTML = noteText + ' <a href="https://leqalo.com" target="_blank" rel="noreferrer">Leqalo.com</a>';
  }

  // Consent checkbox — HTML content, updated via innerHTML
  const consentEl = document.getElementById("consentText");
  if (consentEl) {
    if (lang === "en") {
      consentEl.innerHTML = 'I agree to the <a href="legal/terms.html" target="_blank">Terms of Service</a>, <a href="legal/privacy-policy.html" target="_blank">Privacy Policy</a>, <a href="legal/cookie-policy.html" target="_blank">Cookie Policy</a> and give <a href="legal/data-consent.html" target="_blank">consent to data processing</a>.';
    } else {
      consentEl.innerHTML = 'Я соглашаюсь с <a href="legal/terms.html" target="_blank">Пользовательским соглашением</a>, <a href="legal/privacy-policy.html" target="_blank">Политикой конфиденциальности</a>, <a href="legal/cookie-policy.html" target="_blank">Политикой Cookie</a> и даю <a href="legal/data-consent.html" target="_blank">согласие на обработку данных</a>.';
    }
  }

  document.documentElement.lang = lang;
  try { localStorage.setItem('sqora_lang', lang); } catch(e) {}
}

function initLang() {
  document.querySelectorAll(".language-toggle button[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => switchLang(btn.dataset.lang));
  });
  switchLang(currentLang);
}

/* ─────────── Contact form: validation + Telegram send ─────────── */

const CONTACT_API_URL = "https://sqorapro-brief.sqorapros.workers.dev/contact";

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

    const consent = form.querySelector("[name='consent']")?.checked;
    if (!consent) {
      alert(t().f_consent_required);
      const consentLabel = form.querySelector(".consent-label");
      if (consentLabel) {
        consentLabel.classList.add("consent-error");
        setTimeout(() => consentLabel.classList.remove("consent-error"), 2200);
      }
      return;
    }

    const originalLabel = submitBtn.innerHTML;
    submitBtn.textContent = t().f_sending;
    submitBtn.disabled = true;

    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, type, budget, message })
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      form.innerHTML = `
        <div class="form-success">
          <div class="form-success-icon" aria-hidden="true">
            <svg viewBox="0 0 52 52" width="100%" height="100%">
              <circle class="fs-circle" cx="26" cy="26" r="24" fill="none"/>
              <path class="fs-check" fill="none" d="M14 27 l8 8 l16 -18"/>
            </svg>
          </div>
          <div class="form-success-title">${t().success_title}</div>
          <div class="form-success-sub">${t().success_sub}</div>
        </div>`;
    } catch (e) {
      console.error("Contact send failed:", e);
      alert(t().f_error || "Не удалось отправить заявку. Напишите нам напрямую: info@sqorapro.com");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalLabel;
    }
  });
}

/* ─────────── AI Brief: call Claude via window.claude.complete ─────────── */

const BRIEF_API_URL = "https://sqorapro-brief.sqorapros.workers.dev";

async function sendAiBrief(userText, chipLabel, attempt = 1) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(BRIEF_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: userText, type: chipLabel }),
      signal: controller.signal
    });
    clearTimeout(timer);

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `HTTP ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    clearTimeout(timer);
    if (attempt < 3) {
      const output = document.getElementById("aiLines");
      if (output) {
        const msg = currentLang === "ru" ? `Анализируем… (попытка ${attempt + 1})` : `Analysing\u2026 (attempt ${attempt + 1})`;
        output.innerHTML = `<div class="ai-analysing">${msg}</div>`;
      }
      await new Promise((r) => setTimeout(r, 2500));
      return sendAiBrief(userText, chipLabel, attempt + 1);
    }
    throw err;
  }
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
  if (fitEl && result.complexity) {
    fitEl.textContent = `${dict.fit_label}: ${result.complexity}`;
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
    console.warn("AI Brief error:", err);
    if (output) {
      const msg = currentLang === "ru"
        ? "Не удалось получить ответ. Попробуйте ещё раз."
        : "Could not get a response. Please try again.";
      output.innerHTML = `<div class="ai-analysing" style="color:#ff6b6b">${msg}</div>`;
    }
    return;
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
