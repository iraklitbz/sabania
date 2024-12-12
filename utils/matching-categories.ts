export function matchingCategories(list: string[]) {
  const categories = [
    {
      id: 1,
      name: "Voll ausgestattete Küche",
      icon: "kitchen",
    },
    {
      id: 2,
      name: "Grundlegende Küchenutensilien",
      icon: "dining-room",
    },
    {
      id: 3,
      name: "Esstisch mit Stühlen",
      icon: "chair",
    },
    {
      id: 4,
      name: "Kühlschrank",
      icon: "fridge",
    },
    {
      id: 5,
      name: "Geschirrspüler",
      icon: "drop",
    },
    {
      id: 6,
      name: "Filter-Kaffeemaschine",
      icon: "cup",
    },
    {
      id: 7,
      name: "Pads-Kaffeemaschine",
      icon: "cup",
    },
    {
      id: 8,
      name: "Wasserkocher",
      icon: "kettle",
    },
    {
      id: 9,
      name: "Öffentlicher Parkplatz",
      icon: "parking",
    },
    {
      id: 10,
      name: "Privater Parkplatz",
      icon: "parking",
    },
    {
      id: 11,
      name: "Heizung",
      icon: "gas",
    },
    {
      id: 12,
      name: "Duschgel",
      icon: "gel",
    },
    {
      id: 13,
      name: "Waschmaschine",
      icon: "machine-wash",
    },
    {
      id: 14,
      name: "Wäschetrockner",
      icon: "clothes",
    },
    {
      id: 15,
      name: "Bügeleisen",
      icon: "iron",
    },
    {
      id: 16,
      name: "Haartrockner",
      icon: "dryer",
    },
    {
      id: 17,
      name: "Handtücher",
      icon: "towels",
    },
    {
      id: 18,
      name: "Bettwäsche",
      icon: "pillow",
    },
    {
      id: 19,
      name: "Smart-TV (mit Netflix)",
      icon: "tv",
    },
    {
      id: 20,
      name: "Billardtisch",
      icon: "board-game",
    },
    {
      id: 21,
      name: "Dartscheibe",
      icon: "board-game",
    },
    {
      id: 22,
      name: "Gesellschaftsspiele",
      icon: "board-game",
    },
    {
      id: 23,
      name: "Bücher",
      icon: "book",
    },
    {
      id: 24,
      name: "Garten mit Grillmöglichkeit (auf Anfrage)",
      icon: "grill",
    },
    {
      id: 25,
      name: "Terrassenmöbel",
      icon: "table",
    },
    {
      id: 26,
      name: "Rauchmelder",
      icon: "alarm",
    },
    {
      id: 27,
      name: "Kohlenmonoxidmelder",
      icon: "circle",
    },
    {
      id: 28,
      name: "Privater Zugang",
      icon: "shield",
    },
    {
      id: 29,
      name: "WLAN",
      icon: "wifi",
    },
    {
      id: 30,
      name: "Selbstständiges Check-in per Schlüsselbox",
      icon: "key",
    },
    {
      id: 31,
      name: "Selbstständiges Check-in per digitalem Türschlüssel (Nuki)",
      icon: "key",
    },
    {
      id: 32,
      name: "Gepäckaufbewahrung (auf Anfrage)",
      icon: "safe-box",
    },
    {
      id: 33,
      name: "Betten 90x200 cm",
      icon: "bed",
    },
    {
      id: 34,
      name: "Betten 140x200 cm",
      icon: "bed-big",
    },
    {
      id: 35,
      name: "Betten 160x200 cm",
      icon: "bed-big",
    },
    {
      id: 36,
      name: "Schlafsofa",
      icon: "couch",
    },
    {
      id: 37,
      name: "Kleiderschrank",
      icon: "wardrobe",
    },
    {
      id: 38,
      name: "Reisebett für Kinder (auf Anfrage verfügbar)",
      icon: "kids-bed",
    },
  ];
  return categories
    .filter((category) => list.includes(category.name))
    .map(({ name, icon }) => ({ name, icon }));
}
