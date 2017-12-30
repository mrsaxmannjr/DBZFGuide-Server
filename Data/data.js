var bios = [
  {
    name: "Goku",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Goku.jpg"
  },
  {
    name: "Vegeta",
    race: "Saiyan",
    bio: "A balanced fighter with good offensive and defensive capabilities",
    image: "/Assets/Characters/Vegeta.jpg"
  },
  {
    name: "Android 16",
    race: "Android",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Android-16.jpg"
  },
  {
    name: "Android 18",
    race: "Android",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Android-18.jpg"
  },
  {
    name: "Freeza",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Freeza.jpg"
  },
  {
    name: "Trunks",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Trunks.jpg"
  },
  {
    name: "Gohan",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Gohan.jpg"
  },
  {
    name: "Krillin",
    race: "Human",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Krillin.jpg"
  },
  {
    name: "Piccolo",
    race: "Namekian",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Piccolo.jpg"
  },
  {
    name: "Cell",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Cell.jpg"
  },
  {
    name: "Majin Buu",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "/Assets/Characters/Majin-Buu.jpg"
  }
];

var stats = [
  {
    name: "Goku",
    Power: 4,
    Speed: 2,
    Technique: 3,
    Reach: 3,
    Energy: 3,
    StatTotal: 15,
    "Ease of use": "SS"
  },
  {
    name: "Vegeta",
    Power: 3,
    Speed: 3,
    Technique: 2,
    Reach: 3,
    Energy: 4,
    StatTotal: 15,
    "Ease of use": "SS"
  },
  {
    name: "Android 16",
    Power: 4,
    Speed: 1,
    Technique: 4,
    Reach: 2,
    Energy: 3,
    StatTotal: 14,
    "Ease of use": "SS"
  },
  {
    name: "Android 18",
    Power: 3,
    Speed: 3,
    Technique: 2,
    Reach: 3,
    Energy: 3,
    StatTotal: 14,
    "Ease of use": "SS"
  },
  {
    name: "Freeza",
    Power: 3,
    Speed: 3,
    Technique: 3,
    Reach: 4,
    Energy: 4,
    StatTotal: 17,
    "Ease of use": "SS"
  },
  {
    name: "Majin Buu",
    Power: 4,
    Speed: 1,
    Technique: 4,
    Reach: 4,
    Energy: 4,
    StatTotal: 17,
    "Ease of use": "SS"
  },
  {
    name: "Gohan",
    Power: 5,
    Speed: 4,
    Technique: 1,
    Reach: 2,
    Energy: 3,
    StatTotal: 15,
    "Ease of use": "SS"
  },
  {
    name: "Krillin",
    Power: 2,
    Speed: 3,
    Technique: 1,
    Reach: 4,
    Energy: 3,
    StatTotal: 13,
    "Ease of use": "SS"
  },
  {
    name: "Piccolo",
    Power: 3,
    Speed: 2,
    Technique: 4,
    Reach: 4,
    Energy: 3,
    StatTotal: 16,
    "Ease of use": "SS"
  },
  {
    name: "Cell",
    Power: 4,
    Speed: 3,
    Technique: 4,
    Reach: 3,
    Energy: 3,
    StatTotal: 17,
    "Ease of use": "SS"
  },
  {
    name: "Trunks",
    Power: 3,
    Speed: 3,
    Technique: 4,
    Reach: 4,
    Energy: 2,
    StatTotal: 16,
    "Ease of use": "SS"
  }
];

function combine(data1, data2) {
  var result = [];
  for (var i = 0; i < data1.length; i++) {
    result.push(data1[i]);
    for (var j = 0; j < data2.length; j++) {
      if (result[i].name === data2[j].name) {
        result[i].Power = data2[j].Power;
        result[i].Speed = data2[j].Speed;
        result[i].Technique = data2[j].Technique;
        result[i].Reach = data2[j].Reach;
        result[i].Energy = data2[j].Energy;
        result[i]["Ease of use"] = data2[j]["Ease of use"];
      }
    }
  }
  return result;
}

module.exports = {
  combine,
  bios,
  stats
};
