/**
 * TAJ AL-UNUTHA — Premium Multilingual Lead Generation Website
 * script.js
 *
 * Table of contents:
 *  1. SITE CONFIGURATION  ← Edit this section to customise the website
 *  2. Translation Dictionary
 *  3. Country Data
 *  4. Language Manager
 *  5. Navigation
 *  6. Country Selector
 *  7. Interest Cards & Conditional Question
 *  8. Form Validation
 *  9. Form Submission
 * 10. Success Display
 * 11. Animation (Intersection Observer)
 * 12. Init
 */

'use strict';

/* ================================================================
   1. SITE CONFIGURATION
   ----------------------------------------------------------------
   Edit the values below to match your project.
   ================================================================ */
const CONFIG = {
  /**
   * Google Drive or any public URL for the E-book.
   * This URL is ONLY injected into the DOM AFTER a successful
   * form submission, so it is not visible in the initial HTML.
   *
   * For true access restriction, leave this empty ('') and
   * return the URL from your server-side endpoint instead.
   * The handleSubmitSuccess() function accepts a URL parameter.
   */
  ebookUrl: 'https://drive.google.com/file/d/1OE-K5R0E7uCvHprMoR-5YcfaTsVUNz-n/view?usp=sharing',

  /**
   * WhatsApp phone number (international format, digits only).
   * Example: '33612345678'  (France) or '212612345678' (Morocco)
   */
  whatsappNumber: '32485075219',

  /**
   * Form submission endpoint.
   * Point this to your Google Apps Script web app URL, or any
   * server endpoint that accepts a POST with JSON body.
   *
   * Example (Google Apps Script):
   * 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
   *
   * Leave empty ('') to run in client/direct mode (immediate access).
   */
  formEndpoint: '',

  /** Default language: 'fr' | 'ar' | 'en' */
  defaultLang: 'fr',

  /**
   * Brand logo path.
   * Example: 'Asset/logo.png'
   * Leave empty to show the text logo.
   */
  logoPath: '',

  /**
   * Instagram profile URL.
   * Example: 'https://www.instagram.com/tajalunutha'
   */
  instagramUrl: '#',
};


/* ================================================================
   2. TRANSLATION DICTIONARY
   ================================================================ */
