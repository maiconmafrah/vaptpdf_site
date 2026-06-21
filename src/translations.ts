export type Language = 'pt' | 'en' | 'es' | 'de' | 'fr';

export const translations = {
  pt: {
    header: { subtitle: 'Transparência e Políticas', privacy: 'Política de Privacidade', terms: 'Termos de Uso' },
    sidebar: {
      preview: 'Interface do Aplicativo', secure: '100% Seguro', offline: 'Offline', process: 'Processamento', fast: 'Ultra Rápido',
      cloudTitle: 'Sem nuvem.\nSem envios.', cloudDesc: 'Suas informações nunca saem do celular. Todas as operações são feitas localmente.',
      download: 'Baixe grátis no', langsSupport: 'Português, Inglês, Espanhol, Alemão e Francês.'
    },
    mockup: {
      home: 'Início', tools: 'Ferramentas', fav: 'Favoritos', files: 'Arquivos',
      quick: 'Ações rápidas', all: 'Ver todas', recents: 'Rascunhos recentes', noD: 'Nenhum rascunho.',
      searchTool: 'Buscar ferramenta', searchPdf: 'Pesquisar PDF...', noFav: 'Nenhum favorito.', noFile: 'Nenhuma pasta ou PDF.',
      conv: 'Converter e Extrair', edit: 'Editar e Organizar',
      pdfImg: 'PDF p/ Imagem', imgPdf: 'Imagem p/ PDF', txtPdf: 'Texto p/ PDF',
      comp: 'Compactar', merge: 'Mesclar PDFs', split: 'Dividir PDF', lock: 'Proteger PDF',
      scan: 'Digitalizar', jpgPdf: 'JPG para PDF', pdfJpg: 'PDF para JPG', create: 'Criar PDF', ext: 'Extrair texto', trans: 'Traduzir PDF',
      join: 'Juntar PDFs', cut: 'Excluir Páginas', org: 'Organizar PDF', rot: 'Rodar PDF', num: 'Numerar'
    },
    privacy: {
      title: 'Política de Privacidade', intro: 'A sua privacidade é nossa principal prioridade. Nós do VaptPDF garantimos que os seus documentos são pessoais e privados.', updated: 'Última atualização: 21 de Junho de 2026',
      offTitle: 'Processamento 100% Offline e Sem Envio', offDesc: 'Reforçamos que o processamento de PDFs (incluindo conversão, leitura e edição) ocorre 100% offline no seu próprio celular.', off1: 'Nenhum documento é enviado para a internet ou servidores externos.', off2: 'Não exigimos criação de contas ou login.', off3: 'Seus arquivos nunca saem da memória do seu próprio telefone.',
      stTitle: 'Uso do Armazenamento', stDesc: 'Para funcionar como leitor e editor, o VaptPDF solicita a permissão de Acesso a Todos os Arquivos (MANAGE_EXTERNAL_STORAGE). Ela serve unicamente para:', st1: 'Buscar e listar todos os ativos em PDF presentes no armazenamento do celular.', st2: 'Permitir a criação e edição dos documentos localmente e salvá-los.', stN: '* O app lê pastas apenas à procura de PDFs para gerenciá-los.',
      adTitle: 'Anúncios via Google AdMob', adDesc: 'Para manter o aplicativo gratuito, utilizamos o Google AdMob para exibir publicidade.', ad1: 'Coletamos identificadores de publicidade do seu dispositivo (como o Android Advertising ID) para prover anúncios personalizados.', ad2: 'Isso ocorre separadamente: NENHUM dado dos seus PDFs é compartilhado para fins de publicidade.',
      contactTitle: 'Dúvidas?', contactDesc: 'Entre em contato pelo e-mail:'
    },
    terms: {
      title: 'Termos de Uso', intro: 'Ao usar o VaptPDF, você concorda com nossos termos. O app foca em gerenciar PDFs offline de forma simples e segura.', updated: 'Última atualização: 21 de Junho de 2026',
      useTitle: 'Uso do Aplicativo', useDesc: 'Você é responsável pelos arquivos que gerencia, mescla ou divide no app.', use1: 'Concorda em não usar o app para cometer violações de leis vigentes.', use2: 'Os processamentos e o tempo de conversão dependem apenas do processador do seu aparelho (offline).',
      limTitle: 'Limitação de Responsabilidade', limDesc: 'Sendo um app puramente offline no seu dispositivo:', lim1: 'Não nos responsabilizamos pela perda de documentos caso o celular seja formatado ou danificado.', lim2: 'Nós NÃO temos acesso à internet ou nuvem para realizar backups ou restaurar arquivos.', lim3: 'Mantenha cópias de segurança em locais seguros.',
      conTitle: 'Contato', conDesc: 'Para assuntos legais:'
    }
  },
  en: {
    header: { subtitle: 'Transparency & Policies', privacy: 'Privacy Policy', terms: 'Terms of Use' },
    sidebar: {
      preview: 'App Interface', secure: '100% Secure', offline: 'Offline', process: 'Processing', fast: 'Ultra Fast',
      cloudTitle: 'No cloud.\nNo uploads.', cloudDesc: 'Your information never leaves your phone. All tasks are local.',
      download: 'Download free on', langsSupport: 'Portuguese, English, Spanish, German, and French.'
    },
    mockup: {
      home: 'Home', tools: 'Tools', fav: 'Favorites', files: 'My Files',
      quick: 'Quick Actions', all: 'See all', recents: 'Recent drafts', noD: 'No drafts.',
      searchTool: 'Search tool', searchPdf: 'Search PDF...', noFav: 'No favorites yet.', noFile: 'No folders or PDFs.',
      conv: 'Convert & Extract', edit: 'Edit & Organize',
      pdfImg: 'PDF to Image', imgPdf: 'Image to PDF', txtPdf: 'Text to PDF',
      comp: 'Compress', merge: 'Merge PDFs', split: 'Split PDF', lock: 'Protect PDF',
      scan: 'Scan', jpgPdf: 'JPG to PDF', pdfJpg: 'PDF to JPG', create: 'Create PDF', ext: 'Extract Text', trans: 'Translate PDF',
      join: 'Join PDFs', cut: 'Delete Pages', org: 'Organize PDF', rot: 'Rotate PDF', num: 'Number Pages'
    },
    privacy: {
      title: 'Privacy Policy', intro: 'Your privacy is our main priority. VaptPDF guarantees that your documents are strictly personal.', updated: 'Last updated: June 21, 2026',
      offTitle: '100% Offline Processing', offDesc: 'We reinforce that PDF processing (conversion, reading, editing) occurs 100% offline directly on your phone.', off1: 'NO document or file is sent to the internet or external servers.', off2: 'No account creation or login required.', off3: 'Your files never leave your device\'s local storage.',
      stTitle: 'Storage Usage', stDesc: 'To function as a file manager and reader, VaptPDF requests the All Files Access permission (MANAGE_EXTERNAL_STORAGE). It is used strictly to:', st1: 'Search and list all PDF assets on your device storage.', st2: 'Allow you to edit, interact and save documents locally.', stN: '* The app only scans directories to find and manage PDFs.',
      adTitle: 'Google AdMob Ads', adDesc: 'To keep the app free, we display ads via Google AdMob.', ad1: 'We may collect advertising identifiers from your device (such as the Android Advertising ID) to serve personalized ads based on your interests.', ad2: 'This process is isolated: NO data from your PDFs is shared with advertisers.',
      contactTitle: 'Any Questions?', contactDesc: 'Reach out to us at:'
    },
    terms: {
      title: 'Terms of Use', intro: 'By using VaptPDF, you agree to our terms. The app focuses on offline, secure PDF management.', updated: 'Last updated: June 21, 2026',
      useTitle: 'Usage', useDesc: 'You are responsible for the documents you manage and convert locally.', use1: 'Agree not to use the app for illegal activities.', use2: 'Processing times and capabilities rely solely on your device hardware.',
      limTitle: 'Limitation of Liability', limDesc: 'Since we are an offline tool:', lim1: 'We are not responsible for document loss if your phone breaks or is formatted.', lim2: 'We DO NOT have cloud backups or ways to restore lost files.', lim3: 'Always keep backups of critical documents.',
      conTitle: 'Contact', conDesc: 'For legal queries:'
    }
  },
  es: {
    header: { subtitle: 'Transparencia y Políticas', privacy: 'Política de Privacidad', terms: 'Términos de Uso' },
    sidebar: {
      preview: 'Interfaz de la App', secure: '100% Seguro', offline: 'Sin conexión', process: 'Procesamiento', fast: 'Ultrasónico',
      cloudTitle: 'Sin nube.\nCero subidas.', cloudDesc: 'Tu información nunca sale del dispositivo. Operaciones locales.',
      download: 'Descarga gratis en', langsSupport: 'Portugués, Inglés, Español, Alemán y Francés.'
    },
    mockup: {
      home: 'Inicio', tools: 'Herram.', fav: 'Favoritos', files: 'Archivos',
      quick: 'Acciones rápidas', all: 'Ver todas', recents: 'Borradores rec.', noD: 'Sin borradores.',
      searchTool: 'Buscar', searchPdf: 'Buscar PDF...', noFav: 'Sin favoritos.', noFile: 'No hay PDFs.',
      conv: 'Convertir y Extraer', edit: 'Editar y Organizar',
      pdfImg: 'PDF a Imagen', imgPdf: 'Imagen a PDF', txtPdf: 'Texto a PDF',
      comp: 'Comprimir', merge: 'Combinar PDFs', split: 'Dividir PDF', lock: 'Proteger PDF',
      scan: 'Escanear', jpgPdf: 'JPG a PDF', pdfJpg: 'PDF a JPG', create: 'Crear PDF', ext: 'Extraer Texto', trans: 'Traducir',
      join: 'Unir PDFs', cut: 'Borrar Páginas', org: 'Organizar PDF', rot: 'Rotar PDF', num: 'Numerar'
    },
    privacy: {
      title: 'Política de Privacidad', intro: 'Tu privacidad es nuestra prioridad. VaptPDF garantiza que tus documentos son estrictamente tuyos.', updated: 'Última actualización: 21 de Junio de 2026',
      offTitle: '100% Offline (Sin conexión)', offDesc: 'Garantizamos que el procesamiento de PDFs se realiza de forma 100% local (offline).', off1: 'NINGÚN documento es enviado a internet o nuestros servidores.', off2: 'No requiere registro ni inicios de sesión.', off3: 'Todos los archivos se procesan exclusivamente en tu móvil.',
      stTitle: 'Uso de Almacenamiento', stDesc: 'VaptPDF solicita Acesso a todos los archivos (MANAGE_EXTERNAL_STORAGE) únicamente para:', st1: 'Buscar y listar PDFs en tu memoria local.', st2: 'Poder editar, crear y sobreescribir los archivos en tus carpetas.', stN: '* No leemos otros tipos de archivo.',
      adTitle: 'Google AdMob Publicidad', adDesc: 'Para mantener la app gratis, utilizamos AdMob.', ad1: 'Recopilamos identificadores de publicidad (como Android Advertising ID) para mostrar anuncios personalizados.', ad2: 'Ningún dato de tus PDFs es usado para estos anuncios.',
      contactTitle: '¿Dudas?', contactDesc: 'Envía un correo a:'
    },
    terms: {
      title: 'Términos de Uso', intro: 'Al usar VaptPDF aceptas lo siguiente:', updated: 'Última actualización: 21 de Junio de 2026',
      useTitle: 'Uso de la Aplicación', useDesc: 'Eres el único responsable del contenido de tus PDFs.', use1: 'No la uses para actividades ilegítimas.', use2: 'El poder de conversión depende de la CPU de tu teléfono móvil.',
      limTitle: 'Límite de Responsabilidad', limDesc: 'Al ser app offline:', lim1: 'No respondemos por pérdidas de archivos debido a hardware defectuoso.', lim2: 'No tenemos nube ni te brindamos servicio de backup online.', lim3: 'Haz copias de seguridad de cosas críticas.',
      conTitle: 'Contacto', conDesc: 'Para más info:'
    }
  },
  de: {
    header: { subtitle: 'Transparenz & Richtlinien', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen' },
    sidebar: {
      preview: 'App-Vorschau', secure: '100% Sicher', offline: 'Offline', process: 'Verarbeitung', fast: 'Ultraschnell',
      cloudTitle: 'Keine Cloud.\nKeine Uploads.', cloudDesc: 'Lokale Dateiverarbeitung. Deine Daten bleiben auf dem Gerät.',
      download: 'Kostenlos bei', langsSupport: 'Portugiesisch, Englisch, Spanisch, Deutsch und Französisch.'
    },
    mockup: {
      home: 'Start', tools: 'Tools', fav: 'Favoriten', files: 'Dateien',
      quick: 'Aktionen', all: 'Alle ansehen', recents: 'Zuletzt', noD: 'Keine.',
      searchTool: 'Suchen', searchPdf: 'PDF suchen...', noFav: 'Keine Favoriten.', noFile: 'Keine PDF-Dateien.',
      conv: 'Konvertieren', edit: 'Bearbeiten',
      pdfImg: 'PDF zu Bild', imgPdf: 'Bild zu PDF', txtPdf: 'Text zu PDF',
      comp: 'Komprimieren', merge: 'PDFs vereinen', split: 'PDF teilen', lock: 'PDF schützen',
      scan: 'Scannen', jpgPdf: 'JPG zu PDF', pdfJpg: 'PDF zu JPG', create: 'PDF Erstellen', ext: 'Text Extr.', trans: 'Übersetzen',
      join: 'PDFs joinen', cut: 'Seiten Löschen', org: 'Ansicht org.', rot: 'Rotieren', num: 'Nummerieren'
    },
    privacy: {
      title: 'Datenschutzrichtlinie', intro: 'Deine Privatsphäre ist unser Anliegen. VaptPDF agiert vollständig lokal auf deinem Gerät.', updated: 'Letztes Update: 21. Juni 2026',
      offTitle: '100% Offline-Verarbeitung', offDesc: 'VaptPDF überträgt absolut keine Daten in das Internet. Alle Tools arbeiten offline.', off1: 'Keine Dokumente werden ins Netz hochgeladen.', off2: 'Keine Cloud-Accounts obligatorisch.', off3: 'Deine Dateien sind strikt auf den lokalen Speicher begrenzt.',
      stTitle: 'Speichernutzung', stDesc: 'VaptPDF verlangt Speicherzugriff (MANAGE_EXTERNAL_STORAGE), exklusiv zu diesem Zweck:', st1: 'PDF-Dateien auf dem internen Speicher aufzulisten.', st2: 'Dateien zu speichern und neue PDFs generieren zu können.', stN: '* Kein Schnüffeln in unbefugten Verzeichnissen.',
      adTitle: 'Werbung (Google AdMob)', adDesc: 'Wir finanzieren uns über Google AdMob-Integrationen.', ad1: 'Um personalisierte Werbung bereitzustellen, sammeln wir Werbekennungen (z.B. Android Advertising ID).', ad2: 'Inhalte deiner PDF-Dateien werden niemals ausgewertet oder gesendet!',
      contactTitle: 'Fragen?', contactDesc: 'Sende eine Mail an:'
    },
    terms: {
      title: 'Nutzungsbedingungen', intro: 'Mit der Nutzung der VaptPDF Software, stimmst du den Bedingungen zu.', updated: 'Letztes Update: 21. Juni 2026',
      useTitle: 'Anwendung', useDesc: 'Der User ist für alle PDF-Inhalte selbst verantwortlich.', use1: 'Nutze das Programm nicht missbräuchlich.', use2: 'Die Schnelligkeit hängt von der eigenen Hardware ab.',
      limTitle: 'Haftungsbeschränkung', limDesc: 'Da wir eine reine Offline-App vermarkten:', lim1: 'Haften wir nicht für versehentlich gelöschte Dateien.', lim2: 'Wir sichern keine Dateien auf unseren Servern!', lim3: 'Backup kritischer Daten liegt in der User-Hand.',
      conTitle: 'Kontakt', conDesc: 'Wende dich an uns unter:'
    }
  },
  fr: {
    header: { subtitle: 'Transparence & Politiques', privacy: 'Confidentialité', terms: 'Conditions d\'utilisation' },
    sidebar: {
      preview: 'Interface App', secure: '100% Sécurisé', offline: 'Hors ligne', process: 'Traitement', fast: 'Ultra Rapide',
      cloudTitle: 'Sans cloud.\nSans transfert.', cloudDesc: 'Vos infos ne quittent pas votre mobile.',
      download: 'Télécharger sur', langsSupport: 'Portugais, Anglais, Espagnol, Allemand et Français.'
    },
    mockup: {
      home: 'Accueil', tools: 'Outils', fav: 'Favoris', files: 'Fichiers',
      quick: 'Actions rapides', all: 'Tout voir', recents: 'Brouillons', noD: 'Vide.',
      searchTool: 'Chercher', searchPdf: 'Recherche PDF...', noFav: 'Aucun favori.', noFile: 'Pas de fichiers.',
      conv: 'Convertir', edit: 'Éditer et Org.',
      pdfImg: 'PDF vers Image', imgPdf: 'Img to PDF', txtPdf: 'Texte vers PDF',
      comp: 'Compresser', merge: 'Fusionner', split: 'Diviser', lock: 'Protéger',
      scan: 'Scanner', jpgPdf: 'JPG to PDF', pdfJpg: 'PDF to JPG', create: 'Créer PDF', ext: 'Extraire', trans: 'Traduire',
      join: 'Joindre PDFs', cut: 'Supprimer', org: 'Organiser', rot: 'Pivoter', num: 'Numéroter'
    },
    privacy: {
      title: 'Politique de Confidentialité', intro: 'Votre vie privée est précieuse. VaptPDF agit de manière totalement locale dans votre smartphone.', updated: 'Mise à jour: 21 Juin 2026',
      offTitle: 'Traitement 100% Hors Ligne (Offline)', offDesc: 'Toute la manipulation (compression, conversion) est locale et sécurisée.', off1: 'AUCUN fichier n\'est envoyé sur Internet.', off2: 'Pas besoin de créer un compte utilisateur.', off3: 'Le document reste isolé sur votre stockage local.',
      stTitle: 'Permission de stockage', stDesc: 'L\'accès aux fichiers (MANAGE_EXTERNAL_STORAGE) est obligatoire pour :', st1: 'Scanner, répertorier et lister les PDFs se trouvant sur la mémoire.', st2: 'Sauvegarder et gérer les modifications de manière purement locale.', stN: '* Uniquement pour manager les PDFs.',
      adTitle: 'Publicité Google AdMob', adDesc: 'L\'application est gratuite via le financement publicitaire AdMob.', ad1: 'Nous pouvons utiliser votre ID publicitaire Android pour des annonces personnalisées.', ad2: 'Vos documents PDF ne sont pas exploités à titre publicitaire.',
      contactTitle: 'Des questions ?', contactDesc: 'Nous contacter:'
    },
    terms: {
      title: 'Conditions d\'Utilisation', intro: 'L\'utilisation de l\'application VaptPDF valide les termes suivants :', updated: 'Mise à jour: 21 Juin 2026',
      useTitle: 'Usage', useDesc: 'Vous demeurez le seul responsable des fichiers manipulés par nos algorithmes locaux.', use1: 'Interdiction d\'usage frauduleux ou illicite.', use2: 'Temps de calcul local relatif à votre matériel.',
      limTitle: 'Limitation des Responsabilités', limDesc: 'Offline signifie sans lien avec nos serveurs :', lim1: 'Nous ne serons tenus pour responsables pour des suppressions involontaires de vos PDF.', lim2: 'Nous n\'hébergeons pas de récupération cloud.', lim3: 'Pensez à faire des sauvegardes de vos fichiers capitaux.',
      conTitle: 'Contacter', conDesc: 'Informations juridiques :'
    }
  }
};
