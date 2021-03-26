const mockData = [
  {
    title: "Mock Data",
    articles: [
      {
        id: "37i9dQZF1DWXJfnUiYjUKT",
        image:
          "https://i.scdn.co/image/ab67706f00000003146ffe86303ede6e3c4450dc",
        description:
          "The very best in new music from around the world. Cover: Cardi B",
        name: "New Music Friday",
      },
      {
        id: "37i9dQZF1DX1g0iEXLFycr",
        image:
          "https://i.scdn.co/image/ab67706f00000003104f039c1cc982d3617f4e4b",
        description: "Uplifting anthems to power you through 'til the weekend.",
        name: "Feel Good Friday",
      },
      {
        id: "37i9dQZF1DWXJfnUiYjUKT",
        image:
          "https://i.scdn.co/image/ab67706f00000003146ffe86303ede6e3c4450dc",
        description:
          "The very best in new music from around the world. Cover: Cardi B",
        name: "New Music Friday",
      },
      {
        id: "37i9dQZF1DX1g0iEXLFycr",
        image:
          "https://i.scdn.co/image/ab67706f00000003104f039c1cc982d3617f4e4b",
        description: "Uplifting anthems to power you through 'til the weekend.",
        name: "Feel Good Friday",
      },
      {
        id: "37i9dQZF1DX0XUsuxWHRQd",
        image:
          "https://i.scdn.co/image/ab67706f00000003415051362207105cdd2e8ea1",
        description: "New music from Cardi B, Polo G and Moneybagg Yo.",
        name: "RapCaviar",
      },
      {
        id: "37i9dQZF1DX7ZUug1ANKRP",
        image:
          "https://i.scdn.co/image/ab67706f0000000371955d298ca523611cd4964c",
        description:
          "Peak time bangers and emerging future hits. Cover: Zombic",
        name: "Main Stage",
      },
      {
        id: "37i9dQZF1DX186v583rmzp",
        image:
          "https://i.scdn.co/image/ab67706f000000035f4b625f7dfcb4733381bac3",
        description: "Real rap music from the golden era.",
        name: "I Love My '90s Hip-Hop",
      },
      {
        id: "37i9dQZF1DX3rxVfibe1L0",
        image:
          "https://i.scdn.co/image/ab67706f00000003aa93fe4e8c2d24fc62556cba",
        description: "Get happy with today's dose of feel-good songs!",
        name: "Mood Booster",
      },
      {
        id: "37i9dQZF1DX0BcQWzuB7ZO",
        image:
          "https://i.scdn.co/image/ab67706f000000031e7dfe50e611bb8522016e53",
        description:
          'All the <a href="spotify:genre:edm_dance">big ones</a> with HVME',
        name: "Dance Hits",
      },
      {
        id: "37i9dQZF1DXcBWIGoYBM5M",
        image:
          "https://i.scdn.co/image/ab67706f00000003a8f6984bc0b9ffe3272bb614",
        description: "The Weeknd is on top of the Hottest 50!",
        name: "Today's Top Hits",
      },
      {
        id: "37i9dQZF1DXcRXFNfZr7Tp",
        image:
          "https://i.scdn.co/image/ab67706f0000000322f35c1ba10a1b2be57784dc",
        description:
          "Current favorites and exciting new music. Cover: Sam Fischer, Demi Lovato",
        name: "just hits",
      },
      {
        id: "37i9dQZF1DXaXB8fQg7xif",
        image:
          "https://i.scdn.co/image/ab67706f00000003470dd505fcf08e4693db9b24",
        description: '<a href="spotify:genre:edm_dance">Move</a> your feet!',
        name: "Dance Party",
      },
      {
        id: "37i9dQZF1DWYAcBZSAVhlf",
        image:
          "https://i.scdn.co/image/ab67706f000000035611e6effd70cdc11d0c7076",
        description: "The best feel-good songs of the 80s.",
        name: "Walking On Sunshine",
      },
      {
        id: "37i9dQZF1DXca8AyWK6Y7g",
        image:
          "https://i.scdn.co/image/ab67706f000000038b84bcf93333298ce1531447",
        description:
          "Indie, pop, and everything in between to bring you good energy and good vibes. ",
        name: "young & free",
      },
    ],
  },
  {
    title: "Mock Data",
    articles: [
      {
        id: "37i9dQZF1DWXJfnUiYjUKT",
        image:
          "https://i.scdn.co/image/ab67706f00000003146ffe86303ede6e3c4450dc",
        description:
          "The very best in new music from around the world. Cover: Cardi B",
        name: "New Music Friday",
      },
      {
        id: "37i9dQZF1DX1g0iEXLFycr",
        image:
          "https://i.scdn.co/image/ab67706f00000003104f039c1cc982d3617f4e4b",
        description: "Uplifting anthems to power you through 'til the weekend.",
        name: "Feel Good Friday",
      },
      {
        id: "37i9dQZF1DWXJfnUiYjUKT",
        image:
          "https://i.scdn.co/image/ab67706f00000003146ffe86303ede6e3c4450dc",
        description:
          "The very best in new music from around the world. Cover: Cardi B",
        name: "New Music Friday",
      },
      {
        id: "37i9dQZF1DX1g0iEXLFycr",
        image:
          "https://i.scdn.co/image/ab67706f00000003104f039c1cc982d3617f4e4b",
        description: "Uplifting anthems to power you through 'til the weekend.",
        name: "Feel Good Friday",
      },
      {
        id: "37i9dQZF1DX0XUsuxWHRQd",
        image:
          "https://i.scdn.co/image/ab67706f00000003415051362207105cdd2e8ea1",
        description: "New music from Cardi B, Polo G and Moneybagg Yo.",
        name: "RapCaviar",
      },
      {
        id: "37i9dQZF1DX7ZUug1ANKRP",
        image:
          "https://i.scdn.co/image/ab67706f0000000371955d298ca523611cd4964c",
        description:
          "Peak time bangers and emerging future hits. Cover: Zombic",
        name: "Main Stage",
      },
      {
        id: "37i9dQZF1DX186v583rmzp",
        image:
          "https://i.scdn.co/image/ab67706f000000035f4b625f7dfcb4733381bac3",
        description: "Real rap music from the golden era.",
        name: "I Love My '90s Hip-Hop",
      },
      {
        id: "37i9dQZF1DX3rxVfibe1L0",
        image:
          "https://i.scdn.co/image/ab67706f00000003aa93fe4e8c2d24fc62556cba",
        description: "Get happy with today's dose of feel-good songs!",
        name: "Mood Booster",
      },
      {
        id: "37i9dQZF1DX0BcQWzuB7ZO",
        image:
          "https://i.scdn.co/image/ab67706f000000031e7dfe50e611bb8522016e53",
        description:
          'All the <a href="spotify:genre:edm_dance">big ones</a> with HVME',
        name: "Dance Hits",
      },
      {
        id: "37i9dQZF1DXcBWIGoYBM5M",
        image:
          "https://i.scdn.co/image/ab67706f00000003a8f6984bc0b9ffe3272bb614",
        description: "The Weeknd is on top of the Hottest 50!",
        name: "Today's Top Hits",
      },
      {
        id: "37i9dQZF1DXcRXFNfZr7Tp",
        image:
          "https://i.scdn.co/image/ab67706f0000000322f35c1ba10a1b2be57784dc",
        description:
          "Current favorites and exciting new music. Cover: Sam Fischer, Demi Lovato",
        name: "just hits",
      },
      {
        id: "37i9dQZF1DXaXB8fQg7xif",
        image:
          "https://i.scdn.co/image/ab67706f00000003470dd505fcf08e4693db9b24",
        description: '<a href="spotify:genre:edm_dance">Move</a> your feet!',
        name: "Dance Party",
      },
      {
        id: "37i9dQZF1DWYAcBZSAVhlf",
        image:
          "https://i.scdn.co/image/ab67706f000000035611e6effd70cdc11d0c7076",
        description: "The best feel-good songs of the 80s.",
        name: "Walking On Sunshine",
      },
    ],
  },
  {
    title: "Mock Data",
    articles: [
      {
        id: "37i9dQZF1DWXJfnUiYjUKT",
        image:
          "https://i.scdn.co/image/ab67706f00000003146ffe86303ede6e3c4450dc",
        description:
          "The very best in new music from around the world. Cover: Cardi B",
        name: "New Music Friday",
      },
      {
        id: "37i9dQZF1DX1g0iEXLFycr",
        image:
          "https://i.scdn.co/image/ab67706f00000003104f039c1cc982d3617f4e4b",
        description: "Uplifting anthems to power you through 'til the weekend.",
        name: "Feel Good Friday",
      },
      {
        id: "37i9dQZF1DWXJfnUiYjUKT",
        image:
          "https://i.scdn.co/image/ab67706f00000003146ffe86303ede6e3c4450dc",
        description:
          "The very best in new music from around the world. Cover: Cardi B",
        name: "New Music Friday",
      },
      {
        id: "37i9dQZF1DX1g0iEXLFycr",
        image:
          "https://i.scdn.co/image/ab67706f00000003104f039c1cc982d3617f4e4b",
        description: "Uplifting anthems to power you through 'til the weekend.",
        name: "Feel Good Friday",
      },
      {
        id: "37i9dQZF1DX0XUsuxWHRQd",
        image:
          "https://i.scdn.co/image/ab67706f00000003415051362207105cdd2e8ea1",
        description: "New music from Cardi B, Polo G and Moneybagg Yo.",
        name: "RapCaviar",
      },
      {
        id: "37i9dQZF1DX7ZUug1ANKRP",
        image:
          "https://i.scdn.co/image/ab67706f0000000371955d298ca523611cd4964c",
        description:
          "Peak time bangers and emerging future hits. Cover: Zombic",
        name: "Main Stage",
      },
      {
        id: "37i9dQZF1DX186v583rmzp",
        image:
          "https://i.scdn.co/image/ab67706f000000035f4b625f7dfcb4733381bac3",
        description: "Real rap music from the golden era.",
        name: "I Love My '90s Hip-Hop",
      },
      {
        id: "37i9dQZF1DX3rxVfibe1L0",
        image:
          "https://i.scdn.co/image/ab67706f00000003aa93fe4e8c2d24fc62556cba",
        description: "Get happy with today's dose of feel-good songs!",
        name: "Mood Booster",
      },
      {
        id: "37i9dQZF1DX0BcQWzuB7ZO",
        image:
          "https://i.scdn.co/image/ab67706f000000031e7dfe50e611bb8522016e53",
        description:
          'All the <a href="spotify:genre:edm_dance">big ones</a> with HVME',
        name: "Dance Hits",
      },
      {
        id: "37i9dQZF1DXcBWIGoYBM5M",
        image:
          "https://i.scdn.co/image/ab67706f00000003a8f6984bc0b9ffe3272bb614",
        description: "The Weeknd is on top of the Hottest 50!",
        name: "Today's Top Hits",
      },
      {
        id: "37i9dQZF1DXcRXFNfZr7Tp",
        image:
          "https://i.scdn.co/image/ab67706f0000000322f35c1ba10a1b2be57784dc",
        description:
          "Current favorites and exciting new music. Cover: Sam Fischer, Demi Lovato",
        name: "just hits",
      },
      {
        id: "37i9dQZF1DXaXB8fQg7xif",
        image:
          "https://i.scdn.co/image/ab67706f00000003470dd505fcf08e4693db9b24",
        description: '<a href="spotify:genre:edm_dance">Move</a> your feet!',
        name: "Dance Party",
      },
    ],
  },
];

module.exports = mockData