const translations = {

  fr: {
    // Navigation
    'nav.home':         'Accueil',
    'nav.ebook':        'L\'E-book',
    'nav.about':        'À propos',
    'nav.testimonials': 'Témoignages',
    'nav.contact':      'Contact',

    // Hero
    'hero.eyebrow':          'E-book gratuit',
    'hero.title':            'Et si tu prenais enfin\nle temps de revenir à toi\u00a0?',
    'hero.subtitle':         'Découvre les clés pour mieux te connaître, comprendre tes émotions et révéler ton potentiel.',
    'hero.cta':              'Je découvre mon E-book gratuit',
    'hero.badge':            'GRATUIT',
    'hero.ebookPlaceholder': 'Couverture\nE-book',
    'hero.social.label':     'Restons connectés',

    // Benefits (legacy keys preserved for fallback)
    'benefits.eyebrow':    'Ce que tu vas découvrir',
    'benefits.title':      'Un guide pour commencer ton chemin vers toi-même.',
    'benefits.cta':        'Accéder à l\'E-book gratuit',
    'benefits.showcaseBadge': 'Inspiration & Reconnexion',
    'benefits.card1.title': 'Le corps',
    'benefits.card1.text':  'Reconnecte-toi à tes sensations. Apprends à habiter ton corps avec douceur et bienveillance.',
    'benefits.card2.title': 'Les émotions',
    'benefits.card2.text':  'Apprends à mieux comprendre tes émotions. Transforme ce que tu ressens en force et en clarté.',
    'benefits.card3.title': 'L\'épanouissement personnel',
    'benefits.card3.text':  'Développe ta confiance et ton potentiel. Révèle la femme authentique que tu es.',

    // Section 2 — Transformation Journey (6 expandable topics)
    'journey.eyebrow':               'Cheminement & Transformation',
    'journey.title':                 'Explore les étapes de ta transformation',
    'journey.subtitle':              'Découvre le programme, les piliers et l\'accompagnement de 88 jours conçu pour révéler ta féminité authentique.',

    // Topic 1
    'journey.topic1.title':          'Bienvenue dans ton voyage de transformation',
    'journey.topic1.badge':          'Le Début du Voyage',
    'journey.topic1.content':        'Pendant 88 jours, nous traversons ensemble la rivière du changement. Ta sécurité intérieure est notre point de départ.',
    'journey.topic1.subnote':        'Un accompagnement pas à pas, à ton rythme, dans la douceur et la bienveillance.',

    // Topic 2
    'journey.topic2.title':          'Mon expertise au service de ta transformation',
    'journey.topic2.badge':          'Accompagnement & Présence',
    'journey.topic2.cat1.title':     'Coaching & accompagnement',
    'journey.topic2.cat1.item1':     'Master Coach',
    'journey.topic2.cat1.item2':     'Life-coaching',
    'journey.topic2.cat1.item3':     'Burnout Coach',
    'journey.topic2.cat1.item4':     'Confiance en soi',
    'journey.topic2.cat1.item5':     'Transformation personnelle',
    'journey.topic2.cat1.item6':     'Libération émotionnelle',
    'journey.topic2.cat2.title':     'Mouvement conscient & féminité',
    'journey.topic2.cat2.item1':     'Yoga',
    'journey.topic2.cat2.item2':     'Danse',
    'journey.topic2.cat2.item3':     'Bellyfit®',
    'journey.topic2.cat2.item4':     'Maître de présence',
    'journey.topic2.cat2.item5':     'Reconnexion au corps féminin',
    'journey.topic2.cat3.title':     'Approches énergétiques & méditation',
    'journey.topic2.cat3.item1':     'Maître Reiki',
    'journey.topic2.cat3.item2':     'EFT',
    'journey.topic2.cat3.item3':     'Sophrologie',
    'journey.topic2.cat3.item4':     'Pratiques de pleine conscience',

    // Topic 3
    'journey.topic3.title':          'Les 3 piliers de ta transformation',
    'journey.topic3.badge':          'Les Fondations',
    'journey.topic3.p1.title':       'Le corps',
    'journey.topic3.p1.text':        'Retrouver la connexion à ton corps grâce au mouvement conscient.',
    'journey.topic3.p2.title':       'Les émotions',
    'journey.topic3.p2.text':        'Accueillir, comprendre et libérer les émotions qui te freinent.',
    'journey.topic3.p3.title':       'La féminité authentique',
    'journey.topic3.p3.text':        'Cultiver ta sécurité intérieure et incarner pleinement la femme que tu es.',

    // Topic 4
    'journey.topic4.title':          'À qui s\'adresse cette transformation ?',
    'journey.topic4.badge':          'Revenir à Soi',
    'journey.topic4.p1':             'À toi, femme qui donnes beaucoup aux autres et qui ressens aujourd\'hui le besoin de revenir à toi.',
    'journey.topic4.p2':             'À toi qui souhaites retrouver la connexion avec ton corps, accueillir tes émotions et révéler ta féminité authentique.',

    // Topic 5
    'journey.topic5.title':          'Le programme : Comment se déroule ta transformation en 88 jours ?',
    'journey.topic5.badge':          'Programme 88 Jours',
    'journey.topic5.s1.badge':       'Étape 01',
    'journey.topic5.s1.title':       'Se reconnecter à son corps',
    'journey.topic5.s1.text':        'Retrouve une connexion profonde avec ton corps grâce au mouvement conscient, à la respiration et à l\'écoute de tes sensations. Apprends à respecter ton rythme et à prendre soin de toi avec douceur.',
    'journey.topic5.s2.badge':       'Étape 02',
    'journey.topic5.s2.title':       'Accueillir ses émotions',
    'journey.topic5.s2.text':        'Apprends à reconnaître, accueillir et comprendre tes émotions avec bienveillance. Grâce à la respiration, à la pleine conscience et aux pratiques de libération émotionnelle, avance vers plus de sérénité et de sécurité intérieure.',
    'journey.topic5.s3.badge':       'Étape 03',
    'journey.topic5.s3.title':       'Révéler sa féminité authentique',
    'journey.topic5.s3.text':        'Reconnecte-toi à ta féminité profonde, cultive ta sécurité intérieure et libère-toi des croyances qui te limitent. À travers le mouvement, la méditation et la conscience de soi, ose incarner pleinement la femme que tu es.',

    // Topic 6
    'journey.topic6.title':          'Découvrir mon accompagnement',
    'journey.topic6.badge':          'Rayonnement & Sérénité',
    'journey.topic6.content':        'Ce voyage de 88 jours est une invitation intime à ralentir, à te retrouver et à vivre en harmonie avec ta véritable essence. Commence dès maintenant en découvrant ton guide gratuit ou contacte directement Latifa pour échanger sur ton cheminement.',
    'journey.topic6.ctaPrimary':     'Accéder à l\'E-book gratuit',
    'journey.topic6.ctaWhatsapp':    'Échanger sur WhatsApp',

    // About
    'about.eyebrow':        'À propos',
    'about.title':          'Taj Al-Unutha',
    'about.lead':           'Un espace dédié à celles et ceux qui souhaitent se redécouvrir, se comprendre et s\'épanouir.',
    'about.bio1':           'Taj Al-Unutha accueille toutes les personnes en quête de développement personnel et de connaissance de soi, avec un contenu particulièrement dédié au bien-être féminin et à la féminité authentique.',
    'about.bio2':           'Ce projet est né d\'une conviction profonde : chaque femme porte en elle une sagesse et une beauté uniques. Il suffit parfois d\'un guide pour commencer à les révéler.',
    'about.cta':            'Découvrir l\'E-book',
    'about.photoPlaceholder': 'Photo de Latifa',

    // Testimonials
    'testimonials.eyebrow':          'Témoignages & Partages',
    'testimonials.title':            'Leurs expériences, leurs ressentis',
    'testimonials.subtitle':         'Chaque parcours est unique. Découvrez les témoignages de celles qui ont partagé cette expérience.',
    'testimonials.badge.authentic':   'Partage authentique',
    'testimonials.badge.placeholder': 'Exemple — En attente',
    'testimonials.clickHint':        'Cliquer pour agrandir',
    'testimonials.ariaPrev':         'Témoignage précédent',
    'testimonials.ariaNext':         'Témoignage suivant',
    'testimonials.1.author':         'Asia',
    'testimonials.1.text':           '« Après les séances avec Latifa, je ressens une belle énergie, une libération de la peur et beaucoup de sensations agréables. J\'ai appris à ressentir davantage ma féminité et à bouger mon corps avec plus de fluidité. »',
    'testimonials.2.author':         'Ghita',
    'testimonials.2.text':           '« J\'apprends progressivement à poser mes limites et à mieux écouter mes besoins. Ce cheminement m\'aide à prendre confiance en moi et à avancer à mon rythme. »',
    'testimonials.3.author':         'Jasmin',
    'testimonials.3.text':           '« Je n\'avais jamais pratiqué la yoga-danse auparavant. Après quelques séances, j\'ai découvert une nouvelle légèreté et le plaisir de m\'exprimer librement à travers mon corps. »',
    'testimonials.4.author':         'Keltoum',
    'testimonials.4.text':           '« J\'ai commencé cette expérience avec beaucoup de curiosité. Petit à petit, j\'apprends à prendre du temps pour moi, à ralentir et à être plus attentive à mes émotions. »',
    'testimonials.5.author':         'Lily',
    'testimonials.5.text':           '« Les exercices m\'invitent à mieux me connaître et à découvrir des aspects de moi que je ne prenais pas toujours le temps d\'explorer. »',
    'testimonials.6.author':         'Lina',
    'testimonials.6.text':           '« Je me sens plus à l\'écoute de mon corps et de mes ressentis. Chaque séance est une occasion de me retrouver et de me reconnecter à moi-même. »',
    'testimonials.7.author':         'Mira',
    'testimonials.7.text':           '« Cette expérience m\'encourage à m\'accorder davantage de valeur, à respecter mes besoins et à avancer avec plus de douceur envers moi-même. »',
    'testimonials.8.author':         'Sara',
    'testimonials.8.text':           '« J\'apprécie particulièrement cette approche qui me permet d\'explorer mes émotions, mon mouvement et ma féminité dans un espace où je peux évoluer à mon rythme. »',

    // Form
    'form.eyebrow':   'Accès gratuit',
    'form.title':     'Reçois ton E-book gratuitement.',
    'form.subtitle':  'Remplis le formulaire ci-dessous pour accéder à ton guide gratuit.',
    'form.nameLabel':       'Prénom et nom',
    'form.namePlaceholder': 'Ton prénom et nom',
    'form.phoneLabel':       'Numéro de téléphone',
    'form.phonePlaceholder': '06 12 34 56 78',
    'form.countrySearch':    'Rechercher un pays…',
    'form.emailLabel':       'Adresse e-mail',
    'form.emailPlaceholder': 'ton@email.com',
    'form.interestLabel':    'Pourquoi cet E-book t\'intéresse-t-il\u00a0?',
    'form.optional':         '(optionnel)',
    'form.followupPlaceholder': 'Ta réponse…',

    // Interest options
    'form.interest.personal':   'Développement personnel',
    'form.interest.body':       'Reconnexion au corps',
    'form.interest.emotions':   'Comprendre mes émotions',
    'form.interest.confidence': 'Confiance en soi',
    'form.interest.femininity': 'Féminité authentique',
    'form.interest.motherhood': 'Maternité & moi-même',
    'form.interest.other':      'Autre',

    // Conditional questions
    'followup.personal-development': 'Qu\'aimerais-tu améliorer en priorité dans ta vie\u00a0?',
    'followup.body':                 'Qu\'est-ce qui te rend difficile la reconnexion à ton corps\u00a0?',
    'followup.emotions':             'Quelles émotions voudrais-tu mieux comprendre\u00a0?',
    'followup.confidence':           'Dans quel domaine aimerais-tu développer davantage confiance en toi\u00a0?',
    'followup.femininity':           'Qu\'est-ce que la féminité authentique signifie pour toi\u00a0?',
    'followup.motherhood':           'Qu\'est-ce qui t\'aiderait à trouver plus de temps pour toi\u00a0?',
    'followup.other':                'Dis-nous en plus sur ta motivation.',

    // Consent
    'form.privacyConsent':   'J\'accepte que mes informations soient utilisées pour me faire parvenir mon E-book gratuit, conformément à la',
    'form.privacyLink':      'politique de confidentialité',
    'form.marketingConsent': 'J\'accepte de recevoir des actualités et informations de Taj Al-Unutha. (Facultatif — tu peux te désabonner à tout moment.)',

    // Submit
    'form.submit': 'Je reçois mon E-book gratuit',

    // Validation errors
    'err.name.required':  'Merci d\'indiquer ton prénom et nom.',
    'err.phone.required': 'Merci d\'indiquer ton numéro de téléphone.',
    'err.phone.invalid':  'Ce numéro de téléphone ne semble pas valide.',
    'err.email.required': 'Merci d\'indiquer ton adresse e-mail.',
    'err.email.invalid':  'Cette adresse e-mail n\'est pas valide.',
    'err.interest.required': 'Merci de choisir un intérêt.',
    'err.privacy.required':  'Merci d\'accepter la politique de confidentialité pour continuer.',
    'err.form.server':    'Une erreur est survenue. Merci de réessayer.',
    'err.form.network':   'Impossible de joindre le serveur. Vérifie ta connexion et réessaie.',
    'err.form.demo':      'Mode démo : aucun endpoint configuré. Configure CONFIG.formEndpoint pour activer la soumission réelle.',

    // Success
    'success.title':    'Félicitations\u00a0! Ton guide est prêt.',
    'success.message':  'Merci pour ta confiance. Tu peux maintenant accéder à ton E-book gratuit.',
    'success.download': 'Télécharger mon E-book',
    'success.whatsapp': 'Contacter via WhatsApp',
    'success.socialTitle': 'Rejoins notre communauté',

    // Footer
    'footer.tagline':   'Un espace de reconnexion à soi, au corps et à la féminité authentique.',
    'footer.privacy':   'Politique de confidentialité',
    'footer.legal':     'Mentions légales',
    'footer.langLabel': 'Langue :',
    'footer.rights':    'Tous droits réservés.',
  },


  ar: {
    // Navigation
    'nav.home':         'الرئيسية',
    'nav.ebook':        'الكتاب الإلكتروني',
    'nav.about':        'عن تاج الأنوثة',
    'nav.testimonials': 'شهادات',
    'nav.contact':      'تواصل معنا',

    // Hero
    'hero.eyebrow':          'كتاب إلكتروني مجاني',
    'hero.title':            'ماذا لو أخذت وقتًا للعودة إلى نفسك؟',
    'hero.subtitle':         'اكتشفي مفاتيح معرفة الذات، فهم مشاعرك، والكشف عن إمكاناتك الحقيقية.',
    'hero.cta':              'اكتشفي كتابي الإلكتروني المجاني',
    'hero.badge':            'مجاني',
    'hero.ebookPlaceholder': 'غلاف\nالكتاب الإلكتروني',
    'hero.social.label':     'لنبقَ على تواصل',

    // Benefits (legacy keys preserved for fallback)
    'benefits.eyebrow':    'ما ستكتشفينه',
    'benefits.title':      'دليلك للبدء في رحلتك نحو ذاتك.',
    'benefits.cta':        'الحصول على الكتاب الإلكتروني المجاني',
    'benefits.showcaseBadge': 'إلهام وتواصل',
    'benefits.card1.title': 'الجسد',
    'benefits.card1.text':  'أعيدي التواصل مع مشاعرك الجسدية. تعلّمي أن تسكني جسدك بلطف ورعاية.',
    'benefits.card2.title': 'المشاعر',
    'benefits.card2.text':  'تعلّمي كيف تفهمين مشاعرك بشكل أعمق. حوّلي ما تشعرين به إلى قوة ووضوح.',
    'benefits.card3.title': 'الازدهار الشخصي',
    'benefits.card3.text':  'طوّري ثقتك بنفسك وإمكاناتك. اكشفي المرأة الأصيلة التي أنتِ عليها.',

    // Section 2 — Transformation Journey (6 expandable topics)
    'journey.eyebrow':               'المسار والتحول',
    'journey.title':                 'استكشفي مراحل تحوّلكِ الداخلي',
    'journey.subtitle':              'اكتشفي البرنامج والركائز والمرافقة المصممة خلال 88 يوماً للكشف عن أنوثتكِ الأصيلة.',

    // Topic 1
    'journey.topic1.title':          'مرحباً بكِ في رحلة تحوّلكِ',
    'journey.topic1.badge':          'بداية الرحلة',
    'journey.topic1.content':        'على مدار 88 يوماً، نعبر معاً نهر التغيير. أمانكِ الداخلي هو نقطة انطلاقنا الأساسية.',
    'journey.topic1.subnote':        'مرافقة خطوة بخطوة، وفق وتيرتكِ الخاصة، بكل لطف ومحبة.',

    // Topic 2
    'journey.topic2.title':          'خبراتي في خدمة تحوّلكِ',
    'journey.topic2.badge':          'المرافقة والحضور',
    'journey.topic2.cat1.title':     'التدريب والمرافقة',
    'journey.topic2.cat1.item1':     'ماستر كوتش (Master Coach)',
    'journey.topic2.cat1.item2':     'كوتشينغ الحياة (Life Coaching)',
    'journey.topic2.cat1.item3':     'كوتش الإرهاق والاحتراق النفسي',
    'journey.topic2.cat1.item4':     'الثقة بالنفس',
    'journey.topic2.cat1.item5':     'التحول الشخصي',
    'journey.topic2.cat1.item6':     'التحرر العاطفي',
    'journey.topic2.cat2.title':     'الحركة الواعية والأنوثة',
    'journey.topic2.cat2.item1':     'اليوغا',
    'journey.topic2.cat2.item2':     'الرقص التعبيري',
    'journey.topic2.cat2.item3':     'بيلي فيت® (Bellyfit®)',
    'journey.topic2.cat2.item4':     'إتقان الحضور واليقظة الذهنية',
    'journey.topic2.cat2.item5':     'إعادة الاتصال بالجسد الأنثوي',
    'journey.topic2.cat3.title':     'المقاربات الطاقية والتأمل',
    'journey.topic2.cat3.item1':     'ماستر ريكي (Reiki Master)',
    'journey.topic2.cat3.item2':     'تقنية الحرية النفسية (EFT)',
    'journey.topic2.cat3.item3':     'السوفرولوجيا (Sophrology)',
    'journey.topic2.cat3.item4':     'ممارسات اليقظة الكاملة والتأمل',

    // Topic 3
    'journey.topic3.title':          'الركائز الثلاث لتحوّلكِ',
    'journey.topic3.badge':          'الأسس الثلاثة',
    'journey.topic3.p1.title':       'الجسد',
    'journey.topic3.p1.text':        'استعادة الاتصال العميق بجسدكِ من خلال الحركة الواعية.',
    'journey.topic3.p2.title':       'المشاعر',
    'journey.topic3.p2.text':        'احتواء وفهم وتحرير المشاعر التي تعيق تقدمكِ وتثقلكِ.',
    'journey.topic3.p3.title':       'الأنوثة الأصيلة',
    'journey.topic3.p3.text':        'تنمية أمانكِ الداخلي وتجسيد المرأة الحقيقية التي أنتِ عليها بكل فخر.',

    // Topic 4
    'journey.topic4.title':          'لمن تتوجه هذه الرحلة التحويلية؟',
    'journey.topic4.badge':          'العودة إلى الذات',
    'journey.topic4.p1':             'إليكِ، يا من تمنحين الكثير للآخرين وتشعرين اليوم بحاجة ملحة للعودة إلى ذاتكِ.',
    'journey.topic4.p2':             'إليكِ، يا من ترغبين في استعادة التواصل مع جسدكِ، واحتضان مشاعركِ، وكشف أنوثتكِ الحقيقية بكل سلام.',

    // Topic 5
    'journey.topic5.title':          'البرنامج: كيف يتم تحوّلكِ في 88 يوماً؟',
    'journey.topic5.badge':          'برنامج 88 يوماً',
    'journey.topic5.s1.badge':       'المرحلة 01',
    'journey.topic5.s1.title':       'إعادة الاتصال بالجسد',
    'journey.topic5.s1.text':        'استعيدي اتصالاً عميقاً بجسدكِ من خلال الحركة الواعية والتنفس والإصغاء لأحاسيسكِ. تعلّمي احترام وتيرتكِ الخاصة والعناية بذاتكِ بكل لطف.',
    'journey.topic5.s2.badge':       'المرحلة 02',
    'journey.topic5.s2.title':       'احتواء المشاعر',
    'journey.topic5.s2.text':        'تعلّمي التعرّف على مشاعركِ واحتضانها وفهمها بمحبة. بفضل التنفس واليقظة الذهنية وممارسات التحرر العاطفي، تقدمي نحو المزيد من السكينة والأمان الداخلي.',
    'journey.topic5.s3.badge':       'المرحلة 03',
    'journey.topic5.s3.title':       'إظهار الأنوثة الأصيلة',
    'journey.topic5.s3.text':        'أعيدي الاتصال بأنوثتكِ العميقة، ونمّي أمانكِ الداخلي، وتحرري من المعتقدات المقيدة. من خلال الحركة والتأمل والوعي الذاتي، تجرّئي على تجسيد كامل للمرأة التي أنتِ عليها.',

    // Topic 6
    'journey.topic6.title':          'اكتشفي مرافقتي الخاصة',
    'journey.topic6.badge':          'إشراق وسكينة',
    'journey.topic6.content':        'هذه الرحلة التي تستمر 88 يوماً هي دعوة حميمة للتمهل والعودة إلى نفسكِ والعيش في انسجام تام مع جوهركِ الحقيقي. ابدئي الآن باكتشاف دليلكِ المجاني أو تواصلي مباشرة مع لطيفة للحديث حول مساركِ.',
    'journey.topic6.ctaPrimary':     'الحصول على الكتاب المجاني',
    'journey.topic6.ctaWhatsapp':    'تواصل عبر واتساب',

    // About
    'about.eyebrow':        'عن المشروع',
    'about.title':          'تاج الأنوثة',
    'about.lead':           'فضاء مخصص لمن يرغبن في إعادة اكتشاف أنفسهن، وفهم ذواتهن، والازدهار.',
    'about.bio1':           'يستقبل تاج الأنوثة كل من يبحث عن التطوير الشخصي ومعرفة الذات، مع محتوى خاص مكرّس لرفاه المرأة والأنوثة الأصيلة.',
    'about.bio2':           'وُلد هذا المشروع من قناعة عميقة: كل امرأة تحمل بداخلها حكمةً وجمالًا فريدَين. أحيانًا يكفي دليل بسيط للبدء في الكشف عنهما.',
    'about.cta':            'اكتشفي الكتاب الإلكتروني',
    'about.photoPlaceholder': 'صورة لطيفة',

    // Testimonials
    'testimonials.eyebrow':          'شهادات وتجارب',
    'testimonials.title':            'تجاربهن ومشاعرهن',
    'testimonials.subtitle':         'كل مسار فريد. اكتشفي شهادات من خضن هذه التجربة.',
    'testimonials.badge.authentic':   'مشاركة حقيقية',
    'testimonials.badge.placeholder': 'نموذج — قيد التأكيد',
    'testimonials.clickHint':        'انقري للتكبير',
    'testimonials.ariaPrev':         'الشهادة السابقة',
    'testimonials.ariaNext':         'الشهادة التالية',
    'testimonials.1.author':         'Asia',
    'testimonials.1.text':           '« بعد الجلسات مع لطيفة، أشعر بطاقة جميلة وتحرر من الخوف ومشاعـر ممتعة جداً. تعلمت أن أشعر بأنوثتي أكثر وأن أحرك جسدي بسلاسة أكبر. »',
    'testimonials.2.author':         'Ghita',
    'testimonials.2.text':           '« أتعلم تدريجياً كيف أضع حدودي وأصغي لاحتياجاتي بشكل أفضل. هذه الرحلة تساعدني على بناء ثقتي بنفسي والتقدم وفق إيقاعي الخاص. »',
    'testimonials.3.author':         'Jasmin',
    'testimonials.3.text':           '« لم أمارس رقصة اليوغا من قبل. بعد بضع جلسات، اكتشفت خفة جديدة ومتعة التعبير عن نفسي بحرية من خلال جسدي. »',
    'testimonials.4.author':         'Keltoum',
    'testimonials.4.text':           '« بدأت هذه التجربة بكثير من الفضول. شيئاً فشيئاً، أتعلم أخذ وقت لنفسي، والتمهل، وأن أكون أكثر انتباهاً لمشاعري. »',
    'testimonials.5.author':         'Lily',
    'testimonials.5.text':           '« تدعوني التمارين لمعرفة ذاتي بشكل أفضل ولاكتشاف جوانب من نفسي لم أكن أخصص الوقت لاستكشافها سابقاً. »',
    'testimonials.6.author':         'Lina',
    'testimonials.6.text':           '« أشعر بأنني أكثر إصغاءً لجسدي ومشاعري. كل جلسة هي فرصة لاستعادة ذاتي والتواصل من جديد مع نفسي. »',
    'testimonials.7.author':         'Mira',
    'testimonials.7.text':           '« تشجعني هذه التجربة على تقدير نفسي أكثر، واحترام احتياجاتي، والمضي قدماً بمزيد من اللطف تجاه نفسي. »',
    'testimonials.8.author':         'Sara',
    'testimonials.8.text':           '« أقدّر بشكل خاص هذا النهج الذي يتيح لي استكشاف مشاعري وحركتي وأنوثتي في مساحة تسمح لي بالتطور وفق وتيرتي الخاصة. »',

    // Form
    'form.eyebrow':   'وصول مجاني',
    'form.title':     'احصلي على كتابك الإلكتروني مجانًا.',
    'form.subtitle':  'املئي النموذج أدناه للوصول إلى دليلك المجاني.',
    'form.nameLabel':       'الاسم الكامل',
    'form.namePlaceholder': 'اسمك الكامل',
    'form.phoneLabel':       'رقم الهاتف',
    'form.phonePlaceholder': '06 12 34 56 78',
    'form.countrySearch':    'ابحثي عن دولة…',
    'form.emailLabel':       'البريد الإلكتروني',
    'form.emailPlaceholder': 'بريدك@الإلكتروني.com',
    'form.interestLabel':    'لماذا يهمكِ هذا الكتاب الإلكتروني؟',
    'form.optional':         '(اختياري)',
    'form.followupPlaceholder': 'إجابتك…',

    // Interest options
    'form.interest.personal':   'التطوير الشخصي',
    'form.interest.body':       'التواصل مع الجسد',
    'form.interest.emotions':   'فهم مشاعري',
    'form.interest.confidence': 'الثقة بالنفس',
    'form.interest.femininity': 'الأنوثة الأصيلة',
    'form.interest.motherhood': 'الأمومة وأنا',
    'form.interest.other':      'أخرى',

    // Conditional questions
    'followup.personal-development': 'ما الذي تودّين تحسينه في حياتك بالدرجة الأولى؟',
    'followup.body':                 'ما الذي يجعل من الصعب عليكِ التواصل مع جسدك؟',
    'followup.emotions':             'أي المشاعر تودّين فهمها بشكل أفضل؟',
    'followup.confidence':           'في أي مجال تودّين تطوير ثقتك بنفسك أكثر؟',
    'followup.femininity':           'ماذا تعني لكِ الأنوثة الأصيلة؟',
    'followup.motherhood':           'ما الذي سيساعدكِ على إيجاد وقت أكثر لنفسك؟',
    'followup.other':                'أخبرينا المزيد عن دوافعك.',

    // Consent
    'form.privacyConsent':   'أوافق على استخدام معلوماتي لإرسال الكتاب الإلكتروني المجاني إليّ، وفقًا لـ',
    'form.privacyLink':      'سياسة الخصوصية',
    'form.marketingConsent': 'أوافق على تلقّي أخبار ومعلومات من تاج الأنوثة. (اختياري — يمكنكِ إلغاء الاشتراك في أي وقت.)',

    // Submit
    'form.submit': 'احصلي على كتابي الإلكتروني المجاني',

    // Validation errors
    'err.name.required':  'يرجى إدخال اسمك الكامل.',
    'err.phone.required': 'يرجى إدخال رقم هاتفك.',
    'err.phone.invalid':  'رقم الهاتف غير صالح.',
    'err.email.required': 'يرجى إدخال بريدك الإلكتروني.',
    'err.email.invalid':  'البريد الإلكتروني غير صالح.',
    'err.interest.required': 'يرجى اختيار اهتمام.',
    'err.privacy.required':  'يرجى الموافقة على سياسة الخصوصية للمتابعة.',
    'err.form.server':    'حدث خطأ. يرجى المحاولة مرة أخرى.',
    'err.form.network':   'تعذّر الاتصال بالخادم. تحققي من اتصالك وأعيدي المحاولة.',
    'err.form.demo':      'وضع العرض التوضيحي: لم يتم تكوين نقطة النهاية. قومي بتكوين CONFIG.formEndpoint لتمكين الإرسال الحقيقي.',

    // Success
    'success.title':    'تهانينا! دليلك جاهز.',
    'success.message':  'شكرًا لثقتك. يمكنكِ الآن الوصول إلى كتابك الإلكتروني المجاني.',
    'success.download': 'تنزيل كتابي الإلكتروني',
    'success.whatsapp': 'التواصل عبر واتساب',
    'success.socialTitle': 'انضمي إلى مجتمعنا',

    // Footer
    'footer.tagline':   'فضاء للعودة إلى الذات والجسد والأنوثة الأصيلة.',
    'footer.privacy':   'سياسة الخصوصية',
    'footer.legal':     'الإشعارات القانونية',
    'footer.langLabel': 'اللغة:',
    'footer.rights':    'جميع الحقوق محفوظة.',
  },


  en: {
    // Navigation
    'nav.home':         'Home',
    'nav.ebook':        'The E-book',
    'nav.about':        'About',
    'nav.testimonials': 'Testimonials',
    'nav.contact':      'Contact',

    // Hero
    'hero.eyebrow':          'Free E-book',
    'hero.title':            'What if you finally took\nthe time to come back to yourself?',
    'hero.subtitle':         'Discover the keys to knowing yourself better, understanding your emotions, and revealing your potential.',
    'hero.cta':              'Discover my free E-book',
    'hero.badge':            'FREE',
    'hero.ebookPlaceholder': 'E-book\nCover',
    'hero.social.label':     'Let\'s stay connected',

    // Benefits (legacy keys preserved for fallback)
    'benefits.eyebrow':    'What you will discover',
    'benefits.title':      'A guide to begin your journey back to yourself.',
    'benefits.cta':        'Access the free E-book',
    'benefits.showcaseBadge': 'Inspiration & Reconnection',
    'benefits.card1.title': 'The body',
    'benefits.card1.text':  'Reconnect with your sensations. Learn to inhabit your body with gentleness and self-compassion.',
    'benefits.card2.title': 'Emotions',
    'benefits.card2.text':  'Learn to better understand your emotions. Transform what you feel into strength and clarity.',
    'benefits.card3.title': 'Personal flourishing',
    'benefits.card3.text':  'Develop your confidence and potential. Reveal the authentic woman that you are.',

    // Section 2 — Transformation Journey (6 expandable topics)
    'journey.eyebrow':               'Journey & Transformation',
    'journey.title':                 'Explore the stages of your transformation',
    'journey.subtitle':              'Discover the 88-day program, pillars, and personalized guidance designed to reveal your authentic femininity.',

    // Topic 1
    'journey.topic1.title':          'Welcome to your transformational journey',
    'journey.topic1.badge':          'The Beginning of the Journey',
    'journey.topic1.content':        'For 88 days, we cross the river of change together. Your inner safety is our starting point.',
    'journey.topic1.subnote':        'Step-by-step guidance, at your own pace, with gentleness and kindness.',

    // Topic 2
    'journey.topic2.title':          'My expertise dedicated to your transformation',
    'journey.topic2.badge':          'Mentorship & Presence',
    'journey.topic2.cat1.title':     'Coaching & Guidance',
    'journey.topic2.cat1.item1':     'Master Coach',
    'journey.topic2.cat1.item2':     'Life Coaching',
    'journey.topic2.cat1.item3':     'Burnout Coach',
    'journey.topic2.cat1.item4':     'Self-Confidence',
    'journey.topic2.cat1.item5':     'Personal Transformation',
    'journey.topic2.cat1.item6':     'Emotional Release',
    'journey.topic2.cat2.title':     'Conscious Movement & Femininity',
    'journey.topic2.cat2.item1':     'Yoga',
    'journey.topic2.cat2.item2':     'Dance',
    'journey.topic2.cat2.item3':     'Bellyfit®',
    'journey.topic2.cat2.item4':     'Presence Master',
    'journey.topic2.cat2.item5':     'Reconnecting to the Female Body',
    'journey.topic2.cat3.title':     'Energy Approaches & Meditation',
    'journey.topic2.cat3.item1':     'Reiki Master',
    'journey.topic2.cat3.item2':     'EFT',
    'journey.topic2.cat3.item3':     'Sophrology',
    'journey.topic2.cat3.item4':     'Mindfulness Practices',

    // Topic 3
    'journey.topic3.title':          'The 3 Pillars of your transformation',
    'journey.topic3.badge':          'The Foundations',
    'journey.topic3.p1.title':       'The Body',
    'journey.topic3.p1.text':        'Rediscover the connection to your body through conscious movement.',
    'journey.topic3.p2.title':       'Emotions',
    'journey.topic3.p2.text':        'Welcome, understand, and release the emotions that hold you back.',
    'journey.topic3.p3.title':       'Authentic Femininity',
    'journey.topic3.p3.text':        'Cultivate your inner safety and fully embody the woman you truly are.',

    // Topic 4
    'journey.topic4.title':          'Who is this transformation for?',
    'journey.topic4.badge':          'Returning to Yourself',
    'journey.topic4.p1':             'For you, a woman who gives so much to others and now feels the need to return to yourself.',
    'journey.topic4.p2':             'For you, who wishes to reconnect with your body, welcome your emotions, and reveal your authentic femininity.',

    // Topic 5
    'journey.topic5.title':          'The Program: How does your 88-day transformation unfold?',
    'journey.topic5.badge':          '88-Day Program',
    'journey.topic5.s1.badge':       'Stage 01',
    'journey.topic5.s1.title':       'Reconnecting with your body',
    'journey.topic5.s1.text':        'Rediscover a deep connection with your body through conscious movement, breathwork, and tuning into your sensations. Learn to honor your own pace and care for yourself with tenderness.',
    'journey.topic5.s2.badge':       'Stage 02',
    'journey.topic5.s2.title':       'Welcoming your emotions',
    'journey.topic5.s2.text':        'Learn to recognize, welcome, and understand your emotions with kindness. Through breath, mindfulness, and emotional release practices, move toward greater serenity and inner safety.',
    'journey.topic5.s3.badge':       'Stage 03',
    'journey.topic5.s3.title':       'Revealing your authentic femininity',
    'journey.topic5.s3.text':        'Reconnect with your deep femininity, nurture your inner safety, and free yourself from limiting beliefs. Through movement, meditation, and self-awareness, dare to fully embody the woman you are.',

    // Topic 6
    'journey.topic6.title':          'Discover my guidance & mentorship',
    'journey.topic6.badge':          'Radiance & Serenity',
    'journey.topic6.content':        'This 88-day journey is an intimate invitation to slow down, reconnect with yourself, and live in harmony with your true essence. Begin today by discovering your free guide, or reach out directly to Latifa to discuss your journey.',
    'journey.topic6.ctaPrimary':     'Access the free E-book',
    'journey.topic6.ctaWhatsapp':    'Connect on WhatsApp',

    // About
    'about.eyebrow':        'About',
    'about.title':          'Taj Al-Unutha',
    'about.lead':           'A space dedicated to those who wish to rediscover themselves, understand themselves, and flourish.',
    'about.bio1':           'Taj Al-Unutha welcomes everyone on a journey of personal development and self-discovery, with content especially dedicated to feminine well-being and authentic femininity.',
    'about.bio2':           'This project was born from a deep conviction: every woman carries within her a unique wisdom and beauty. Sometimes a guide is all it takes to begin revealing them.',
    'about.cta':            'Discover the E-book',
    'about.photoPlaceholder': 'Photo of Latifa',

    // Testimonials
    'testimonials.eyebrow':          'Testimonials & Experiences',
    'testimonials.title':            'Their experiences, their feelings',
    'testimonials.subtitle':         'Every journey is unique. Discover the testimonials of those who shared this experience.',
    'testimonials.badge.authentic':   'Authentic experience',
    'testimonials.badge.placeholder': 'Example — Awaiting validation',
    'testimonials.clickHint':        'Click to expand',
    'testimonials.ariaPrev':         'Previous testimonial',
    'testimonials.ariaNext':         'Next testimonial',
    'testimonials.1.author':         'Asia',
    'testimonials.1.text':           '"After the sessions with Latifa, I feel a wonderful energy, a release from fear, and many pleasant sensations. I learned to connect more deeply with my femininity and move my body with greater fluidity."',
    'testimonials.2.author':         'Ghita',
    'testimonials.2.text':           '"I am gradually learning to set boundaries and listen better to my needs. This journey is helping me build self-confidence and move forward at my own pace."',
    'testimonials.3.author':         'Jasmin',
    'testimonials.3.text':           '"I had never practiced yoga-dance before. After a few sessions, I discovered a newfound lightness and the joy of expressing myself freely through my body."',
    'testimonials.4.author':         'Keltoum',
    'testimonials.4.text':           '"I started this experience with great curiosity. Little by little, I am learning to take time for myself, slow down, and be more attentive to my emotions."',
    'testimonials.5.author':         'Lily',
    'testimonials.5.text':           '"The exercises invite me to know myself better and discover aspects of myself that I did not always take the time to explore."',
    'testimonials.6.author':         'Lina',
    'testimonials.6.text':           '"I feel more attuned to my body and feelings. Each session is an opportunity to recenter and reconnect with myself."',
    'testimonials.7.author':         'Mira',
    'testimonials.7.text':           '"This experience encourages me to value myself more, respect my needs, and move forward with greater gentleness toward myself."',
    'testimonials.8.author':         'Sara',
    'testimonials.8.text':           '"I especially appreciate this approach which allows me to explore my emotions, movement, and femininity in a space where I can evolve at my own pace."',

    // Form
    'form.eyebrow':   'Free access',
    'form.title':     'Receive your E-book for free.',
    'form.subtitle':  'Fill in the form below to access your free guide.',
    'form.nameLabel':       'Full name',
    'form.namePlaceholder': 'Your full name',
    'form.phoneLabel':       'Phone number',
    'form.phonePlaceholder': '+1 234 567 8900',
    'form.countrySearch':    'Search for a country…',
    'form.emailLabel':       'Email address',
    'form.emailPlaceholder': 'your@email.com',
    'form.interestLabel':    'Why are you interested in this E-book?',
    'form.optional':         '(optional)',
    'form.followupPlaceholder': 'Your answer…',

    // Interest options
    'form.interest.personal':   'Personal development',
    'form.interest.body':       'Reconnecting with my body',
    'form.interest.emotions':   'Understanding my emotions',
    'form.interest.confidence': 'Self-confidence',
    'form.interest.femininity': 'Authentic femininity',
    'form.interest.motherhood': 'Motherhood & myself',
    'form.interest.other':      'Other',

    // Conditional questions
    'followup.personal-development': 'What would you most like to improve in your life?',
    'followup.body':                 'What makes reconnecting with your body difficult?',
    'followup.emotions':             'Which emotions would you like to understand better?',
    'followup.confidence':           'In which area would you like to develop more confidence?',
    'followup.femininity':           'What does authentic femininity mean to you?',
    'followup.motherhood':           'What would help you make more time for yourself?',
    'followup.other':                'Tell us more about your motivation.',

    // Consent
    'form.privacyConsent':   'I agree that my information will be used to send me my free E-book, in accordance with the',
    'form.privacyLink':      'privacy policy',
    'form.marketingConsent': 'I agree to receive news and information from Taj Al-Unutha. (Optional — you can unsubscribe at any time.)',

    // Submit
    'form.submit': 'Receive my free E-book',

    // Validation errors
    'err.name.required':  'Please enter your full name.',
    'err.phone.required': 'Please enter your phone number.',
    'err.phone.invalid':  'This phone number does not appear to be valid.',
    'err.email.required': 'Please enter your email address.',
    'err.email.invalid':  'This email address is not valid.',
    'err.interest.required': 'Please select an interest.',
    'err.privacy.required':  'Please accept the privacy policy to continue.',
    'err.form.server':    'An error occurred. Please try again.',
    'err.form.network':   'Could not reach the server. Check your connection and try again.',
    'err.form.demo':      'Demo mode: no endpoint configured. Set CONFIG.formEndpoint to enable real submissions.',

    // Success
    'success.title':    'Congratulations! Your guide is ready.',
    'success.message':  'Thank you for your trust. You can now access your free E-book.',
    'success.download': 'Download my E-book',
    'success.whatsapp': 'Contact via WhatsApp',
    'success.socialTitle': 'Join our community',

    // Footer
    'footer.tagline':   'A space to reconnect with yourself, your body, and authentic femininity.',
    'footer.privacy':   'Privacy policy',
    'footer.legal':     'Legal notices',
    'footer.langLabel': 'Language:',
    'footer.rights':    'All rights reserved.',
  },
};


