export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': ['Restaurant', 'LocalBusiness'],
  name: 'Amourette',
  description:
    'Restaurant francais traditionnel a Passy, Paris 16e. A 5 minutes de la Tour Eiffel. Terrasse, musique live, privatisation.',
  url: 'https://www.amourette-passy.fr',
  telephone: '+33952861447',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '10 Boulevard Delessert',
    addressLocality: 'Paris',
    postalCode: '75016',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.8583,
    longitude: 2.2944,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '11:30',
      closes: '02:00',
    },
  ],
  servesCuisine: ['French', 'Traditional', 'Homemade'],
  priceRange: '$$',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Terrasse', value: true },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Musique live',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Privatisation',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Climatisation',
      value: true,
    },
  ],
  hasMap: 'https://maps.google.com/?q=10+Boulevard+Delessert,+75016+Paris',
  image: [
    'https://www.amourette-passy.fr/images/facade-terrasse-animee.webp',
    'https://www.amourette-passy.fr/images/terrasse-vue-aerienne.webp',
  ],
  sameAs: [
    'https://www.instagram.com/amourettepassy/',
    'https://www.polo-auteuil.fr/',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Amourette Passy',
  url: 'https://www.amourette-passy.fr',
}

export const menuSchema = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Carte Amourette',
  url: 'https://www.amourette-passy.fr/menus-carte/',
  hasMenuSection: [
    {
      '@type': 'MenuSection',
      name: 'Entre Amis (partage)',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Tarama blanc extra', offers: { '@type': 'Offer', price: '14.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Petites fritures de calamars, spicy mayo', offers: { '@type': 'Offer', price: '18.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Nems poulet, sucrine, menthe', offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Foie gras de canard, chutney de mangue', offers: { '@type': 'Offer', price: '28.00', priceCurrency: 'EUR' } },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Entrees',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Veloute de butternut, noisettes grillees', offers: { '@type': 'Offer', price: '12.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Poireaux fondants, vinaigrette truffee', offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Salade d\'endives, roquefort et noix', offers: { '@type': 'Offer', price: '16.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Thon epice, guacamole avocat', offers: { '@type': 'Offer', price: '23.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Tartare de bar, burrata, poutargue', offers: { '@type': 'Offer', price: '28.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Coeur de saumon fume a l\'aneth, blinis', offers: { '@type': 'Offer', price: '28.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Carpaccio de Saint-Jacques, huile d\'olive citron', offers: { '@type': 'Offer', price: '22.00', priceCurrency: 'EUR' } },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Plats',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Gratin de macaroni, jambon, emmental et truffes', offers: { '@type': 'Offer', price: '28.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Risotto cremeux, gambas plancha', offers: { '@type': 'Offer', price: '38.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Saumon laque miso, gingembre, coriandre', offers: { '@type': 'Offer', price: '32.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Steak tartare tradition, frites', offers: { '@type': 'Offer', price: '26.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Entrecote argentine bearnaise', offers: { '@type': 'Offer', price: '47.00', priceCurrency: 'EUR' } },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Fromages & Desserts',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Creme brulee pistache, noisettes', offers: { '@type': 'Offer', price: '12.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Pavlova fruits rouges', offers: { '@type': 'Offer', price: '22.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Gateau au chocolat, creme anglaise maison', offers: { '@type': 'Offer', price: '14.00', priceCurrency: 'EUR' } },
      ],
    },
    {
      '@type': 'MenuSection',
      name: 'Cocktails',
      hasMenuItem: [
        { '@type': 'MenuItem', name: 'Aperol Spritz', offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Classique Mojito', offers: { '@type': 'Offer', price: '15.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Porn Star Martini', offers: { '@type': 'Offer', price: '17.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'Miss Amourette', offers: { '@type': 'Offer', price: '18.00', priceCurrency: 'EUR' } },
        { '@type': 'MenuItem', name: 'TNT Tequila Patron', offers: { '@type': 'Offer', price: '20.00', priceCurrency: 'EUR' } },
      ],
    },
  ],
}
