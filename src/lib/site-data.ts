export const locales = ["en", "tr", "ar"] as const;

export type Locale = (typeof locales)[number];
export type Direction = "ltr" | "rtl";
export type ProjectKind = "independent";

export const localeConfig: Record<
  Locale,
  { label: string; shortLabel: string; direction: Direction; ogLocale: string }
> = {
  en: { label: "English", shortLabel: "EN", direction: "ltr", ogLocale: "en_US" },
  tr: { label: "Türkçe", shortLabel: "TR", direction: "ltr", ogLocale: "tr_TR" },
  ar: { label: "العربية", shortLabel: "ع", direction: "rtl", ogLocale: "ar_LY" },
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
    provenance: Record<ProjectKind, string>;
    viewSource: string;
    openLive: string;
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
    formEyebrow: string;
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
    mailSubject: string;
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
    honestyLabel: string;
    nextProject: string;
  };
};

export const copy: Record<Locale, SiteCopy> = {
  en: {
    meta: {
      title: "Custom Web Design & Development | Zurayq Studios",
      description:
        "Zurayq Studios designs and develops custom websites, web apps and interactive digital experiences, with multilingual English, Turkish and Arabic support.",
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
      provenance: { independent: "Independent project" },
      viewSource: "View source on GitHub",
      openLive: "Open live project",
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
      eyebrow: "Selected work / 2026",
      title: "Web, systems and interaction.",
      body:
        "A globe you can explore, a map for local information and a backend that gives messages structure.",
      honesty: "Three independent projects. Real source code, with no client relationship implied.",
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
        "Zurayq is an independent creative technology studio based in İzmit, Kocaeli and working internationally. We care how the first screen feels, how the last form behaves, and everything between.",
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
      formEyebrow: "Zurayq Studios / Inquiry",
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
      mailSubject: "Project inquiry",
      mailNote: "This opens your email app. Nothing is sent without you.",
      required: "Required",
    },
    footer: {
      descriptor: "Independent creative technology studio.",
      availability: "Project fit and timing are confirmed directly.",
      localTime: "Based in İzmit, Kocaeli · working internationally",
      languageNote: "English · Türkçe · العربية",
    },
    caseStudy: {
      context: "Context",
      idea: "The idea",
      system: "The system",
      build: "What we built",
      note: "Independent project. Presented as real design and development work, not commissioned client work.",
      honestyLabel: "Honesty note",
      nextProject: "Next exploration",
    },
  },
  tr: {
    meta: {
      title: "İzmit Web Tasarım & Özel Yazılım | Zurayq Studios",
      description:
        "İzmit ve Kocaeli merkezli Zurayq Studios; özel web siteleri, web uygulamaları, özel yazılım ve Türkçe, İngilizce, Arapça çok dilli deneyimler geliştirir.",
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
      provenance: { independent: "Bağımsız proje" },
      viewSource: "GitHub kaynak kodu",
      openLive: "Canlı projeyi aç",
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
      eyebrow: "Seçili projeler / 2026",
      title: "Web, sistemler ve etkileşim.",
      body: "Keşfedilebilen bir küre, yerel bilgi için bir harita ve mesajlara yapı kazandıran bir backend.",
      honesty: "Üç bağımsız proje. Gerçek kaynak kodu; müşteri ilişkisi iddiası yok.",
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
      body: "Zurayq, İzmit ve Kocaeli merkezli ve uluslararası çalışan bağımsız bir yaratıcı teknoloji stüdyosu. İlk ekranın hissini, son formun davranışını ve aradaki her şeyi önemsiyoruz.",
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
      formEyebrow: "Zurayq Studios / Proje talebi",
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
      mailSubject: "Proje talebi",
      mailNote: "Bu, e-posta uygulamanızı açar. Siz onaylamadan hiçbir şey gönderilmez.",
      required: "Zorunlu",
    },
    footer: {
      descriptor: "Bağımsız yaratıcı teknoloji stüdyosu.",
      availability: "Proje uygunluğu ve zamanlama doğrudan görüşülür.",
      localTime: "İzmit, Kocaeli merkezli · uluslararası çalışıyor",
      languageNote: "English · Türkçe · العربية",
    },
    caseStudy: {
      context: "Bağlam",
      idea: "Fikir",
      system: "Sistem",
      build: "Ne ürettik",
      note: "Bağımsız proje. Gerçek tasarım ve geliştirme çalışması olarak gösteriliyor; müşteri işi olarak sunulmuyor.",
      honestyLabel: "Şeffaflık notu",
      nextProject: "Sonraki keşif",
    },
  },
  ar: {
    meta: {
      title: "زريق ستوديو | تصميم وتطوير مواقع وWeb Apps",
      description: "زريق ستوديو (Zurayq Studios) نصمّموا ونطوّروا مواقع إلكترونية وWeb Apps وتجارب تفاعلية تخدم مشروعك، بالعربي والتركي والإنجليزي.",
    },
    nav: {
      work: "الشغل",
      services: "شن نديروا",
      studio: "الستوديو",
      process: "كيف نخدموا",
      contact: "احكيلنا",
      openMenu: "افتح القائمة",
      closeMenu: "سكّر القائمة",
      skip: "تخطّى للمحتوى",
    },
    common: {
      startProject: "ابدأ مشروع",
      selectedWork: "شوف شغلنا",
      exploreProject: "شوف المشروع",
      backToWork: "ارجع للشغل المختار",
      provenance: { independent: "مشروع مستقل" },
      viewSource: "شوف الكود على GitHub",
      openLive: "افتح المشروع",
      year: "السنة",
      disciplines: "المجالات",
    },
    hero: {
      eyebrow: "زريق ستوديو — Zurayq Studios / تقنية وإبداع",
      lineOne: "مواقع وWeb Apps.",
      lineTwo: "تخدم مشروعك،",
      lineThree: "مش قالب جاهز.",
      body: "نصمّموا ونبنوا مواقع إلكترونية، Web Apps وتجارب تفاعلية على حسب المشروع وشن فعلاً يبي يخدم.",
      fieldLabel: "نظام حي ويتجاوب",
      fieldHint: "حرّك المؤشر وشوف",
      signal: "تصميم / برمجة / حركة / EN · TR · AR",
    },
    thesis: {
      eyebrow: "التصميم + البرمجة، مع بعض",
      title: "صغار عن قصد. ونبنوا أكثر من مجرد مواقع.",
      body: "نجمعوا تصميم الواجهات، البرمجة، الحركة والـ creative code في نفس المسار. الفكرة والتنفيذ يفضلوا في نفس النقاش من البداية.",
      notes: [
        { index: "01", title: "مش قالب جاهز", body: "نبدأوا من المحتوى، أهداف المشروع وشن تبيه يخدم—مش من theme ونبدّلوا ألوانه وخلاص." },
        { index: "02", title: "مبني يكمل معاك", body: "Responsive، سريع، سهل الصيانة، والـ accessibility محسوبة فيه من البداية." },
        { index: "03", title: "العربي محسوب صح", body: "العربي، التركي والإنجليزي—كل لغة باتجاهها، خطها وطريقة عرض تناسبها." },
      ],
    },
    work: {
      eyebrow: "شغل مختار / 2026",
      title: "ويب، أنظمة وحاجات تتفاعل معاها.",
      body: "كرة أرضية تدور فيها، خريطة للي صاير قريب منك، وBackend يرتّب اللي في رسائلك.",
      honesty: "ثلاثة مشاريع مستقلة بكود فعلي. ما نقدموهاش على إنها شغل لعملاء.",
    },
    services: {
      eyebrow: "شن نديروا",
      title: "الشكل نص الحكاية بس.",
      instruction: "اختار مجال",
      items: [
        {
          number: "01",
          title: "مواقع ويب",
          short: "موقع عنده شخصيته.",
          body: "مش قالب نبدّلوله الألوان ونحطّوا اسمك عليه. نصمّموا الموقع على حسب البراند، المحتوى، الناس اللي بيستعملوه، وشن تبيه يدير.",
          items: ["Responsive design", "CMS", "SEO من البداية", "مواقع متعددة اللغات"],
        },
        {
          number: "02",
          title: "Web Apps وأنظمة",
          short: "لو تبي أكثر من موقع تعريفي.",
          body: "نقدروا نبنوا النظام نفسه: dashboards، حجوزات، بوابات للعملاء، Admin Panels وأدوات داخلية على حسب الشغل.",
          items: ["تصميم منتجات", "بوابات للعملاء", "أدوات إدارة", "أنظمة داخلية"],
        },
        {
          number: "03",
          title: "Creative Development",
          short: "لما التصميم والبرمجة يدخلوا في بعضهم.",
          body: "Animations، interactions، Canvas وتجارب تفاعلية تخلي الموقع يحس حي، من غير ما يصير مزعج.",
          items: ["Creative coding", "أنظمة تفاعل", "Canvas", "حركة متقدمة"],
        },
        {
          number: "04",
          title: "3D + Motion",
          short: "لما فعلاً يزيدوا حاجة.",
          body: "Three.js، WebGL، 3D وmotion لما فعلاً يزيدوا حاجة للمشروع. مش كل موقع يحتاج كرة 3D تلف في النص وخلاص.",
          items: ["WebGL", "Three.js", "نماذج تفاعلية", "Motion systems"],
        },
      ],
    },
    language: {
      eyebrow: "ثلاث لغات من البداية",
      title: "العربي مش مجرد ترجمة.",
      body: "نخدموا بالعربي، الإنجليزي والتركي. ولما الموقع يكون عربي، الـ RTL مش مجرد نقلبوا الصفحة وخلاص؛ الخط، المسافات، الـ layout والحركة كلهم لازم يخدموا مع اللغة.",
      note: "بدّل اللغة وشوف كيف الواجهة تتغيّر مع المحتوى.",
    },
    why: {
      eyebrow: "زريق ستوديو — Zurayq Studios",
      title: "صغار عن قصد.",
      lead: "كلام أقل بينك وبين اللي فعلياً بيخدم على مشروعك، وقرارات أسرع.",
      body: "زريق ستوديو استوديو تقني وإبداعي صغير ومستقل. نخدموا من إزميت في كوجالي ومع مشاريع من أي مكان. يهمنا شكل الموقع، كيف يخدم، سرعته، وتجربة اللي بيستعمله.",
      principles: [
        { title: "مش قالب جاهز", body: "كل مشروع بروحه؛ الشكل، البنية والتفاعل كلهم على حسبه." },
        { title: "التصميم والبرمجة مع بعض", body: "مش نصمّموا حاجة وبعدها نكتشفوا إنها مستحيل تتبرمج. الاثنين يمشوا مع بعض من البداية." },
        { title: "عربي صح", body: "المحتوى والـ RTL والواجهة كلهم نراجعوهم كعربي فعلي، مش Google Translate." },
        { title: "يخدم صح من الداخل", body: "الـ performance، accessibility، SEO وسهولة الصيانة محسوبين من البداية." },
      ],
    },
    process: {
      eyebrow: "كيف نخدموا",
      title: "أربع خطوات. ونحكوا معاك طول الطريق.",
      items: [
        { number: "01", title: "نحكوا", body: "أول حاجة نفهموا شن تبي تدير، لمن الموقع، وشن لازم يخدم. حتى لو الفكرة لسه مش مرتبة بالكامل." },
        { number: "02", title: "نصمّموا", body: "نرتّبوا المحتوى، الشكل، الحركة وتجربة المستخدم، ونجربوا الحاجات اللي لازم تشوفها وتحسها قبل البرمجة." },
        { number: "03", title: "نبنوا", body: "نحوّلوا التصميم للحاجة الحقيقية ونجربوه على الأجهزة المختلفة، ونضبطوه وإحنا ماشيين." },
        { number: "04", title: "نطلّعوه", body: "نراجعوا، نضبطوا الأداء ونطلّعوا الموقع. ولو يحتاج متابعة، نكملوا معاك." },
      ],
    },
    contact: {
      eyebrow: "عندك مشروع؟",
      title: "احكيلنا شن في بالك.",
      body: "احكيلنا شن تبي تدير، لمن، وشن لازم يخدم—حتى لو الفكرة لسه مش مرتبة بالكامل.",
      reassurance: "مش لازم تعرف من توا اسم الخدمة أو كل التفاصيل.",
      formTitle: "احكيلنا على مشروعك.",
      formEyebrow: "Zurayq Studios / مشروع جديد",
      formIntro: "شوية تفاصيل يعطونا صورة أوضح، من غير كلام استشارات زايد.",
      close: "سكّر نموذج المشروع",
      name: "اسمك",
      namePlaceholder: "شن ننادوك؟",
      email: "الإيميل",
      company: "الشركة / البراند",
      companyPlaceholder: "اختياري",
      projectType: "شن تبي نبنوا؟",
      projectOptions: ["موقع ويب", "Web App", "تجربة تفاعلية", "3D / Motion", "تجديد موقع موجود", "نظام على حسب الشغل", "لسه مش متأكد"],
      budget: "الميزانية تقريباً",
      budgetOptions: ["أقل من €1,000", "€1,000–€3,000", "€3,000–€7,500", "€7,500+", "لسه مش متأكد"],
      timeline: "إمتى تبيه يكون جاهز؟",
      timelinePlaceholder: "تاريخ، موسم، أو «لسه مش محدد»",
      message: "احكيلنا على المشروع",
      messagePlaceholder: "شن تبي تبني، لمن، وشن لازم يخدم؟",
      send: "كمّل بالإيميل",
      mailSubject: "مشروع جديد",
      mailNote: "بيفتح تطبيق الإيميل عندك، والإيميل ما يمشيش إلا لما تبعته إنت.",
      required: "مطلوب",
    },
    footer: {
      descriptor: "استوديو تقني وإبداعي صغير ومستقل.",
      availability: "نحكوا معاك مباشرة على ملاءمة المشروع والوقت.",
      localTime: "من إزميت، كوجالي · ونخدموا دولياً",
      languageNote: "English · Türkçe · العربية",
    },
    caseStudy: {
      context: "البداية",
      idea: "الفكرة",
      system: "النظام",
      build: "شن بنينا",
      note: "مشروع مستقل. نعرضوه هنا كشغل فعلي في التصميم والبرمجة، مش على إنه شغل لعميل.",
      honestyLabel: "ملاحظة بصراحة",
      nextProject: "المشروع اللي بعده",
    },
  },
};