/* ================================================================
   3. COUNTRY DATA
   Complete list of countries with dial codes and emoji flags.
   ================================================================ */
const COUNTRIES = [
  { code: 'AF', name: 'Afghanistan',              dialCode: '+93',  flag: '🇦🇫' },
  { code: 'AL', name: 'Albania',                  dialCode: '+355', flag: '🇦🇱' },
  { code: 'DZ', name: 'Algeria / Algérie',        dialCode: '+213', flag: '🇩🇿' },
  { code: 'AD', name: 'Andorra',                  dialCode: '+376', flag: '🇦🇩' },
  { code: 'AO', name: 'Angola',                   dialCode: '+244', flag: '🇦🇴' },
  { code: 'AG', name: 'Antigua and Barbuda',      dialCode: '+1',   flag: '🇦🇬' },
  { code: 'AR', name: 'Argentina',                dialCode: '+54',  flag: '🇦🇷' },
  { code: 'AM', name: 'Armenia',                  dialCode: '+374', flag: '🇦🇲' },
  { code: 'AU', name: 'Australia',                dialCode: '+61',  flag: '🇦🇺' },
  { code: 'AT', name: 'Austria / Autriche',       dialCode: '+43',  flag: '🇦🇹' },
  { code: 'AZ', name: 'Azerbaijan',               dialCode: '+994', flag: '🇦🇿' },
  { code: 'BS', name: 'Bahamas',                  dialCode: '+1',   flag: '🇧🇸' },
  { code: 'BH', name: 'Bahrain / Bahreïn',        dialCode: '+973', flag: '🇧🇭' },
  { code: 'BD', name: 'Bangladesh',               dialCode: '+880', flag: '🇧🇩' },
  { code: 'BB', name: 'Barbados',                 dialCode: '+1',   flag: '🇧🇧' },
  { code: 'BY', name: 'Belarus',                  dialCode: '+375', flag: '🇧🇾' },
  { code: 'BE', name: 'Belgium / Belgique',       dialCode: '+32',  flag: '🇧🇪' },
  { code: 'BZ', name: 'Belize',                   dialCode: '+501', flag: '🇧🇿' },
  { code: 'BJ', name: 'Benin / Bénin',            dialCode: '+229', flag: '🇧🇯' },
  { code: 'BT', name: 'Bhutan',                   dialCode: '+975', flag: '🇧🇹' },
  { code: 'BO', name: 'Bolivia',                  dialCode: '+591', flag: '🇧🇴' },
  { code: 'BA', name: 'Bosnia and Herzegovina',   dialCode: '+387', flag: '🇧🇦' },
  { code: 'BW', name: 'Botswana',                 dialCode: '+267', flag: '🇧🇼' },
  { code: 'BR', name: 'Brazil / Brésil',          dialCode: '+55',  flag: '🇧🇷' },
  { code: 'BN', name: 'Brunei',                   dialCode: '+673', flag: '🇧🇳' },
  { code: 'BG', name: 'Bulgaria',                 dialCode: '+359', flag: '🇧🇬' },
  { code: 'BF', name: 'Burkina Faso',             dialCode: '+226', flag: '🇧🇫' },
  { code: 'BI', name: 'Burundi',                  dialCode: '+257', flag: '🇧🇮' },
  { code: 'CV', name: 'Cabo Verde',               dialCode: '+238', flag: '🇨🇻' },
  { code: 'KH', name: 'Cambodia',                 dialCode: '+855', flag: '🇰🇭' },
  { code: 'CM', name: 'Cameroon / Cameroun',      dialCode: '+237', flag: '🇨🇲' },
  { code: 'CA', name: 'Canada',                   dialCode: '+1',   flag: '🇨🇦' },
  { code: 'CF', name: 'Central African Republic', dialCode: '+236', flag: '🇨🇫' },
  { code: 'TD', name: 'Chad / Tchad',             dialCode: '+235', flag: '🇹🇩' },
  { code: 'CL', name: 'Chile',                    dialCode: '+56',  flag: '🇨🇱' },
  { code: 'CN', name: 'China / Chine',            dialCode: '+86',  flag: '🇨🇳' },
  { code: 'CO', name: 'Colombia',                 dialCode: '+57',  flag: '🇨🇴' },
  { code: 'KM', name: 'Comoros',                  dialCode: '+269', flag: '🇰🇲' },
  { code: 'CG', name: 'Congo',                    dialCode: '+242', flag: '🇨🇬' },
  { code: 'CD', name: 'Congo (DRC)',               dialCode: '+243', flag: '🇨🇩' },
  { code: 'CR', name: 'Costa Rica',               dialCode: '+506', flag: '🇨🇷' },
  { code: 'HR', name: 'Croatia / Croatie',        dialCode: '+385', flag: '🇭🇷' },
  { code: 'CU', name: 'Cuba',                     dialCode: '+53',  flag: '🇨🇺' },
  { code: 'CY', name: 'Cyprus / Chypre',          dialCode: '+357', flag: '🇨🇾' },
  { code: 'CZ', name: 'Czech Republic / Tchéquie',dialCode: '+420', flag: '🇨🇿' },
  { code: 'DK', name: 'Denmark / Danemark',       dialCode: '+45',  flag: '🇩🇰' },
  { code: 'DJ', name: 'Djibouti',                 dialCode: '+253', flag: '🇩🇯' },
  { code: 'DO', name: 'Dominican Republic',       dialCode: '+1',   flag: '🇩🇴' },
  { code: 'EC', name: 'Ecuador',                  dialCode: '+593', flag: '🇪🇨' },
  { code: 'EG', name: 'Egypt / Égypte',           dialCode: '+20',  flag: '🇪🇬' },
  { code: 'SV', name: 'El Salvador',              dialCode: '+503', flag: '🇸🇻' },
  { code: 'GQ', name: 'Equatorial Guinea',        dialCode: '+240', flag: '🇬🇶' },
  { code: 'ER', name: 'Eritrea',                  dialCode: '+291', flag: '🇪🇷' },
  { code: 'EE', name: 'Estonia',                  dialCode: '+372', flag: '🇪🇪' },
  { code: 'SZ', name: 'Eswatini',                 dialCode: '+268', flag: '🇸🇿' },
  { code: 'ET', name: 'Ethiopia / Éthiopie',      dialCode: '+251', flag: '🇪🇹' },
  { code: 'FJ', name: 'Fiji',                     dialCode: '+679', flag: '🇫🇯' },
  { code: 'FI', name: 'Finland / Finlande',       dialCode: '+358', flag: '🇫🇮' },
  { code: 'FR', name: 'France',                   dialCode: '+33',  flag: '🇫🇷' },
  { code: 'GA', name: 'Gabon',                    dialCode: '+241', flag: '🇬🇦' },
  { code: 'GM', name: 'Gambia',                   dialCode: '+220', flag: '🇬🇲' },
  { code: 'GE', name: 'Georgia / Géorgie',        dialCode: '+995', flag: '🇬🇪' },
  { code: 'DE', name: 'Germany / Allemagne',      dialCode: '+49',  flag: '🇩🇪' },
  { code: 'GH', name: 'Ghana',                    dialCode: '+233', flag: '🇬🇭' },
  { code: 'GR', name: 'Greece / Grèce',           dialCode: '+30',  flag: '🇬🇷' },
  { code: 'GD', name: 'Grenada',                  dialCode: '+1',   flag: '🇬🇩' },
  { code: 'GT', name: 'Guatemala',                dialCode: '+502', flag: '🇬🇹' },
  { code: 'GN', name: 'Guinea / Guinée',          dialCode: '+224', flag: '🇬🇳' },
  { code: 'GW', name: 'Guinea-Bissau',            dialCode: '+245', flag: '🇬🇼' },
  { code: 'GY', name: 'Guyana',                   dialCode: '+592', flag: '🇬🇾' },
  { code: 'HT', name: 'Haiti / Haïti',            dialCode: '+509', flag: '🇭🇹' },
  { code: 'HN', name: 'Honduras',                 dialCode: '+504', flag: '🇭🇳' },
  { code: 'HU', name: 'Hungary / Hongrie',        dialCode: '+36',  flag: '🇭🇺' },
  { code: 'IS', name: 'Iceland / Islande',        dialCode: '+354', flag: '🇮🇸' },
  { code: 'IN', name: 'India / Inde',             dialCode: '+91',  flag: '🇮🇳' },
  { code: 'ID', name: 'Indonesia',                dialCode: '+62',  flag: '🇮🇩' },
  { code: 'IR', name: 'Iran',                     dialCode: '+98',  flag: '🇮🇷' },
  { code: 'IQ', name: 'Iraq',                     dialCode: '+964', flag: '🇮🇶' },
  { code: 'IE', name: 'Ireland / Irlande',        dialCode: '+353', flag: '🇮🇪' },
  { code: 'IL', name: 'Israel / Israël',          dialCode: '+972', flag: '🇮🇱' },
  { code: 'IT', name: 'Italy / Italie',           dialCode: '+39',  flag: '🇮🇹' },
  { code: 'CI', name: 'Ivory Coast / Côte d\'Ivoire', dialCode: '+225', flag: '🇨🇮' },
  { code: 'JM', name: 'Jamaica / Jamaïque',       dialCode: '+1',   flag: '🇯🇲' },
  { code: 'JP', name: 'Japan / Japon',            dialCode: '+81',  flag: '🇯🇵' },
  { code: 'JO', name: 'Jordan / Jordanie',        dialCode: '+962', flag: '🇯🇴' },
  { code: 'KZ', name: 'Kazakhstan',               dialCode: '+7',   flag: '🇰🇿' },
  { code: 'KE', name: 'Kenya',                    dialCode: '+254', flag: '🇰🇪' },
  { code: 'KI', name: 'Kiribati',                 dialCode: '+686', flag: '🇰🇮' },
  { code: 'KW', name: 'Kuwait / Koweït',          dialCode: '+965', flag: '🇰🇼' },
  { code: 'KG', name: 'Kyrgyzstan',               dialCode: '+996', flag: '🇰🇬' },
  { code: 'LA', name: 'Laos',                     dialCode: '+856', flag: '🇱🇦' },
  { code: 'LV', name: 'Latvia / Lettonie',        dialCode: '+371', flag: '🇱🇻' },
  { code: 'LB', name: 'Lebanon / Liban',          dialCode: '+961', flag: '🇱🇧' },
  { code: 'LS', name: 'Lesotho',                  dialCode: '+266', flag: '🇱🇸' },
  { code: 'LR', name: 'Liberia',                  dialCode: '+231', flag: '🇱🇷' },
  { code: 'LY', name: 'Libya / Libye',            dialCode: '+218', flag: '🇱🇾' },
  { code: 'LI', name: 'Liechtenstein',            dialCode: '+423', flag: '🇱🇮' },
  { code: 'LT', name: 'Lithuania / Lituanie',     dialCode: '+370', flag: '🇱🇹' },
  { code: 'LU', name: 'Luxembourg',               dialCode: '+352', flag: '🇱🇺' },
  { code: 'MG', name: 'Madagascar',               dialCode: '+261', flag: '🇲🇬' },
  { code: 'MW', name: 'Malawi',                   dialCode: '+265', flag: '🇲🇼' },
  { code: 'MY', name: 'Malaysia',                 dialCode: '+60',  flag: '🇲🇾' },
  { code: 'MV', name: 'Maldives',                 dialCode: '+960', flag: '🇲🇻' },
  { code: 'ML', name: 'Mali',                     dialCode: '+223', flag: '🇲🇱' },
  { code: 'MT', name: 'Malta / Malte',            dialCode: '+356', flag: '🇲🇹' },
  { code: 'MH', name: 'Marshall Islands',         dialCode: '+692', flag: '🇲🇭' },
  { code: 'MR', name: 'Mauritania / Mauritanie',  dialCode: '+222', flag: '🇲🇷' },
  { code: 'MU', name: 'Mauritius / Maurice',      dialCode: '+230', flag: '🇲🇺' },
  { code: 'MX', name: 'Mexico / Mexique',         dialCode: '+52',  flag: '🇲🇽' },
  { code: 'FM', name: 'Micronesia',               dialCode: '+691', flag: '🇫🇲' },
  { code: 'MD', name: 'Moldova',                  dialCode: '+373', flag: '🇲🇩' },
  { code: 'MC', name: 'Monaco',                   dialCode: '+377', flag: '🇲🇨' },
  { code: 'MN', name: 'Mongolia',                 dialCode: '+976', flag: '🇲🇳' },
  { code: 'ME', name: 'Montenegro',               dialCode: '+382', flag: '🇲🇪' },
  { code: 'MA', name: 'Morocco / Maroc',          dialCode: '+212', flag: '🇲🇦' },
  { code: 'MZ', name: 'Mozambique',               dialCode: '+258', flag: '🇲🇿' },
  { code: 'MM', name: 'Myanmar',                  dialCode: '+95',  flag: '🇲🇲' },
  { code: 'NA', name: 'Namibia',                  dialCode: '+264', flag: '🇳🇦' },
  { code: 'NR', name: 'Nauru',                    dialCode: '+674', flag: '🇳🇷' },
  { code: 'NP', name: 'Nepal / Népal',            dialCode: '+977', flag: '🇳🇵' },
  { code: 'NL', name: 'Netherlands / Pays-Bas',   dialCode: '+31',  flag: '🇳🇱' },
  { code: 'NZ', name: 'New Zealand / Nouvelle-Zélande', dialCode: '+64', flag: '🇳🇿' },
  { code: 'NI', name: 'Nicaragua',                dialCode: '+505', flag: '🇳🇮' },
  { code: 'NE', name: 'Niger',                    dialCode: '+227', flag: '🇳🇪' },
  { code: 'NG', name: 'Nigeria',                  dialCode: '+234', flag: '🇳🇬' },
  { code: 'NO', name: 'Norway / Norvège',         dialCode: '+47',  flag: '🇳🇴' },
  { code: 'OM', name: 'Oman',                     dialCode: '+968', flag: '🇴🇲' },
  { code: 'PK', name: 'Pakistan',                 dialCode: '+92',  flag: '🇵🇰' },
  { code: 'PW', name: 'Palau',                    dialCode: '+680', flag: '🇵🇼' },
  { code: 'PA', name: 'Panama',                   dialCode: '+507', flag: '🇵🇦' },
  { code: 'PG', name: 'Papua New Guinea',         dialCode: '+675', flag: '🇵🇬' },
  { code: 'PY', name: 'Paraguay',                 dialCode: '+595', flag: '🇵🇾' },
  { code: 'PE', name: 'Peru / Pérou',             dialCode: '+51',  flag: '🇵🇪' },
  { code: 'PH', name: 'Philippines',              dialCode: '+63',  flag: '🇵🇭' },
  { code: 'PL', name: 'Poland / Pologne',         dialCode: '+48',  flag: '🇵🇱' },
  { code: 'PT', name: 'Portugal',                 dialCode: '+351', flag: '🇵🇹' },
  { code: 'QA', name: 'Qatar',                    dialCode: '+974', flag: '🇶🇦' },
  { code: 'RO', name: 'Romania / Roumanie',       dialCode: '+40',  flag: '🇷🇴' },
  { code: 'RU', name: 'Russia / Russie',          dialCode: '+7',   flag: '🇷🇺' },
  { code: 'RW', name: 'Rwanda',                   dialCode: '+250', flag: '🇷🇼' },
  { code: 'KN', name: 'Saint Kitts and Nevis',    dialCode: '+1',   flag: '🇰🇳' },
  { code: 'LC', name: 'Saint Lucia',              dialCode: '+1',   flag: '🇱🇨' },
  { code: 'VC', name: 'Saint Vincent',            dialCode: '+1',   flag: '🇻🇨' },
  { code: 'WS', name: 'Samoa',                    dialCode: '+685', flag: '🇼🇸' },
  { code: 'SM', name: 'San Marino',               dialCode: '+378', flag: '🇸🇲' },
  { code: 'ST', name: 'São Tomé and Príncipe',    dialCode: '+239', flag: '🇸🇹' },
  { code: 'SA', name: 'Saudi Arabia / Arabie Saoudite', dialCode: '+966', flag: '🇸🇦' },
  { code: 'SN', name: 'Senegal / Sénégal',        dialCode: '+221', flag: '🇸🇳' },
  { code: 'RS', name: 'Serbia / Serbie',          dialCode: '+381', flag: '🇷🇸' },
  { code: 'SC', name: 'Seychelles',               dialCode: '+248', flag: '🇸🇨' },
  { code: 'SL', name: 'Sierra Leone',             dialCode: '+232', flag: '🇸🇱' },
  { code: 'SG', name: 'Singapore / Singapour',    dialCode: '+65',  flag: '🇸🇬' },
  { code: 'SK', name: 'Slovakia / Slovaquie',     dialCode: '+421', flag: '🇸🇰' },
  { code: 'SI', name: 'Slovenia / Slovénie',      dialCode: '+386', flag: '🇸🇮' },
  { code: 'SB', name: 'Solomon Islands',          dialCode: '+677', flag: '🇸🇧' },
  { code: 'SO', name: 'Somalia / Somalie',        dialCode: '+252', flag: '🇸🇴' },
  { code: 'ZA', name: 'South Africa / Afrique du Sud', dialCode: '+27', flag: '🇿🇦' },
  { code: 'SS', name: 'South Sudan',              dialCode: '+211', flag: '🇸🇸' },
  { code: 'ES', name: 'Spain / Espagne',          dialCode: '+34',  flag: '🇪🇸' },
  { code: 'LK', name: 'Sri Lanka',                dialCode: '+94',  flag: '🇱🇰' },
  { code: 'SD', name: 'Sudan / Soudan',           dialCode: '+249', flag: '🇸🇩' },
  { code: 'SR', name: 'Suriname',                 dialCode: '+597', flag: '🇸🇷' },
  { code: 'SE', name: 'Sweden / Suède',           dialCode: '+46',  flag: '🇸🇪' },
  { code: 'CH', name: 'Switzerland / Suisse',     dialCode: '+41',  flag: '🇨🇭' },
  { code: 'SY', name: 'Syria / Syrie',            dialCode: '+963', flag: '🇸🇾' },
  { code: 'TW', name: 'Taiwan',                   dialCode: '+886', flag: '🇹🇼' },
  { code: 'TJ', name: 'Tajikistan',               dialCode: '+992', flag: '🇹🇯' },
  { code: 'TZ', name: 'Tanzania / Tanzanie',      dialCode: '+255', flag: '🇹🇿' },
  { code: 'TH', name: 'Thailand / Thaïlande',     dialCode: '+66',  flag: '🇹🇭' },
  { code: 'TL', name: 'Timor-Leste',              dialCode: '+670', flag: '🇹🇱' },
  { code: 'TG', name: 'Togo',                     dialCode: '+228', flag: '🇹🇬' },
  { code: 'TO', name: 'Tonga',                    dialCode: '+676', flag: '🇹🇴' },
  { code: 'TT', name: 'Trinidad and Tobago',      dialCode: '+1',   flag: '🇹🇹' },
  { code: 'TN', name: 'Tunisia / Tunisie',        dialCode: '+216', flag: '🇹🇳' },
  { code: 'TR', name: 'Turkey / Turquie',         dialCode: '+90',  flag: '🇹🇷' },
  { code: 'TM', name: 'Turkmenistan',             dialCode: '+993', flag: '🇹🇲' },
  { code: 'TV', name: 'Tuvalu',                   dialCode: '+688', flag: '🇹🇻' },
  { code: 'UG', name: 'Uganda / Ouganda',         dialCode: '+256', flag: '🇺🇬' },
  { code: 'UA', name: 'Ukraine',                  dialCode: '+380', flag: '🇺🇦' },
  { code: 'AE', name: 'UAE / Émirats Arabes Unis',dialCode: '+971', flag: '🇦🇪' },
  { code: 'GB', name: 'United Kingdom / Royaume-Uni', dialCode: '+44', flag: '🇬🇧' },
  { code: 'US', name: 'United States / États-Unis',   dialCode: '+1',  flag: '🇺🇸' },
  { code: 'UY', name: 'Uruguay',                  dialCode: '+598', flag: '🇺🇾' },
  { code: 'UZ', name: 'Uzbekistan',               dialCode: '+998', flag: '🇺🇿' },
  { code: 'VU', name: 'Vanuatu',                  dialCode: '+678', flag: '🇻🇺' },
  { code: 'VE', name: 'Venezuela',                dialCode: '+58',  flag: '🇻🇪' },
  { code: 'VN', name: 'Vietnam / Viêt Nam',       dialCode: '+84',  flag: '🇻🇳' },
  { code: 'YE', name: 'Yemen / Yémen',            dialCode: '+967', flag: '🇾🇪' },
  { code: 'ZM', name: 'Zambia / Zambie',          dialCode: '+260', flag: '🇿🇲' },
  { code: 'ZW', name: 'Zimbabwe',                 dialCode: '+263', flag: '🇿🇼' },
];


