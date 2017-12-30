var bios = [
  {
    name: "Goku",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Goku.jpg"
  },
  {
    name: "Vegeta",
    race: "Saiyan",
    bio: "A balanced fighter with good offensive and defensive capabilities",
    image: "Assets/Vegeta.jpg"
  },
  {
    name: "Android 16",
    race: "Android",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Android-16.jpg"
  },
  {
    name: "Android 18",
    race: "Android",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Android-18.jpg"
  },
  {
    name: "Frieza",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Frieza.jpg"
  },
  {
    name: "Trunks",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Trunks.jpg"
  },
  {
    name: "Gohan",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Gohan.jpg"
  },
  {
    name: "Krillin",
    race: "Human",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Krillin.jpg"
  },
  {
    name: "Piccolo",
    race: "Namekian",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Piccolo.jpg"
  },
  {
    name: "Cell",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Cell.jpg"
  },
  {
    name: "Maijin Bu",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Maijin-Bu.jpg"
  }
];

var stats = [
  {
    name: "Goku",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Vegeta",
    Power: "A",
    Speed: "A",
    Technique: "B",
    Reach: "A",
    Energy: "S",
    "Ease of use": "SS"
  },
  {
    name: "Android 16",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Android 18",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Frieza",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Maijin Bu",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Gohan",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Krillin",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Piccolo",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Cell",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Trunks",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
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
