/* ==========================================================================
   Lave Auto Express 2007 — sélecteur de langue
   Le français reste la langue du document HTML : il s'affiche même sans
   JavaScript et demeure la version indexée par les moteurs de recherche.
   ========================================================================== */
(function () {
  "use strict";

  /* Langues retenues d'après la composition de la population du Grand
     Montréal. `rtl` déclenche la mise en page de droite à gauche. */
  var LANGS = [
    { code: "fr", label: "Français",        short: "FR" },
    { code: "en", label: "English",         short: "EN" },
    { code: "ar", label: "العربية",          short: "ع",  rtl: true },
    { code: "es", label: "Español",         short: "ES" },
    { code: "it", label: "Italiano",        short: "IT" },
    { code: "pt", label: "Português",       short: "PT" },
    { code: "ht", label: "Kreyòl ayisyen",  short: "HT" },
    { code: "zh", label: "中文",             short: "中" },
    { code: "ru", label: "Русский",         short: "RU" },
    { code: "vi", label: "Tiếng Việt",      short: "VI" }
  ];

  var T = {};

  T.fr = {
    "meta.title": "Lave-auto à la main à Longueuil | Lave Auto Express 2007",
    "nav.services": "Services", "nav.pricing": "Tarifs", "nav.hours": "Horaires", "nav.contact": "Contact",
    "hero.eyebrow": "Longueuil, Québec · Depuis 2007",
    "hero.title1": "Lave-auto à la main", "hero.title2": "à Longueuil",
    "hero.sub": "Lavage extérieur et intérieur, cire, shampooing et remise à neuf. Passez sans rendez-vous pour un lavage régulier.",
    "btn.call": "Appelez-nous", "btn.services": "Voir nos services",
    "trust.years.v": "17+", "trust.years.l": "années d'expérience",
    "trust.hours.v": "Lun–Sam", "trust.hours.l": "9h00 – 17h00",
    "trust.cash.v": "Comptant", "trust.cash.l": "paiement en espèces",
    "feat.fast.t": "Rapide", "feat.fast.d": "Service express sans rendez-vous pour les lavages réguliers.",
    "feat.care.t": "Soigné", "feat.care.d": "Lavage à la main, produits de qualité, finition sans rayures.",
    "feat.price.t": "Abordable", "feat.price.d": "Des prix honnêtes, adaptés à la taille et à l'état du véhicule.",
    "feat.loved.t": "Apprécié", "feat.loved.d": "Des clients fidèles et de vrais avis Google depuis 2007.",
    "about.eyebrow": "Qui sommes-nous", "about.title": "Bienvenue chez Lave Auto Express 2007",
    "about.text": "Situé au cœur de Longueuil, nous sommes votre destination de choix pour un nettoyage automobile rapide, efficace et abordable. Nous redonnons à votre véhicule son éclat d'origine — avec le souci du détail d'une équipe qui aime ce qu'elle fait.",
    "about.maps.s": "Trouvez-nous", "about.maps.d": "sur Google Maps",
    "about.rev.s": "Nos avis", "about.rev.d": "sur Google",
    "svc.eyebrow": "Nos services", "svc.title": "Lavage et esthétique automobile",
    "svc.lede": "Voici des exemples de véhicules que nous avons eu le plaisir de nettoyer, tirés des photos de nos clients. Pour en voir davantage, consultez nos avis Google.",
    "svc.est": "estimation", "svc.quote": "Sur évaluation", "svc.quoteSub": "appelez-nous",
    "svc.1.t": "Lavage Extérieur Complet", "svc.1.d": "Un nettoyage extérieur méticuleux pour faire briller votre carrosserie. Inclut le lavage des roues et des pneus.",
    "svc.2.t": "Lavage Intérieur & Extérieur", "svc.2.d": "Notre service vedette. Traitement complet : aspiration de l'habitacle, nettoyage des vitres et lavage extérieur impeccable.", "svc.2.badge": "★ Le plus populaire",
    "svc.3.t": "Cire ou Compound", "svc.3.d": "Protégez la peinture de votre voiture et donnez-lui un lustre éclatant avec notre cire de haute qualité.",
    "svc.4.t": "Shampooing", "svc.4.d": "Nettoyage en profondeur des tapis, des sièges ou du compartiment moteur pour éliminer taches et saleté incrustée.",
    "svc.5.t": "Remise à Neuf", "svc.5.tag": "Forfait luxueux", "svc.5.d": "Le forfait ultime pour redonner à votre voiture son aspect neuf. Inclut tous nos services de nettoyage et de protection.",
    "svc.cta.t": "Un besoin particulier ?", "svc.cta.d": "Chaque véhicule est différent. Appelez-nous et nous vous conseillerons le service le mieux adapté — sans engagement.",
    "info.eyebrow": "Informations pratiques", "info.title": "Tarifs, horaires et paiement",
    "info.hours.t": "Heures d'ouverture", "info.hours.week": "Lundi – Samedi", "info.hours.weekT": "9h00 – 17h00",
    "info.hours.sun": "Dimanche", "info.hours.sunT": "Fermé",
    "info.hours.note": "Nos heures peuvent varier selon les conditions météorologiques et les jours fériés. En cas de doute, appelez-nous avant de vous déplacer.",
    "info.price.t": "Tarifs et estimation",
    "info.price.p1": "Nos prix varient selon la <strong>taille</strong>, le <strong>type</strong> et l'<strong>état</strong> de votre véhicule. Pour un devis précis, passez nous voir ou appelez-nous.",
    "info.price.p2": "Pour les services spécialisés — cire, shampooing, remise à neuf — une évaluation du véhicule est nécessaire afin de vous fournir une estimation juste.",
    "info.pay.t": "Paiement", "info.pay.cash": "Comptant seulement", "info.pay.d": "Nous n'acceptons pas les cartes de débit ou de crédit. Merci de prévoir le montant en espèces lors de votre visite.",
    "cta.t": "Prêt à redonner de l'éclat à votre voiture ?", "cta.d": "Appelez-nous pour un devis ou passez nous voir.", "cta.dir": "Itinéraire",
    "foot.blurb": "Lave-auto rapide, soigné et abordable à Longueuil, Québec.",
    "foot.nav": "Navigation", "foot.about": "À propos", "foot.reach": "Nous joindre",
    "foot.city": "Longueuil, Québec", "foot.maps": "Google Maps", "foot.rights": "Tous droits réservés.",
    "foot.fine": "Ce site est une présentation de Lave Auto Express 2007. Les tarifs affichés sont des estimations ; pour toute information officielle, veuillez nous contacter directement.",
    "callbar": "Appelez-nous : 450-679-6095", "lang.label": "Choisir la langue"
  };

  T.en = {
    "meta.title": "Hand Car Wash in Longueuil | Lave Auto Express 2007",
    "nav.services": "Services", "nav.pricing": "Pricing", "nav.hours": "Hours", "nav.contact": "Contact",
    "hero.eyebrow": "Longueuil, Quebec · Since 2007",
    "hero.title1": "Hand car wash", "hero.title2": "in Longueuil",
    "hero.sub": "Exterior and interior washes, waxing, shampooing and full detailing. Drop in for a regular wash without an appointment.",
    "btn.call": "Call us", "btn.services": "See our services",
    "trust.years.v": "17+", "trust.years.l": "years of experience",
    "trust.hours.v": "Mon–Sat", "trust.hours.l": "9:00 AM – 5:00 PM",
    "trust.cash.v": "Cash", "trust.cash.l": "cash payment only",
    "feat.fast.t": "Fast", "feat.fast.d": "Walk-in express service for regular washes, no appointment needed.",
    "feat.care.t": "Meticulous", "feat.care.d": "Hand washing, quality products, a scratch-free finish.",
    "feat.price.t": "Affordable", "feat.price.d": "Honest prices, based on the size and condition of your vehicle.",
    "feat.loved.t": "Well reviewed", "feat.loved.d": "Loyal customers and genuine Google reviews since 2007.",
    "about.eyebrow": "Who we are", "about.title": "Welcome to Lave Auto Express 2007",
    "about.text": "Located in the heart of Longueuil, we are your destination of choice for fast, effective and affordable car cleaning. We bring your vehicle back to its original shine — with the attention to detail of a team that loves what it does.",
    "about.maps.s": "Find us", "about.maps.d": "on Google Maps",
    "about.rev.s": "Our reviews", "about.rev.d": "on Google",
    "svc.eyebrow": "Our services", "svc.title": "Car wash and detailing",
    "svc.lede": "Here are some of the vehicles we have had the pleasure of cleaning, taken from our customers' photos. To see more, have a look at our Google reviews.",
    "svc.est": "estimate", "svc.quote": "Quote on inspection", "svc.quoteSub": "call us",
    "svc.1.t": "Full Exterior Wash", "svc.1.d": "A meticulous exterior clean to make your bodywork shine. Includes wheels and tires.",
    "svc.2.t": "Interior & Exterior Wash", "svc.2.d": "Our signature service. Complete treatment: interior vacuuming, window cleaning and a flawless exterior wash.", "svc.2.badge": "★ Most popular",
    "svc.3.t": "Wax or Compound", "svc.3.d": "Protect your car's paint and give it a brilliant shine with our high-quality wax.",
    "svc.4.t": "Shampoo", "svc.4.d": "Deep cleaning of carpets, seats or the engine bay to remove stains and ingrained dirt.",
    "svc.5.t": "Full Restoration", "svc.5.tag": "Luxury package", "svc.5.d": "The ultimate package to bring your car back to a like-new look. Includes all our cleaning and protection services.",
    "svc.cta.t": "Something specific in mind?", "svc.cta.d": "Every vehicle is different. Call us and we will recommend the service that suits you best — no obligation.",
    "info.eyebrow": "Practical information", "info.title": "Pricing, hours and payment",
    "info.hours.t": "Opening hours", "info.hours.week": "Monday – Saturday", "info.hours.weekT": "9:00 AM – 5:00 PM",
    "info.hours.sun": "Sunday", "info.hours.sunT": "Closed",
    "info.hours.note": "Our hours may vary with the weather and on public holidays. If in doubt, call us before making the trip.",
    "info.price.t": "Pricing and estimates",
    "info.price.p1": "Our prices vary with the <strong>size</strong>, <strong>type</strong> and <strong>condition</strong> of your vehicle. For an accurate quote, drop by or give us a call.",
    "info.price.p2": "For specialised services — wax, shampoo, full restoration — an inspection of the vehicle is required so we can give you a fair estimate.",
    "info.pay.t": "Payment", "info.pay.cash": "Cash only", "info.pay.d": "We do not accept debit or credit cards. Please bring the amount in cash when you visit.",
    "cta.t": "Ready to bring back your car's shine?", "cta.d": "Call us for a quote or drop by and see us.", "cta.dir": "Directions",
    "foot.blurb": "Fast, careful and affordable car washing in Longueuil, Quebec.",
    "foot.nav": "Navigation", "foot.about": "About", "foot.reach": "Contact us",
    "foot.city": "Longueuil, Quebec", "foot.maps": "Google Maps", "foot.rights": "All rights reserved.",
    "foot.fine": "This website is a presentation of Lave Auto Express 2007. Prices shown are estimates; for official information, please contact us directly.",
    "callbar": "Call us: 450-679-6095", "lang.label": "Choose language"
  };

  T.ar = {
    "meta.title": "لاف أوتو إكسبرس 2007 | غسيل سيارات في لونغوي، كيبيك",
    "nav.services": "الخدمات", "nav.pricing": "الأسعار", "nav.hours": "ساعات العمل", "nav.contact": "اتصل بنا",
    "hero.eyebrow": "لونغوي، كيبيك · منذ 2007",
    "hero.title1": "سيارتك،", "hero.title2": "نظيفة كالجديدة.",
    "hero.sub": "غسيل سيارات محترف في لونغوي. تنظيف سريع ودقيق وبأسعار معقولة — يدويًا على يد فريق يهتم بعمله.",
    "btn.call": "اتصل بنا", "btn.services": "اطّلع على خدماتنا",
    "trust.years.v": "+17", "trust.years.l": "سنة من الخبرة",
    "trust.hours.v": "الاثنين – السبت", "trust.hours.l": "9:00 – 17:00",
    "trust.cash.v": "نقدًا", "trust.cash.l": "الدفع نقدًا فقط",
    "feat.fast.t": "سريع", "feat.fast.d": "خدمة سريعة دون موعد مسبق للغسيل الاعتيادي.",
    "feat.care.t": "دقيق", "feat.care.d": "غسيل يدوي ومنتجات عالية الجودة ولمسة نهائية بلا خدوش.",
    "feat.price.t": "بأسعار معقولة", "feat.price.d": "أسعار عادلة تُحدَّد حسب حجم السيارة وحالتها.",
    "feat.loved.t": "موضع ثقة", "feat.loved.d": "زبائن أوفياء وتقييمات حقيقية على غوغل منذ 2007.",
    "about.eyebrow": "من نحن", "about.title": "أهلًا بكم في لاف أوتو إكسبرس 2007",
    "about.text": "نقع في قلب مدينة لونغوي، ونوفّر لك تنظيفًا سريعًا وفعّالًا وبأسعار في المتناول. نعيد لسيارتك بريقها الأصلي، بعناية فريق يحب عمله ويهتم بأدق التفاصيل.",
    "about.maps.s": "موقعنا", "about.maps.d": "على خرائط غوغل",
    "about.rev.s": "تقييماتنا", "about.rev.d": "على غوغل",
    "svc.eyebrow": "خدماتنا", "svc.title": "ما نقدّمه",
    "svc.lede": "إليك بعض السيارات التي سعدنا بتنظيفها، من صور زبائننا. لمزيد من الصور، اطّلع على تقييماتنا على غوغل.",
    "svc.est": "تقدير", "svc.quote": "السعر بعد المعاينة", "svc.quoteSub": "اتصل بنا",
    "svc.1.t": "غسيل خارجي شامل", "svc.1.d": "تنظيف خارجي دقيق يُعيد البريق إلى هيكل سيارتك، ويشمل العجلات والإطارات.",
    "svc.2.t": "غسيل داخلي وخارجي", "svc.2.d": "خدمتنا المميّزة. معالجة كاملة تشمل شفط الغبار من المقصورة وتنظيف الزجاج وغسيلًا خارجيًا متقنًا.", "svc.2.badge": "★ الأكثر طلبًا",
    "svc.3.t": "تلميع أو تشميع", "svc.3.d": "احمِ طلاء سيارتك وامنحها لمعانًا أخّاذًا بشمعنا عالي الجودة.",
    "svc.4.t": "تنظيف بالشامبو", "svc.4.d": "تنظيف عميق للسجاد أو المقاعد أو حجرة المحرك لإزالة البقع والأوساخ المتراكمة.",
    "svc.5.t": "تجديد شامل", "svc.5.tag": "الباقة الفاخرة", "svc.5.d": "الباقة الأشمل لإعادة سيارتك إلى مظهرها كالجديدة، وتضم كل خدمات التنظيف والحماية لدينا.",
    "svc.cta.t": "لديك طلب خاص؟", "svc.cta.d": "كل سيارة تختلف عن الأخرى. اتصل بنا وسنرشدك إلى الخدمة الأنسب لك — دون أي التزام.",
    "info.eyebrow": "معلومات عملية", "info.title": "الأسعار وساعات العمل والدفع",
    "info.hours.t": "ساعات العمل", "info.hours.week": "الاثنين – السبت", "info.hours.weekT": "9:00 – 17:00",
    "info.hours.sun": "الأحد", "info.hours.sunT": "مغلق",
    "info.hours.note": "قد تتغيّر ساعات العمل تبعًا للأحوال الجوية وأيام العطل. عند الشك، يُرجى الاتصال بنا قبل الحضور.",
    "info.price.t": "الأسعار والتقديرات",
    "info.price.p1": "تختلف أسعارنا حسب <strong>حجم</strong> سيارتك و<strong>نوعها</strong> و<strong>حالتها</strong>. للحصول على سعر دقيق، تفضّل بزيارتنا أو اتصل بنا.",
    "info.price.p2": "بالنسبة إلى الخدمات المتخصّصة — التشميع والتنظيف بالشامبو والتجديد الشامل — لا بدّ من معاينة السيارة كي نقدّم لك تقديرًا عادلًا.",
    "info.pay.t": "الدفع", "info.pay.cash": "نقدًا فقط", "info.pay.d": "لا نقبل بطاقات الدفع أو الائتمان. يُرجى إحضار المبلغ نقدًا عند زيارتك.",
    "cta.t": "هل أنت مستعد لإعادة البريق إلى سيارتك؟", "cta.d": "اتصل بنا للحصول على سعر، أو تفضّل بزيارتنا مباشرة في لونغوي.", "cta.dir": "الاتجاهات",
    "foot.blurb": "غسيل سيارات سريع ومتقن وبأسعار معقولة في لونغوي، كيبيك.",
    "foot.nav": "التنقّل", "foot.about": "من نحن", "foot.reach": "للتواصل",
    "foot.city": "لونغوي، كيبيك", "foot.maps": "خرائط غوغل", "foot.rights": "جميع الحقوق محفوظة.",
    "foot.fine": "هذا الموقع تعريف بـ لاف أوتو إكسبرس 2007. الأسعار المعروضة تقديرية؛ وللحصول على معلومات رسمية يُرجى الاتصال بنا مباشرة.",
    "callbar": "اتصل بنا: 450-679-6095", "lang.label": "اختر اللغة"
  };

  T.es = {
    "meta.title": "Lave Auto Express 2007 | Lavado de autos en Longueuil, Quebec",
    "nav.services": "Servicios", "nav.pricing": "Precios", "nav.hours": "Horario", "nav.contact": "Contacto",
    "hero.eyebrow": "Longueuil, Quebec · Desde 2007",
    "hero.title1": "Su auto,", "hero.title2": "impecable y reluciente.",
    "hero.sub": "Lavado de autos experto en Longueuil. Una limpieza rápida, meticulosa y asequible, hecha a mano por un equipo apasionado.",
    "btn.call": "Llámenos", "btn.services": "Ver nuestros servicios",
    "trust.years.v": "17+", "trust.years.l": "años de experiencia",
    "trust.hours.v": "Lun–Sáb", "trust.hours.l": "9:00 – 17:00",
    "trust.cash.v": "Efectivo", "trust.cash.l": "pago solo en efectivo",
    "feat.fast.t": "Rápido", "feat.fast.d": "Servicio exprés sin cita previa para los lavados habituales.",
    "feat.care.t": "Cuidadoso", "feat.care.d": "Lavado a mano, productos de calidad y un acabado sin rayones.",
    "feat.price.t": "Asequible", "feat.price.d": "Precios honestos, según el tamaño y el estado del vehículo.",
    "feat.loved.t": "Bien valorado", "feat.loved.d": "Clientes fieles y reseñas reales en Google desde 2007.",
    "about.eyebrow": "Quiénes somos", "about.title": "Bienvenido a Lave Auto Express 2007",
    "about.text": "Ubicados en el corazón de Longueuil, somos su destino de confianza para una limpieza automotriz rápida, eficaz y asequible. Devolvemos a su vehículo su brillo original, con el cuidado por el detalle de un equipo que ama lo que hace.",
    "about.maps.s": "Encuéntrenos", "about.maps.d": "en Google Maps",
    "about.rev.s": "Nuestras reseñas", "about.rev.d": "en Google",
    "svc.eyebrow": "Nuestros servicios", "svc.title": "Lo que ofrecemos",
    "svc.lede": "Estos son algunos de los vehículos que hemos tenido el gusto de limpiar, tomados de las fotos de nuestros clientes. Para ver más, consulte nuestras reseñas de Google.",
    "svc.est": "estimación", "svc.quote": "Precio tras evaluación", "svc.quoteSub": "llámenos",
    "svc.1.t": "Lavado Exterior Completo", "svc.1.d": "Una limpieza exterior meticulosa para hacer brillar la carrocería. Incluye ruedas y neumáticos.",
    "svc.2.t": "Lavado Interior y Exterior", "svc.2.d": "Nuestro servicio estrella. Tratamiento completo: aspirado del habitáculo, limpieza de cristales y un lavado exterior impecable.", "svc.2.badge": "★ El más popular",
    "svc.3.t": "Cera o Pulido", "svc.3.d": "Proteja la pintura de su auto y déle un lustre deslumbrante con nuestra cera de alta calidad.",
    "svc.4.t": "Champú", "svc.4.d": "Limpieza a fondo de alfombras, asientos o del compartimiento del motor para eliminar manchas y suciedad incrustada.",
    "svc.5.t": "Restauración Completa", "svc.5.tag": "Paquete de lujo", "svc.5.d": "El paquete definitivo para devolver a su auto un aspecto de nuevo. Incluye todos nuestros servicios de limpieza y protección.",
    "svc.cta.t": "¿Tiene una necesidad particular?", "svc.cta.d": "Cada vehículo es distinto. Llámenos y le recomendaremos el servicio más adecuado, sin compromiso.",
    "info.eyebrow": "Información práctica", "info.title": "Precios, horario y pago",
    "info.hours.t": "Horario de apertura", "info.hours.week": "Lunes – Sábado", "info.hours.weekT": "9:00 – 17:00",
    "info.hours.sun": "Domingo", "info.hours.sunT": "Cerrado",
    "info.hours.note": "Nuestro horario puede variar según las condiciones meteorológicas y los días festivos. Ante la duda, llámenos antes de desplazarse.",
    "info.price.t": "Precios y estimaciones",
    "info.price.p1": "Nuestros precios varían según el <strong>tamaño</strong>, el <strong>tipo</strong> y el <strong>estado</strong> de su vehículo. Para un presupuesto exacto, visítenos o llámenos.",
    "info.price.p2": "Para los servicios especializados — cera, champú, restauración completa — es necesaria una evaluación del vehículo para darle una estimación justa.",
    "info.pay.t": "Pago", "info.pay.cash": "Solo en efectivo", "info.pay.d": "No aceptamos tarjetas de débito ni de crédito. Le rogamos traer el importe en efectivo durante su visita.",
    "cta.t": "¿Listo para devolverle el brillo a su auto?", "cta.d": "Llámenos para un presupuesto o venga directamente a vernos en Longueuil.", "cta.dir": "Cómo llegar",
    "foot.blurb": "Lavado de autos rápido, cuidadoso y asequible en Longueuil, Quebec.",
    "foot.nav": "Navegación", "foot.about": "Quiénes somos", "foot.reach": "Contáctenos",
    "foot.city": "Longueuil, Quebec", "foot.maps": "Google Maps", "foot.rights": "Todos los derechos reservados.",
    "foot.fine": "Este sitio es una presentación de Lave Auto Express 2007. Los precios indicados son estimaciones; para información oficial, contáctenos directamente.",
    "callbar": "Llámenos: 450-679-6095", "lang.label": "Elegir idioma"
  };

  T.it = {
    "meta.title": "Lave Auto Express 2007 | Autolavaggio a Longueuil, Quebec",
    "nav.services": "Servizi", "nav.pricing": "Prezzi", "nav.hours": "Orari", "nav.contact": "Contatti",
    "hero.eyebrow": "Longueuil, Quebec · Dal 2007",
    "hero.title1": "La tua auto,", "hero.title2": "splendente di pulizia.",
    "hero.sub": "Autolavaggio esperto a Longueuil. Una pulizia rapida, meticolosa e conveniente, eseguita a mano da un team appassionato.",
    "btn.call": "Chiamaci", "btn.services": "Scopri i servizi",
    "trust.years.v": "17+", "trust.years.l": "anni di esperienza",
    "trust.hours.v": "Lun–Sab", "trust.hours.l": "9:00 – 17:00",
    "trust.cash.v": "Contanti", "trust.cash.l": "pagamento in contanti",
    "feat.fast.t": "Veloce", "feat.fast.d": "Servizio espresso senza appuntamento per i lavaggi ordinari.",
    "feat.care.t": "Accurato", "feat.care.d": "Lavaggio a mano, prodotti di qualità, finitura senza graffi.",
    "feat.price.t": "Conveniente", "feat.price.d": "Prezzi onesti, in base alle dimensioni e alle condizioni del veicolo.",
    "feat.loved.t": "Apprezzato", "feat.loved.d": "Clienti fedeli e recensioni Google autentiche dal 2007.",
    "about.eyebrow": "Chi siamo", "about.title": "Benvenuti da Lave Auto Express 2007",
    "about.text": "Situati nel cuore di Longueuil, siamo il punto di riferimento per una pulizia dell'auto rapida, efficace e conveniente. Restituiamo al vostro veicolo la brillantezza originale, con la cura per il dettaglio di un team che ama il proprio lavoro.",
    "about.maps.s": "Dove siamo", "about.maps.d": "su Google Maps",
    "about.rev.s": "Le recensioni", "about.rev.d": "su Google",
    "svc.eyebrow": "I nostri servizi", "svc.title": "Cosa offriamo",
    "svc.lede": "Ecco alcuni dei veicoli che abbiamo avuto il piacere di pulire, tratti dalle foto dei nostri clienti. Per vederne altri, consultate le nostre recensioni Google.",
    "svc.est": "stima", "svc.quote": "Preventivo su valutazione", "svc.quoteSub": "chiamaci",
    "svc.1.t": "Lavaggio Esterno Completo", "svc.1.d": "Una pulizia esterna meticolosa per far brillare la carrozzeria. Include cerchi e pneumatici.",
    "svc.2.t": "Lavaggio Interno ed Esterno", "svc.2.d": "Il nostro servizio di punta. Trattamento completo: aspirazione dell'abitacolo, pulizia dei vetri e lavaggio esterno impeccabile.", "svc.2.badge": "★ Il più richiesto",
    "svc.3.t": "Cera o Lucidatura", "svc.3.d": "Proteggete la vernice della vostra auto e donatele una lucentezza brillante con la nostra cera di alta qualità.",
    "svc.4.t": "Shampoo", "svc.4.d": "Pulizia profonda di tappetini, sedili o vano motore per eliminare macchie e sporco incrostato.",
    "svc.5.t": "Rimessa a Nuovo", "svc.5.tag": "Pacchetto lusso", "svc.5.d": "Il pacchetto definitivo per restituire alla vostra auto un aspetto come nuovo. Include tutti i nostri servizi di pulizia e protezione.",
    "svc.cta.t": "Avete un'esigenza particolare?", "svc.cta.d": "Ogni veicolo è diverso. Chiamateci e vi consiglieremo il servizio più adatto, senza impegno.",
    "info.eyebrow": "Informazioni utili", "info.title": "Prezzi, orari e pagamento",
    "info.hours.t": "Orari di apertura", "info.hours.week": "Lunedì – Sabato", "info.hours.weekT": "9:00 – 17:00",
    "info.hours.sun": "Domenica", "info.hours.sunT": "Chiuso",
    "info.hours.note": "I nostri orari possono variare in base alle condizioni meteorologiche e ai giorni festivi. In caso di dubbio, chiamateci prima di venire.",
    "info.price.t": "Prezzi e preventivi",
    "info.price.p1": "I nostri prezzi variano in base alle <strong>dimensioni</strong>, al <strong>tipo</strong> e alle <strong>condizioni</strong> del veicolo. Per un preventivo preciso, passate a trovarci o chiamateci.",
    "info.price.p2": "Per i servizi specializzati — cera, shampoo, rimessa a nuovo — è necessaria una valutazione del veicolo per fornirvi una stima corretta.",
    "info.pay.t": "Pagamento", "info.pay.cash": "Solo contanti", "info.pay.d": "Non accettiamo carte di debito o di credito. Vi preghiamo di portare l'importo in contanti al momento della visita.",
    "cta.t": "Pronti a ridare splendore alla vostra auto?", "cta.d": "Chiamateci per un preventivo o venite direttamente a trovarci a Longueuil.", "cta.dir": "Indicazioni",
    "foot.blurb": "Autolavaggio rapido, accurato e conveniente a Longueuil, Quebec.",
    "foot.nav": "Navigazione", "foot.about": "Chi siamo", "foot.reach": "Contatti",
    "foot.city": "Longueuil, Quebec", "foot.maps": "Google Maps", "foot.rights": "Tutti i diritti riservati.",
    "foot.fine": "Questo sito è una presentazione di Lave Auto Express 2007. I prezzi indicati sono stime; per informazioni ufficiali, contattateci direttamente.",
    "callbar": "Chiamaci: 450-679-6095", "lang.label": "Scegli la lingua"
  };

  T.pt = {
    "meta.title": "Lave Auto Express 2007 | Lavagem de carros em Longueuil, Quebec",
    "nav.services": "Serviços", "nav.pricing": "Preços", "nav.hours": "Horário", "nav.contact": "Contacto",
    "hero.eyebrow": "Longueuil, Quebec · Desde 2007",
    "hero.title1": "O seu carro,", "hero.title2": "impecavelmente limpo.",
    "hero.sub": "Lavagem de carros especializada em Longueuil. Uma limpeza rápida, meticulosa e acessível, feita à mão por uma equipa dedicada.",
    "btn.call": "Ligue-nos", "btn.services": "Ver os serviços",
    "trust.years.v": "17+", "trust.years.l": "anos de experiência",
    "trust.hours.v": "Seg–Sáb", "trust.hours.l": "9:00 – 17:00",
    "trust.cash.v": "Dinheiro", "trust.cash.l": "pagamento em dinheiro",
    "feat.fast.t": "Rápido", "feat.fast.d": "Serviço expresso sem marcação para as lavagens habituais.",
    "feat.care.t": "Cuidadoso", "feat.care.d": "Lavagem à mão, produtos de qualidade, acabamento sem riscos.",
    "feat.price.t": "Acessível", "feat.price.d": "Preços honestos, conforme o tamanho e o estado do veículo.",
    "feat.loved.t": "Bem avaliado", "feat.loved.d": "Clientes fiéis e avaliações reais no Google desde 2007.",
    "about.eyebrow": "Quem somos", "about.title": "Bem-vindo à Lave Auto Express 2007",
    "about.text": "Situados no coração de Longueuil, somos o seu destino de eleição para uma limpeza automóvel rápida, eficaz e acessível. Devolvemos ao seu veículo o brilho original, com o cuidado ao detalhe de uma equipa que gosta do que faz.",
    "about.maps.s": "Encontre-nos", "about.maps.d": "no Google Maps",
    "about.rev.s": "As nossas avaliações", "about.rev.d": "no Google",
    "svc.eyebrow": "Os nossos serviços", "svc.title": "O que oferecemos",
    "svc.lede": "Eis alguns dos veículos que tivemos o prazer de limpar, a partir das fotografias dos nossos clientes. Para ver mais, consulte as nossas avaliações no Google.",
    "svc.est": "estimativa", "svc.quote": "Orçamento após avaliação", "svc.quoteSub": "ligue-nos",
    "svc.1.t": "Lavagem Exterior Completa", "svc.1.d": "Uma limpeza exterior meticulosa para fazer brilhar a carroçaria. Inclui jantes e pneus.",
    "svc.2.t": "Lavagem Interior e Exterior", "svc.2.d": "O nosso serviço de eleição. Tratamento completo: aspiração do habitáculo, limpeza dos vidros e uma lavagem exterior impecável.", "svc.2.badge": "★ O mais procurado",
    "svc.3.t": "Cera ou Polimento", "svc.3.d": "Proteja a pintura do seu carro e dê-lhe um brilho deslumbrante com a nossa cera de alta qualidade.",
    "svc.4.t": "Champô", "svc.4.d": "Limpeza profunda de tapetes, bancos ou do compartimento do motor para eliminar manchas e sujidade entranhada.",
    "svc.5.t": "Renovação Completa", "svc.5.tag": "Pacote de luxo", "svc.5.d": "O pacote definitivo para devolver ao seu carro um aspeto de novo. Inclui todos os nossos serviços de limpeza e proteção.",
    "svc.cta.t": "Tem uma necessidade específica?", "svc.cta.d": "Cada veículo é diferente. Ligue-nos e aconselhamos o serviço mais adequado, sem compromisso.",
    "info.eyebrow": "Informações práticas", "info.title": "Preços, horário e pagamento",
    "info.hours.t": "Horário de funcionamento", "info.hours.week": "Segunda – Sábado", "info.hours.weekT": "9:00 – 17:00",
    "info.hours.sun": "Domingo", "info.hours.sunT": "Encerrado",
    "info.hours.note": "O nosso horário pode variar consoante as condições meteorológicas e os feriados. Em caso de dúvida, ligue-nos antes de se deslocar.",
    "info.price.t": "Preços e estimativas",
    "info.price.p1": "Os nossos preços variam consoante o <strong>tamanho</strong>, o <strong>tipo</strong> e o <strong>estado</strong> do seu veículo. Para um orçamento exato, visite-nos ou ligue-nos.",
    "info.price.p2": "Para os serviços especializados — cera, champô, renovação completa — é necessária uma avaliação do veículo para lhe dar uma estimativa justa.",
    "info.pay.t": "Pagamento", "info.pay.cash": "Apenas dinheiro", "info.pay.d": "Não aceitamos cartões de débito nem de crédito. Agradecemos que traga o valor em dinheiro na sua visita.",
    "cta.t": "Pronto para devolver o brilho ao seu carro?", "cta.d": "Ligue-nos para um orçamento ou venha visitar-nos em Longueuil.", "cta.dir": "Como chegar",
    "foot.blurb": "Lavagem de carros rápida, cuidada e acessível em Longueuil, Quebec.",
    "foot.nav": "Navegação", "foot.about": "Quem somos", "foot.reach": "Contacte-nos",
    "foot.city": "Longueuil, Quebec", "foot.maps": "Google Maps", "foot.rights": "Todos os direitos reservados.",
    "foot.fine": "Este sítio é uma apresentação da Lave Auto Express 2007. Os preços indicados são estimativas; para informações oficiais, contacte-nos diretamente.",
    "callbar": "Ligue-nos: 450-679-6095", "lang.label": "Escolher idioma"
  };

  T.ht = {
    "meta.title": "Lave Auto Express 2007 | Lavaj machin nan Longueuil, Quebec",
    "nav.services": "Sèvis", "nav.pricing": "Pri", "nav.hours": "Orè", "nav.contact": "Kontak",
    "hero.eyebrow": "Longueuil, Quebec · Depi 2007",
    "hero.title1": "Machin ou,", "hero.title2": "klere nèt ale.",
    "hero.sub": "Lavaj machin ak eksperyans nan Longueuil. Yon netwayaj rapid, swaye epi abòdab — fèt alamen pa yon ekip ki renmen travay li.",
    "btn.call": "Rele nou", "btn.services": "Gade sèvis nou yo",
    "trust.years.v": "17+", "trust.years.l": "lane eksperyans",
    "trust.hours.v": "Len–Sam", "trust.hours.l": "9:00 – 17:00",
    "trust.cash.v": "Kach", "trust.cash.l": "peman an kach sèlman",
    "feat.fast.t": "Rapid", "feat.fast.d": "Sèvis rapid san randevou pou lavaj òdinè yo.",
    "feat.care.t": "Swaye", "feat.care.d": "Lavaj alamen, pwodwi bon kalite, yon finisyon san grafouyen.",
    "feat.price.t": "Abòdab", "feat.price.d": "Pri onèt, dapre gwosè ak kondisyon machin nan.",
    "feat.loved.t": "Apresye", "feat.loved.d": "Kliyan fidèl ak vrè kòmantè sou Google depi 2007.",
    "about.eyebrow": "Kiyès nou ye", "about.title": "Byenveni nan Lave Auto Express 2007",
    "about.text": "Nou chita nan kè Longueuil, e nou se chwa ou pou yon netwayaj machin rapid, efikas epi abòdab. Nou remèt machin ou klere jan l te ye a — ak atansyon yon ekip ki renmen sa l ap fè.",
    "about.maps.s": "Jwenn nou", "about.maps.d": "sou Google Maps",
    "about.rev.s": "Kòmantè nou yo", "about.rev.d": "sou Google",
    "svc.eyebrow": "Sèvis nou yo", "svc.title": "Sa nou ofri",
    "svc.lede": "Men kèk machin nou te gen plezi netwaye, ki soti nan foto kliyan nou yo. Pou wè plis, gade kòmantè nou yo sou Google.",
    "svc.est": "estimasyon", "svc.quote": "Pri apre evalyasyon", "svc.quoteSub": "rele nou",
    "svc.1.t": "Lavaj Deyò Konplè", "svc.1.d": "Yon netwayaj deyò swaye pou fè kawoseri a klere. Li gen ladan wou ak kawoutchou yo.",
    "svc.2.t": "Lavaj Anndan ak Deyò", "svc.2.d": "Sèvis vedèt nou an. Tretman konplè: aspire anndan an, netwaye vit yo ak yon lavaj deyò san repwòch.", "svc.2.badge": "★ Pi popilè a",
    "svc.3.t": "Siy oswa Polisaj", "svc.3.d": "Pwoteje penti machin ou epi ba li yon klète ekstraòdinè ak siy bon kalite nou an.",
    "svc.4.t": "Chanpou", "svc.4.d": "Netwayaj an pwofondè pou tapi, chèz oswa konpatiman motè a, pou retire tach ak salte ki fonse.",
    "svc.5.t": "Remiz an Eta Nèf", "svc.5.tag": "Fòmil liks", "svc.5.d": "Fòmil ki pi konplè a pou remèt machin ou yon aparans tou nèf. Li gen ladan tout sèvis netwayaj ak pwoteksyon nou yo.",
    "svc.cta.t": "Ou gen yon bezwen espesyal?", "svc.cta.d": "Chak machin diferan. Rele nou epi n ap konseye ou sèvis ki pi bon pou ou a — san okenn angajman.",
    "info.eyebrow": "Enfòmasyon pratik", "info.title": "Pri, orè ak peman",
    "info.hours.t": "Lè louvri", "info.hours.week": "Lendi – Samdi", "info.hours.weekT": "9:00 – 17:00",
    "info.hours.sun": "Dimanch", "info.hours.sunT": "Fèmen",
    "info.hours.note": "Orè nou an ka chanje dapre tan an ak jou ferye yo. Si ou pa sèten, rele nou anvan ou deplase.",
    "info.price.t": "Pri ak estimasyon",
    "info.price.p1": "Pri nou yo chanje dapre <strong>gwosè</strong>, <strong>kalite</strong> ak <strong>kondisyon</strong> machin ou an. Pou yon pri egzak, pase wè nou oswa rele nou.",
    "info.price.p2": "Pou sèvis espesyalize yo — siy, chanpou, remiz an eta nèf — nou dwe evalye machin nan pou nou ka ba ou yon estimasyon jis.",
    "info.pay.t": "Peman", "info.pay.cash": "Kach sèlman", "info.pay.d": "Nou pa aksepte kat debi ni kat kredi. Tanpri pote lajan an an kach lè w ap vini.",
    "cta.t": "Ou pare pou fè machin ou klere ankò?", "cta.d": "Rele nou pou yon pri oswa pase wè nou dirèkteman nan Longueuil.", "cta.dir": "Direksyon",
    "foot.blurb": "Lavaj machin rapid, swaye epi abòdab nan Longueuil, Quebec.",
    "foot.nav": "Navigasyon", "foot.about": "Kiyès nou ye", "foot.reach": "Kontakte nou",
    "foot.city": "Longueuil, Quebec", "foot.maps": "Google Maps", "foot.rights": "Tout dwa rezève.",
    "foot.fine": "Sit sa a se yon prezantasyon Lave Auto Express 2007. Pri ki parèt yo se estimasyon; pou enfòmasyon ofisyèl, tanpri kontakte nou dirèkteman.",
    "callbar": "Rele nou: 450-679-6095", "lang.label": "Chwazi lang"
  };

  T.zh = {
    "meta.title": "Lave Auto Express 2007 | 魁北克朗格伊洗车服务",
    "nav.services": "服务", "nav.pricing": "价格", "nav.hours": "营业时间", "nav.contact": "联系我们",
    "hero.eyebrow": "魁北克省朗格伊 · 始于 2007 年",
    "hero.title1": "您的爱车，", "hero.title2": "洁净如新。",
    "hero.sub": "朗格伊专业洗车服务。快速、细致且价格合理，由热爱这份工作的团队全程手工完成。",
    "btn.call": "致电我们", "btn.services": "查看服务项目",
    "trust.years.v": "17+", "trust.years.l": "年从业经验",
    "trust.hours.v": "周一至周六", "trust.hours.l": "9:00 – 17:00",
    "trust.cash.v": "现金", "trust.cash.l": "仅收现金",
    "feat.fast.t": "快捷", "feat.fast.d": "常规洗车无需预约，随到随洗。",
    "feat.care.t": "细致", "feat.care.d": "全手工清洗，优质产品，无划痕收尾。",
    "feat.price.t": "实惠", "feat.price.d": "价格公道，按车辆大小与车况计算。",
    "feat.loved.t": "口碑良好", "feat.loved.d": "自 2007 年以来的忠实顾客与真实谷歌评价。",
    "about.eyebrow": "关于我们", "about.title": "欢迎光临 Lave Auto Express 2007",
    "about.text": "我们位于朗格伊市中心，是您选择快速、高效、实惠汽车清洁服务的理想之选。我们让您的爱车重现原有光泽——凭借一支热爱本职工作的团队对细节的用心。",
    "about.maps.s": "查找我们", "about.maps.d": "在谷歌地图上",
    "about.rev.s": "顾客评价", "about.rev.d": "在谷歌上",
    "svc.eyebrow": "我们的服务", "svc.title": "服务项目",
    "svc.lede": "以下是我们有幸清洗过的部分车辆，照片来自我们的顾客。如需查看更多，请浏览我们的谷歌评价。",
    "svc.est": "预估价", "svc.quote": "需评估后报价", "svc.quoteSub": "请致电",
    "svc.1.t": "全车外部清洗", "svc.1.d": "细致的外部清洁，让车身焕发光泽，包含轮毂与轮胎清洗。",
    "svc.2.t": "内外全面清洗", "svc.2.d": "我们的招牌服务。全套护理：车厢吸尘、玻璃清洁，以及无可挑剔的外部清洗。", "svc.2.badge": "★ 最受欢迎",
    "svc.3.t": "打蜡与抛光", "svc.3.d": "使用我们的高品质车蜡保护漆面，赋予爱车耀眼光泽。",
    "svc.4.t": "深层清洗", "svc.4.d": "对脚垫、座椅或发动机舱进行深层清洁，去除污渍与顽固积垢。",
    "svc.5.t": "全面翻新", "svc.5.tag": "豪华套餐", "svc.5.d": "让爱车焕然一新的顶级套餐，涵盖我们全部的清洁与养护服务。",
    "svc.cta.t": "有特殊需求？", "svc.cta.d": "每辆车情况不同。致电我们，我们会为您推荐最合适的服务——绝无强制消费。",
    "info.eyebrow": "实用信息", "info.title": "价格、营业时间与付款",
    "info.hours.t": "营业时间", "info.hours.week": "周一至周六", "info.hours.weekT": "9:00 – 17:00",
    "info.hours.sun": "周日", "info.hours.sunT": "休息",
    "info.hours.note": "营业时间可能因天气状况及节假日而调整。如有疑问，请在出发前致电确认。",
    "info.price.t": "价格与预估",
    "info.price.p1": "价格依据车辆的<strong>尺寸</strong>、<strong>类型</strong>与<strong>车况</strong>而定。如需准确报价，欢迎到店或致电咨询。",
    "info.price.p2": "打蜡、深层清洗、全面翻新等专项服务，需先对车辆进行评估，方能提供合理报价。",
    "info.pay.t": "付款方式", "info.pay.cash": "仅收现金", "info.pay.d": "我们不接受借记卡或信用卡。到店时请备好现金，谢谢配合。",
    "cta.t": "准备好让爱车重现光彩了吗？", "cta.d": "致电我们获取报价，或直接光临朗格伊门店。", "cta.dir": "导航路线",
    "foot.blurb": "魁北克省朗格伊快捷、细致、实惠的洗车服务。",
    "foot.nav": "导航", "foot.about": "关于我们", "foot.reach": "联系方式",
    "foot.city": "魁北克省朗格伊", "foot.maps": "谷歌地图", "foot.rights": "版权所有。",
    "foot.fine": "本网站为 Lave Auto Express 2007 的介绍页面。所列价格均为预估；如需正式信息，请直接与我们联系。",
    "callbar": "致电我们：450-679-6095", "lang.label": "选择语言"
  };

  T.ru = {
    "meta.title": "Lave Auto Express 2007 | Автомойка в Лонгёй, Квебек",
    "nav.services": "Услуги", "nav.pricing": "Цены", "nav.hours": "Часы работы", "nav.contact": "Контакты",
    "hero.eyebrow": "Лонгёй, Квебек · С 2007 года",
    "hero.title1": "Ваш автомобиль —", "hero.title2": "безупречно чистый.",
    "hero.sub": "Профессиональная автомойка в Лонгёй. Быстрая, тщательная и доступная мойка, выполненная вручную командой, которая любит своё дело.",
    "btn.call": "Позвоните нам", "btn.services": "Наши услуги",
    "trust.years.v": "17+", "trust.years.l": "лет опыта",
    "trust.hours.v": "Пн–Сб", "trust.hours.l": "9:00 – 17:00",
    "trust.cash.v": "Наличные", "trust.cash.l": "оплата только наличными",
    "feat.fast.t": "Быстро", "feat.fast.d": "Экспресс-обслуживание без записи для обычной мойки.",
    "feat.care.t": "Аккуратно", "feat.care.d": "Ручная мойка, качественные средства, результат без царапин.",
    "feat.price.t": "Доступно", "feat.price.d": "Честные цены с учётом размера и состояния автомобиля.",
    "feat.loved.t": "Нас ценят", "feat.loved.d": "Постоянные клиенты и настоящие отзывы в Google с 2007 года.",
    "about.eyebrow": "О нас", "about.title": "Добро пожаловать в Lave Auto Express 2007",
    "about.text": "Мы находимся в центре Лонгёй и предлагаем быструю, эффективную и доступную мойку автомобилей. Мы возвращаем вашей машине первоначальный блеск — со вниманием к деталям, свойственным команде, которая любит своё дело.",
    "about.maps.s": "Найти нас", "about.maps.d": "на Google Картах",
    "about.rev.s": "Наши отзывы", "about.rev.d": "в Google",
    "svc.eyebrow": "Наши услуги", "svc.title": "Что мы предлагаем",
    "svc.lede": "Вот некоторые автомобили, которые нам довелось привести в порядок, — снимки предоставлены нашими клиентами. Больше фотографий смотрите в наших отзывах на Google.",
    "svc.est": "оценка", "svc.quote": "Цена после осмотра", "svc.quoteSub": "позвоните нам",
    "svc.1.t": "Полная наружная мойка", "svc.1.d": "Тщательная наружная мойка, возвращающая блеск кузову. Включает мойку дисков и шин.",
    "svc.2.t": "Мойка снаружи и внутри", "svc.2.d": "Наша фирменная услуга. Полный комплекс: пылесос салона, чистка стёкол и безупречная наружная мойка.", "svc.2.badge": "★ Самая популярная",
    "svc.3.t": "Воск или полировка", "svc.3.d": "Защитите лакокрасочное покрытие и придайте автомобилю яркий блеск нашим воском высокого качества.",
    "svc.4.t": "Химчистка", "svc.4.d": "Глубокая чистка ковриков, сидений или моторного отсека для удаления пятен и въевшейся грязи.",
    "svc.5.t": "Полное восстановление", "svc.5.tag": "Люкс-пакет", "svc.5.d": "Максимальный пакет, возвращающий автомобилю вид нового. Включает все наши услуги по чистке и защите.",
    "svc.cta.t": "Особый запрос?", "svc.cta.d": "Каждый автомобиль индивидуален. Позвоните нам, и мы подскажем наиболее подходящую услугу — без каких-либо обязательств.",
    "info.eyebrow": "Полезная информация", "info.title": "Цены, часы работы и оплата",
    "info.hours.t": "Часы работы", "info.hours.week": "Понедельник – Суббота", "info.hours.weekT": "9:00 – 17:00",
    "info.hours.sun": "Воскресенье", "info.hours.sunT": "Закрыто",
    "info.hours.note": "Часы работы могут меняться в зависимости от погоды и праздничных дней. Если сомневаетесь, позвоните нам перед поездкой.",
    "info.price.t": "Цены и предварительная оценка",
    "info.price.p1": "Наши цены зависят от <strong>размера</strong>, <strong>типа</strong> и <strong>состояния</strong> автомобиля. Для точного расчёта заезжайте к нам или позвоните.",
    "info.price.p2": "Для специализированных услуг — воск, химчистка, полное восстановление — необходим осмотр автомобиля, чтобы назвать справедливую цену.",
    "info.pay.t": "Оплата", "info.pay.cash": "Только наличные", "info.pay.d": "Мы не принимаем дебетовые и кредитные карты. Пожалуйста, возьмите с собой наличные.",
    "cta.t": "Готовы вернуть автомобилю блеск?", "cta.d": "Позвоните нам для расчёта стоимости или просто заезжайте к нам в Лонгёй.", "cta.dir": "Маршрут",
    "foot.blurb": "Быстрая, аккуратная и доступная мойка автомобилей в Лонгёй, Квебек.",
    "foot.nav": "Навигация", "foot.about": "О нас", "foot.reach": "Связаться с нами",
    "foot.city": "Лонгёй, Квебек", "foot.maps": "Google Карты", "foot.rights": "Все права защищены.",
    "foot.fine": "Этот сайт представляет компанию Lave Auto Express 2007. Указанные цены являются ориентировочными; за официальной информацией обращайтесь к нам напрямую.",
    "callbar": "Позвоните нам: 450-679-6095", "lang.label": "Выбрать язык"
  };

  T.vi = {
    "meta.title": "Lave Auto Express 2007 | Rửa xe tại Longueuil, Quebec",
    "nav.services": "Dịch vụ", "nav.pricing": "Bảng giá", "nav.hours": "Giờ mở cửa", "nav.contact": "Liên hệ",
    "hero.eyebrow": "Longueuil, Quebec · Từ năm 2007",
    "hero.title1": "Xe của bạn,", "hero.title2": "sạch bóng như mới.",
    "hero.sub": "Dịch vụ rửa xe chuyên nghiệp tại Longueuil. Nhanh chóng, tỉ mỉ và hợp túi tiền — thực hiện thủ công bởi đội ngũ tận tâm.",
    "btn.call": "Gọi cho chúng tôi", "btn.services": "Xem dịch vụ",
    "trust.years.v": "17+", "trust.years.l": "năm kinh nghiệm",
    "trust.hours.v": "T2–T7", "trust.hours.l": "9:00 – 17:00",
    "trust.cash.v": "Tiền mặt", "trust.cash.l": "chỉ thanh toán tiền mặt",
    "feat.fast.t": "Nhanh chóng", "feat.fast.d": "Dịch vụ nhanh, không cần hẹn trước với các gói rửa thông thường.",
    "feat.care.t": "Tỉ mỉ", "feat.care.d": "Rửa bằng tay, sản phẩm chất lượng, hoàn thiện không trầy xước.",
    "feat.price.t": "Hợp túi tiền", "feat.price.d": "Giá hợp lý, tùy theo kích thước và tình trạng xe.",
    "feat.loved.t": "Được tin cậy", "feat.loved.d": "Khách hàng thân thiết và đánh giá thật trên Google từ năm 2007.",
    "about.eyebrow": "Về chúng tôi", "about.title": "Chào mừng đến với Lave Auto Express 2007",
    "about.text": "Tọa lạc ngay trung tâm Longueuil, chúng tôi là lựa chọn đáng tin cậy cho dịch vụ làm sạch xe nhanh chóng, hiệu quả và hợp túi tiền. Chúng tôi trả lại vẻ sáng bóng ban đầu cho chiếc xe của bạn — với sự chăm chút của một đội ngũ yêu nghề.",
    "about.maps.s": "Tìm chúng tôi", "about.maps.d": "trên Google Maps",
    "about.rev.s": "Đánh giá", "about.rev.d": "trên Google",
    "svc.eyebrow": "Dịch vụ của chúng tôi", "svc.title": "Những gì chúng tôi cung cấp",
    "svc.lede": "Dưới đây là một số chiếc xe chúng tôi đã hân hạnh chăm sóc, trích từ ảnh của khách hàng. Để xem thêm, mời bạn tham khảo đánh giá của chúng tôi trên Google.",
    "svc.est": "ước tính", "svc.quote": "Báo giá sau khi xem xe", "svc.quoteSub": "hãy gọi cho chúng tôi",
    "svc.1.t": "Rửa Ngoại Thất Toàn Diện", "svc.1.d": "Làm sạch bên ngoài tỉ mỉ giúp thân xe sáng bóng. Bao gồm cả vành và lốp.",
    "svc.2.t": "Rửa Nội Thất & Ngoại Thất", "svc.2.d": "Dịch vụ chủ lực của chúng tôi. Chăm sóc trọn gói: hút bụi khoang lái, lau kính và rửa ngoại thất hoàn hảo.", "svc.2.badge": "★ Được chọn nhiều nhất",
    "svc.3.t": "Phủ Sáp hoặc Đánh Bóng", "svc.3.d": "Bảo vệ lớp sơn và mang lại độ bóng rực rỡ cho xe với sáp cao cấp của chúng tôi.",
    "svc.4.t": "Giặt Nội Thất", "svc.4.d": "Làm sạch sâu thảm sàn, ghế ngồi hoặc khoang máy để loại bỏ vết bẩn và bụi bám lâu ngày.",
    "svc.5.t": "Phục Hồi Toàn Diện", "svc.5.tag": "Gói cao cấp", "svc.5.d": "Gói dịch vụ trọn vẹn nhất giúp xe trở lại như mới. Bao gồm toàn bộ dịch vụ làm sạch và bảo vệ của chúng tôi.",
    "svc.cta.t": "Bạn có nhu cầu riêng?", "svc.cta.d": "Mỗi chiếc xe một khác. Hãy gọi cho chúng tôi để được tư vấn dịch vụ phù hợp nhất — hoàn toàn không bắt buộc.",
    "info.eyebrow": "Thông tin hữu ích", "info.title": "Giá cả, giờ mở cửa và thanh toán",
    "info.hours.t": "Giờ mở cửa", "info.hours.week": "Thứ Hai – Thứ Bảy", "info.hours.weekT": "9:00 – 17:00",
    "info.hours.sun": "Chủ Nhật", "info.hours.sunT": "Đóng cửa",
    "info.hours.note": "Giờ mở cửa có thể thay đổi tùy thời tiết và ngày lễ. Nếu chưa chắc chắn, xin gọi cho chúng tôi trước khi đến.",
    "info.price.t": "Giá cả và ước tính",
    "info.price.p1": "Giá thay đổi tùy theo <strong>kích thước</strong>, <strong>loại xe</strong> và <strong>tình trạng</strong> xe của bạn. Để có báo giá chính xác, mời bạn ghé qua hoặc gọi cho chúng tôi.",
    "info.price.p2": "Với các dịch vụ chuyên sâu — phủ sáp, giặt nội thất, phục hồi toàn diện — chúng tôi cần xem xe trực tiếp để đưa ra mức giá hợp lý.",
    "info.pay.t": "Thanh toán", "info.pay.cash": "Chỉ nhận tiền mặt", "info.pay.d": "Chúng tôi không nhận thẻ ghi nợ hay thẻ tín dụng. Vui lòng mang theo tiền mặt khi đến.",
    "cta.t": "Sẵn sàng trả lại vẻ sáng bóng cho xe?", "cta.d": "Gọi cho chúng tôi để nhận báo giá, hoặc ghé thẳng cửa hàng tại Longueuil.", "cta.dir": "Chỉ đường",
    "foot.blurb": "Rửa xe nhanh chóng, tỉ mỉ và hợp túi tiền tại Longueuil, Quebec.",
    "foot.nav": "Điều hướng", "foot.about": "Về chúng tôi", "foot.reach": "Liên hệ",
    "foot.city": "Longueuil, Quebec", "foot.maps": "Google Maps", "foot.rights": "Bảo lưu mọi quyền.",
    "foot.fine": "Trang web này giới thiệu về Lave Auto Express 2007. Giá hiển thị chỉ mang tính ước tính; để có thông tin chính thức, vui lòng liên hệ trực tiếp với chúng tôi.",
    "callbar": "Gọi cho chúng tôi: 450-679-6095", "lang.label": "Chọn ngôn ngữ"
  };

  /* ---------------------------------------------------------------------- */

  var STORE = "lae2007.lang";
  var btn = document.getElementById("langBtn");
  var menu = document.getElementById("langMenu");
  var code = document.getElementById("langCode");
  var wrap = document.getElementById("lang");
  if (!btn || !menu || !code) return;

  function meta(lang) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === lang) return LANGS[i];
    return LANGS[0];
  }

  function apply(lang) {
    var dict = T[lang] || T.fr;
    var info = meta(lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v == null) return;
      if (el.hasAttribute("data-i18n-html")) el.innerHTML = v;
      else el.textContent = v;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-aria")];
      if (v != null) el.setAttribute("aria-label", v);
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];

    var root = document.documentElement;
    root.setAttribute("lang", lang === "fr" ? "fr-CA" : lang);
    root.setAttribute("dir", info.rtl ? "rtl" : "ltr");

    code.textContent = info.short;
    menu.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-checked", String(b.getAttribute("data-lang") === lang));
    });

    try { localStorage.setItem(STORE, lang); } catch (e) { /* navigation privée */ }
  }

  function open(state) {
    menu.classList.toggle("open", state);
    btn.setAttribute("aria-expanded", String(state));
  }

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    open(btn.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lang]");
    if (!b) return;
    apply(b.getAttribute("data-lang"));
    open(false);
    btn.focus();
  });

  document.addEventListener("click", function (e) {
    if (wrap && !wrap.contains(e.target)) open(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      open(false);
      btn.focus();
    }
  });

  /* Le français reste la langue par défaut du site : on ne bascule que si le
     visiteur a lui-même choisi une autre langue lors d'une visite précédente.
     La langue du navigateur n'est volontairement pas prise en compte. */
  var start = null;
  try { start = localStorage.getItem(STORE); } catch (e) { /* ignore */ }
  if (start && T[start] && start !== "fr") apply(start);
  else code.textContent = "FR";
})();