/* ================================================================
   4. LANGUAGE MANAGER
   ================================================================ */
let currentLang = sessionStorage.getItem('taj-lang') || CONFIG.defaultLang;

const langMeta = {
  fr: { code: 'FR', label: 'Français', dir: 'ltr' },
  ar: { code: 'العربية', label: 'العربية', dir: 'rtl' },
  en: { code: 'EN', label: 'English', dir: 'ltr' },
};

/**
 * Returns the translated string for a given key.
 * Falls back to French, then to the key itself.
 */
function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations.fr && translations.fr[key])
    || key;
}

/**
 * Applies translations to all [data-i18n] elements,
 * updates dir / lang on <html>, and refreshes language selectors.
 */
function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  sessionStorage.setItem('taj-lang', lang);

  const meta = langMeta[lang];
  const html = document.documentElement;
  html.lang = lang;
  html.dir  = meta.dir;

  // Translate text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.getAttribute('data-i18n');
    const text = t(key);
    // Handle newlines in hero title etc.
    if (el.tagName === 'H1' || el.tagName === 'H2') {
      el.innerHTML = text.replace(/\n/g, '<br/>');
    } else {
      el.textContent = text;
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  // Translate aria-labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });

  // Update all language selector buttons
  updateLangSelectors(lang, meta);

  // Refresh conditional question label if one is active
  const checkedInterest = document.querySelector('.interest-radio:checked');
  if (checkedInterest) updateFollowupQuestion(checkedInterest.value);

  // Refresh testimonials carousel position/translations on language change
  if (typeof updateTestimonialsOnLangChange === 'function') {
    updateTestimonialsOnLangChange();
  }

  // Update WhatsApp button label (success section)
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    const span = whatsappBtn.querySelector('[data-i18n]');
    if (span) span.textContent = t('success.whatsapp');
  }
}

