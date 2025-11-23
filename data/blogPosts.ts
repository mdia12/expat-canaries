export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "zec-zone-tax-haven",
    title: "La Zone ZEC : Le Paradis Fiscal à 4% au sein de l'Europe",
    excerpt: "Découvrez comment réduire votre impôt sur les sociétés à 4% en toute légalité grâce au dispositif unique des Canaries.",
    image: "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "23 Nov 2025",
    category: "Fiscalité",
    readTime: "5 min",
    author: "Marc de Tenerife",
    content: `
      <h2 class="text-2xl font-bold mb-4">4% d'Impôt sur les Sociétés : Réalité ou Fiction ?</h2>
      <p class="mb-4">C'est souvent trop beau pour être vrai, et pourtant. La Zone Spéciale des Canaries (ZEC) permet aux entreprises éligibles de bénéficier d'un taux d'impôt sur les sociétés réduit à <strong>4%</strong>, contre 25% en Espagne continentale et une moyenne similaire dans le reste de l'Europe.</p>
      
      <h3 class="text-xl font-bold mb-2">Les Conditions pour en Bénéficier</h3>
      <p class="mb-4">Ce n'est pas un dispositif pour les sociétés écrans. Pour qualifier votre entreprise, vous devez apporter une réelle valeur ajoutée à l'économie locale :</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Création d'emplois :</strong> Vous devez créer au moins 5 emplois si vous vous installez à Tenerife ou Gran Canaria (les îles capitales), ou 3 emplois pour les autres îles (Lanzarote, Fuerteventura, etc.).</li>
        <li><strong>Investissement :</strong> Un investissement minimum de 100 000 € est requis dans les îles capitales, réduit à 50 000 € pour les autres.</li>
        <li><strong>Substance :</strong> Vous devez avoir un bureau physique et un administrateur résident aux Canaries.</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">L'Avantage des Dividendes</h3>
      <p class="mb-4">L'un des atouts majeurs de la ZEC est l'exonération de retenue à la source sur les dividendes distribués à une société mère résidente dans l'UE (ou dans un pays avec convention fiscale). Cela permet une remontée de trésorerie extrêmement efficace.</p>
      
      <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-6">
        <p class="font-semibold text-blue-900">Le Conseil de l'Expert</p>
        <p class="text-blue-800">Ne voyez pas la ZEC uniquement comme un outil fiscal. C'est un levier pour développer une activité réelle dans un cadre de vie exceptionnel.</p>
      </div>
    `
  },
  {
    slug: "cout-vie-canaries-vs-france",
    title: "Canaries vs France : Combien vaut vraiment votre Euro en 2025 ?",
    excerpt: "Loyer, courses, sorties... Analyse détaillée du pouvoir d'achat aux Canaries comparé à la métropole.",
    image: "https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "20 Nov 2025",
    category: "Budget",
    readTime: "4 min",
    author: "Sophie l'Expat",
    content: `
      <h2 class="text-2xl font-bold mb-4">Le Choc du Loyer</h2>
      <p class="mb-4">Le logement reste le premier poste de dépense. À Santa Cruz de Tenerife ou Las Palmas, un appartement T2 en centre-ville se négocie autour de <strong>900€ - 1000€ / mois</strong>. Pour une prestation équivalente à Paris, Lyon ou Bordeaux, l'addition serait de 50% à 100% plus salée.</p>

      <h3 class="text-xl font-bold mb-2">L'Effet IGIC : La TVA à 7%</h3>
      <p class="mb-4">Oubliez la TVA à 20%. Aux Canaries, l'IGIC (Impuesto General Indirecto Canario) est généralement de <strong>7%</strong>. L'impact est immédiat sur :</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>L'électronique et l'informatique</li>
        <li>L'achat de véhicules</li>
        <li>Les vêtements et biens de consommation</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Factures et Sorties</h3>
      <p class="mb-4">Grâce au climat, le chauffage est inexistant dans la plupart des logements. Les charges (eau, électricité, internet) tournent autour de <strong>90€/mois</strong> pour un couple. Côté restaurant, un dîner complet pour deux personnes dans un bon établissement vous coûtera environ 50€, soit 30% de moins qu'en France.</p>
    `
  },
  {
    slug: "digital-nomad-realite",
    title: "Digital Nomad aux Canaries : Au-delà de la Carte Postale",
    excerpt: "Internet, communauté, fuseau horaire... Pourquoi les Canaries sont devenues le bureau préféré de l'Europe.",
    image: "https://images.pexels.com/photos/1212818/pexels-photo-1212818.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "15 Nov 2025",
    category: "Lifestyle",
    readTime: "3 min",
    author: "Thomas Digital",
    content: `
      <h2 class="text-2xl font-bold mb-4">La Fibre Optique au Milieu de l'Océan</h2>
      <p class="mb-4">C'est la première crainte : vais-je pouvoir faire mes visios ? La réponse est un grand oui. Les Canaries disposent d'une infrastructure <strong>fibre optique de classe mondiale</strong>, offrant souvent des débits supérieurs (600 Mbps - 1 Gbps) à de nombreuses zones rurales françaises.</p>

      <h3 class="text-xl font-bold mb-2">Le Fuseau Horaire Parfait</h3>
      <p class="mb-4">Contrairement à l'Asie ou l'Amérique du Sud, les Canaries sont sur le fuseau GMT (comme Londres). Vous n'avez qu'<strong>une heure de décalage avec Paris</strong>. Fini les réunions à 3h du matin ou les journées décalées.</p>

      <h3 class="text-xl font-bold mb-2">Las Palmas : Hub Mondial</h3>
      <p class="mb-4">Las Palmas de Gran Canaria figure régulièrement dans le top 10 de Nomad List. La communauté y est immense, avec des meetups hebdomadaires, des espaces de coworking vue mer et une énergie entrepreneuriale palpable.</p>
    `
  },
  {
    slug: "acheter-immobilier-pieges",
    title: "Acheter aux Canaries : Le Guide pour Éviter les Pièges",
    excerpt: "Attention à la licence touristique ! Tout ce qu'il faut savoir avant de signer pour votre villa de rêve.",
    image: "https://images.pexels.com/photos/2656913/pexels-photo-2656913.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "10 Nov 2025",
    category: "Immobilier",
    readTime: "6 min",
    author: "Elena Real Estate",
    content: `
      <h2 class="text-2xl font-bold mb-4">Le Piège de l'Usage Touristique</h2>
      <p class="mb-4">C'est l'erreur classique. Vous trouvez un appartement magnifique dans un complexe avec piscine. Attention : s'il est classé en "exploitation touristique", il est techniquement <strong>illégal d'y résider à l'année</strong>. Vous devez obligatoirement le confier à la société d'exploitation du complexe.</p>

      <h3 class="text-xl font-bold mb-2">Le NIE : Votre Sésame</h3>
      <p class="mb-4">Impossible d'acheter sans NIE (Numéro d'Identité d'Étranger). C'est la première démarche à lancer, bien avant de visiter des biens, car les délais d'obtention peuvent varier.</p>

      <h3 class="text-xl font-bold mb-2">Les Frais Cachés</h3>
      <p class="mb-4">Le prix affiché n'est jamais le prix final. Comptez environ <strong>10 à 12% de frais supplémentaires</strong> :</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Impôt sur la transmission (ITP) : 6.5% (plus avantageux que les 10% de la péninsule !)</li>
        <li>Notaire et Registre</li>
        <li>Frais d'avocat (indispensable)</li>
      </ul>
    `
  },
  {
    slug: "beckham-law-vs-zec",
    title: "Loi Beckham vs ZEC : Quelle Stratégie Fiscale Choisir ?",
    excerpt: "Salarié ou entrepreneur ? Comparatif des deux régimes fiscaux les plus puissants d'Espagne.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "05 Nov 2025",
    category: "Fiscalité",
    readTime: "7 min",
    author: "Marc de Tenerife",
    content: `
      <h2 class="text-2xl font-bold mb-4">Deux Régimes, Deux Cibles</h2>
      <p class="mb-4">Il est crucial de ne pas confondre. La <strong>Loi Beckham</strong> vise les personnes physiques (salariés impatriés), tandis que la <strong>ZEC</strong> vise les personnes morales (sociétés).</p>

      <h3 class="text-xl font-bold mb-2">Le Conflit d'Intérêts</h3>
      <p class="mb-4">Attention au montage ! Si vous détenez plus de 25% d'une société ZEC et que vous en êtes l'administrateur, vous ne pourrez généralement pas bénéficier de la Loi Beckham sur votre salaire versé par cette même société. L'administration fiscale considère cela comme une opération liée.</p>

      <h3 class="text-xl font-bold mb-2">Le Visa Digital Nomad</h3>
      <p class="mb-4">Le nouveau Visa Digital Nomad est une porte d'entrée royale pour la Loi Beckham. Il permet aux télétravailleurs de bénéficier d'un taux fixe de <strong>24% d'impôt sur le revenu</strong> (jusqu'à 600 000€), sans avoir à monter une structure complexe.</p>
    `
  }
];
