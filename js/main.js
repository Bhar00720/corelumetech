// ── Corelume Tech Website – main.js ─────────────────────

// ── TRANSLATIONS ────────────────────────────────────────
const translations = {
    en: {
        // Nav
        nav_home: "Home",
        nav_apps: "Our Apps",
        nav_about: "About",
        nav_contact: "Contact",
        nav_privacy: "Privacy",
        nav_terms: "Terms",
        nav_download: "Download",

        // Hero
        hero_badge: "Innovation Through Technology",
        hero_title_1: "We Build Apps",
        hero_title_2: "That Matter.",
        hero_subtitle: "Corelume Tech crafts beautifully designed mobile applications that help people be more productive, focused, and mindful in their daily lives.",
        hero_btn_primary: "Explore Our Apps",
        hero_btn_secondary: "Learn More",
        stat_apps: "Apps Published",
        stat_languages: "Languages",
        stat_users: "Growing Users",

        // App showcase
        apps_badge: "Our Apps",
        apps_title_1: "Crafted with ",
        apps_title_2: "Passion",
        apps_subtitle: "Discover our apps designed to enhance your daily productivity",
        app_name: "Focus Flow",
        app_tagline: "Stay Focused. Grow Your Forest.",
        app_badge_prod: "Productivity",
        app_badge_free: "Free",
        app_badge_lang: "5 Languages",
        app_info_title: "Your Ultimate Focus Companion",
        app_info_desc: "Transform your focus sessions into a beautiful virtual forest. Use the Pomodoro technique with ambient sounds, track habits, and watch your productivity bloom.",
        app_feat_1: "Pomodoro timer with customizable intervals",
        app_feat_2: "Grow virtual trees across 3 unique species",
        app_feat_3: "10+ calming ambient sounds for focus & breaks",
        app_feat_4: "Daily habit tracking with streaks",
        app_feat_5: "Detailed productivity statistics",
        app_feat_6: "Available in 5 languages",
        app_btn_playstore: "Get it on Google Play",

        // Features
        feat_badge: "Focus Flow Features",
        feat_title_1: "Everything You Need to ",
        feat_title_2: "Stay Focused",
        feat_subtitle: "A beautifully crafted productivity companion that makes focusing fun",
        feat_trees_title: "Grow Virtual Trees",
        feat_trees_desc: "Plant and grow realistic trees during focus sessions. Different species and growth stages make every session unique.",
        feat_timer_title: "Pomodoro Timer",
        feat_timer_desc: "Customizable focus and break intervals. Start a session, stay focused, and watch your tree grow as you complete each cycle.",
        feat_sounds_title: "Ambient Sounds",
        feat_sounds_desc: "10+ calming sounds categorized into Focus and Break modes — from gentle rain and brown noise to birdsong and café chatter.",
        feat_forest_title: "Your Forest",
        feat_forest_desc: "Every completed session adds a tree to your personal forest. Watch it grow over time as a visual record of your productivity.",
        feat_habits_title: "Habit Tracking",
        feat_habits_desc: "Build positive habits alongside your focus practice. Track daily habits with streaks, reminders, and completion history.",
        feat_stats_title: "Statistics",
        feat_stats_desc: "Detailed analytics of your focus time, sessions completed, habits tracked, and productivity trends over days and weeks.",

        // CTA
        cta_title: "Ready to Boost Your Focus?",
        cta_desc: "Download Focus Flow for free and start growing your forest today.",
        cta_btn: "Download Free on Google Play",

        // Footer
        footer_desc: "Building innovative mobile applications that make a difference. Crafting productivity tools with care.",
        footer_company: "Company",
        footer_legal: "Legal",
        footer_download: "Download",
        footer_copyright: "© 2026 Corelume Tech. All rights reserved.",

        // About page
        about_title_1: "About ",
        about_title_2: "Corelume Tech",
        about_subtitle: "Building tools that make productivity feel effortless",
        about_mission_title: "Our Mission",
        about_mission_p1: "At Corelume Tech, we believe technology should simplify life, not complicate it. We design and develop mobile applications that help people focus, build positive habits, and achieve their goals — all while making the experience enjoyable.",
        about_mission_p2: "Our flagship app, Focus Flow, was born from a simple idea: what if staying focused felt as rewarding as the work itself? By combining the proven Pomodoro technique with the satisfaction of growing a virtual forest, we created an app that turns productivity into a creative, visual experience.",
        about_card1_title: "Focus First",
        about_card1_desc: "We design every feature to minimize distractions and maximize your deep work potential.",
        about_card2_title: "Beautiful Design",
        about_card2_desc: "Premium aesthetics with smooth animations, ambient sounds, and a calming interface.",
        about_card3_title: "Growth Mindset",
        about_card3_desc: "Visual progress through your growing forest keeps you motivated day after day.",
        about_values_title: "Our Values",
        about_val_privacy: "Privacy — We respect your data. Our apps work primarily on your device; your personal data stays with you.",
        about_val_quality: "Quality — Every pixel, every animation, every sound is crafted with care to create a premium experience.",
        about_val_access: "Accessibility — We offer generous free tiers so everyone can benefit, with optional premium features for power users.",
        about_contact_title: "Contact",
        about_contact_text: "Have questions, feedback, or ideas? Reach out to us at",

        // Contact page
        contact_title_1: "Contact ",
        contact_title_2: "Us",
        contact_subtitle: "We'd love to hear from you",
        contact_intro: "Have questions, feedback, or need support? Reach out to us via email. We typically respond within 24–48 hours.",
        contact_email_title: "Email Us",
        contact_response: "We typically respond within 24–48 hours",
        contact_rate_text: "Enjoying Focus Flow?",
        contact_rate_link: "Leave a review on Google Play",

        // Privacy page
        privacy_title_1: "Privacy ",
        privacy_title_2: "Policy",
        privacy_subtitle: "Your privacy matters to us",

        // Terms page
        terms_title_1: "Terms & ",
        terms_title_2: "Conditions",
        terms_subtitle: "Please read these terms carefully before using our services"
    },

    hi: {
        nav_home: "होम",
        nav_apps: "हमारे ऐप्स",
        nav_about: "हमारे बारे में",
        nav_contact: "संपर्क",
        nav_privacy: "गोपनीयता",
        nav_terms: "शर्तें",
        nav_download: "डाउनलोड",

        hero_badge: "प्रौद्योगिकी के माध्यम से नवाचार",
        hero_title_1: "हम ऐप्स बनाते हैं",
        hero_title_2: "जो मायने रखते हैं।",
        hero_subtitle: "Corelume Tech सुंदर रूप से डिज़ाइन किए गए मोबाइल एप्लिकेशन बनाता है जो लोगों को उनके दैनिक जीवन में अधिक उत्पादक, केंद्रित और सचेत बनने में मदद करते हैं।",
        hero_btn_primary: "हमारे ऐप्स देखें",
        hero_btn_secondary: "और जानें",
        stat_apps: "प्रकाशित ऐप्स",
        stat_languages: "भाषाएँ",
        stat_users: "बढ़ते उपयोगकर्ता",

        apps_badge: "हमारे ऐप्स",
        apps_title_1: "जुनून से ",
        apps_title_2: "बनाए गए",
        apps_subtitle: "हमारे ऐप्स खोजें जो आपकी दैनिक उत्पादकता बढ़ाने के लिए डिज़ाइन किए गए हैं",
        app_name: "Focus Flow",
        app_tagline: "केंद्रित रहें। अपना जंगल बढ़ाएँ।",
        app_badge_prod: "उत्पादकता",
        app_badge_free: "मुफ़्त",
        app_badge_lang: "5 भाषाएँ",
        app_info_title: "आपका सर्वोत्तम फ़ोकस साथी",
        app_info_desc: "अपने फ़ोकस सत्रों को एक सुंदर आभासी जंगल में बदलें। परिवेशी ध्वनियों के साथ पोमोडोरो तकनीक का उपयोग करें, आदतों को ट्रैक करें, और अपनी उत्पादकता को खिलते देखें।",
        app_feat_1: "अनुकूलन योग्य अंतराल के साथ पोमोडोरो टाइमर",
        app_feat_2: "3 अनूठी प्रजातियों में आभासी पेड़ उगाएँ",
        app_feat_3: "फ़ोकस और ब्रेक के लिए 10+ शांत परिवेशी ध्वनियाँ",
        app_feat_4: "स्ट्रीक्स के साथ दैनिक आदत ट्रैकिंग",
        app_feat_5: "विस्तृत उत्पादकता आँकड़े",
        app_feat_6: "5 भाषाओं में उपलब्ध",
        app_btn_playstore: "Google Play पर पाएं",

        feat_badge: "Focus Flow विशेषताएँ",
        feat_title_1: "केंद्रित रहने के लिए ",
        feat_title_2: "सब कुछ",
        feat_subtitle: "एक सुंदर उत्पादकता साथी जो ध्यान केंद्रित करना मज़ेदार बनाता है",
        feat_trees_title: "आभासी पेड़ उगाएँ",
        feat_trees_desc: "फ़ोकस सत्रों के दौरान यथार्थवादी पेड़ लगाएँ और उगाएँ। विभिन्न प्रजातियाँ और विकास चरण हर सत्र को अनूठा बनाते हैं।",
        feat_timer_title: "पोमोडोरो टाइमर",
        feat_timer_desc: "अनुकूलन योग्य फ़ोकस और ब्रेक अंतराल। सत्र शुरू करें, केंद्रित रहें, और प्रत्येक चक्र पूरा करते हुए अपने पेड़ को बढ़ते देखें।",
        feat_sounds_title: "परिवेशी ध्वनियाँ",
        feat_sounds_desc: "फ़ोकस और ब्रेक मोड में वर्गीकृत 10+ शांत ध्वनियाँ — हल्की बारिश और ब्राउन नॉइज़ से लेकर पक्षियों की आवाज़ और कैफ़े की चहल-पहल तक।",
        feat_forest_title: "आपका जंगल",
        feat_forest_desc: "हर पूर्ण सत्र आपके व्यक्तिगत जंगल में एक पेड़ जोड़ता है। समय के साथ इसे बढ़ते देखें — आपकी उत्पादकता का दृश्य रिकॉर्ड।",
        feat_habits_title: "आदत ट्रैकिंग",
        feat_habits_desc: "अपने फ़ोकस अभ्यास के साथ सकारात्मक आदतें बनाएँ। स्ट्रीक्स, रिमाइंडर और पूर्णता इतिहास के साथ दैनिक आदतों को ट्रैक करें।",
        feat_stats_title: "आँकड़े",
        feat_stats_desc: "आपके फ़ोकस समय, पूर्ण सत्रों, ट्रैक की गई आदतों और दिनों व हफ़्तों में उत्पादकता रुझानों का विस्तृत विश्लेषण।",

        cta_title: "अपना ध्यान बढ़ाने के लिए तैयार हैं?",
        cta_desc: "Focus Flow मुफ़्त डाउनलोड करें और आज ही अपना जंगल उगाना शुरू करें।",
        cta_btn: "Google Play पर मुफ़्त डाउनलोड करें",

        footer_desc: "नवीन मोबाइल एप्लिकेशन बनाना जो फ़र्क करते हैं। देखभाल के साथ उत्पादकता उपकरण तैयार करना।",
        footer_company: "कंपनी",
        footer_legal: "कानूनी",
        footer_download: "डाउनलोड",
        footer_copyright: "© 2026 Corelume Tech. सर्वाधिकार सुरक्षित।",

        about_title_1: "",
        about_title_2: "Corelume Tech के बारे में",
        about_subtitle: "ऐसे उपकरण बनाना जो उत्पादकता को सहज बनाते हैं",
        about_mission_title: "हमारा मिशन",
        about_mission_p1: "Corelume Tech में, हम मानते हैं कि प्रौद्योगिकी को जीवन सरल बनाना चाहिए, जटिल नहीं। हम मोबाइल एप्लिकेशन डिज़ाइन और विकसित करते हैं जो लोगों को ध्यान केंद्रित करने, सकारात्मक आदतें बनाने और अपने लक्ष्य प्राप्त करने में मदद करते हैं।",
        about_mission_p2: "हमारा प्रमुख ऐप, Focus Flow, एक सरल विचार से पैदा हुआ था: क्या होगा अगर ध्यान केंद्रित करना उतना ही पुरस्कृत लगे जितना काम स्वयं? सिद्ध पोमोडोरो तकनीक को आभासी जंगल उगाने के संतोष के साथ मिलाकर, हमने एक ऐसा ऐप बनाया जो उत्पादकता को एक रचनात्मक, दृश्य अनुभव में बदल देता है।",
        about_card1_title: "पहले ध्यान",
        about_card1_desc: "हम हर सुविधा को विकर्षणों को कम करने और आपकी गहन कार्य क्षमता को अधिकतम करने के लिए डिज़ाइन करते हैं।",
        about_card2_title: "सुंदर डिज़ाइन",
        about_card2_desc: "सहज एनिमेशन, परिवेशी ध्वनियाँ, और शांत इंटरफ़ेस के साथ प्रीमियम सौंदर्य।",
        about_card3_title: "विकास मानसिकता",
        about_card3_desc: "आपके बढ़ते जंगल के माध्यम से दृश्य प्रगति आपको दिन-प्रतिदिन प्रेरित रखती है।",
        about_values_title: "हमारे मूल्य",
        about_val_privacy: "गोपनीयता — हम आपके डेटा का सम्मान करते हैं। हमारे ऐप्स मुख्य रूप से आपके डिवाइस पर काम करते हैं; आपका व्यक्तिगत डेटा आपके पास रहता है।",
        about_val_quality: "गुणवत्ता — प्रीमियम अनुभव बनाने के लिए हर पिक्सेल, हर एनिमेशन, हर ध्वनि को ध्यान से तैयार किया गया है।",
        about_val_access: "पहुँच — हम उदार मुफ़्त स्तर प्रदान करते हैं ताकि हर कोई लाभ उठा सके, पावर उपयोगकर्ताओं के लिए वैकल्पिक प्रीमियम सुविधाओं के साथ।",
        about_contact_title: "संपर्क",
        about_contact_text: "प्रश्न, प्रतिक्रिया, या विचार हैं? हमसे संपर्क करें:",

        contact_title_1: "हमसे ",
        contact_title_2: "संपर्क करें",
        contact_subtitle: "हम आपसे सुनना चाहेंगे",
        contact_intro: "प्रश्न, प्रतिक्रिया, या सहायता चाहिए? ईमेल के माध्यम से हमसे संपर्क करें। हम आमतौर पर 24–48 घंटों के भीतर जवाब देते हैं।",
        contact_email_title: "हमें ईमेल करें",
        contact_response: "हम आमतौर पर 24–48 घंटों के भीतर जवाब देते हैं",
        contact_rate_text: "Focus Flow पसंद आया?",
        contact_rate_link: "Google Play पर समीक्षा दें",

        privacy_title_1: "गोपनीयता ",
        privacy_title_2: "नीति",
        privacy_subtitle: "आपकी गोपनीयता हमारे लिए महत्वपूर्ण है",

        terms_title_1: "नियम और ",
        terms_title_2: "शर्तें",
        terms_subtitle: "कृपया हमारी सेवाओं का उपयोग करने से पहले इन शर्तों को ध्यान से पढ़ें"
    },

    pt: {
        nav_home: "Início",
        nav_apps: "Nossos Apps",
        nav_about: "Sobre",
        nav_contact: "Contato",
        nav_privacy: "Privacidade",
        nav_terms: "Termos",
        nav_download: "Baixar",

        hero_badge: "Inovação Através da Tecnologia",
        hero_title_1: "Criamos Apps",
        hero_title_2: "Que Importam.",
        hero_subtitle: "A Corelume Tech desenvolve aplicativos móveis lindamente projetados que ajudam as pessoas a serem mais produtivas, focadas e conscientes em suas vidas diárias.",
        hero_btn_primary: "Explore Nossos Apps",
        hero_btn_secondary: "Saiba Mais",
        stat_apps: "Apps Publicados",
        stat_languages: "Idiomas",
        stat_users: "Usuários Crescendo",

        apps_badge: "Nossos Apps",
        apps_title_1: "Criados com ",
        apps_title_2: "Paixão",
        apps_subtitle: "Descubra nossos apps projetados para melhorar sua produtividade diária",
        app_name: "Focus Flow",
        app_tagline: "Mantenha o Foco. Cultive Sua Floresta.",
        app_badge_prod: "Produtividade",
        app_badge_free: "Grátis",
        app_badge_lang: "5 Idiomas",
        app_info_title: "Seu Companheiro de Foco Definitivo",
        app_info_desc: "Transforme suas sessões de foco em uma bela floresta virtual. Use a técnica Pomodoro com sons ambientes, acompanhe hábitos e veja sua produtividade florescer.",
        app_feat_1: "Timer Pomodoro com intervalos personalizáveis",
        app_feat_2: "Cultive árvores virtuais em 3 espécies únicas",
        app_feat_3: "10+ sons ambientes relaxantes para foco e pausas",
        app_feat_4: "Acompanhamento diário de hábitos com sequências",
        app_feat_5: "Estatísticas detalhadas de produtividade",
        app_feat_6: "Disponível em 5 idiomas",
        app_btn_playstore: "Baixe no Google Play",

        feat_badge: "Recursos do Focus Flow",
        feat_title_1: "Tudo que Você Precisa para ",
        feat_title_2: "Manter o Foco",
        feat_subtitle: "Um companheiro de produtividade lindamente criado que torna o foco divertido",
        feat_trees_title: "Cultive Árvores Virtuais",
        feat_trees_desc: "Plante e cultive árvores realistas durante sessões de foco. Diferentes espécies e estágios de crescimento tornam cada sessão única.",
        feat_timer_title: "Timer Pomodoro",
        feat_timer_desc: "Intervalos de foco e pausa personalizáveis. Inicie uma sessão, mantenha o foco e veja sua árvore crescer a cada ciclo completado.",
        feat_sounds_title: "Sons Ambientes",
        feat_sounds_desc: "10+ sons relaxantes categorizados em modos Foco e Pausa — de chuva suave e ruído marrom ao canto dos pássaros e conversa de café.",
        feat_forest_title: "Sua Floresta",
        feat_forest_desc: "Cada sessão completa adiciona uma árvore à sua floresta pessoal. Veja-a crescer ao longo do tempo como um registro visual da sua produtividade.",
        feat_habits_title: "Acompanhamento de Hábitos",
        feat_habits_desc: "Construa hábitos positivos junto com sua prática de foco. Acompanhe hábitos diários com sequências, lembretes e histórico.",
        feat_stats_title: "Estatísticas",
        feat_stats_desc: "Análises detalhadas do seu tempo de foco, sessões completadas, hábitos acompanhados e tendências de produtividade ao longo de dias e semanas.",

        cta_title: "Pronto para Aumentar Seu Foco?",
        cta_desc: "Baixe o Focus Flow gratuitamente e comece a cultivar sua floresta hoje.",
        cta_btn: "Baixe Grátis no Google Play",

        footer_desc: "Construindo aplicativos móveis inovadores que fazem a diferença. Criando ferramentas de produtividade com carinho.",
        footer_company: "Empresa",
        footer_legal: "Legal",
        footer_download: "Baixar",
        footer_copyright: "© 2026 Corelume Tech. Todos os direitos reservados.",

        about_title_1: "Sobre a ",
        about_title_2: "Corelume Tech",
        about_subtitle: "Construindo ferramentas que tornam a produtividade natural",
        about_mission_title: "Nossa Missão",
        about_mission_p1: "Na Corelume Tech, acreditamos que a tecnologia deve simplificar a vida, não complicá-la. Projetamos e desenvolvemos aplicativos móveis que ajudam as pessoas a se concentrar, construir hábitos positivos e alcançar seus objetivos.",
        about_mission_p2: "Nosso app principal, Focus Flow, nasceu de uma ideia simples: e se manter o foco fosse tão gratificante quanto o próprio trabalho? Combinando a comprovada técnica Pomodoro com a satisfação de cultivar uma floresta virtual, criamos um app que transforma produtividade em uma experiência criativa e visual.",
        about_card1_title: "Foco Primeiro",
        about_card1_desc: "Projetamos cada recurso para minimizar distrações e maximizar seu potencial de trabalho profundo.",
        about_card2_title: "Design Bonito",
        about_card2_desc: "Estética premium com animações suaves, sons ambientes e uma interface tranquila.",
        about_card3_title: "Mentalidade de Crescimento",
        about_card3_desc: "O progresso visual através da sua floresta crescente mantém você motivado dia após dia.",
        about_values_title: "Nossos Valores",
        about_val_privacy: "Privacidade — Respeitamos seus dados. Nossos apps funcionam principalmente no seu dispositivo; seus dados pessoais ficam com você.",
        about_val_quality: "Qualidade — Cada pixel, cada animação, cada som é criado com cuidado para proporcionar uma experiência premium.",
        about_val_access: "Acessibilidade — Oferecemos níveis gratuitos generosos para que todos possam se beneficiar, com recursos premium opcionais para usuários avançados.",
        about_contact_title: "Contato",
        about_contact_text: "Tem perguntas, feedback ou ideias? Entre em contato conosco em",

        contact_title_1: "Fale ",
        contact_title_2: "Conosco",
        contact_subtitle: "Adoraríamos ouvir você",
        contact_intro: "Tem perguntas, feedback ou precisa de suporte? Entre em contato conosco por e-mail. Normalmente respondemos em 24–48 horas.",
        contact_email_title: "Envie um E-mail",
        contact_response: "Normalmente respondemos em 24–48 horas",
        contact_rate_text: "Gostando do Focus Flow?",
        contact_rate_link: "Deixe uma avaliação no Google Play",

        privacy_title_1: "Política de ",
        privacy_title_2: "Privacidade",
        privacy_subtitle: "Sua privacidade é importante para nós",

        terms_title_1: "Termos e ",
        terms_title_2: "Condições",
        terms_subtitle: "Por favor, leia estes termos com atenção antes de usar nossos serviços"
    },

    es: {
        nav_home: "Inicio",
        nav_apps: "Nuestras Apps",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        nav_privacy: "Privacidad",
        nav_terms: "Términos",
        nav_download: "Descargar",

        hero_badge: "Innovación a Través de la Tecnología",
        hero_title_1: "Creamos Apps",
        hero_title_2: "Que Importan.",
        hero_subtitle: "Corelume Tech crea aplicaciones móviles bellamente diseñadas que ayudan a las personas a ser más productivas, enfocadas y conscientes en su vida diaria.",
        hero_btn_primary: "Explora Nuestras Apps",
        hero_btn_secondary: "Saber Más",
        stat_apps: "Apps Publicadas",
        stat_languages: "Idiomas",
        stat_users: "Usuarios Creciendo",

        apps_badge: "Nuestras Apps",
        apps_title_1: "Creadas con ",
        apps_title_2: "Pasión",
        apps_subtitle: "Descubre nuestras apps diseñadas para mejorar tu productividad diaria",
        app_name: "Focus Flow",
        app_tagline: "Mantén el Enfoque. Cultiva Tu Bosque.",
        app_badge_prod: "Productividad",
        app_badge_free: "Gratis",
        app_badge_lang: "5 Idiomas",
        app_info_title: "Tu Compañero de Enfoque Definitivo",
        app_info_desc: "Transforma tus sesiones de enfoque en un hermoso bosque virtual. Usa la técnica Pomodoro con sonidos ambientales, rastrea hábitos y observa cómo florece tu productividad.",
        app_feat_1: "Temporizador Pomodoro con intervalos personalizables",
        app_feat_2: "Cultiva árboles virtuales en 3 especies únicas",
        app_feat_3: "10+ sonidos ambientales relajantes para enfoque y descansos",
        app_feat_4: "Seguimiento diario de hábitos con rachas",
        app_feat_5: "Estadísticas detalladas de productividad",
        app_feat_6: "Disponible en 5 idiomas",
        app_btn_playstore: "Consíguelo en Google Play",

        feat_badge: "Características de Focus Flow",
        feat_title_1: "Todo lo que Necesitas para ",
        feat_title_2: "Mantenerte Enfocado",
        feat_subtitle: "Un compañero de productividad bellamente diseñado que hace que enfocarse sea divertido",
        feat_trees_title: "Cultiva Árboles Virtuales",
        feat_trees_desc: "Planta y cultiva árboles realistas durante sesiones de enfoque. Diferentes especies y etapas de crecimiento hacen cada sesión única.",
        feat_timer_title: "Temporizador Pomodoro",
        feat_timer_desc: "Intervalos de enfoque y descanso personalizables. Inicia una sesión, mantén el enfoque y observa tu árbol crecer al completar cada ciclo.",
        feat_sounds_title: "Sonidos Ambientales",
        feat_sounds_desc: "10+ sonidos relajantes categorizados en modos de Enfoque y Descanso — desde lluvia suave y ruido marrón hasta canto de pájaros y ambiente de café.",
        feat_forest_title: "Tu Bosque",
        feat_forest_desc: "Cada sesión completada añade un árbol a tu bosque personal. Obsérvalo crecer con el tiempo como un registro visual de tu productividad.",
        feat_habits_title: "Seguimiento de Hábitos",
        feat_habits_desc: "Construye hábitos positivos junto con tu práctica de enfoque. Rastrea hábitos diarios con rachas, recordatorios e historial de finalización.",
        feat_stats_title: "Estadísticas",
        feat_stats_desc: "Análisis detallados de tu tiempo de enfoque, sesiones completadas, hábitos rastreados y tendencias de productividad a lo largo de días y semanas.",

        cta_title: "¿Listo para Mejorar Tu Enfoque?",
        cta_desc: "Descarga Focus Flow gratis y comienza a cultivar tu bosque hoy.",
        cta_btn: "Descarga Gratis en Google Play",

        footer_desc: "Construyendo aplicaciones móviles innovadoras que marcan la diferencia. Creando herramientas de productividad con esmero.",
        footer_company: "Empresa",
        footer_legal: "Legal",
        footer_download: "Descargar",
        footer_copyright: "© 2026 Corelume Tech. Todos los derechos reservados.",

        about_title_1: "Sobre ",
        about_title_2: "Corelume Tech",
        about_subtitle: "Construyendo herramientas que hacen la productividad natural",
        about_mission_title: "Nuestra Misión",
        about_mission_p1: "En Corelume Tech, creemos que la tecnología debe simplificar la vida, no complicarla. Diseñamos y desarrollamos aplicaciones móviles que ayudan a las personas a enfocarse, construir hábitos positivos y alcanzar sus metas.",
        about_mission_p2: "Nuestra app principal, Focus Flow, nació de una idea simple: ¿y si mantenerse enfocado fuera tan gratificante como el trabajo en sí? Combinando la probada técnica Pomodoro con la satisfacción de cultivar un bosque virtual, creamos una app que convierte la productividad en una experiencia creativa y visual.",
        about_card1_title: "Enfoque Primero",
        about_card1_desc: "Diseñamos cada característica para minimizar distracciones y maximizar tu potencial de trabajo profundo.",
        about_card2_title: "Diseño Hermoso",
        about_card2_desc: "Estética premium con animaciones suaves, sonidos ambientales y una interfaz tranquila.",
        about_card3_title: "Mentalidad de Crecimiento",
        about_card3_desc: "El progreso visual a través de tu bosque creciente te mantiene motivado día tras día.",
        about_values_title: "Nuestros Valores",
        about_val_privacy: "Privacidad — Respetamos tus datos. Nuestras apps funcionan principalmente en tu dispositivo; tus datos personales se quedan contigo.",
        about_val_quality: "Calidad — Cada píxel, cada animación, cada sonido está creado con cuidado para ofrecer una experiencia premium.",
        about_val_access: "Accesibilidad — Ofrecemos niveles gratuitos generosos para que todos puedan beneficiarse, con funciones premium opcionales para usuarios avanzados.",
        about_contact_title: "Contacto",
        about_contact_text: "¿Tienes preguntas, comentarios o ideas? Contáctanos en",

        contact_title_1: "Contáct",
        contact_title_2: "anos",
        contact_subtitle: "Nos encantaría saber de ti",
        contact_intro: "¿Tienes preguntas, comentarios o necesitas soporte? Contáctanos por correo electrónico. Normalmente respondemos en 24–48 horas.",
        contact_email_title: "Envíanos un Correo",
        contact_response: "Normalmente respondemos en 24–48 horas",
        contact_rate_text: "¿Disfrutando Focus Flow?",
        contact_rate_link: "Deja una reseña en Google Play",

        privacy_title_1: "Política de ",
        privacy_title_2: "Privacidad",
        privacy_subtitle: "Tu privacidad nos importa",

        terms_title_1: "Términos y ",
        terms_title_2: "Condiciones",
        terms_subtitle: "Por favor, lee estos términos cuidadosamente antes de usar nuestros servicios"
    },

    ar: {
        nav_home: "الرئيسية",
        nav_apps: "تطبيقاتنا",
        nav_about: "عن الشركة",
        nav_contact: "اتصل بنا",
        nav_privacy: "الخصوصية",
        nav_terms: "الشروط",
        nav_download: "تحميل",

        hero_badge: "الابتكار من خلال التكنولوجيا",
        hero_title_1: "نبني تطبيقات",
        hero_title_2: "ذات أهمية.",
        hero_subtitle: "تصمم Corelume Tech تطبيقات جوال جميلة تساعد الناس على أن يكونوا أكثر إنتاجية وتركيزاً ووعياً في حياتهم اليومية.",
        hero_btn_primary: "استكشف تطبيقاتنا",
        hero_btn_secondary: "اعرف المزيد",
        stat_apps: "تطبيقات منشورة",
        stat_languages: "لغات",
        stat_users: "مستخدمون متزايدون",

        apps_badge: "تطبيقاتنا",
        apps_title_1: "صُنعت بـ",
        apps_title_2: "شغف",
        apps_subtitle: "اكتشف تطبيقاتنا المصممة لتعزيز إنتاجيتك اليومية",
        app_name: "Focus Flow",
        app_tagline: "ابقَ مركزاً. ازرع غابتك.",
        app_badge_prod: "إنتاجية",
        app_badge_free: "مجاني",
        app_badge_lang: "5 لغات",
        app_info_title: "رفيقك المثالي للتركيز",
        app_info_desc: "حوّل جلسات التركيز إلى غابة افتراضية جميلة. استخدم تقنية بومودورو مع الأصوات المحيطة، وتتبع العادات، وشاهد إنتاجيتك تزدهر.",
        app_feat_1: "مؤقت بومودورو بفترات قابلة للتخصيص",
        app_feat_2: "ازرع أشجاراً افتراضية عبر 3 أنواع فريدة",
        app_feat_3: "10+ أصوات محيطة هادئة للتركيز والاستراحة",
        app_feat_4: "تتبع العادات اليومية مع سلاسل الإنجاز",
        app_feat_5: "إحصائيات إنتاجية مفصلة",
        app_feat_6: "متوفر بـ 5 لغات",
        app_btn_playstore: "احصل عليه من Google Play",

        feat_badge: "ميزات Focus Flow",
        feat_title_1: "كل ما تحتاجه لـ",
        feat_title_2: "البقاء مركزاً",
        feat_subtitle: "رفيق إنتاجية مصمم بشكل جميل يجعل التركيز ممتعاً",
        feat_trees_title: "ازرع أشجاراً افتراضية",
        feat_trees_desc: "ازرع وانمّي أشجاراً واقعية خلال جلسات التركيز. أنواع مختلفة ومراحل نمو تجعل كل جلسة فريدة.",
        feat_timer_title: "مؤقت بومودورو",
        feat_timer_desc: "فترات تركيز واستراحة قابلة للتخصيص. ابدأ جلسة، وابقَ مركزاً، وشاهد شجرتك تنمو مع إكمال كل دورة.",
        feat_sounds_title: "أصوات محيطة",
        feat_sounds_desc: "10+ أصوات هادئة مصنفة في أوضاع التركيز والاستراحة — من المطر اللطيف والضوضاء البنية إلى أصوات الطيور وأجواء المقهى.",
        feat_forest_title: "غابتك",
        feat_forest_desc: "كل جلسة مكتملة تضيف شجرة إلى غابتك الشخصية. شاهدها تنمو مع مرور الوقت كسجل مرئي لإنتاجيتك.",
        feat_habits_title: "تتبع العادات",
        feat_habits_desc: "ابنِ عادات إيجابية مع ممارسة التركيز. تتبع العادات اليومية مع سلاسل الإنجاز والتذكيرات وتاريخ الإنجاز.",
        feat_stats_title: "الإحصائيات",
        feat_stats_desc: "تحليلات مفصلة لوقت تركيزك، والجلسات المكتملة، والعادات المتتبعة، واتجاهات الإنتاجية عبر الأيام والأسابيع.",

        cta_title: "مستعد لتعزيز تركيزك؟",
        cta_desc: "حمّل Focus Flow مجاناً وابدأ بزراعة غابتك اليوم.",
        cta_btn: "تحميل مجاني من Google Play",

        footer_desc: "نبني تطبيقات جوال مبتكرة تُحدث فرقاً. نصنع أدوات الإنتاجية بعناية.",
        footer_company: "الشركة",
        footer_legal: "قانوني",
        footer_download: "تحميل",
        footer_copyright: "© 2026 Corelume Tech. جميع الحقوق محفوظة.",

        about_title_1: "عن ",
        about_title_2: "Corelume Tech",
        about_subtitle: "بناء أدوات تجعل الإنتاجية سهلة",
        about_mission_title: "مهمتنا",
        about_mission_p1: "في Corelume Tech، نؤمن بأن التكنولوجيا يجب أن تبسط الحياة، لا أن تعقدها. نصمم ونطور تطبيقات جوال تساعد الناس على التركيز وبناء عادات إيجابية وتحقيق أهدافهم.",
        about_mission_p2: "تطبيقنا الرئيسي، Focus Flow، وُلد من فكرة بسيطة: ماذا لو كان البقاء مركزاً مجزياً مثل العمل نفسه؟ بدمج تقنية بومودورو المُثبتة مع متعة زراعة غابة افتراضية، أنشأنا تطبيقاً يحول الإنتاجية إلى تجربة إبداعية ومرئية.",
        about_card1_title: "التركيز أولاً",
        about_card1_desc: "نصمم كل ميزة لتقليل المشتتات وزيادة إمكانات عملك العميق.",
        about_card2_title: "تصميم جميل",
        about_card2_desc: "جماليات متميزة مع رسوم متحركة سلسة وأصوات محيطة وواجهة هادئة.",
        about_card3_title: "عقلية النمو",
        about_card3_desc: "التقدم المرئي من خلال غابتك المتنامية يبقيك متحفزاً يوماً بعد يوم.",
        about_values_title: "قيمنا",
        about_val_privacy: "الخصوصية — نحترم بياناتك. تعمل تطبيقاتنا بشكل أساسي على جهازك؛ بياناتك الشخصية تبقى معك.",
        about_val_quality: "الجودة — كل بكسل، كل رسوم متحركة، كل صوت مصنوع بعناية لتقديم تجربة متميزة.",
        about_val_access: "إمكانية الوصول — نقدم مستويات مجانية سخية ليستفيد الجميع، مع ميزات متميزة اختيارية للمستخدمين المتقدمين.",
        about_contact_title: "اتصل بنا",
        about_contact_text: "لديك أسئلة أو ملاحظات أو أفكار؟ تواصل معنا على",

        contact_title_1: "اتصل ",
        contact_title_2: "بنا",
        contact_subtitle: "نحب أن نسمع منك",
        contact_intro: "لديك أسئلة أو ملاحظات أو تحتاج دعم؟ تواصل معنا عبر البريد الإلكتروني. نرد عادة خلال 24–48 ساعة.",
        contact_email_title: "راسلنا",
        contact_response: "نرد عادة خلال 24–48 ساعة",
        contact_rate_text: "تستمتع بـ Focus Flow؟",
        contact_rate_link: "اترك تقييم على Google Play",

        privacy_title_1: "سياسة ",
        privacy_title_2: "الخصوصية",
        privacy_subtitle: "خصوصيتك تهمنا",

        terms_title_1: "الشروط ",
        terms_title_2: "والأحكام",
        terms_subtitle: "يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا"
    }
};