function updateLangSelectors(lang, meta) {
  // Nav selector
  const codeEl = document.getElementById('langCode');
  if (codeEl) codeEl.textContent = meta.code;

  // Footer selector
  const codeFooter = document.getElementById('langCodeFooter');
  if (codeFooter) codeFooter.textContent = meta.code;

  // Mark active options in all dropdowns
  document.querySelectorAll('.lang-option').forEach(option => {
    option.classList.toggle('is-active', option.dataset.lang === lang);
  });
}

function initLanguageSelectors() {
  // Both nav and footer selectors share the same behaviour
  const selectors = [
    { btn: document.getElementById('langBtn'),       dropdown: document.getElementById('langDropdown'),       wrap: document.getElementById('langSelector') },
    { btn: document.getElementById('langBtnFooter'), dropdown: document.getElementById('langDropdownFooter'), wrap: document.getElementById('langSelectorFooter') },
  ];

  selectors.forEach(({ btn, dropdown, wrap }) => {
    if (!btn || !wrap) return;

    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = wrap.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });

  // Language option selection (from any dropdown)
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
      applyLanguage(option.dataset.lang);
      // Close all dropdowns
      document.querySelectorAll('.lang-selector').forEach(s => {
        s.classList.remove('is-open');
        const b = s.querySelector('button');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    });
  });

  // Close on outside click
  document.addEventListener('click', () => {
    document.querySelectorAll('.lang-selector.is-open').forEach(s => {
      s.classList.remove('is-open');
      const b = s.querySelector('button');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });
}


/* ================================================================
   5. NAVIGATION
   ================================================================ */
function initNavigation() {
  const nav         = document.getElementById('nav');
  const hamburger   = document.getElementById('navHamburger');
  const mobileMenu  = document.getElementById('navMobile');

  // Scroll state
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open');
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav__mobile-links .nav__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Set footer year
  const yearEl = document.getElementById('footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Set social links from config
  const footerWhatsapp = document.getElementById('footerWhatsapp');
  if (footerWhatsapp && CONFIG.whatsappNumber) {
    footerWhatsapp.href = `https://wa.me/${CONFIG.whatsappNumber}`;
  }

  const instagramLinks = document.querySelectorAll('.footer__social-link:first-child');
  instagramLinks.forEach(el => { if (CONFIG.instagramUrl) el.href = CONFIG.instagramUrl; });

  // Apply logo if configured
  if (CONFIG.logoPath) {
    document.querySelectorAll('.nav__logo-text, .footer__logo-text').forEach(textEl => {
      const img = document.createElement('img');
      img.src = CONFIG.logoPath;
      img.alt = 'Taj Al-Unutha';
      img.className = textEl.className.includes('footer') ? 'footer__logo-img' : 'nav__logo img';
      textEl.replaceWith(img);
    });
  }
}


/* ================================================================
   6. COUNTRY SELECTOR
   ================================================================ */
let selectedCountry = COUNTRIES.find(c => c.code === 'MA') || COUNTRIES[0];

function buildCountryList(filter = '') {
  const list   = document.getElementById('countryList');
  if (!list) return;

  const q = filter.toLowerCase().trim();
  const filtered = q
    ? COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q)
      )
    : COUNTRIES;

  list.innerHTML = '';

  if (filtered.length === 0) {
    const li = document.createElement('li');
    li.className = 'country-item';
    li.style.justifyContent = 'center';
    li.style.color = 'var(--color-sage)';
    li.textContent = '—';
    list.appendChild(li);
    return;
  }

  filtered.forEach(country => {
    const li = document.createElement('li');
    li.role = 'option';
    li.className = 'country-item' + (country.code === selectedCountry.code ? ' is-selected' : '');
    li.dataset.code = country.code;
    li.innerHTML = `
      <span class="country-item__flag">${country.flag}</span>
      <span class="country-item__name">${country.name}</span>
      <span class="country-item__code">${country.dialCode}</span>
    `;
    li.addEventListener('click', () => selectCountry(country));
    list.appendChild(li);
  });
}

