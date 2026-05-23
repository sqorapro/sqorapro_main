/* SQORA PRO — Live Demos catalog data */

const DEMOS = [
  {
    id: "american-butler",
    status: "live",
    type: "web",
    subtype: "corporate",
    industry: "real-estate",
    budgetKey: "3k",
    budget: "от 400 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "🗽",
    thumb: "demos/thumbs/american-butler.webp",
    liveUrl: "https://premier-usa-living.sqorapros.workers.dev",
    name: { en: "American Butler", ru: "American Butler" },
    industry_label: { en: "Relocation · Concierge · USA", ru: "Релокация · Консьерж · США" },
    headline: {
      en: "Premium concierge & relocation service for Russian-speaking clients in the USA",
      ru: "Премиальный консьерж и сопровождение русскоязычных клиентов в США"
    },
    description: {
      en: "Corporate website for a premium concierge service targeting Russian-speaking clients in Miami, New York and Los Angeles. Covers real estate rental & purchase, relocation, yachts, travel, luxury cars and personal concierge. Dark premium design with gold accents, full Russian-language interface.",
      ru: "Корпоративный сайт премиального агентства для русскоязычных клиентов в США. Охватывает аренду и покупку недвижимости, переезд, яхты, путешествия, авто и личный консьерж в Майами, Нью-Йорке и Лос-Анджелесе. Тёмный премиальный дизайн с золотыми акцентами, полностью на русском языке."
    },
    forWhom: {
      en: [
        "Concierge & lifestyle agencies",
        "Relocation companies targeting CIS clients",
        "Real estate agencies in the USA",
        "Luxury travel & yacht brokers",
        "Immigration & visa consultants"
      ],
      ru: [
        "Консьерж и лайфстайл-агентства",
        "Компании по релокации для клиентов из СНГ",
        "Агентства недвижимости в США",
        "Яхтенные и премиальные тревел-брокеры",
        "Иммиграционные и визовые консультанты"
      ]
    },
    features: {
      en: [
        "Full Russian-language interface",
        "7 service directions: Real Estate, Cars, Yachts, Travel, Relocation, Concierge, Childbirth",
        "Premium dark design with gold typography",
        "City-specific pages: Miami, New York, LA",
        "Consultation request form",
        "Mobile responsive",
        "Fast global CDN delivery"
      ],
      ru: [
        "Полностью русскоязычный интерфейс",
        "7 направлений: Недвижимость, Авто, Яхты, Путешествия, Переезд, Роды, Консьерж",
        "Премиальный тёмный дизайн с золотой типографикой",
        "Отдельные секции под Майами, Нью-Йорк, Лос-Анджелес",
        "Форма заявки на консультацию",
        "Мобильная адаптация",
        "Быстрая загрузка по всему миру"
      ]
    }
  },
  {
    id: "mentor-excellence",
    status: "live",
    type: "telegram",
    subtype: "bot-dashboard",
    industry: "education",
    budgetKey: "5k",
    budget: "от 800 000 ₸",
    timeline: "3–4 weeks",
    stack: ["Node.js", "Grammy", "PostgreSQL", "React"],
    emoji: "🎓",
    liveUrl: "https://mentorbot.ru",
    name: { en: "Mentor Excellence", ru: "Mentor Excellence" },
    industry_label: { en: "Education · Bot + Dashboard", ru: "Образование · Бот + Дашборд" },
    headline: { en: "Mentoring program management system", ru: "Система управления менторинговой программой" },
    description: {
      en: "Full system for managing 1,335 mentees and 153 mentors. Replaced WhatsApp chaos with Telegram bot + web dashboard. Built for EBRD grant project.",
      ru: "Полная система для управления 1335 менти и 153 менторами. Заменила хаос в WhatsApp на Telegram-бота и веб-дашборд. Создана для проекта ЕБРР."
    },
    forWhom: {
      en: ["Business schools & mentoring programs", "HR departments", "NGOs with EBRD/USAID grants", "Corporate training centers"],
      ru: ["Бизнес-школы и менторинговые программы", "HR-отделы с менторингом", "НКО с грантами ЕБРР/USAID", "Корпоративные учебные центры"]
    },
    features: {
      en: ["Web dashboard for admins", "Telegram bot for mentors", "1,335+ participant database", "Weekly auto-reports", "Pair management", "Ratings & activity tracking", "Excel import/export", "Role-based access"],
      ru: ["Веб-дашборд для администраторов", "Telegram-бот для менторов", "База 1335+ участников", "Авто-отчёты каждую неделю", "Управление парами", "Рейтинги и активность", "Импорт/экспорт Excel", "Ролевой доступ"]
    }
  },
  {
    id: "dental-clinic",
    status: "live",
    type: "web",
    subtype: "landing",
    industry: "medical",
    budgetKey: "1k",
    budget: "от 200 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "🦷",
    thumb: "demos/thumbs/dental-clinic.webp",
    liveUrl: "https://premium-landing-showcase.sqorapros.workers.dev",
    name: { en: "Dental Club", ru: "Dental Club" },
    industry_label: { en: "Medical · Premium Dental", ru: "Медицина · Премиум стоматология" },
    headline: {
      en: "Premium dental clinic landing — Hollywood smile by German standards",
      ru: "Лендинг премиальной стоматологии — голливудская улыбка по немецким стандартам"
    },
    description: {
      en: "Premium landing for a private dental clinic in Almaty. 25 years of experience, 10,000+ patients. Warm serif design with gold accents, doctor profiles, full price list, reviews and online booking form. Converts hesitant patients through trust signals and transparent pricing.",
      ru: "Премиальный лендинг частной стоматологии в Алматы. 25 лет опыта, 10 000+ пациентов. Тёплый дизайн с засечками и золотыми акцентами, профили врачей, полный прайс, отзывы и форма онлайн-записи. Закрывает возражения пациента через доверие и прозрачные цены."
    },
    forWhom: {
      en: [
        "Private dental clinics",
        "Multi-specialty medical centers",
        "Implantology & orthopedic practices",
        "Aesthetic dentistry studios",
        "Family dental offices"
      ],
      ru: [
        "Частные стоматологические клиники",
        "Многопрофильные медицинские центры",
        "Кабинеты имплантологии и ортопедии",
        "Студии эстетической стоматологии",
        "Семейные стоматологии"
      ]
    },
    features: {
      en: [
        "Warm premium design — serif fonts, gold accents, cream palette",
        "Doctor profiles with credentials and specializations",
        "Tabbed price list: Therapy · Surgery · Orthopedics",
        "Before/after results gallery",
        "Patient reviews with names and dates",
        "Online booking form with service & time selection",
        "Trust signals: license number, certificates, guarantees",
        "Fully mobile responsive"
      ],
      ru: [
        "Тёплый премиальный дизайн — шрифты с засечками, золото, кремовая палитра",
        "Профили врачей с образованием и специализацией",
        "Прайс с табами: Терапия · Хирургия · Ортопедия",
        "Галерея результатов до/после",
        "Отзывы пациентов с именами и датами",
        "Форма онлайн-записи с выбором услуги и времени",
        "Сигналы доверия: лицензия, сертификаты, гарантии",
        "Полная мобильная адаптация"
      ]
    }
  },
  {
    id: "aurelia-peak",
    status: "live",
    type: "web",
    subtype: "landing",
    industry: "restaurant",
    budgetKey: "3k",
    budget: "от 300 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "🍽️",
    thumb: "demos/thumbs/aurelia-peak.webp",
    liveUrl: "https://aurelia-peak.sqorapros.workers.dev",
    name: { en: "AURELI Restaurant", ru: "Ресторан AURELI" },
    industry_label: { en: "Restaurant · Fine dining · Almaty", ru: "Ресторан · Высокая кухня · Алматы" },
    headline: {
      en: "Fine dining restaurant with panoramic mountain views — Almaty",
      ru: "Ресторан высокой кухни с панорамным видом на горы — Алматы"
    },
    description: {
      en: "Premium landing for AURELI, a fine dining restaurant in Almaty with panoramic mountain views. Full-screen hero with golden hour photography, elegant serif typography, online table reservation, event menu, photo gallery. Designed to evoke emotion and pre-sell the experience before the guest arrives.",
      ru: "Премиальный лендинг ресторана AURELI в Алматы с панорамным видом на горы. Полноэкранный hero с золотым закатом, элегантная засечковая типографика, онлайн-бронирование стола, меню мероприятий, фотогалерея. Дизайн передаёт атмосферу и продаёт ощущение ещё до прихода гостя."
    },
    forWhom: {
      en: [
        "Premium restaurants & fine dining",
        "Rooftop & view restaurants",
        "Event venues & banquet halls",
        "Wine bars & gastro-pubs",
        "Catering companies"
      ],
      ru: [
        "Премиальные рестораны и fine dining",
        "Рестораны с видом и на крыше",
        "Банкетные залы и event-площадки",
        "Винные бары и гастропабы",
        "Кейтеринговые компании"
      ]
    },
    features: {
      en: [
        "Full-screen hero with golden-hour mountain photography",
        "Elegant serif typography (Cormorant Garamond style)",
        "Online table reservation form",
        "Menu sections with photos",
        "Events & private dining section",
        "Atmospheric photo gallery",
        "RU/EN language switcher",
        "Fully mobile responsive"
      ],
      ru: [
        "Полноэкранный hero с атмосферной горной фотографией",
        "Элегантная засечковая типографика",
        "Форма онлайн-бронирования стола",
        "Разделы меню с фотографиями",
        "Секция мероприятий и приватных вечеров",
        "Атмосферная фотогалерея",
        "Переключатель языков RU/EN",
        "Полная мобильная адаптация"
      ]
    }
  },
  {
    id: "tg-miniapp",
    status: "live",
    type: "miniapp",
    subtype: "booking",
    industry: "beauty",
    budgetKey: "3k",
    budget: "от 400 000 ₸",
    timeline: "2–3 weeks",
    stack: ["React", "Vite", "Telegram WebApp API"],
    emoji: "✂️",
    thumb: "demos/thumbs/tg-miniapp.webp",
    liveUrl: "https://proud-dream-8109.sqorapros.workers.dev",
    name: { en: "Atelier — Booking Mini App", ru: "Atelier — Мини-апп записи" },
    industry_label: { en: "Beauty · Telegram Mini App", ru: "Красота · Telegram Mini App" },
    headline: {
      en: "Telegram Mini App for salon booking — services, masters, schedule",
      ru: "Telegram Mini App для записи в салон — услуги, мастера, расписание"
    },
    description: {
      en: "Full-featured Telegram Mini App for booking beauty salon services. Home screen with services and masters, ratings and reviews, master selection with time slots, cart and booking confirmation — all inside Telegram without leaving the app. Native Telegram UI patterns, push notifications via bot.",
      ru: "Полноценный Telegram Mini App для записи в салон красоты. Главный экран с услугами и мастерами, рейтинги и отзывы, выбор мастера с временными слотами, корзина и подтверждение записи — всё внутри Telegram без выхода из приложения. Нативные паттерны Telegram UI, пуш-уведомления через бота."
    },
    forWhom: {
      en: [
        "Beauty salons & barbershops",
        "Nail & lash studios",
        "Massage & SPA centers",
        "Any service business with masters & time slots",
        "Fitness studios & personal trainers"
      ],
      ru: [
        "Салоны красоты и барбершопы",
        "Ногтевые студии и студии ресниц",
        "Массажные кабинеты и СПА",
        "Любой сервисный бизнес с мастерами и слотами",
        "Фитнес-студии и персональные тренеры"
      ]
    },
    features: {
      en: [
        "Home screen: services grid + masters list",
        "Master profiles with ratings and review count",
        "Time slot picker with calendar",
        "Service cart and booking confirmation",
        "Push notifications via Telegram bot",
        "Telegram native UI — feels like part of the app",
        "Bottom tab navigation",
        "Works on iOS and Android inside Telegram"
      ],
      ru: [
        "Главный экран: сетка услуг + список мастеров",
        "Профили мастеров с рейтингом и числом отзывов",
        "Выбор времени с календарём",
        "Корзина услуг и подтверждение записи",
        "Пуш-уведомления через Telegram-бот",
        "Нативный Telegram UI — ощущается частью приложения",
        "Нижняя навигация с табами",
        "Работает на iOS и Android внутри Telegram"
      ]
    }
  },
  {
    id: "restaurant",
    status: "soon",
    type: "web",
    subtype: "landing",
    industry: "restaurant",
    budgetKey: "1k",
    budget: "от 200 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "🍕",
    liveUrl: "",
    name: { en: "Restaurant & Cafe", ru: "Ресторан и кафе" },
    industry_label: { en: "Food · Landing", ru: "Ресторан · Лендинг" },
    headline: { en: "Restaurant site with menu and reservations", ru: "Сайт ресторана с меню и бронированием" },
    description: {
      en: "Appetizing restaurant website with digital menu, table reservation and delivery info. Optimized for local search.",
      ru: "Аппетитный сайт ресторана с цифровым меню, бронированием столика и информацией о доставке."
    },
    forWhom: {
      en: ["Restaurants & cafes", "Bars & clubs", "Food delivery", "Catering companies"],
      ru: ["Рестораны и кафе", "Бары и клубы", "Службы доставки еды", "Кейтеринговые компании"]
    },
    features: {
      en: ["Digital menu with photos", "Table reservation form", "Delivery info", "Chef & concept section", "Events & specials", "Location & hours"],
      ru: ["Цифровое меню с фото", "Форма бронирования столика", "Информация о доставке", "Раздел о шефе", "События и акции", "Адрес и часы работы"]
    }
  },
  {
    id: "real-estate",
    status: "soon",
    type: "web",
    subtype: "catalog",
    industry: "real-estate",
    budgetKey: "3k",
    budget: "от 400 000 ₸",
    timeline: "2–3 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "🏠",
    liveUrl: "",
    name: { en: "Real Estate Agency", ru: "Агентство недвижимости" },
    industry_label: { en: "Real Estate · Catalog", ru: "Недвижимость · Каталог" },
    headline: { en: "Property catalog with lead capture", ru: "Каталог объектов с захватом лидов" },
    description: {
      en: "Full-featured real estate site with property catalog, filters, map view and CRM-ready lead forms.",
      ru: "Полноценный сайт агентства с каталогом объектов, фильтрами, картой и формами для лидов."
    },
    forWhom: {
      en: ["Real estate agencies", "Property developers", "Individual realtors", "Commercial property"],
      ru: ["Агентства недвижимости", "Застройщики", "Частные риелторы", "Коммерческая недвижимость"]
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
    budgetKey: "1k",
    budget: "от 200 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "💪",
    liveUrl: "",
    name: { en: "Fitness Club", ru: "Фитнес-клуб" },
    industry_label: { en: "Sport · Landing", ru: "Спорт · Лендинг" },
    headline: { en: "Fitness club with schedule and memberships", ru: "Сайт фитнес-клуба с расписанием и абонементами" },
    description: {
      en: "Energetic fitness club website with class schedule, membership plans and trainer profiles.",
      ru: "Энергичный сайт фитнес-клуба с расписанием занятий, тарифами и профилями тренеров."
    },
    forWhom: {
      en: ["Fitness clubs & gyms", "Yoga & pilates studios", "Dance schools", "Sports sections"],
      ru: ["Фитнес-клубы и тренажёрные залы", "Студии йоги и пилатеса", "Школы танцев", "Спортивные секции"]
    },
    features: {
      en: ["Class schedule", "Membership plans", "Trainer profiles", "Online trial signup", "Photo gallery", "Mobile app link"],
      ru: ["Расписание занятий", "Тарифы абонементов", "Профили тренеров", "Запись на пробное", "Фотогалерея", "Ссылка на приложение"]
    }
  },
  {
    id: "law-firm",
    status: "soon",
    type: "web",
    subtype: "corporate",
    industry: "legal",
    budgetKey: "3k",
    budget: "от 300 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "⚖️",
    liveUrl: "",
    name: { en: "Law Firm", ru: "Юридическая фирма" },
    industry_label: { en: "Legal · Corporate", ru: "Юридические услуги · Корпоративный" },
    headline: { en: "Trust-building corporate site for law firm", ru: "Корпоративный сайт юридической фирмы" },
    description: {
      en: "Solid corporate website for law firm. Emphasizes expertise, case history and attorney profiles to build trust.",
      ru: "Солидный корпоративный сайт юридической фирмы. Акцент на экспертизе и профилях адвокатов."
    },
    forWhom: {
      en: ["Law firms & attorneys", "Notaries", "Legal consultants", "Arbitration centers"],
      ru: ["Юридические фирмы и адвокаты", "Нотариусы", "Юридические консультанты", "Арбитражные центры"]
    },
    features: {
      en: ["Practice areas", "Attorney profiles", "Case results", "Consultation form", "Client testimonials", "FAQ section"],
      ru: ["Области практики", "Профили адвокатов", "Результаты дел", "Форма записи", "Отзывы клиентов", "Раздел FAQ"]
    }
  },
  {
    id: "beauty-salon",
    status: "live",
    type: "web",
    subtype: "landing",
    industry: "beauty",
    budgetKey: "1k",
    budget: "от 200 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "💇",
    thumb: "demos/thumbs/beauty-salon.webp",
    liveUrl: "https://noir-beauty-studio.sqorapros.workers.dev",
    name: { en: "NOIR Beauty Studio", ru: "NOIR Beauty Studio" },
    industry_label: { en: "Beauty · Barbershop · Premium", ru: "Красота · Барбершоп · Премиум" },
    headline: {
      en: "Luxury beauty studio & barbershop — editorial design, Almaty",
      ru: "Премиальная бьюти-студия и барбершоп — редакционный дизайн, Алматы"
    },
    description: {
      en: "Premium landing for a high-end beauty studio and barbershop in Almaty. Asymmetric hero, Cormorant Garamond serif typography, matte gold accents on dark. Masters gallery with hover overlays, service menu as restaurant-style list, Masonry reviews, moody bento gallery. Designed to feel like Aesop or Byredo, not a typical beauty template.",
      ru: "Премиальный лендинг бьюти-студии и барбершопа в Алматы. Асимметричный hero, засечковая типографика Cormorant Garamond, матовое золото на тёмном. Галерея мастеров с hover-оверлеями, услуги как меню ресторана, Masonry-отзывы, атмосферная bento-галерея. По ощущению — Aesop или Byredo, а не типичный шаблон."
    },
    forWhom: {
      en: [
        "Premium beauty salons & barbershops",
        "Hair styling & colour studios",
        "Nail & brow studios",
        "SPA & wellness centers",
        "Individual master craftspeople"
      ],
      ru: [
        "Премиальные салоны красоты и барбершопы",
        "Студии окрашивания и стрижки",
        "Ногтевые и бровные студии",
        "СПА и велнес-центры",
        "Частные мастера высокого класса"
      ]
    },
    features: {
      en: [
        "Editorial design — Cormorant Garamond + Jost, matte gold palette",
        "Asymmetric split hero with full-height salon photo",
        "Services as restaurant-style dotted menu list",
        "Masters gallery with staggered heights + hover overlay",
        "Bento mood gallery on dark background",
        "Masonry reviews with gold left border",
        "Minimal booking form — borderless inputs, sharp button",
        "Fully mobile responsive with horizontal scroll on masters"
      ],
      ru: [
        "Редакционный дизайн — Cormorant Garamond + Jost, матовое золото",
        "Асимметричный сплит-hero с полноростовым фото салона",
        "Услуги в стиле ресторанного меню с точками",
        "Галерея мастеров с разной высотой и hover-оверлеем",
        "Bento-галерея атмосферы на тёмном фоне",
        "Masonry-отзывы с золотой левой полосой",
        "Минималистичная форма записи — безрамочные поля, острая кнопка",
        "Полная мобильная адаптация, горизонтальный скролл мастеров"
      ]
    }
  },
  {
    id: "ecommerce-fashion",
    status: "soon",
    type: "web",
    subtype: "ecommerce",
    industry: "retail",
    budgetKey: "5k",
    budget: "от 700 000 ₸",
    timeline: "3–4 weeks",
    stack: ["React", "Vite", "Node.js", "Tailwind CSS"],
    emoji: "👗",
    liveUrl: "",
    name: { en: "Fashion Store", ru: "Магазин одежды" },
    industry_label: { en: "Retail · E-commerce", ru: "Торговля · Интернет-магазин" },
    headline: { en: "Online fashion store with cart and checkout", ru: "Интернет-магазин одежды с корзиной и оплатой" },
    description: {
      en: "Full-featured online store with catalog, filtering, cart, wishlist and payment integration.",
      ru: "Полноценный интернет-магазин с каталогом, фильтрами, корзиной и интеграцией оплаты."
    },
    forWhom: {
      en: ["Clothing & accessories brands", "Boutiques", "Sportswear stores", "Kids clothing"],
      ru: ["Бренды одежды и аксессуаров", "Бутики", "Спортивная одежда", "Детские магазины"]
    },
    features: {
      en: ["Product catalog with filters", "Size guide", "Shopping cart", "Wishlist", "Payment integration", "Order tracking"],
      ru: ["Каталог с фильтрами", "Таблица размеров", "Корзина", "Список желаний", "Интеграция оплаты", "Отслеживание заказа"]
    }
  },
  {
    id: "auto-service",
    status: "soon",
    type: "web",
    subtype: "landing",
    industry: "auto",
    budgetKey: "1k",
    budget: "от 200 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "🔧",
    liveUrl: "",
    name: { en: "Auto Service", ru: "Автосервис" },
    industry_label: { en: "Auto · Landing", ru: "Авто · Лендинг" },
    headline: { en: "Auto service landing with online booking", ru: "Лендинг автосервиса с онлайн-записью" },
    description: {
      en: "Clean auto service website with service list, pricing calculator and online appointment form.",
      ru: "Чистый сайт автосервиса со списком услуг, калькулятором и формой онлайн-записи."
    },
    forWhom: {
      en: ["Auto repair shops", "Car wash & detailing", "Tire service", "Car dealerships"],
      ru: ["Автомастерские", "Автомойки и детейлинг", "Шиномонтаж", "Автосалоны"]
    },
    features: {
      en: ["Services & pricing", "Cost calculator", "Online booking", "Work examples", "Certifications", "Map & contacts"],
      ru: ["Услуги и цены", "Калькулятор стоимости", "Онлайн-запись", "Примеры работ", "Сертификаты", "Карта и контакты"]
    }
  },
  {
    id: "altyn-ascent",
    status: "live",
    type: "web",
    subtype: "landing",
    industry: "sport",
    budgetKey: "3k",
    budget: "от 300 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "🏋️",
    thumb: "demos/thumbs/altyn-ascent.webp",
    liveUrl: "https://altyn-ascent.sqorapros.workers.dev",
    name: { en: "Altyn Athletic", ru: "Altyn Athletic" },
    industry_label: { en: "Sport · Premium Fitness · Astana", ru: "Спорт · Премиум фитнес · Астана" },
    headline: {
      en: "Closed athletic club in the heart of Astana — body as a statement",
      ru: "Закрытый атлетический клуб в центре Астаны — тело как заявление"
    },
    description: {
      en: "Premium landing for an exclusive fitness club in Astana. Six disciplines under one philosophy: strength, functional training, boxing, yoga, group classes and personal training. Minimalist dark design with sharp typography, trainer profiles, membership tiers and group schedule. Designed to feel like a members-only club, not a public gym.",
      ru: "Премиальный лендинг закрытого атлетического клуба в Астане. Шесть дисциплин под одной философией: силовой зал, функциональный тренинг, бокс, йога, групповые классы и персональный тренинг. Минималистичный тёмный дизайн с чёткой типографикой, профили тренеров, форматы членства и расписание групп."
    },
    forWhom: {
      en: [
        "Premium fitness clubs & athletic centers",
        "Boxing & martial arts gyms",
        "Yoga & pilates studios",
        "Personal training studios",
        "CrossFit & functional training boxes"
      ],
      ru: [
        "Премиальные фитнес-клубы и атлетические центры",
        "Залы бокса и единоборств",
        "Студии йоги и пилатеса",
        "Студии персонального тренинга",
        "CrossFit и функциональные тренировки"
      ]
    },
    features: {
      en: [
        "Closed-club premium positioning — 'We don't sell memberships, we build form'",
        "Six discipline sections with descriptions",
        "Trainer profiles with specializations",
        "Three membership tiers: Start / Pro / Elite",
        "Group class schedule",
        "Minimalist dark design with sharp typography",
        "Fully mobile responsive"
      ],
      ru: [
        "Позиционирование закрытого клуба — «Мы не продаём абонементы»",
        "Шесть дисциплин с описаниями",
        "Профили тренеров со специализацией",
        "Три формата членства: Старт / Pro / Elite",
        "Расписание групповых занятий",
        "Минималистичный тёмный дизайн с чёткой типографикой",
        "Полная мобильная адаптация"
      ]
    }
  },
  {
    id: "architectural-serenity",
    status: "live",
    type: "web",
    subtype: "corporate",
    industry: "real-estate",
    budgetKey: "5k",
    budget: "от 500 000 ₸",
    timeline: "2–3 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "🏛️",
    thumb: "demos/thumbs/architectural-serenity.webp",
    liveUrl: "https://architectural-serenity.sqorapros.workers.dev",
    name: { en: "Aralis — Private Real Estate", ru: "Aralis — Частная недвижимость" },
    industry_label: { en: "Real Estate · Private Concierge · Kazakhstan", ru: "Недвижимость · Частный консьерж · Казахстан" },
    headline: {
      en: "Closed collection of residences, penthouses and villas — Kazakhstan & abroad",
      ru: "Закрытая коллекция резиденций, пентхаусов и вилл в Казахстане и за рубежом"
    },
    description: {
      en: "Corporate site for Aralis — a private real estate concierge, not an agency. Closed network of off-market properties: Sky Residence, Villa Alatau, Nurly Tower and others. Architectural expertise, legal protection, full confidentiality. Ultra-premium editorial design — architecture of silence as a metaphor for both property and service.",
      ru: "Корпоративный сайт Aralis — частного консьержа по недвижимости, не агентства. Закрытая сеть объектов вне открытого рынка: Sky Residence, Villa Alatau, Nurly Tower и другие. Архитектурная экспертиза, юридическая защита, полная конфиденциальность. Ультрапремиальный редакционный дизайн — архитектура тишины как метафора."
    },
    forWhom: {
      en: [
        "Luxury real estate agencies & brokers",
        "Private property concierge services",
        "Developers of premium residential complexes",
        "Investment property consultants",
        "Relocation services for HNWI clients"
      ],
      ru: [
        "Агентства элитной недвижимости и брокеры",
        "Частные консьерж-сервисы по недвижимости",
        "Застройщики премиальных жилых комплексов",
        "Консультанты по инвестиционной недвижимости",
        "Релокация для состоятельных клиентов"
      ]
    },
    features: {
      en: [
        "Off-market property positioning — 'objects not in open access'",
        "Property catalog with editorial photography",
        "Four pillars: Closed network · Architectural expertise · Legal protection · Confidentiality",
        "Six-step process: from first visit to keys",
        "Partner profiles with credentials",
        "Geography section: Kazakhstan & international",
        "Ultra-minimal premium design — architecture of silence",
        "Fully mobile responsive"
      ],
      ru: [
        "Позиционирование закрытого рынка — объекты вне открытого доступа",
        "Каталог объектов с редакционной фотографией",
        "Четыре столпа: Закрытая сеть · Экспертиза · Защита · Конфиденциальность",
        "Шесть шагов: от знакомства до ключей",
        "Профили партнёров с регалиями",
        "Раздел географии: Казахстан и международные объекты",
        "Ультраминималистичный премиальный дизайн",
        "Полная мобильная адаптация"
      ]
    }
  },
  {
    id: "golden-ratio-law",
    status: "live",
    type: "web",
    subtype: "corporate",
    industry: "legal",
    budgetKey: "5k",
    budget: "от 500 000 ₸",
    timeline: "2–3 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "⚖️",
    thumb: "demos/thumbs/golden-ratio-law.webp",
    liveUrl: "https://golden-ratio-law.sqorapros.workers.dev",
    name: { en: "ALTAN & Partners", ru: "ALTAN & Partners" },
    industry_label: { en: "Legal · Corporate Law · Kazakhstan", ru: "Юридические услуги · Корпоративное право · Казахстан" },
    headline: {
      en: "International-level law firm — Almaty & Astana",
      ru: "Юридическая фирма международного уровня — Алматы и Астана"
    },
    description: {
      en: "Corporate site for ALTAN & Partners — a Kazakhstan law firm operating across 14 jurisdictions. Nine practice areas: Corporate law, M&A, International tax, Arbitration, Business structuring, Compliance, Litigation, Asset protection, Legal support. Landmark mandates including a USD 340M deal and AIFC restructuring. Ultra-premium editorial design — law as architecture of business.",
      ru: "Корпоративный сайт ALTAN & Partners — казахстанской юридической фирмы в 14 юрисдикциях. Девять практик: корпоративное право, M&A, международное налогообложение, арбитраж, структурирование, compliance, споры, защита активов, сопровождение. Знаковые мандаты включая сделку на 340 млн USD и реструктуризацию в МФЦА. Ультрапремиальный редакционный дизайн — право как архитектура бизнеса."
    },
    forWhom: {
      en: [
        "Law firms & legal partnerships",
        "Corporate attorneys & consultants",
        "Arbitration & litigation practices",
        "Tax advisory firms",
        "Compliance & regulatory consultants"
      ],
      ru: [
        "Юридические фирмы и адвокатские партнёрства",
        "Корпоративные адвокаты и консультанты",
        "Арбитражные и судебные практики",
        "Налоговые консультанты",
        "Compliance и регуляторные консультанты"
      ]
    },
    features: {
      en: [
        "Nine practice areas with detailed descriptions",
        "Landmark mandate showcase with deal sizes",
        "Partner profiles with specializations and credentials",
        "14 jurisdictions geography section",
        "Five-step client process",
        "Industry expertise section",
        "Ultra-premium editorial design — law as architecture",
        "Fully mobile responsive"
      ],
      ru: [
        "Девять практик с подробными описаниями",
        "Витрина знаковых мандатов с объёмами сделок",
        "Профили партнёров со специализацией и регалиями",
        "Раздел географии: 14 юрисдикций",
        "Пять этапов работы с клиентом",
        "Отраслевая экспертиза",
        "Ультрапремиальный редакционный дизайн",
        "Полная мобильная адаптация"
      ]
    }
  },
  {
    id: "studystep-turkey",
    status: "live",
    type: "web",
    subtype: "landing",
    industry: "education",
    budgetKey: "1k",
    budget: "от 200 000 ₸",
    timeline: "1–2 weeks",
    stack: ["React", "Vite", "Tailwind CSS"],
    emoji: "🎓",
    thumb: "demos/thumbs/studystep-turkey.webp",
    liveUrl: "https://studystep-turkey.pages.dev",
    name: { en: "Molodium — Study in Turkey", ru: "Molodium — Учёба в Турции" },
    industry_label: { en: "Education · University admissions", ru: "Образование · Поступление в вузы" },
    headline: {
      en: "Guaranteed university admission in Turkey — official partner",
      ru: "Гарантированное поступление в университеты Турции — официальный партнёр"
    },
    description: {
      en: "Landing for an educational agency helping Russian-speaking students enroll in Turkish universities. 8 years of experience, 500+ successful admissions, 15+ partner universities in Istanbul and Ankara. Admission without exams through official quotas. Bright gradient design, strong trust signals, lead capture form.",
      ru: "Лендинг образовательного агентства, помогающего русскоязычным студентам поступить в турецкие вузы. 8 лет опыта, 500+ зачислений, 15+ университетов-партнёров в Стамбуле и Анкаре. Поступление без экзаменов через официальные квоты. Яркий градиентный дизайн, сильные сигналы доверия, форма захвата лидов."
    },
    forWhom: {
      en: [
        "Educational agencies & study-abroad consultants",
        "University admission services",
        "Language schools with relocation programs",
        "International student recruitment agencies"
      ],
      ru: [
        "Образовательные агентства и консультанты",
        "Службы поступления в зарубежные вузы",
        "Языковые школы с программами релокации",
        "Агентства по набору иностранных студентов"
      ]
    },
    features: {
      en: [
        "Strong trust hero: 100% admission guarantee badge",
        "University catalog with photos and details",
        "Admission process step-by-step section",
        "Cost & scholarship calculator",
        "Student testimonials with photos",
        "Lead capture form — 'Get admission guarantee'",
        "Mobile responsive, fast loading"
      ],
      ru: [
        "Убедительный hero: бейдж 100% гарантии зачисления",
        "Каталог университетов с фото и описанием",
        "Секция процесса поступления по шагам",
        "Калькулятор стоимости и стипендий",
        "Отзывы студентов с фото",
        "Форма лида — 'Получить гарантию поступления'",
        "Мобильная адаптация, быстрая загрузка"
      ]
    }
  }
];

window.DEMOS = DEMOS;
