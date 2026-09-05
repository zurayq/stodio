import type { Locale } from "@/lib/site-data";

type ArtworkCopy = {
  passport: { caption: string; heading: string; selected: string; country: string; hint: string; statuses: string[]; alt: string };
  neighborhood: { caption: string; heading: string; area: string; categories: string[]; sampleLabel: string; sampleTitle: string; sampleDetail: string; alt: string };
  memocore: { caption: string; heading: string; input: string; message: string; recordTitle: string; nodes: string[]; output: string; state: string; note: string; alt: string };
};

export const artworkCopy: Record<Locale, ArtworkCopy> = {
  en: {
    passport: {
      caption: "Interface study / repository data", heading: "A world of access.",
      selected: "Selected passport", country: "Türkiye", hint: "Select. Rotate. Explore.",
      statuses: ["Visa-free", "On arrival", "eVisa", "Visa required"],
      alt: "Passport Power preview: a globe colored with the repository's Türkiye passport data and its four visa-access categories.",
    },
    neighborhood: {
      caption: "Service-area study / demo markers", heading: "Your city. Your signal.", area: "İstanbul + Kocaeli",
      categories: ["Meetups", "Events", "Help", "Community", "Activities", "Opportunities"],
      sampleLabel: "Illustrative post", sampleTitle: "Neighborhood walk", sampleDetail: "Activities / visible for 24 hours",
      alt: "The project's real İstanbul and Kocaeli service-area boundaries with illustrative category markers and a clearly labeled sample post.",
    },
    memocore: {
      caption: "System architecture / interaction model", heading: "From words to records.",
      input: "Example message", message: "Add a standup every Monday at 9.",
      recordTitle: "standup",
      nodes: ["MESSAGE", "INTENT PARSER", "DISPATCH", "EVENT SERVICE", "DATABASE"],
      output: "Stored recurring event", state: "Active", note: "Recurrence stored. Reminder delivery is not shown.",
      alt: "MemoCore architecture: an example message passes through intent parsing and dispatch to a service and database, producing a stored recurring-event record.",
    },
  },
  tr: {
    passport: {
      caption: "Arayüz çalışması / depodaki veri", heading: "Erişimin dünya haritası.",
      selected: "Seçilen pasaport", country: "Türkiye", hint: "Seç. Döndür. Keşfet.",
      statuses: ["Vizesiz", "Kapıda vize", "eVisa", "Vize gerekli"],
      alt: "Passport Power önizlemesi: depodaki Türkiye pasaportu verisiyle renklendirilmiş küre ve dört vize erişim kategorisi.",
    },
    neighborhood: {
      caption: "Hizmet alanı çalışması / örnek işaretçiler", heading: "Senin şehrin. Senin paylaşımın.", area: "İstanbul + Kocaeli",
      categories: ["Buluşmalar", "Etkinlikler", "Yardım", "Topluluk", "Aktiviteler", "Fırsatlar"],
      sampleLabel: "Örnek paylaşım", sampleTitle: "Mahalle yürüyüşü", sampleDetail: "Aktiviteler / 24 saat görünür",
      alt: "Projedeki gerçek İstanbul ve Kocaeli hizmet sınırları, örnek kategori işaretçileri ve açıkça etiketlenmiş bir örnek paylaşım.",
    },
    memocore: {
      caption: "Sistem mimarisi / etkileşim modeli", heading: "Kelimelerden kayıtlara.",
      input: "Örnek mesaj", message: "Her pazartesi saat 9'a ekip toplantısı ekle.",
      recordTitle: "ekip toplantısı",
      nodes: ["MESAJ", "NİYET AYRIŞTIRICI", "YÖNLENDİRME", "ETKİNLİK SERVİSİ", "VERİTABANI"],
      output: "Kaydedilen tekrar kaydı", state: "Aktif", note: "Tekrar kuralı saklanır. Hatırlatma teslimatı gösterilmez.",
      alt: "MemoCore mimarisi: örnek mesaj, niyet ayrıştırma ve yönlendirmeden geçerek servis ve veritabanında tekrarlayan etkinlik kaydına dönüşür.",
    },
  },
  ar: {
    passport: {
      caption: "دراسة للواجهة / بيانات الريبو", heading: "شوف وين يوصّلك جوازك.",
      selected: "الجواز اللي اخترته", country: "تركيا", hint: "اختار. دوّر. استكشف.",
      statuses: ["من غير فيزا", "عند الوصول", "eVisa", "فيزا مطلوبة"],
      alt: "عرض لـ Passport Power: كرة أرضية بألوان بيانات الجواز التركي الموجودة في الريبو، ومعاها أربع فئات للدخول.",
    },
    neighborhood: {
      caption: "دراسة لحدود المنطقة / علامات للتوضيح", heading: "مدينتك. وشن صاير فيها.", area: "إسطنبول + كوجالي",
      categories: ["لقاءات", "فعاليات", "مساعدة", "المجتمع", "أنشطة", "فرص"],
      sampleLabel: "منشور للتوضيح", sampleTitle: "مشية في الحومة", sampleDetail: "أنشطة / يقعد ظاهر 24 ساعة",
      alt: "حدود إسطنبول وكوجالي الفعلية من المشروع، ومعاها علامات ومنشور للتوضيح مش بيانات ناس حقيقيين.",
    },
    memocore: {
      caption: "معمارية النظام / كيف يخدم", heading: "من كلام، لبيانات مرتبة.",
      input: "رسالة للتوضيح", message: "زيد اجتماع للفريق كل اثنين الساعة 9.",
      recordTitle: "اجتماع الفريق",
      nodes: ["الرسالة", "INTENT PARSER", "التوجيه", "خدمة المواعيد", "قاعدة البيانات"],
      output: "موعد متكرر تخزّن", state: "فعّال", note: "قاعدة التكرار تتخزّن. الرسم ما يورّيش توصيل تذكير.",
      alt: "معمارية MemoCore: رسالة للتوضيح تمرّ على فهم النية والتوجيه، وبعدها الخدمة وقاعدة البيانات يخزّنوا موعد متكرر.",
    },
  },
};