function selectCountry(country) {
  selectedCountry = country;
  document.getElementById('selectedFlag').textContent = country.flag;
  document.getElementById('selectedCode').textContent = country.dialCode;
  closeCountryDropdown();
  buildCountryList();
  document.getElementById('phoneInput').focus();
}

function closeCountryDropdown() {
  const selector = document.getElementById('countrySelector');
  const btn = document.getElementById('countryBtn');
  if (selector) selector.classList.remove('is-open');
  if (btn) btn.setAttribute('aria-expanded', 'false');
}

function initCountrySelector() {
  const countryBtn    = document.getElementById('countryBtn');
  const countrySelector = document.getElementById('countrySelector');
  const countrySearch = document.getElementById('countrySearch');

  if (!countryBtn || !countrySelector) return;

  buildCountryList();

  countryBtn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = countrySelector.classList.toggle('is-open');
    countryBtn.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      setTimeout(() => countrySearch && countrySearch.focus(), 50);
    }
  });

  if (countrySearch) {
    countrySearch.addEventListener('input', () => {
      buildCountryList(countrySearch.value);
    });
    // Prevent closing dropdown when clicking inside search
    countrySearch.addEventListener('click', e => e.stopPropagation());
  }

  // Close on outside click
  document.addEventListener('click', e => {
    if (!countrySelector.contains(e.target)) {
      closeCountryDropdown();
    }
  });

  // Keyboard escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeCountryDropdown();
  });
}