const langNames = {
    en: "English",
    hi: "हिन्दी",
    pt: "Português",
    es: "Español",
    ar: "العربية"
};

const langFlags = {
    en: "🇬🇧",
    hi: "🇮🇳",
    pt: "🇧🇷",
    es: "🇪🇸",
    ar: "🇸🇦"
};

// ── LANGUAGE ENGINE ─────────────────────────────────────
function getCurrentLang() {
    return localStorage.getItem('cl_lang') || detectBrowserLang();
}

function detectBrowserLang() {
    const browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2);
    return translations[browserLang] ? browserLang : 'en';
}

function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    localStorage.setItem('cl_lang', lang);

    // Translate all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Translate [data-i18n-html] elements (that need innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // RTL for Arabic
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Update button label
    const btn = document.getElementById('langBtn');
    if (btn) {
        btn.querySelector('.lang-label').textContent = langNames[lang];
    }
}

// ── NAVBAR ──────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const topBanner = document.querySelector('.top-app-banner');

function updateNavbarPosition() {
    if (!navbar) return;
    let scrollY = window.scrollY;
    if (topBanner) {
        const bannerHeight = topBanner.offsetHeight;
        if (scrollY > bannerHeight) {
            navbar.style.top = '0px';
        } else {
            navbar.style.top = (bannerHeight - scrollY) + 'px';
        }
    }
}
window.addEventListener('scroll', updateNavbarPosition);
updateNavbarPosition();

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// ── LANGUAGE SWITCHER ───────────────────────────────────
const langDropdown = document.getElementById('langDropdown');
const langBtn = document.getElementById('langBtn');

