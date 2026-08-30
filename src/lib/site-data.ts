export const locales = ["en", "tr", "ar"] as const;

export type Locale = (typeof locales)[number];
export type Direction = "ltr" | "rtl";
export type ProjectKind = "concept" | "experiment";

export const localeConfig: Record<
  Locale,
  { label: string; shortLabel: string; direction: Direction; ogLocale: string }
> = {
  en: { label: "English", shortLabel: "EN", direction: "ltr", ogLocale: "en_US" },
  tr: { label: "Türkçe", shortLabel: "TR", direction: "ltr", ogLocale: "tr_TR" },
  ar: { label: "العربية", shortLabel: "ع", direction: "rtl", ogLocale: "ar_SA" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

type NavCopy = {
  work: string;
  services: string;
  studio: string;
  process: string;
  contact: string;
  openMenu: string;
  closeMenu: string;
  skip: string;
};

type ServiceCopy = {
  number: string;
  title: string;
  short: string;
  body: string;
  items: string[];
};

type PrincipleCopy = {
  title: string;
  body: string;
};

type ProcessCopy = {
  number: string;
  title: string;
  body: string;
};

export type SiteCopy = {
  meta: { title: string; description: string };
  nav: NavCopy;
  common: {
    startProject: string;
    selectedWork: string;
    exploreProject: string;
    backToWork: string;
    concept: string;
    experiment: string;
    year: string;
    disciplines: string;
  };
  hero: {
    eyebrow: string;
    lineOne: string;
    lineTwo: string;
    lineThree: string;
    body: string;
    fieldLabel: string;
    fieldHint: string;
    signal: string;
  };
  thesis: {
    eyebrow: string;
    title: string;
    body: string;
    notes: { index: string; title: string; body: string }[];
  };
  work: {
    eyebrow: string;
    title: string;
    body: string;
    honesty: string;
  };
  services: {
    eyebrow: string;
    title: string;
    instruction: string;
    items: ServiceCopy[];
  };
  language: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
  };
  why: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    principles: PrincipleCopy[];
  };
  process: {
    eyebrow: string;
    title: string;
    items: ProcessCopy[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    reassurance: string;
    formTitle: string;
    formIntro: string;
    close: string;
    name: string;
    namePlaceholder: string;
    email: string;
    company: string;
    companyPlaceholder: string;
    projectType: string;
    projectOptions: string[];
    budget: string;
    budgetOptions: string[];
    timeline: string;
    timelinePlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    mailNote: string;
    required: string;
  };
  footer: {
    descriptor: string;
    availability: string;
    localTime: string;
    languageNote: string;
  };
  caseStudy: {
    context: string;
    idea: string;
    system: string;
    build: string;
    note: string;
    nextProject: string;
  };
};

export const copy: Record<Locale, SiteCopy> = {
  en: {
    meta: {
      title: "Zurayq Studios — Creative technology studio",
      description:
        "Independent creative technology studio building custom websites, web applications and interactive digital experiences.",
    },
    nav: {
      work: "Work",
      services: "Services",
      studio: "Studio",
      process: "Process",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skip: "Skip to content",
    },
    common: {
      startProject: "Start a project",
      selectedWork: "See selected work",
      exploreProject: "Explore the project",
      backToWork: "Back to selected work",
      concept: "Concept project",
      experiment: "Studio experiment",
      year: "Year",
      disciplines: "Disciplines",
    },
    hero: {
      eyebrow: "Zurayq Studios / Creative technology",
      lineOne: "Digital things",
      lineTwo: "made",
      lineThree: "specific.",
      body:
        "Websites, web apps and interactive experiences—designed and developed by a small independent studio.",
      fieldLabel: "A live responsive system",
      fieldHint: "Move through the field",
      signal: "Design / Code / Motion / EN · TR · AR",
    },
    thesis: {
      eyebrow: "Design + development, together",
      title: "Small by design. Broad in what we can build.",
      body:
        "We bring interface design, development, motion and creative code into one focused process. The idea and the implementation stay in the same conversation.",
      notes: [
        {
          index: "01",
          title: "Made for the brief",
          body: "The structure starts with your content and goals, not a theme demo.",
        },
        {
          index: "02",
          title: "Built to hold up",
          body: "Responsive, accessible, maintainable and considered past the first screen.",
        },
        {
          index: "03",
          title: "Designed across languages",
          body: "English, Turkish and Arabic—with proper direction and typographic care.",
        },
      ],
    },
    work: {
      eyebrow: "Selected explorations / 2026",
      title: "A few things we’ve been exploring.",
      body:
        "Concepts and experiments are useful while a young portfolio grows—as long as they are shown honestly.",
      honesty: "Every piece below is studio-created and labelled exactly as such.",
    },
    services: {
      eyebrow: "What we do",
      title: "Design is only half the sentence.",
      instruction: "Choose an area",
      items: [
        {
          number: "01",
          title: "Websites",
          short: "Sites with a point of view.",
          body:
            "Custom marketing, hospitality, restaurant, portfolio and campaign sites—designed around the job, not a preselected theme.",
          items: ["Responsive design", "Content systems", "SEO foundations", "Multilingual builds"],
        },
        {
          number: "02",
          title: "Web applications",
          short: "Useful systems, clearly made.",
          body:
            "Portals, booking systems, dashboards and internal tools for projects that need to do more than explain a business.",
          items: ["Product design", "Customer portals", "Admin tools", "Custom workflows"],
        },
        {
          number: "03",
          title: "Creative development",
          short: "Where the browser joins the idea.",
          body:
            "Interactive storytelling, canvas experiences, unusual navigation and the small details that make an interface feel alive.",
          items: ["Creative coding", "Interaction systems", "Canvas", "Advanced motion"],
        },
        {
          number: "04",
          title: "3D + motion",
          short: "Used when it adds something.",
          body:
            "Interactive objects, spatial type, product visuals and motion systems—left alone when the technology does not improve the idea.",
          items: ["WebGL", "Three.js", "Interactive models", "Motion direction"],
        },
      ],
    },
    language: {
      eyebrow: "Multilingual by design",
      title: "The layout should speak the language too.",
      body:
        "English, Turkish and Arabic. Proper direction, typography and layout for each—not just translated words.",
      note: "Try the language switcher. The interface responds with the content.",
    },
    why: {
      eyebrow: "The studio",
      title: "Small on purpose.",
      lead: "Fewer hand-offs. Faster decisions. The people you meet are the people making the work.",
      body:
        "Zurayq is an independent creative technology studio. We care how the first screen feels, how the last form behaves, and everything between.",
      principles: [
        {
          title: "Actually custom",
          body: "The visual system, structure and interactions are shaped around the project.",
        },
        {
          title: "Design + engineering together",
          body: "What it looks like and how it works are considered at the same time.",
        },
        {
          title: "Built for language",
          body: "RTL and multilingual behavior are part of the system from the beginning.",
        },
        {
          title: "Solid underneath",
          body: "Performance, accessibility, SEO and maintainability are part of the work.",
        },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "Four parts. Plenty of conversation.",
      items: [
        {
          number: "01",
          title: "Talk",
          body: "What are we making, who is it for, and what has to work? A rough idea is enough to begin.",
        },
        {
          number: "02",
          title: "Design",
          body: "Structure, type, motion and interface take shape together. We prototype what needs to be felt.",
        },
        {
          number: "03",
          title: "Build",
          body: "We turn the direction into the real thing, testing across devices and refining as we go.",
        },
        {
          number: "04",
          title: "Ship",
          body: "Launch, tune and document. Support can continue afterward when the project needs it.",
        },
      ],
    },
    contact: {
      eyebrow: "Start a project",
      title: "Have something particular in mind? Good.",
      body: "Send the rough version: what you want to make, who it is for and what it needs to do.",
      reassurance: "You do not need to diagnose the project before contacting us.",
      formTitle: "Tell us what you’re building.",
      formIntro: "A few useful details. No strategic-consultation theatre.",
      close: "Close inquiry form",
      name: "Your name",
      namePlaceholder: "How should we address you?",
      email: "Email",
      company: "Company / brand",
      companyPlaceholder: "Optional",
      projectType: "What do you want to build?",
      projectOptions: [
        "Website",
        "Web application",
        "Interactive experience",
        "3D / motion",
        "Existing site redesign",
        "Custom system",
        "Not sure yet",
      ],
      budget: "Budget range",
      budgetOptions: ["Under €1,000", "€1,000–€3,000", "€3,000–€7,500", "€7,500+", "Not sure yet"],
      timeline: "Timeline",
      timelinePlaceholder: "A date, a season, or ‘not sure yet’",
      message: "About the project",
      messagePlaceholder: "What are you making, who is it for, and what should it do?",
      send: "Continue in email",
      mailNote: "This opens your email app. Nothing is sent without you.",
      required: "Required",
    },
    footer: {
      descriptor: "Independent creative technology studio.",
      availability: "Project fit and timing are confirmed directly.",
      localTime: "Working internationally",
      languageNote: "English · Türkçe · العربية",
    },
    caseStudy: {
      context: "Context",
      idea: "The idea",
      system: "The system",
      build: "What we built",
      note: "This is a self-initiated study, not client work. It contains no invented results or business claims.",
      nextProject: "Next exploration",
    },
  },
  tr: {
    meta: {
      title: "Zurayq Studios — Yaratıcı teknoloji stüdyosu",
      description:
        "Özel web siteleri, web uygulamaları ve interaktif dijital deneyimler geliştiren bağımsız yaratıcı teknoloji stüdyosu.",
    },
    nav: {
      work: "İşler",
      services: "Hizmetler",
      studio: "Stüdyo",
      process: "Süreç",
      contact: "İletişim",
      openMenu: "Menüyü aç",
      closeMenu: "Menüyü kapat",
      skip: "İçeriğe geç",
    },
    common: {
      startProject: "Bir proje başlat",
      selectedWork: "Seçili işlere bak",
      exploreProject: "Projeyi incele",
      backToWork: "Seçili işlere dön",
      concept: "Konsept proje",
      experiment: "Stüdyo deneyi",
      year: "Yıl",
      disciplines: "Disiplinler",
    },
    hero: {
      eyebrow: "Zurayq Studios / Yaratıcı teknoloji",
      lineOne: "Dijital işler.",
      lineTwo: "Hazır değil,",
      lineThree: "size özel.",
      body:
        "Web siteleri, web uygulamaları ve interaktif deneyimler—küçük, bağımsız bir stüdyo tarafından tasarlanır ve geliştirilir.",
      fieldLabel: "Canlı ve duyarlı bir sistem",
      fieldHint: "Alan içinde hareket et",
      signal: "Tasarım / Kod / Hareket / EN · TR · AR",
    },
    thesis: {
      eyebrow: "Tasarım + geliştirme, birlikte",
      title: "Bilerek küçük. Üretebildikleri geniş.",
      body:
        "Arayüz tasarımı, geliştirme, hareket ve yaratıcı kodu tek bir odaklı süreçte bir araya getiriyoruz. Fikir ve uygulama aynı konuşmada kalıyor.",
      notes: [
        {
          index: "01",
          title: "İhtiyaca göre",
          body: "Yapı, bir tema demosuyla değil içerik ve hedeflerle başlar.",
        },
        {
          index: "02",
          title: "Uzun ömürlü",
          body: "Duyarlı, erişilebilir, sürdürülebilir ve ilk ekranın ötesi düşünülmüş.",
        },
        {
          index: "03",
          title: "Diller için tasarlanmış",
          body: "İngilizce, Türkçe ve Arapça—doğru yön ve tipografik özenle.",
        },
      ],
    },
    work: {
      eyebrow: "Seçili keşifler / 2026",
      title: "Bir süredir keşfettiğimiz birkaç şey.",
      body: "Konseptler ve deneyler genç bir portföy büyürken değerlidir—dürüstçe sunuldukları sürece.",
      honesty: "Aşağıdaki her iş stüdyoda üretildi ve neyse öyle etiketlendi.",
    },
    services: {
      eyebrow: "Ne yapıyoruz",
      title: "Tasarım, cümlenin yalnızca yarısı.",
      instruction: "Bir alan seç",
      items: [
        {
          number: "01",
          title: "Web siteleri",
          short: "Kendine ait fikri olan siteler.",
          body: "Marka, konaklama, restoran, portföy ve kampanya siteleri—hazır bir temaya değil ihtiyaca göre tasarlanır.",
          items: ["Duyarlı tasarım", "İçerik sistemleri", "SEO temelleri", "Çok dilli yapılar"],
        },
        {
          number: "02",
          title: "Web uygulamaları",
          short: "Açıkça tasarlanmış faydalı sistemler.",
          body: "Bir işi anlatmaktan fazlasını yapması gereken projeler için portallar, rezervasyon sistemleri, paneller ve iç araçlar.",
          items: ["Ürün tasarımı", "Müşteri portalları", "Yönetim araçları", "Özel iş akışları"],
        },
        {
          number: "03",
          title: "Yaratıcı geliştirme",
          short: "Tarayıcının fikre katıldığı yer.",
          body: "İnteraktif hikâye anlatımı, canvas deneyimleri, alışılmadık navigasyon ve bir arayüzü canlı hissettiren detaylar.",
          items: ["Yaratıcı kodlama", "Etkileşim sistemleri", "Canvas", "İleri hareket"],
        },
        {
          number: "04",
          title: "3D + hareket",
          short: "Bir şey kattığında kullanılır.",
          body: "İnteraktif nesneler, mekânsal tipografi, ürün görselleri ve hareket sistemleri—fikri geliştirmiyorsa kullanılmaz.",
          items: ["WebGL", "Three.js", "İnteraktif modeller", "Hareket yönetimi"],
        },
      ],
    },
    language: {
      eyebrow: "Çok dillilik en baştan",
      title: "Sayfa düzeni de dili konuşmalı.",
      body: "İngilizce, Türkçe ve Arapça. Yalnızca çevrilmiş kelimeler değil; her biri için doğru yön, tipografi ve düzen.",
      note: "Dil değiştiriciyi deneyin. Arayüz de içerikle birlikte yanıt verir.",
    },
    why: {
      eyebrow: "Stüdyo",
      title: "Bilerek küçük.",
      lead: "Daha az devir teslim. Daha hızlı kararlar. Tanıştığınız insanlar işi yapan insanlar.",
      body: "Zurayq bağımsız bir yaratıcı teknoloji stüdyosu. İlk ekranın hissini, son formun davranışını ve aradaki her şeyi önemsiyoruz.",
      principles: [
        { title: "Gerçekten özel", body: "Görsel sistem, yapı ve etkileşimler projeye göre şekillenir." },
        { title: "Tasarım + mühendislik", body: "Nasıl göründüğü ve nasıl çalıştığı aynı anda düşünülür." },
        { title: "Diller için hazır", body: "RTL ve çok dilli davranış en baştan sistemin parçasıdır." },
        { title: "Altı sağlam", body: "Performans, erişilebilirlik, SEO ve sürdürülebilirlik işin parçasıdır." },
      ],
    },
    process: {
      eyebrow: "Nasıl çalışıyoruz",
      title: "Dört bölüm. Bolca konuşma.",
      items: [
        { number: "01", title: "Konuş", body: "Ne yapıyoruz, kimin için ve ne çalışmalı? Başlamak için kaba bir fikir yeterli." },
        { number: "02", title: "Tasarla", body: "Yapı, tipografi, hareket ve arayüz birlikte şekillenir. Hissedilmesi gerekeni prototipleriz." },
        { number: "03", title: "Geliştir", body: "Yönü gerçek ürüne çevirir, cihazlarda test eder ve ilerledikçe iyileştiririz." },
        { number: "04", title: "Yayınla", body: "Yayınlar, optimize eder ve belgeleriz. Gerektiğinde destek devam eder." },
      ],
    },
    contact: {
      eyebrow: "Bir proje başlat",
      title: "Aklınızda belirli bir şey mi var? Güzel.",
      body: "Kaba hâlini gönderin: ne yapmak istiyorsunuz, kimin için ve ne yapması gerekiyor?",
      reassurance: "Bize yazmadan önce projenin hangi hizmete girdiğini çözmeniz gerekmiyor.",
      formTitle: "Ne yaptığınızı anlatın.",
      formIntro: "Birkaç faydalı detay. Kurumsal danışmanlık tiyatrosu yok.",
      close: "Talep formunu kapat",
      name: "Adınız",
      namePlaceholder: "Size nasıl hitap edelim?",
      email: "E-posta",
      company: "Şirket / marka",
      companyPlaceholder: "İsteğe bağlı",
      projectType: "Ne yapmak istiyorsunuz?",
      projectOptions: ["Web sitesi", "Web uygulaması", "İnteraktif deneyim", "3D / hareket", "Mevcut site yenileme", "Özel sistem", "Henüz emin değilim"],
      budget: "Bütçe aralığı",
      budgetOptions: ["€1.000 altı", "€1.000–€3.000", "€3.000–€7.500", "€7.500+", "Henüz emin değilim"],
      timeline: "Zamanlama",
      timelinePlaceholder: "Bir tarih, mevsim veya ‘henüz belli değil’",
      message: "Proje hakkında",
      messagePlaceholder: "Ne yapıyorsunuz, kimin için ve ne yapmalı?",
      send: "E-postada devam et",
      mailNote: "Bu, e-posta uygulamanızı açar. Siz onaylamadan hiçbir şey gönderilmez.",
      required: "Zorunlu",
    },
    footer: {
      descriptor: "Bağımsız yaratıcı teknoloji stüdyosu.",
      availability: "Proje uygunluğu ve zamanlama doğrudan görüşülür.",
      localTime: "Uluslararası çalışıyor",
      languageNote: "English · Türkçe · العربية",
    },
    caseStudy: {
      context: "Bağlam",
      idea: "Fikir",
      system: "Sistem",
      build: "Ne ürettik",
      note: "Bu, müşteri işi değil; stüdyonun kendi başlattığı bir çalışmadır. Uydurma sonuç veya iş iddiası içermez.",
      nextProject: "Sonraki keşif",
    },
  },
  ar: {
    meta: {
      title: "Zurayq Studios — استوديو تقني إبداعي",
      description: "استوديو تقني إبداعي مستقل يصمم مواقع وتطبيقات ويب وتجارب رقمية تفاعلية مخصصة.",
    },
    nav: {
      work: "الأعمال",
      services: "الخدمات",
      studio: "الاستوديو",
      process: "العمل",
      contact: "تواصل",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      skip: "الانتقال إلى المحتوى",
    },
    common: {
      startProject: "ابدأ مشروعاً",
      selectedWork: "شاهد أعمالنا المختارة",
      exploreProject: "استكشف المشروع",
      backToWork: "العودة إلى الأعمال",
      concept: "مشروع تصوّري",
      experiment: "تجربة من الاستوديو",
      year: "السنة",
      disciplines: "المجالات",
    },
    hero: {
      eyebrow: "Zurayq Studios / تقنية إبداعية",
      lineOne: "تجارب رقمية.",
      lineTwo: "ليست جاهزة،",
      lineThree: "بل مخصّصة.",
      body: "مواقع وتطبيقات ويب وتجارب تفاعلية—يصممها ويطوّرها استوديو صغير ومستقل.",
      fieldLabel: "نظام حيّ ومتجاوب",
      fieldHint: "حرّك المؤشر داخل المساحة",
      signal: "تصميم / برمجة / حركة / EN · TR · AR",
    },
    thesis: {
      eyebrow: "التصميم + التطوير، معاً",
      title: "صغير عن قصد. واسع في ما يستطيع بناءه.",
      body: "نجمع تصميم الواجهات والتطوير والحركة والبرمجة الإبداعية في مسار واحد ومركّز. تبقى الفكرة والتنفيذ في الحوار نفسه.",
      notes: [
        { index: "01", title: "مصنوع للمشروع", body: "تبدأ البنية من المحتوى والأهداف، لا من نموذج جاهز." },
        { index: "02", title: "مبني ليستمر", body: "متجاوب، متاح، قابل للصيانة ومدروس إلى ما بعد الشاشة الأولى." },
        { index: "03", title: "مصمم للغات", body: "الإنجليزية والتركية والعربية—باتجاه صحيح وعناية طباعية حقيقية." },
      ],
    },
    work: {
      eyebrow: "استكشافات مختارة / 2026",
      title: "بعض الأشياء التي نستكشفها.",
      body: "تفيد المشاريع التصورية والتجارب أثناء نمو ملف الأعمال—ما دامت تُعرض بوضوح وصدق.",
      honesty: "كل عمل أدناه صُنع داخل الاستوديو وموسوم بحقيقته تماماً.",
    },
    services: {
      eyebrow: "ماذا نفعل",
      title: "التصميم نصف الجملة فقط.",
      instruction: "اختر مجالاً",
      items: [
        {
          number: "01",
          title: "مواقع الويب",
          short: "مواقع لها وجهة نظر.",
          body: "مواقع للعلامات والضيافة والمطاعم والمحافظ والحملات—مصممة للعمل المطلوب، لا لقالب مختار مسبقاً.",
          items: ["تصميم متجاوب", "أنظمة محتوى", "أساسيات SEO", "بناء متعدد اللغات"],
        },
        {
          number: "02",
          title: "تطبيقات الويب",
          short: "أنظمة مفيدة وواضحة.",
          body: "بوابات وأنظمة حجز ولوحات وأدوات داخلية للمشاريع التي تحتاج إلى أكثر من شرح النشاط.",
          items: ["تصميم منتجات", "بوابات عملاء", "أدوات إدارة", "مسارات عمل مخصصة"],
        },
        {
          number: "03",
          title: "التطوير الإبداعي",
          short: "حين يصبح المتصفح جزءاً من الفكرة.",
          body: "سرد تفاعلي وتجارب Canvas وتنقل غير مألوف وتفاصيل صغيرة تمنح الواجهة حياة.",
          items: ["برمجة إبداعية", "أنظمة تفاعل", "Canvas", "حركة متقدمة"],
        },
        {
          number: "04",
          title: "الثلاثي الأبعاد + الحركة",
          short: "نستخدمهما حين يضيفان شيئاً.",
          body: "أجسام تفاعلية وحروف مكانية وصور منتجات وأنظمة حركة—ونترك التقنية حين لا تخدم الفكرة.",
          items: ["WebGL", "Three.js", "نماذج تفاعلية", "إخراج حركي"],
        },
      ],
    },
    language: {
      eyebrow: "تعدد لغات من البداية",
      title: "على التخطيط أن يتحدث اللغة أيضاً.",
      body: "الإنجليزية والتركية والعربية. اتجاه وخط وتخطيط مناسب لكل لغة—لا كلمات مترجمة فقط.",
      note: "جرّب مبدّل اللغة. الواجهة تستجيب مع المحتوى.",
    },
    why: {
      eyebrow: "الاستوديو",
      title: "صغير عن قصد.",
      lead: "تسليمات أقل. قرارات أسرع. من تقابلهم هم من يصنعون العمل.",
      body: "Zurayq استوديو تقني إبداعي مستقل. نهتم بإحساس الشاشة الأولى، وسلوك النموذج الأخير، وكل ما بينهما.",
      principles: [
        { title: "مخصص فعلاً", body: "يتشكل النظام البصري والبنية والتفاعل حول المشروع نفسه." },
        { title: "تصميم + هندسة", body: "نفكر في المظهر وطريقة العمل في الوقت نفسه." },
        { title: "مبني للغات", body: "دعم RTL وتعدد اللغات جزء من النظام منذ البداية." },
        { title: "متين من الداخل", body: "الأداء والإتاحة وSEO وقابلية الصيانة جزء من العمل." },
      ],
    },
    process: {
      eyebrow: "كيف نعمل",
      title: "أربع مراحل. والكثير من الحوار.",
      items: [
        { number: "01", title: "نتحدث", body: "ماذا نبني، ولمن، وما الذي يجب أن يعمل؟ تكفي فكرة أولية للبدء." },
        { number: "02", title: "نصمم", body: "تتشكل البنية والحروف والحركة والواجهة معاً. نصنع نموذجاً لما يجب أن يُختبر بالإحساس." },
        { number: "03", title: "نطوّر", body: "نحوّل الاتجاه إلى تجربة حقيقية، نختبرها على الأجهزة ونحسّنها خلال العمل." },
        { number: "04", title: "نطلق", body: "نطلق ونضبط ونوثّق. ويمكن أن يستمر الدعم حين يحتاجه المشروع." },
      ],
    },
    contact: {
      eyebrow: "ابدأ مشروعاً",
      title: "لديك فكرة محددة؟ ممتاز.",
      body: "أرسل النسخة الأولية: ماذا تريد أن تبني، ولمن، وماذا يجب أن يفعل؟",
      reassurance: "لا تحتاج إلى تشخيص نوع المشروع قبل أن تراسلنا.",
      formTitle: "أخبرنا عمّا تبنيه.",
      formIntro: "بعض التفاصيل المفيدة، من دون مسرح الاستشارات.",
      close: "إغلاق نموذج التواصل",
      name: "الاسم",
      namePlaceholder: "كيف نخاطبك؟",
      email: "البريد الإلكتروني",
      company: "الشركة / العلامة",
      companyPlaceholder: "اختياري",
      projectType: "ماذا تريد أن تبني؟",
      projectOptions: ["موقع ويب", "تطبيق ويب", "تجربة تفاعلية", "3D / حركة", "إعادة تصميم موقع", "نظام مخصص", "لست متأكداً بعد"],
      budget: "نطاق الميزانية",
      budgetOptions: ["أقل من €1,000", "€1,000–€3,000", "€3,000–€7,500", "€7,500+", "لست متأكداً بعد"],
      timeline: "الوقت المتوقع",
      timelinePlaceholder: "تاريخ أو موسم أو «غير محدد بعد»",
      message: "عن المشروع",
      messagePlaceholder: "ماذا تبني، ولمن، وماذا يجب أن يفعل؟",
      send: "المتابعة عبر البريد",
      mailNote: "سيفتح هذا تطبيق البريد لديك. لن يُرسل شيء من دونك.",
      required: "مطلوب",
    },
    footer: {
      descriptor: "استوديو تقني إبداعي مستقل.",
      availability: "نؤكد ملاءمة المشروع والوقت بشكل مباشر.",
      localTime: "نعمل دولياً",
      languageNote: "English · Türkçe · العربية",
    },
    caseStudy: {
      context: "السياق",
      idea: "الفكرة",
      system: "النظام",
      build: "ما بنيناه",
      note: "هذه دراسة بدأها الاستوديو وليست عملاً لعميل. لا تتضمن نتائج أو ادعاءات تجارية مختلقة.",
      nextProject: "الاستكشاف التالي",
    },
  },
};

type LocalizedProjectCopy = {
  title: string;
  descriptor: string;
  summary: string;
  context: string;
  idea: string;
  system: string;
  build: string;
};

export type Project = {
  slug: string;
  kind: ProjectKind;
  year: string;
  visual: "sahra" | "relay" | "form" | "type";
  disciplines: string[];
  copy: Record<Locale, LocalizedProjectCopy>;
};

export const projects: Project[] = [
  {
    slug: "sahra-house",
    kind: "concept",
    year: "2026",
    visual: "sahra",
    disciplines: ["Web design", "Multilingual UX", "Motion"],
    copy: {
      en: {
        title: "Sahra House",
        descriptor: "A fictional coastal stay, told slowly.",
        summary:
          "A multilingual hospitality concept with quiet editorial layouts, an unhurried booking path and Arabic considered from the first grid.",
        context:
          "Sahra House is a fictional retreat created to explore how a small hospitality brand can feel considered without becoming precious or difficult to use.",
        idea:
          "Let the pace of the place shape the pace of the interface. Information remains close, while imagery, type and transitions are given room to breathe.",
        system:
          "A bilingual editorial grid adapts deliberately between Latin and Arabic. Directional elements change; the photography and spatial rhythm do not simply flip.",
        build:
          "A responsive booking path, modular stay pages, motion studies and a content model ready for seasonal stories and multiple languages.",
      },
      tr: {
        title: "Sahra House",
        descriptor: "Yavaş anlatılan hayali bir kıyı konaklaması.",
        summary: "Sakin editoryal düzenler, telaşsız bir rezervasyon yolu ve ilk grid'den itibaren düşünülen Arapça ile çok dilli konaklama konsepti.",
        context: "Sahra House, küçük bir konaklama markasının kullanımı zorlaştırmadan nasıl özenli hissettirebileceğini araştırmak için oluşturulmuş hayali bir inziva yeridir.",
        idea: "Mekânın temposu arayüzün temposunu belirliyor. Bilgi yakın kalırken görsellere, tipografiye ve geçişlere nefes alacak alan veriliyor.",
        system: "İki dilli editoryal grid Latin ve Arapça arasında bilinçli biçimde uyarlanıyor. Yönlü öğeler değişiyor; görseller ve mekânsal ritim körlemesine çevrilmiyor.",
        build: "Duyarlı rezervasyon akışı, modüler konaklama sayfaları, hareket çalışmaları ve mevsimsel hikâyelerle farklı dillere hazır içerik modeli.",
      },
      ar: {
        title: "Sahra House",
        descriptor: "إقامة ساحلية متخيّلة تُروى على مهل.",
        summary: "تصور ضيافة متعدد اللغات بتخطيط تحريري هادئ ومسار حجز بلا استعجال، مع حضور العربية منذ أول شبكة تصميم.",
        context: "Sahra House ملاذ متخيّل أنشأناه لاستكشاف كيف تبدو علامة ضيافة صغيرة ومدروسة من دون أن تصبح متكلفة أو صعبة الاستخدام.",
        idea: "تحدد وتيرة المكان وتيرة الواجهة. تبقى المعلومات قريبة، فيما تحصل الصورة والحروف والانتقالات على مساحة للتنفس.",
        system: "تتكيف شبكة تحريرية ثنائية اللغة بعناية بين اللاتينية والعربية. تتغير العناصر الاتجاهية، ولا تنقلب الصور والإيقاعات المكانية آلياً.",
        build: "مسار حجز متجاوب، صفحات إقامة مرنة، دراسات حركة ونموذج محتوى جاهز للحكايات الموسمية واللغات المتعددة.",
      },
    },
  },
  {
    slug: "relay",
    kind: "concept",
    year: "2026",
    visual: "relay",
    disciplines: ["Product design", "Web application", "Interaction"],
    copy: {
      en: {
        title: "Relay",
        descriptor: "Operations without dashboard soup.",
        summary:
          "A focused operations product for small teams: projects, approvals and live status without turning everyday work into a wall of widgets.",
        context:
          "Relay is a fictional product study for small creative teams whose project status currently lives across messages, spreadsheets and memory.",
        idea:
          "Organize the product around decisions rather than data density. The most important next action should be visible before the reporting layer.",
        system:
          "A compact information model connects work, approvals and owners. Color carries state, but every status also has a clear text and shape treatment.",
        build:
          "Responsive product flows for the daily queue, project detail, approval history and a calmer management overview.",
      },
      tr: {
        title: "Relay",
        descriptor: "Panel karmaşası olmadan operasyon.",
        summary: "Küçük ekipler için odaklı operasyon ürünü: günlük işi widget duvarına çevirmeden projeler, onaylar ve canlı durum.",
        context: "Relay, proje durumu mesajlar, tablolar ve hafıza arasında kalan küçük yaratıcı ekipler için hazırlanmış hayali bir ürün çalışmasıdır.",
        idea: "Ürünü veri yoğunluğu yerine kararlar etrafında düzenlemek. En önemli sonraki eylem, raporlama katmanından önce görünür olmalı.",
        system: "Kompakt bilgi modeli işleri, onayları ve sorumluları birbirine bağlıyor. Renk durumu taşıyor, ancak her durumun açık metin ve biçim karşılığı da var.",
        build: "Günlük sıra, proje detayı, onay geçmişi ve daha sakin bir yönetim görünümü için duyarlı ürün akışları.",
      },
      ar: {
        title: "Relay",
        descriptor: "إدارة العمل من دون حساء لوحات التحكم.",
        summary: "منتج عمليات مركّز للفرق الصغيرة: مشاريع وموافقات وحالة مباشرة، من دون تحويل العمل اليومي إلى جدار من الأدوات.",
        context: "Relay دراسة لمنتج متخيّل موجه لفرق إبداعية صغيرة تتوزع حالة مشاريعها بين الرسائل والجداول والذاكرة.",
        idea: "تنظيم المنتج حول القرارات لا كثافة البيانات. يجب أن يظهر الإجراء التالي الأهم قبل طبقة التقارير.",
        system: "نموذج معلومات مدمج يصل العمل بالموافقات والمسؤولين. ينقل اللون الحالة، لكن لكل حالة أيضاً نص وشكل واضحان.",
        build: "مسارات متجاوبة لقائمة اليوم وتفاصيل المشروع وسجل الموافقات ونظرة إدارة أكثر هدوءاً.",
      },
    },
  },
  {
    slug: "form-index",
    kind: "concept",
    year: "2026",
    visual: "form",
    disciplines: ["Creative direction", "Website", "Content system"],
    copy: {
      en: {
        title: "Form Index",
        descriptor: "An architecture archive with room to think.",
        summary:
          "An editorial archive for a fictional architecture practice—built to explore projects, materials and ideas without flattening them into identical cards.",
        context:
          "Form Index asks how an architecture practice can document years of work without reducing every project to the same thumbnail and paragraph.",
        idea:
          "Treat the archive as a working index. Projects can be entered through place, material, scale or idea instead of one fixed chronology.",
        system:
          "A modular typographic grid supports long-form reading, quick filtering and expressive project openings while sharing one structured content model.",
        build:
          "An adaptive archive, project narratives, material cross-links and a restrained motion language based on plans opening and closing.",
      },
      tr: {
        title: "Form Index",
        descriptor: "Düşünmek için alan bırakan mimarlık arşivi.",
        summary: "Hayali bir mimarlık pratiği için; projeleri, malzemeleri ve fikirleri aynı kartlara sıkıştırmadan keşfetmeye yönelik editoryal arşiv.",
        context: "Form Index, bir mimarlık pratiğinin yıllar süren işlerini her projeyi aynı küçük görsel ve paragrafa indirgemeden nasıl belgeleyebileceğini soruyor.",
        idea: "Arşivi çalışan bir indeks gibi ele almak. Projelere tek bir kronoloji yerine yer, malzeme, ölçek veya fikir üzerinden girilebiliyor.",
        system: "Modüler tipografik grid, tek bir yapılı içerik modeliyle uzun okuma, hızlı filtreleme ve etkileyici proje açılışlarını destekliyor.",
        build: "Uyarlanabilir arşiv, proje anlatıları, malzeme bağlantıları ve planların açılıp kapanmasından türeyen ölçülü hareket dili.",
      },
      ar: {
        title: "Form Index",
        descriptor: "أرشيف معماري يترك مساحة للتفكير.",
        summary: "أرشيف تحريري لمكتب عمارة متخيّل، لاستكشاف المشاريع والمواد والأفكار من دون تسطيحها في بطاقات متطابقة.",
        context: "يسأل Form Index كيف يمكن لمكتب معماري أن يوثق سنوات من العمل من دون اختزال كل مشروع في صورة صغيرة وفقرة متشابهة.",
        idea: "معاملة الأرشيف كفهرس حي. يمكن دخول المشاريع عبر المكان أو المادة أو المقياس أو الفكرة بدلاً من ترتيب زمني واحد.",
        system: "شبكة حروف مرنة تدعم القراءة الطويلة والتصفية السريعة وافتتاحيات المشاريع التعبيرية ضمن نموذج محتوى منظم واحد.",
        build: "أرشيف متكيف، سرد للمشاريع، روابط بين المواد ولغة حركة هادئة مستوحاة من فتح المخططات وإغلاقها.",
      },
    },
  },
  {
    slug: "type-space",
    kind: "experiment",
    year: "2026",
    visual: "type",
    disciplines: ["Creative development", "WebGL study", "Motion"],
    copy: {
      en: {
        title: "Type / Space",
        descriptor: "Where an interface becomes an environment.",
        summary:
          "A browser-based study in spatial typography, light and movement—made to test where an interface ends and an environment begins.",
        context:
          "Type / Space is a self-initiated technical experiment. It has no fictional brand or business objective hiding behind it.",
        idea:
          "Use words as architecture. Reading becomes movement through scale, depth and light, while navigation stays predictable and keyboard accessible.",
        system:
          "A small set of spatial rules composes type in layers. Input changes perspective gently; reduced-motion and lower-power devices receive a flat graphic state.",
        build:
          "A performance-minded WebGL sketch, DOM-based accessible navigation and a static fallback that preserves the same composition.",
      },
      tr: {
        title: "Type / Space",
        descriptor: "Arayüzün ortama dönüştüğü yer.",
        summary: "Arayüzün nerede bitip ortamın nerede başladığını sınamak için üretilen mekânsal tipografi, ışık ve hareket çalışması.",
        context: "Type / Space stüdyonun başlattığı teknik bir deneydir. Arkasında hayali bir marka veya iş hedefi yoktur.",
        idea: "Kelimeleri mimari gibi kullanmak. Okuma; ölçek, derinlik ve ışık içinde harekete dönüşürken navigasyon tanıdık ve klavyeyle erişilebilir kalıyor.",
        system: "Küçük bir mekânsal kural seti tipografiyi katmanlar hâlinde kuruyor. Girdi perspektifi hafifçe değiştiriyor; azaltılmış hareket ve düşük güçlü cihazlar düz grafik durumunu alıyor.",
        build: "Performans odaklı WebGL eskizi, DOM tabanlı erişilebilir navigasyon ve aynı kompozisyonu koruyan statik yedek görünüm.",
      },
      ar: {
        title: "Type / Space",
        descriptor: "حين تصبح الواجهة بيئة.",
        summary: "دراسة في المتصفح للحروف المكانية والضوء والحركة، تختبر أين تنتهي الواجهة وأين تبدأ البيئة.",
        context: "Type / Space تجربة تقنية بدأها الاستوديو. لا توجد وراءها علامة متخيّلة أو غاية تجارية مصطنعة.",
        idea: "استخدام الكلمات كعمارة. تصبح القراءة حركة عبر المقياس والعمق والضوء، فيما يبقى التنقل متوقعاً ومتاحاً بلوحة المفاتيح.",
        system: "مجموعة صغيرة من القواعد المكانية تركّب الحروف في طبقات. يغيّر الإدخال المنظور بلطف؛ وتحصل الأجهزة الأضعف أو إعدادات تقليل الحركة على نسخة رسومية مسطحة.",
        build: "رسم WebGL واعٍ بالأداء، وتنقل متاح مبني على DOM، وبديل ثابت يحافظ على التكوين نفسه.",
      },
    },
  },
];
