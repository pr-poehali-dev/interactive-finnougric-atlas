
export interface FinnoUgricNation {
  id: string;
  name: string;
  description: string;
  population: string;
  location: string;
  language: string;
  settlement: {
    coordinates: [number, number]; // [широта, долгота]
    territory: string;
  };
  timeline: {
    year: number;
    event: string;
  }[];
  media: {
    images: {
      costume: string;
      people: string;
      landscape: string;
    };
    audio?: string;
    video?: string;
  };
}

export const finnoUgricNations: FinnoUgricNation[] = [
  {
    id: "finnish",
    name: "Финны",
    description: "Финны - крупнейший финно-угорский народ. Проживают преимущественно в Финляндии, а также в Швеции, России и других странах.",
    population: "Около 6-7 млн человек",
    language: "Финский",
    location: "Финляндия, Швеция, Россия",
    settlement: {
      coordinates: [61.92, 25.75],
      territory: "Финляндия и соседние регионы"
    },
    timeline: [
      { year: 500, event: "Формирование финской этнической общности" },
      { year: 1156, event: "Начало шведского влияния" },
      { year: 1809, event: "Вхождение в состав Российской империи" },
      { year: 1917, event: "Обретение независимости Финляндии" }
    ],
    media: {
      images: {
        costume: "/placeholder.svg",
        people: "/placeholder.svg",
        landscape: "/placeholder.svg"
      },
      audio: "/audio/finnish-sample.mp3",
      video: "/video/finnish-culture.mp4"
    }
  },
  {
    id: "estonians",
    name: "Эстонцы",
    description: "Эстонцы - прибалтийско-финский народ, основное население Эстонии. Их культура и язык тесно связаны с финским.",
    population: "Около 1.1 млн человек",
    language: "Эстонский",
    location: "Эстония, Россия, Финляндия",
    settlement: {
      coordinates: [58.59, 25.01],
      territory: "Эстония и близлежащие области"
    },
    timeline: [
      { year: 800, event: "Формирование эстонской народности" },
      { year: 1219, event: "Начало германского завоевания" },
      { year: 1710, event: "Вхождение в состав Российской империи" },
      { year: 1918, event: "Провозглашение независимости Эстонии" }
    ],
    media: {
      images: {
        costume: "/placeholder.svg",
        people: "/placeholder.svg",
        landscape: "/placeholder.svg"
      },
      audio: "/audio/estonian-sample.mp3",
      video: "/video/estonian-culture.mp4"
    }
  },
  {
    id: "mari",
    name: "Марийцы",
    description: "Марийцы (марий) - финно-угорский народ, проживающий преимущественно в России, в Республике Марий Эл и соседних регионах.",
    population: "Около 600 тыс. человек",
    language: "Марийский (луговой и горный диалекты)",
    location: "Россия (Республика Марий Эл, Кировская область, Татарстан)",
    settlement: {
      coordinates: [56.63, 47.87],
      territory: "Среднее Поволжье"
    },
    timeline: [
      { year: 500, event: "Формирование марийской этнической общности" },
      { year: 1551, event: "Вхождение в состав Российского государства" },
      { year: 1920, event: "Образование Марийской автономной области" },
      { year: 1936, event: "Образование Марийской АССР" }
    ],
    media: {
      images: {
        costume: "/placeholder.svg",
        people: "/placeholder.svg",
        landscape: "/placeholder.svg"
      },
      audio: "/audio/mari-sample.mp3",
      video: "/video/mari-culture.mp4"
    }
  }
];

// Полная временная шкала расселения всех народов
export const timelineEvents = [
  { year: 500, event: "Формирование финской и марийской этнических общностей", nations: ["Финны", "Марийцы"] },
  { year: 800, event: "Формирование эстонской народности", nations: ["Эстонцы"] },
  { year: 1156, event: "Начало шведского влияния в Финляндии", nations: ["Финны"] },
  { year: 1219, event: "Начало германского завоевания Эстонии", nations: ["Эстонцы"] },
  { year: 1551, event: "Вхождение марийцев в состав Российского государства", nations: ["Марийцы"] },
  { year: 1710, event: "Вхождение Эстонии в состав Российской империи", nations: ["Эстонцы"] },
  { year: 1809, event: "Вхождение Финляндии в состав Российской империи", nations: ["Финны"] },
  { year: 1917, event: "Обретение независимости Финляндии", nations: ["Финны"] },
  { year: 1918, event: "Провозглашение независимости Эстонии", nations: ["Эстонцы"] },
  { year: 1920, event: "Образование Марийской автономной области", nations: ["Марийцы"] },
  { year: 1936, event: "Образование Марийской АССР", nations: ["Марийцы"] }
];