type LocalizedProjectCopy = {
  title: string;
  seoTitle: string;
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
  visual: "passport" | "neighborhood" | "memocore";
  sourceUrl: string;
  liveUrl: string | null;
  disciplines: Record<Locale, string[]>;
  copy: Record<Locale, LocalizedProjectCopy>;
};

export const projects: Project[] = [
  {
    slug: "passport-power",
    kind: "independent",
    year: "2026",
    visual: "passport",
    sourceUrl: "https://github.com/zurayq/pasaporto",
    liveUrl: "https://pasaporto.vercel.app",
    disciplines: {
      en: ["Interactive web", "Data visualization", "Three.js", "Creative development"],
      tr: ["İnteraktif web", "Veri görselleştirme", "Three.js", "Yaratıcı geliştirme"],
      ar: ["Interactive Web", "عرض البيانات", "Three.js", "Creative Development"],
    },
    copy: {
      en: {
        title: "Passport Power",
        seoTitle: "Passport Power — Interactive 3D Visa Explorer",
        descriptor: "Global visa access, given a geography.",
        summary: "A searchable passport explorer that connects visa-access data to a Three.js globe. Pick a passport, rotate the world and inspect destinations by entry category.",
        context: "A list can tell you where a passport travels. It is less good at showing the pattern. Passport Power explores what happens when the same information becomes something you can move around.",
        idea: "Make the country the interface. Selecting a passport recolors the globe; hovering and clicking bring the destination and its access category into focus without losing the wider view.",
        system: "A passport catalogue and visa matrix connect search, sorting, access totals and country details. Geographic boundaries become a canvas texture, with separate colors for visa-free, on-arrival, eVisa and visa-required access.",
        build: "HTML, CSS and JavaScript handle the interface; Three.js and OrbitControls handle the globe. TopoJSON boundaries, raycasting and point-in-polygon checks connect the two. This is a visualization of the repository dataset, not a live travel-advice service.",
      },
      tr: {
        title: "Passport Power",
        seoTitle: "Passport Power — İnteraktif 3D Vize Atlası",
        descriptor: "Vize erişiminin coğrafi görünümü.",
        summary: "Vize erişim verisini Three.js küresine bağlayan, aranabilir bir pasaport gezgini. Pasaportu seçin, dünyayı döndürün ve ülkelerin giriş kategorilerini inceleyin.",
        context: "Bir liste, pasaportla nerelere gidilebildiğini anlatır; coğrafi örüntüyü aynı açıklıkla göstermez. Passport Power, bu bilgiyi içinde gezilebilen bir görünüme dönüştürüyor.",
        idea: "Ülkenin kendisini arayüze dönüştürmek. Pasaport seçimi kürenin renklerini değiştiriyor; üzerine gelme ve tıklama, genel görünümü kaybetmeden ülkeyi ve giriş kategorisini öne çıkarıyor.",
        system: "Pasaport kataloğu ve vize matrisi; arama, sıralama, kategori toplamları ve ülke detaylarını birleştiriyor. Coğrafi sınırlar canvas dokusuna dönüşüyor; vizesiz, kapıda vize, eVisa ve vize gerekli durumları ayrı renklerle gösteriliyor.",
        build: "Arayüz HTML, CSS ve JavaScript; küre Three.js ve OrbitControls ile kuruldu. TopoJSON sınırları, raycasting ve noktanın çokgen içinde olup olmadığını denetleyen hesaplamalar iki katmanı bağlıyor. Görselleştirme depodaki veri kümesine dayanıyor; canlı seyahat danışmanlığı sunmuyor.",
      },
      ar: {
        title: "Passport Power",
        seoTitle: "Passport Power — جوازات وفيزا على كرة 3D",
        descriptor: "وين يوصّلك جوازك؟ شوفها على الخريطة.",
        summary: "مستكشف جوازات فيه بحث وكرة أرضية بـ Three.js. تختار الجواز، تدوّر العالم وتشوف كل وجهة شن نوع الدخول ليها.",
        context: "القائمة تقوللك وين تقدر تمشي بجوازك، لكن الصورة الكبيرة تضيع بين الأسماء. في Passport Power جرّبنا نخلّوا نفس البيانات حاجة تقدر تدور فيها وتشوفها جغرافياً.",
        idea: "خلّينا البلد نفسه واجهة. تختار الجواز فتتبدّل ألوان الكرة، ولما تمرّ على بلد أو تضغط عليه تشوف اسمه ونوع الدخول، والعالم باقي قدامك.",
        system: "ربطنا قائمة الجوازات وبيانات الفيزا بالبحث، الترتيب، أعداد كل فئة وتفاصيل البلدان. الحدود الجغرافية تولّي texture على Canvas، وكل حالة دخول عندها لونها: من غير فيزا، عند الوصول، eVisa أو فيزا مطلوبة.",
        build: "الواجهة بـ HTML وCSS وJavaScript، والكرة بـ Three.js وOrbitControls. حدود TopoJSON وحسابات raycasting تربط المكان اللي تضغط عليه ببياناته. العرض يخدم ببيانات الريبو، مش خدمة معلومات سفر تتحدّث مباشرة.",
      },
    },
  },
  {
    slug: "your-friendly-neighborhood",
    kind: "independent",
    year: "2026",
    visual: "neighborhood",
    sourceUrl: "https://github.com/zurayq/Your-Friendly-Neighborhood",
    liveUrl: "https://your-friendly-neighborhood-iota.vercel.app/",
    disciplines: {
      en: ["Web application", "Map interface", "Python / Flask", "Backend systems"],
      tr: ["Web uygulaması", "Harita arayüzü", "Python / Flask", "Backend sistemleri"],
      ar: ["Web App", "واجهة خريطة", "Python / Flask", "Backend"],
    },
    copy: {
      en: {
        title: "Your Friendly Neighborhood",
        seoTitle: "Your Friendly Neighborhood — Community Map Web App",
        descriptor: "Local information starts with a place.",
        summary: "A community map for İstanbul and Kocaeli, connecting local meetups, events, help and opportunities to places, categories and content lifetimes.",
        context: "Local information gets scattered across messages and feeds. This project puts the neighborhood first, so an activity or request can be found by where it happens.",
        idea: "Start with a place, then share a signal. People can post without a public account profile, choose a category and give the information a useful lifetime rather than leave it in a permanent feed.",
        system: "MapLibre GL and deck.gl connect the map to a Flask API. GeoJSON service boundaries are enforced server-side; posts carry visibility periods, support counts and reporting rules. Management codes control closing and deleting a post.",
        build: "Python, Flask, SQLAlchemy and PostgreSQL support the application, with Shapely boundary checks, migrations, text moderation and rate limits. The interface includes 2D/3D map modes and category markers. The code demonstrates the system; no audience or usage figures are claimed.",
      },
      tr: {
        title: "Your Friendly Neighborhood",
        seoTitle: "Your Friendly Neighborhood — Topluluk Haritası",
        descriptor: "Yerel bilgi bir yerden başlar.",
        summary: "İstanbul ve Kocaeli için buluşmaları, etkinlikleri, yardımlaşmayı ve fırsatları konum, kategori ve görünürlük süreleriyle birleştiren topluluk haritası.",
        context: "Yerel bilgi mesajlar ve akışlar arasında dağılıyor. Bu proje, bir etkinliği veya yardım talebini gerçekleştiği yere göre bulabilmek için mahalleyi merkeze alıyor.",
        idea: "Önce bir yer seçmek, sonra bir paylaşım bırakmak. Kullanıcılar herkese açık hesap profili olmadan içerik ekleyebiliyor, kategori seçiyor ve paylaşımın ne kadar süre görünür kalacağını belirliyor.",
        system: "MapLibre GL ve deck.gl, haritayı Flask API'sine bağlıyor. GeoJSON hizmet sınırları sunucuda denetleniyor; paylaşımlar görünürlük süresi, destek sayısı ve bildirim kuralları taşıyor. Yönetim kodları, paylaşımı kapatma ve silme işlemlerini kontrol ediyor.",
        build: "Uygulama Python, Flask, SQLAlchemy ve PostgreSQL üzerine kurulu. Shapely sınır kontrolleri, veritabanı geçişleri, metin moderasyonu ve istek limitleri sistemi tamamlıyor. Arayüzde 2D/3D harita modları ve kategori işaretçileri var; kullanıcı veya kullanım rakamı iddiası yok.",
      },
      ar: {
        title: "Your Friendly Neighborhood",
        seoTitle: "Your Friendly Neighborhood — Web App لخريطة المجتمع",
        descriptor: "شن صاير قريب منك؟ ابدأ من المكان.",
        summary: "خريطة مجتمع لإسطنبول وكوجالي، تربط اللقاءات، الفعاليات، المساعدة والفرص بأماكنها، تصنيفاتها ومدة ظهورها.",
        context: "أخبار المنطقة تتوزّع بين المسجات والـ feeds. هنا بدينا من الحومة، باش تلقى النشاط أو طلب المساعدة على حسب وين صاير.",
        idea: "اختار مكان وبعدها حطّ إشارة. تقدر تنشر من غير بروفايل حساب عام، تختار التصنيف وتحدد قداش المنشور يقعد ظاهر، بدل ما يفضل في feed للأبد.",
        system: "ربطنا MapLibre GL وdeck.gl بـ Flask API. السيرفر يتأكد من حدود المنطقة ببيانات GeoJSON؛ وكل منشور عنده مدة ظهور، دعم وقواعد للتبليغ. كود إدارة خاص بالمنشور يخليك تسكّره أو تمسحه.",
        build: "الـ Backend بـ Python وFlask وSQLAlchemy وPostgreSQL، ومعاه Shapely لفحص الحدود، migrations، فلترة للنص وحدود للطلبات. الواجهة فيها عرض 2D و3D وعلامات حسب التصنيف. نعرضوا النظام اللي في الكود، من غير أرقام مستخدمين مخترعة.",
      },
    },
  },
  {
    slug: "memocore",
    kind: "independent",
    year: "2026",
    visual: "memocore",
    sourceUrl: "https://github.com/zurayq/memocore",
    liveUrl: null,
    disciplines: {
      en: ["AI systems", "FastAPI", "Backend architecture", "Automation"],
      tr: ["AI sistemleri", "FastAPI", "Backend mimarisi", "Otomasyon"],
      ar: ["AI Systems", "FastAPI", "Backend", "Automation"],
    },
    copy: {
      en: {
        title: "MemoCore",
        seoTitle: "MemoCore — AI Scheduling Backend",
        descriptor: "A message becomes something structured.",
        summary: "An AI-assisted backend that parses messages into calendar and task operations, with dedicated services, asynchronous persistence and a reminder scheduler.",
        context: "Calendars usually ask people to turn an intention into fields and date pickers. MemoCore starts with the message and explores how to turn that intention into explicit application data.",
        idea: "Language is the input layer. An AI parser proposes a structured intent; typed schemas, a dispatch table and application services handle the event or task operation.",
        system: "The current parser uses Groq with Llama 3.3. WhatsApp Cloud API webhook handling checks the configured sender, parses the message and dispatches to event, task or recurring-event services using async SQLAlchemy.",
        build: "FastAPI, Pydantic, UUID-based records and SQLite/PostgreSQL support form the backend. APScheduler checks upcoming events, but reminders currently go to logs. Recurring patterns are stored, not expanded into scheduled occurrences. WhatsApp reply code exists; live delivery is not verified.",
      },
      tr: {
        title: "MemoCore",
        seoTitle: "MemoCore — AI Destekli Planlama Backend'i",
        descriptor: "Bir mesaj, düzenli veriye dönüşür.",
        summary: "Mesajları takvim ve görev işlemlerine dönüştüren; ayrı servisler, asenkron veri saklama ve hatırlatma zamanlayıcısı içeren AI destekli backend.",
        context: "Takvimler genellikle niyeti alanlara ve tarih seçicilere dönüştürmeyi kullanıcıya bırakıyor. MemoCore mesajla başlıyor ve bu niyeti açık uygulama verisine dönüştürmenin yolunu araştırıyor.",
        idea: "Doğal dil giriş katmanı. AI ayrıştırıcısı yapılandırılmış bir niyet öneriyor; tipli şemalar, yönlendirme tablosu ve uygulama servisleri etkinlik veya görev işlemini yürütüyor.",
        system: "Güncel ayrıştırıcı Groq üzerinden Llama 3.3 kullanıyor. WhatsApp Cloud API webhook kodu tanımlı göndericiyi kontrol ediyor, mesajı ayrıştırıyor ve async SQLAlchemy kullanan etkinlik, görev veya tekrarlayan etkinlik servislerine yönlendiriyor.",
        build: "Backend; FastAPI, Pydantic, UUID kayıtları ve SQLite/PostgreSQL desteğiyle kurulu. APScheduler yaklaşan etkinlikleri kontrol ediyor, ancak hatırlatmalar şu an loglara yazılıyor. Tekrar kuralları saklanıyor; planlı oluşumlara dönüştürülmüyor. WhatsApp yanıt kodu var, canlı teslimat doğrulanmadı.",
      },
      ar: {
        title: "MemoCore",
        seoTitle: "MemoCore — Backend للمواعيد والمهام بالـ AI",
        descriptor: "من رسالة عادية، لبيانات مرتبة.",
        summary: "Backend بالـ AI يفهم الرسائل ويحوّلها لعمليات على المواعيد والمهام، بخدمات منفصلة، تخزين async وscheduler للتذكيرات.",
        context: "التقويم عادة يطلب منك تحوّل اللي في بالك لحقول وتواريخ. في MemoCore بدينا من الرسالة: كيف نخلّوا الكلام العادي يولّي بيانات واضحة يقدر النظام يخدم بيها؟",
        idea: "الكلام هو المدخل. الـ AI يقترح intent مرتب، وبعده الـ schemas، جدول التوجيه وخدمات التطبيق يتولّوا عملية الموعد أو المهمة.",
        system: "الـ parser الحالي يخدم بـ Groq وLlama 3.3. كود WhatsApp Cloud API webhook يتأكد من المرسل المحدد، يفهم الرسالة ويوجّهها لخدمات المواعيد، المهام أو المواعيد المتكررة، والتخزين بـ async SQLAlchemy.",
        build: "بنينا الـ Backend بـ FastAPI وPydantic، ومعرّفات UUID ودعم SQLite وPostgreSQL. APScheduler يراجع المواعيد القريبة، لكن التذكيرات توا تطلع في الـ logs. قواعد التكرار تتخزّن بس؛ ما تتحوّلش لمواعيد مجدولة. كود ردود WhatsApp موجود، لكن التوصيل الفعلي مش متأكدين منه.",
      },
    },
  },
];