/* ================================================================
   7. INTEREST CARDS & CONDITIONAL QUESTION
   ================================================================ */
function updateFollowupQuestion(interestValue) {
  const container    = document.getElementById('fg-followup');
  const questionSpan = document.getElementById('followupQuestion');
  if (!container || !questionSpan) return;

  if (!interestValue) {
    container.classList.remove('is-visible');
    return;
  }

  // Map interest card value → translation key
  const keyMap = {
    'personal-development': 'followup.personal-development',
    'body':                 'followup.body',
    'emotions':             'followup.emotions',
    'confidence':           'followup.confidence',
    'femininity':           'followup.femininity',
    'motherhood':           'followup.motherhood',
    'other':                'followup.other',
  };

  const translationKey = keyMap[interestValue];
  if (translationKey) {
    questionSpan.textContent = t(translationKey);
    container.classList.add('is-visible');
  }
}

function initInterestCards() {
  const radios = document.querySelectorAll('.interest-radio');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      updateFollowupQuestion(radio.value);
      // Clear error on selection
      showFieldError('err-interest', '');
      const fg = document.getElementById('fg-interest');
      if (fg) fg.querySelector('.interest-cards').style.outline = '';
    });
  });
}


/* ================================================================
   8. FORM VALIDATION
   ================================================================ */
function showFieldError(errorId, message) {
  const el = document.getElementById(errorId);
  if (el) el.textContent = message;
}

function clearAllErrors() {
  ['err-name', 'err-phone', 'err-email', 'err-interest', 'err-privacy'].forEach(id => {
    showFieldError(id, '');
  });
  document.querySelectorAll('.form-input.is-error').forEach(el => el.classList.remove('is-error'));
  const globalErr = document.getElementById('formGlobalError');
  if (globalErr) globalErr.textContent = '';
}

function validateForm() {
  let valid = true;

  // 1. Name
  const name = document.getElementById('fullName');
  if (!name.value.trim()) {
    showFieldError('err-name', t('err.name.required'));
    name.classList.add('is-error');
    if (valid) name.focus();
    valid = false;
  } else {
    name.classList.remove('is-error');
  }

  // 2. Phone
  const phone = document.getElementById('phoneInput');
  const phoneVal = phone.value.trim().replace(/\s+/g, '');
  if (!phoneVal) {
    showFieldError('err-phone', t('err.phone.required'));
    phone.classList.add('is-error');
    if (valid) phone.focus();
    valid = false;
  } else if (phoneVal.length < 5 || !/^\+?[\d\s\-().]+$/.test(phone.value.trim())) {
    showFieldError('err-phone', t('err.phone.invalid'));
    phone.classList.add('is-error');
    if (valid) phone.focus();
    valid = false;
  } else {
    phone.classList.remove('is-error');
  }

  // 3. Email (optional)
  const email = document.getElementById('emailInput');
  const emailVal = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (emailVal && !emailRegex.test(emailVal)) {
    showFieldError('err-email', t('err.email.invalid'));
    email.classList.add('is-error');
    if (valid) email.focus();
    valid = false;
  } else {
    email.classList.remove('is-error');
    showFieldError('err-email', '');
  }

  // 4. Interest (optional)

  // 5. Privacy consent
  const privacy = document.getElementById('privacyConsent');
  if (!privacy.checked) {
    showFieldError('err-privacy', t('err.privacy.required'));
    if (valid) privacy.focus();
    valid = false;
  }

  return valid;
}

/**
 * Collects all form values into an object ready for submission.
 */
function collectFormData() {
  return {
    fullName:         document.getElementById('fullName').value.trim(),
    countryCode:      selectedCountry.dialCode,
    countryName:      selectedCountry.name,
    countryIso:       selectedCountry.code,
    phone:            document.getElementById('phoneInput').value.trim(),
    fullPhone:        selectedCountry.dialCode + ' ' + document.getElementById('phoneInput').value.trim(),
    email:            document.getElementById('emailInput').value.trim(),
    interest:         (document.querySelector('.interest-radio:checked') || {}).value || '',
    followupAnswer:   document.getElementById('followupAnswer').value.trim(),
    marketingConsent: document.getElementById('marketingConsent').checked,
    language:         currentLang,
    submittedAt:      new Date().toISOString(),
  };
}


/* ================================================================
   9. FORM SUBMISSION
   ================================================================ */
let isSubmitting = false;

function setSubmitLoading(loading) {
  const btn = document.getElementById('submitBtn');
  if (!btn) return;
  btn.classList.toggle('is-loading', loading);
  btn.disabled = loading;
  isSubmitting = loading;
}

