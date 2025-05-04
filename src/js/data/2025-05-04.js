dataSetVersion = "2025-05-04"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
      key: "game",
      tooltip: "Check this to restrict to certain games",
      checked: false,
      sub: [
        { name: "The Silver Case", key: "tsc" },
        { name: "Flower, Sun and Rain", key: "fsr" },
        { name: "The 25th Ward: The Silver Case", key: "25w" },
        { name: "Killer7", key: "k7" },
        { name: "No More Heroes", key: "nmh" },
        { name: "No More Heroes 2: Desperate Struggle", key: "nmh2" },
        { name: "No More Heroes III", key: "nmh3" },
        { name: "Killer is Dead", key: "kid" },
        { name: "Shadows of the Damned", key: "sotd" },
        { name: "Lollipop Chainsaw", key: "lc" }
      ]
    }
];
dataSet[dataSetVersion].characterData = [
    {
      name: "Akira",
      img: "akira.jpg",
      opts: {
        game: ["tsc"]
      }
    },
    {
      name: "Ayame Shimohara",
      img: "ayame.jpg",
      opts: {
        game: ["tsc"]
      }
    },
    {
      name: "Chizuru Hachisuka",
      img: "chizuru.jpg",
      opts: {
        game: ["tsc"]
      }
    },
    {
      name: "Kamui Uehara",
      img: "kamuiuehara.jpg",
      opts: {
        game: ["tsc"]
      }
    },
    {
      name: "Kiyoshi Morikawa",
      img: "kiyoshi.jpg",
      opts: {
        game: ["tsc"]
      }
    },
    {
      name: "Sumio Kodai",
      img: "sumiokodai.jpg",
      opts: {
        game: ["tsc","25w"]
      }
    },
    {
      name: "Sundance Shot",
      img: "sundance.jpg",
      opts: {
        game: ["tsc", "fsr"]
      }
    },
    {
      name: "Kusabi Tetsuguro",
      img: "kusabi.jpg",
      opts: {
        game: ["tsc","25w"]
      }
    },
    {
      name: "Tokio Morishima",
      img: "tokio.jpg",
      opts: {
        game: ["tsc", "25w","fsr"]
      }
    },
    {
      name: "Morichika Nakategawa",
      img: "morichika.jpg",
      opts: {
        game: ["tsc"]
      }
    },
    {
      name: "Shinji Kotobuki",
      img: "shinji.jpg",
      opts: {
        game: ["tsc"]
      }
    },
    {
      name: "Erika Yukawa",
      img: "erika.jpg",
      opts: {
        game: ["tsc"]
      }
    },
    {
      name: "Natsume Sakura",
      img: "natsume.jpg",
      opts: {
        game: ["tsc"]
      }
    },
    {
      name: "Red",
      img: "red.jpg",
      opts: {
        game: ["tsc", "25w"]
      }
    }
]