// Menu data — dish names stay in French (it's a French restaurant)
// Only category labels and UI strings are translated via messages/*.json

export type MenuItem = {
  name: string
  price: string
  image?: string
}

export const categoryKeys = ['partager', 'entrees', 'plats', 'desserts', 'cocktails'] as const
export type CategoryKey = (typeof categoryKeys)[number]

export const menuData: Record<CategoryKey, MenuItem[]> = {
  partager: [
    { name: 'Tarama blanc extra', price: '14,00 EUR' },
    { name: 'Petites fritures de calamars, spicy mayo', price: '18,00 EUR', image: '/images/amourette-640401.jpg' },
    { name: 'Nems poulet, sucrine, menthe', price: '15,00 EUR' },
    { name: 'Foie gras de canard, chutney de mangue', price: '28,00 EUR', image: '/images/amourette-640402.jpg' },
  ],
  entrees: [
    { name: 'Velouté de butternut, noisettes grillées', price: '12,00 EUR' },
    { name: 'Petites fritures de calamars, spicy mayo', price: '18,00 EUR' },
    { name: 'Poireaux fondants, vinaigrette truffée', price: '15,00 EUR' },
    { name: "Salade d'endives, roquefort et noix", price: '16,00 EUR' },
    { name: 'Thon épicé, guacamole avocat', price: '23,00 EUR', image: '/images/amourette-640403.jpg' },
    { name: 'Tartare de bar, burrata, poutargue', price: '28,00 EUR', image: '/images/amourette-640404.jpg' },
    { name: "Cœur de saumon fumé à l'aneth, blinis", price: '28,00 EUR' },
    { name: 'Foie gras de canard, chutney de mangue', price: '28,00 EUR' },
    { name: 'Nems poulet, sucrine, menthe', price: '15,00 EUR' },
    { name: "Carpaccio de Saint-Jacques, huile d'olive citron", price: '22,00 EUR', image: '/images/amourette-640415.jpg' },
  ],
  plats: [
    { name: 'Gratin de macaroni, jambon, emmental et truffes', price: '28,00 EUR' },
    { name: 'Lasagne de légumes grillés, tomate basilic', price: '22,00 EUR' },
    { name: 'Salade thai, saumon cru, citron soja', price: '28,00 EUR' },
    { name: 'Risotto crémeux, gambas plancha', price: '38,00 EUR', image: '/images/amourette-640420.jpg' },
    { name: 'Noix de Saint-Jacques juste snackées', price: '38,00 EUR', image: '/images/amourette-640433.jpg' },
    { name: 'Saumon laqué miso, gingembre, coriandre', price: '32,00 EUR', image: '/images/amourette-640416.jpg' },
    { name: 'Bar plancha beurre blanc aux agrumes', price: '38,00 EUR', image: '/images/amourette-640418.jpg' },
    { name: 'Steak tartare tradition, frites', price: '26,00 EUR', image: '/images/amourette-640400.jpg' },
    { name: 'Bacon burger Aubrac', price: '28,00 EUR' },
    { name: 'Paillard de poulet extra grillé au citron', price: '28,00 EUR' },
    { name: 'Plat mijoté de bœuf', price: '26,00 EUR' },
    { name: 'Entrecôte argentine béarnaise', price: '47,00 EUR', image: '/images/amourette-640414.jpg' },
  ],
  desserts: [
    { name: 'Comté 24 mois, pain du coin grillé', price: '12,00 EUR' },
    { name: 'Brioche perdue caramélisée', price: '14,00 EUR' },
    { name: 'Crème brûlée pistache, noisettes', price: '12,00 EUR' },
    { name: 'Clafoutis de saison', price: '12,00 EUR' },
    { name: 'Pavlova fruits rouges', price: '22,00 EUR', image: '/images/amourette-640435.jpg' },
    { name: 'Salade de mangue passion', price: '14,00 EUR' },
    { name: 'Petit pot de glace et sorbet, Philippe Faur maître glacier', price: '8,00 EUR' },
    { name: 'Gâteau au chocolat, crème anglaise maison', price: '14,00 EUR' },
  ],
  cocktails: [
    { name: 'Aperol Spritz', price: '15,00 EUR' },
    { name: 'Classique Mojito', price: '15,00 EUR' },
    { name: 'Gin To Basilic', price: '15,00 EUR' },
    { name: 'Moscow Mule', price: '15,00 EUR' },
    { name: 'Negroni', price: '15,00 EUR' },
    { name: 'Porn Star Martini, un peu de champagne', price: '17,00 EUR' },
    { name: 'Miss Amourette', price: '18,00 EUR' },
    { name: 'TNT Tequila Patron', price: '20,00 EUR' },
  ],
}