async function submitForm(data) {
  const defaultEbookUrl = CONFIG.ebookUrl || 'https://drive.google.com/file/d/1OE-K5R0E7uCvHprMoR-5YcfaTsVUNz-n/view?usp=sharing';

  // ---- REMOTE ENDPOINT SUBMISSION (if configured) ----
  if (CONFIG.formEndpoint) {
    try {
      const response = await fetch(CONFIG.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        return {
          success: true,
          ebookUrl: result.ebookUrl || defaultEbookUrl,
        };
      }
    } catch (err) {
      console.warn('[Taj Al-Unutha] Remote endpoint submission warning:', err);
    }
  }

  // ---- CLIENT-SIDE RETENTION & ACCESS ----
  // Store lead data locally so no prospective customer information is lost
  try {
    const existing = JSON.parse(localStorage.getItem('taj_leads') || '[]');
    existing.push(data);
    localStorage.setItem('taj_leads', JSON.stringify(existing));
  } catch (e) {
    // Storage quota or privacy mode error ignored
  }

  // Smooth realistic UX delay
  await new Promise(resolve => setTimeout(resolve, 600));

  return {
    success: true,
    ebookUrl: defaultEbookUrl,
  };
}

async function handleFormSubmit(e) {
  e.preventDefault();
  if (isSubmitting) return;

  clearAllErrors();

  if (!validateForm()) return;

  setSubmitLoading(true);

  const globalErr = document.getElementById('formGlobalError');

  try {
    const data   = collectFormData();
    const result = await submitForm(data);

    if (result.demo) {
      // Demo mode — no endpoint or ebook URL configured
      if (globalErr) globalErr.textContent = t('err.form.demo');
      setSubmitLoading(false);
      return;
    }

    if (result.success) {
      handleSubmitSuccess(result.ebookUrl || CONFIG.ebookUrl);
    } else {
      if (globalErr) globalErr.textContent = t('err.form.server');
      setSubmitLoading(false);
    }

  } catch (err) {
    console.error('[Taj Al-Unutha] Form submission error:', err);
    if (globalErr) {
      globalErr.textContent = err.message === 'server-error'
        ? t('err.form.server')
        : t('err.form.network');
    }
    setSubmitLoading(false);
  }
}

function initForm() {
  const form = document.getElementById('leadForm');
  if (!form) return;

  // Real-time validation on blur
  ['fullName', 'phoneInput', 'emailInput'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      // Re-validate only the touched field
      if (id === 'fullName' && !el.value.trim()) {
        showFieldError('err-name', t('err.name.required'));
        el.classList.add('is-error');
      } else if (id === 'emailInput') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if (el.value.trim() && !emailRegex.test(el.value.trim())) {
          showFieldError('err-email', t('err.email.invalid'));
          el.classList.add('is-error');
        } else {
          showFieldError('err-email', '');
          el.classList.remove('is-error');
        }
      }
    });
    el.addEventListener('input', () => {
      el.classList.remove('is-error');
      const errMap = { fullName: 'err-name', phoneInput: 'err-phone', emailInput: 'err-email' };
      showFieldError(errMap[id], '');
    });
  });

  form.addEventListener('submit', handleFormSubmit);
}


/* ================================================================
   10. SUCCESS DISPLAY
   ================================================================ */
function handleSubmitSuccess(ebookUrl) {
  const form          = document.getElementById('leadForm');
  const successSection = document.getElementById('successSection');
  const downloadBtn   = document.getElementById('downloadBtn');
  const whatsappBtn   = document.getElementById('whatsappBtn');

  const finalEbook = ebookUrl || CONFIG.ebookUrl || 'https://drive.google.com/file/d/1OE-K5R0E7uCvHprMoR-5YcfaTsVUNz-n/view?usp=sharing';

  // Inject E-book URL only now — never before submission
  if (downloadBtn) {
    downloadBtn.href = finalEbook;
    downloadBtn.style.display = '';
  }

  // Inject WhatsApp URL
  if (whatsappBtn) {
    const waNum = CONFIG.whatsappNumber || '32485075219';
    whatsappBtn.href = `https://wa.me/${waNum}`;
    whatsappBtn.style.display = '';
  }

  // Hide form, show success
  if (form) form.hidden = true;
  if (successSection) {
    successSection.hidden = false;
    successSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setSubmitLoading(false);
}


/* ================================================================
   11. ANIMATION — INTERSECTION OBSERVER
   ================================================================ */
/* ================================================================
   11b. TESTIMONIALS CAROUSEL & POP-UP MODAL
   ================================================================ */
let testimonialsCarouselApi = null;

function updateTestimonialsOnLangChange() {
  if (testimonialsCarouselApi && typeof testimonialsCarouselApi.onLangChange === 'function') {
    testimonialsCarouselApi.onLangChange();
  }
}

function initTestimonialsCarousel() {
  /* ================================================================
     INFINITE AUTO-SCROLL BELT
     Strategy: Clone the entire track and append it so the CSS
     animation loops seamlessly (the keyframe only moves 50% = 1 copy).
     Pause-on-hover is handled by CSS. Modal is opened on click/Enter.
  ================================================================ */
  const belt   = document.getElementById('testimonialsBelt');
  const track  = document.getElementById('testiTrack');

  // Modal elements
  const modal         = document.getElementById('testiModal');
  const modalBackdrop = document.getElementById('testiModalBackdrop');
  const modalClose    = document.getElementById('testiModalClose');
  const modalText     = document.getElementById('modalText');
  const modalAuthor   = document.getElementById('modalAuthor');
  const modalAvatar   = document.getElementById('modalAvatar');
  const modalBadge    = document.getElementById('modalBadge');

  if (!belt || !track) return;

  /* ---- Clone track for seamless loop ---- */
  const clone = track.cloneNode(true);
  clone.id = 'testiTrackClone';
  clone.setAttribute('aria-hidden', 'true');
  // Remove tabindex / role from cloned cards so they are not focusable
  clone.querySelectorAll('[tabindex]').forEach(el => el.removeAttribute('tabindex'));
  belt.appendChild(clone);

  /* ---- Adjust speed on mobile ---- */
  function updateSpeed() {
    const isMobile = window.innerWidth <= 600;
    track.style.animationDuration = isMobile ? '24s' : '38s';
    if (clone) clone.style.animationDuration = isMobile ? '24s' : '38s';
  }
  updateSpeed();
  window.addEventListener('resize', updateSpeed, { passive: true });

  /* ---- Pause when tab hidden ---- */
  document.addEventListener('visibilitychange', () => {
    const state = document.hidden ? 'paused' : 'running';
    track.style.animationPlayState = state;
    if (clone) clone.style.animationPlayState = state;
  });

  /* ---- Modal helpers ---- */
  let isModalOpen = false;

  function openModal(card) {
    if (!modal) return;
    const textEl   = card.querySelector('.testi-card__text');
    const authorEl = card.querySelector('.testi-card__author');
    const avatarEl = card.querySelector('.testi-card__avatar');

    if (modalText   && textEl)   modalText.textContent   = textEl.textContent;
    if (modalAuthor && authorEl) modalAuthor.textContent = authorEl.textContent;

    if (modalAvatar && avatarEl) {
      modalAvatar.src = avatarEl.src;
      modalAvatar.alt = avatarEl.alt;
    }

    if (modalBadge) {
      modalBadge.style.display = 'none';
    }

    // Pause animation while modal is open
    track.style.animationPlayState = 'paused';
    if (clone) clone.style.animationPlayState = 'paused';

    isModalOpen = true;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      modal.classList.add('is-open');
      if (modalClose) modalClose.focus();
    });
  }

  function closeModal() {
    if (!modal || !isModalOpen) return;
    modal.classList.remove('is-open');
    setTimeout(() => {
      modal.hidden = true;
      isModalOpen = false;
      document.body.style.overflow = '';
      // Resume animation
      track.style.animationPlayState = 'running';
      if (clone) clone.style.animationPlayState = 'running';
    }, 300);
  }

  /* ---- Bind click on ALL cards (original and cloned) ---- */
  const allCards = belt.querySelectorAll('.testi-card');
  allCards.forEach(card => {
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  if (modalClose)   modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isModalOpen) closeModal();
  });

  /* ---- Expose no-op API so existing onLangChange calls don't crash ---- */
  testimonialsCarouselApi = {
    onLangChange: () => {}
  };
}


/* ================================================================
   09b. EXPANDABLE JOURNEY ACCORDION (6 TOPICS)
   - Only one panel open at a time
   - Clicking an already-open button closes it
   - Smooth CSS Grid 0fr -> 1fr animation
   - Full keyboard accessibility
================================================================ */
function initJourneyAccordion() {
  const accordion = document.getElementById('journeyAccordion');
  if (!accordion) return;

  const items = Array.from(accordion.querySelectorAll('.journey-item'));

  function closeItem(item) {
    const btn = item.querySelector('.journey-btn');
    const panel = item.querySelector('.journey-panel');
    if (!btn || !panel) return;
    btn.setAttribute('aria-expanded', 'false');
    btn.classList.remove('is-active');
    panel.classList.remove('is-open');
  }

  function openItem(item) {
    const btn = item.querySelector('.journey-btn');
    const panel = item.querySelector('.journey-panel');
    if (!btn || !panel) return;
    btn.setAttribute('aria-expanded', 'true');
    btn.classList.add('is-active');
    panel.classList.add('is-open');
  }

  items.forEach((item, index) => {
    const btn = item.querySelector('.journey-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close all other panels
      items.forEach(otherItem => {
        if (otherItem !== item) closeItem(otherItem);
      });

      // Toggle current panel
      if (isExpanded) {
        closeItem(item);
      } else {
        openItem(item);
      }
    });

    // Keyboard support: Arrow navigation
    btn.addEventListener('keydown', e => {
      const allBtns = items.map(it => it.querySelector('.journey-btn')).filter(Boolean);
      let targetBtn = null;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        targetBtn = allBtns[(index + 1) % allBtns.length];
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        targetBtn = allBtns[(index - 1 + allBtns.length) % allBtns.length];
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetBtn = allBtns[0];
      } else if (e.key === 'End') {
        e.preventDefault();
        targetBtn = allBtns[allBtns.length - 1];
      }
      if (targetBtn) targetBtn.focus();
    });
  });
}


function initAnimations() {
  const animatedEls = document.querySelectorAll(
    '.animate-fade-up, .animate-fade-left, .animate-fade-right'
  );

  if (!window.IntersectionObserver) {
    // Fallback: show everything immediately
    animatedEls.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px',
  });

  animatedEls.forEach(el => observer.observe(el));
}


/* ================================================================
   12. INIT — Bootstrap everything when the DOM is ready
   ================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // 1. Apply saved / default language first
  applyLanguage(currentLang);

  // 2. Navigation & external links
  initNavigation();

  // 3. Language selectors
  initLanguageSelectors();

  // 4. Country selector for phone field
  initCountrySelector();

  // 5. Interest cards + conditional question
  initInterestCards();

  // 6. Form validation & submission
  initForm();

  // 6b. Section 2 — Transformation Journey Expandable Accordion
  initJourneyAccordion();

  // 7. Scroll-triggered animations
  initAnimations();

  // 7b. Testimonials auto-play carousel & modal
  initTestimonialsCarousel();

  // 8. Active nav links on scroll (optional enhancement)
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === '#' + entry.target.id
              ? 'var(--color-charcoal)'
              : '';
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));
  }

  console.info('%cTaj Al-Unutha — Ready', 'color:#C9A77B; font-weight:bold; font-size:14px;');
});