if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            setLanguage(opt.dataset.lang);
            langDropdown.classList.remove('show');
        });
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });
}

// ── SCROLL ANIMATIONS ───────────────────────────────────
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .about-card, .contact-email-card, .contact-playstore, .app-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ── INIT ─────────────────────────────────────────────────
setLanguage(getCurrentLang());


// ══ FOCUS FLOW INTERACTIVE GOOGLE PLAY MODAL LOGIC ════════════
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        // --- 1. FREQUENCY CONTROL: Daily 5 times with a 20-minute gap ---
        const FREQ_STORAGE_KEY = 'focusFlowDailyPopupStats_v2';
        const MAX_DAILY_SHOWS = 5; // Max 5 times per day
        const MIN_GAP_MS = 20 * 60 * 1000; // 20 minutes gap between displays
        const now = Date.now();
        const todayStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

        let stats = { date: todayStr, count: 0, lastSeen: 0 };
        try {
            const stored = localStorage.getItem(FREQ_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed && parsed.date === todayStr) {
                    stats = parsed;
                }
            }
        } catch (err) {
            // Fallback for private browsing storage quirks
        }

        // Check if limit of 5 per day is reached
        if (stats.count >= MAX_DAILY_SHOWS) {
            return;
        }

        // Check if specific time gap (20 minutes) has elapsed since last appearance
        if (stats.lastSeen && (now - stats.lastSeen) < MIN_GAP_MS) {
            return;
        }

        // --- 2. MODAL HTML: Official Google Play Style with Interactive Slider ---
        const modalHtml = `
            <div id="focusFlowModal" class="ff-modal-overlay" role="dialog" aria-modal="true" aria-label="FocusFlow Google Play App Preview">
                <div class="ff-playstore-modal">
                    <button class="ff-modal-close" id="ffModalClose" aria-label="Close dialog">&times;</button>
                    
                    <!-- Google Play Header -->
                    <div class="ff-ps-header">
                        <div class="ff-ps-logo">
                            <svg width="20" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M3.6 1.8L13.8 12 3.6 22.2c-.4-.4-.6-1-.6-1.7V3.5c0-.7.2-1.3.6-1.7z" fill="#00D3FF"/>
                                <path d="M17.3 8.5L4.8 1.3C4.4 1 4 1 3.6 1.1l10.2 10.9L17.3 8.5z" fill="#00F076"/>
                                <path d="M17.3 15.5l-3.5-3.5L3.6 22.9c.4.1.8.1 1.2-.1l12.5-7.3z" fill="#FF3A44"/>
                                <path d="M21.2 10.8l-3.9-2.3-3.5 3.5 3.5 3.5 3.9-2.3c1.1-.7 1.1-1.7 0-2.4z" fill="#FFC400"/>
                            </svg>
                            <span>Google Play</span>
                        </div>
                        <span class="ff-ps-verified">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="#01875f"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                            Verified by Play Protect
                        </span>
                    </div>

                    <!-- App Title & Icon -->
                    <div class="ff-ps-app-info">
                        <img src="https://play-lh.googleusercontent.com/eybZas3vIvN726oSLvZwNpVH2but_2bIATsRUCTvFZfAPPAj_61LAg1Y6EmJ4qgCqoSk7flW10xMfGiwG7g0ZQ=w240-h480" alt="FocusFlow Icon" class="ff-ps-app-icon" onerror="this.src='https://play-lh.googleusercontent.com/eybZas3vIvN726oSLvZwNpVH2but_2bIATsRUCTvFZfAPPAj_61LAg1Y6EmJ4qgCqoSk7flW10xMfGiwG7g0ZQ'">
                        <div class="ff-ps-meta">
                            <h2 class="ff-ps-title">FocusFlow: Focus Garden Timer</h2>
                            <div class="ff-ps-dev">Corelume Tech</div>
                            <div class="ff-ps-tags">
                                <span class="ff-tag">#1 In Productivity</span>
                                <span class="ff-tag">ADHD Friendly</span>
                                <span class="ff-tag">100% Free</span>
                            </div>
                        </div>
                    </div>

                    <!-- Play Store Stats Matrix -->
                    <div class="ff-ps-metrics">
                        <div class="ff-metric-item">
                            <div class="ff-metric-val">4.8 <span class="ff-star">★</span></div>
                            <div class="ff-metric-label">1.2K reviews</div>
                        </div>
                        <div class="ff-metric-divider"></div>
                        <div class="ff-metric-item">
                            <div class="ff-metric-val">10K+</div>
                            <div class="ff-metric-label">Downloads</div>
                        </div>
                        <div class="ff-metric-divider"></div>
                        <div class="ff-metric-item">
                            <div class="ff-metric-val"><span class="ff-badge-age">3+</span></div>
                            <div class="ff-metric-label">Rated for 3+</div>
                        </div>
                        <div class="ff-metric-divider"></div>
                        <div class="ff-metric-item">
                            <div class="ff-metric-val">🌱 3D</div>
                            <div class="ff-metric-label">Focus Forest</div>
                        </div>
                    </div>

                    <!-- Interactive Google Play Style Slider -->
                    <div class="ff-slider-wrapper" id="ffSliderWrap">
                        <button class="ff-slider-btn ff-slider-prev" id="ffSlidePrev" aria-label="Previous screenshot">&#10094;</button>
                        <div class="ff-slider-track" id="ffSliderTrack">
                            <div class="ff-slide" data-index="0">
                                <img src="https://play-lh.googleusercontent.com/MsXid35WhkBr6xzMvS7lMRsxJGyKICPtsp2OMhk4aIFqifaNjFmF_va0-psAgG7v8lCdREzGM4d5wpvfngQIBw=w720-h1280" alt="Grow a Living 3D Garden As You Focus" loading="lazy">
                                <div class="ff-slide-caption">🌳 Grow a Living 3D Garden As You Focus</div>
                            </div>
                            <div class="ff-slide" data-index="1">
                                <img src="https://play-lh.googleusercontent.com/Ja97AZbUpa-w2uSSMr4rjDQkDdlXhI2urjQjgGx9Gy__VPWe1jhWHjnYSuT465J3dgqkjV6QLll8JnubHfX5zUc=w720-h1280" alt="Calming ADHD-Friendly Pomodoro Timer" loading="lazy">
                                <div class="ff-slide-caption">⏱️ Calming ADHD-Friendly Pomodoro Timer</div>
                            </div>
                            <div class="ff-slide" data-index="2">
                                <img src="https://play-lh.googleusercontent.com/tDuTKsQW-sqtMMdlhI6y7p3EUDde5OhBeWBqx1pCC6C_4g9g8Wc8iiaVOaCFCDrH1tH0xVylIhKc6ig4F2bXTg=w720-h1280" alt="Unlock Majestic Tree Species" loading="lazy">
                                <div class="ff-slide-caption">🌸 Unlock Majestic Tree Species & Flora</div>
                            </div>
                            <div class="ff-slide" data-index="3">
                                <img src="https://play-lh.googleusercontent.com/06j6i3sRgd_6Z43DOr3Vf5oRLg-u2bXHjd2AFtN2nGZ2QDhTOZPia8VzAuweF7dwKI8ehnv8wug9A8b7IWCm=w720-h1280" alt="10+ Soothing Ambient Soundscapes" loading="lazy">
                                <div class="ff-slide-caption">🎧 10+ Soothing Ambient Nature Sounds</div>
                            </div>
                            <div class="ff-slide" data-index="4">
                                <img src="https://play-lh.googleusercontent.com/PlEmN7ETOLADL3yb1eFGYwHEyOKdSapp6QDj0s_dK5P_ft1Iqt_Fy39PLo_LyAmcBzavQOno9g7n2VM5WPgN=w720-h1280" alt="Track Daily Streaks & Productivity Stats" loading="lazy">
                                <div class="ff-slide-caption">📊 Track Daily Streaks & Productivity Stats</div>
                            </div>
                            <div class="ff-slide" data-index="5">
                                <img src="https://play-lh.googleusercontent.com/NKifG-yxQmT2Aw_G-WkKWqhra57KaaRutkrXEoKIQi8qBCqLFtDBqu7MLahxqogGNe9eYnw2V1dQmjaXQ1SyOoY=w720-h1280" alt="Turn Boring Study Hours into Gameplay" loading="lazy">
                                <div class="ff-slide-caption">🚀 Turn Study Hours Into An Engaging Game</div>
                            </div>
                            <div class="ff-slide" data-index="6">
                                <img src="https://play-lh.googleusercontent.com/ec_ZDr1zF5SDfvbosvpB_FmeG-mUqXPWM7f_PciS5r0lncVWLIwfa36O0dMeOoiJ9mv7pxyBVJQfsQAKT9pj=w720-h1280" alt="Fully Customizable Work & Break Intervals" loading="lazy">
                                <div class="ff-slide-caption">⚙️ Customizable Focus & Break Intervals</div>
                            </div>
                            <div class="ff-slide" data-index="7">
                                <img src="https://play-lh.googleusercontent.com/ofrLGj2YID94MBQocFNXwPSPND6h-kl_1D_8FBbaiOEUhUVtC4c2Fx-0tRD3agnE-9Dd0bzsk4w9lPtCNZcE4g=w720-h1280" alt="Master Self-Discipline Without Stress" loading="lazy">
                                <div class="ff-slide-caption">✨ Master Focus & Beat Procrastination</div>
                            </div>
                        </div>
                        <button class="ff-slider-btn ff-slider-next" id="ffSlideNext" aria-label="Next screenshot">&#10095;</button>
                    </div>

                    <!-- Slide Pagination Dots -->
                    <div class="ff-slider-dots" id="ffSliderDots">
                        <span class="ff-dot active" data-dot="0"></span>
                        <span class="ff-dot" data-dot="1"></span>
                        <span class="ff-dot" data-dot="2"></span>
                        <span class="ff-dot" data-dot="3"></span>
                        <span class="ff-dot" data-dot="4"></span>
                        <span class="ff-dot" data-dot="5"></span>
                        <span class="ff-dot" data-dot="6"></span>
                        <span class="ff-dot" data-dot="7"></span>
                    </div>

                    <!-- Short Description -->
                    <div class="ff-ps-desc">
                        <p><strong>Transform your focus sessions into a blooming virtual sanctuary.</strong> When minutes feel abstract, FocusFlow gives time living shape. Beat procrastination, stay on task, and build lasting productivity habits.</p>
                    </div>

                    <!-- High-Converting Action Button -->
                    <div class="ff-ps-actions">
                        <a href="https://play.google.com/store/apps/details?id=com.focusflow.corelumetech&hl=en_IN" target="_blank" rel="noopener" class="ff-ps-install-btn" id="ffInstallBtn">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                            </svg>
                            <span>Install on Google Play — Free</span>
                        </a>
                        <div class="ff-ps-subactions">
                            <button class="ff-modal-text-btn" id="ffModalDismiss">Continue to Website</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Inject modal into document body
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = document.getElementById('focusFlowModal');
        const closeBtn = document.getElementById('ffModalClose');
        const dismissBtn = document.getElementById('ffModalDismiss');
        const installBtn = document.getElementById('ffInstallBtn');
        const sliderTrack = document.getElementById('ffSliderTrack');
        const prevBtn = document.getElementById('ffSlidePrev');
        const nextBtn = document.getElementById('ffSlideNext');
        const dots = document.querySelectorAll('.ff-dot');
        const sliderWrap = document.getElementById('ffSliderWrap');

        let currentSlide = 0;
        const totalSlides = 8;
        let autoPlayTimer = null;

        // Slide navigation function
        function goToSlide(index) {
            currentSlide = (index + totalSlides) % totalSlides;
            sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentSlide);
            });
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function prevSlide() {
            goToSlide(currentSlide - 1);
        }

        // Auto-advance every 3.8 seconds
        function startAutoPlay() {
            stopAutoPlay();
            autoPlayTimer = setInterval(nextSlide, 3800);
        }

        function stopAutoPlay() {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
        }

        // Slider Listeners
        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const dotIdx = parseInt(e.target.dataset.dot);
                goToSlide(dotIdx);
                startAutoPlay();
            });
        });

        // Pause autoplay on mouse enter / resume on leave
        if (sliderWrap) {
            sliderWrap.addEventListener('mouseenter', stopAutoPlay);
            sliderWrap.addEventListener('mouseleave', startAutoPlay);
        }

        // Touch swipe support on mobile
        let touchStartX = 0;
        let touchEndX = 0;
        if (sliderTrack) {
            sliderTrack.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoPlay();
            }, { passive: true });

            sliderTrack.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                if (touchStartX - touchEndX > 45) {
                    nextSlide(); // Swiped left
                } else if (touchEndX - touchStartX > 45) {
                    prevSlide(); // Swiped right
                }
                startAutoPlay();
            }, { passive: true });
        }

        // --- Record impression in localStorage ---
        function markPopupSeen() {
            stats.count++;
            stats.lastSeen = Date.now();
            stats.date = todayStr;
            try {
                localStorage.setItem(FREQ_STORAGE_KEY, JSON.stringify(stats));
            } catch (e) {}
        }

        // Close Modal handler
        function closeModal() {
            stopAutoPlay();
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 350);
            markPopupSeen();
        }

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (dismissBtn) dismissBtn.addEventListener('click', closeModal);
        if (installBtn) installBtn.addEventListener('click', closeModal);

        // Close on clicking outside modal
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });

        // Display modal after 2.5 seconds on eligible page views
        setTimeout(() => {
            modal.classList.add('show');
            startAutoPlay();
        }, 2500);
    });
})();
