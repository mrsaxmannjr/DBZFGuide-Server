var bios = [
  {
    name: "Goku",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Goku.png"
  },
  {
    name: "Vegeta",
    race: "Saiyan",
    bio: "A balanced fighter with good offensive and defensive capabilities",
    image: "Assets/Vegeta.png"
  },
  {
    name: "Android-16",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Android-16.png"
  },
  {
    name: "Android-18",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Android-18.png"
  },
  {
    name: "Freeza",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Freeza.png"
  },
  {
    name: "Ginyu",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Ginyu.png"
  },
  {
    name: "Gohan",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Gohan.png"
  },
  {
    name: "Krillin",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Krillin.png"
  },
  {
    name: "Piccolo",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Piccolo.png"
  },
  {
    name: "Tien",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Tien.png"
  },
  {
    name: "Trunks",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Trunks.png"
  },
  {
    name: "Yamcha",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/Yamcha.png"
  },
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
    name: "Android-16",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Android-18",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Freeza",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
  {
    name: "Ginyu",
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
    name: "Tien",
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
  },
  {
    name: "Yamcha",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  },
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
