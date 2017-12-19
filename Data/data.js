var bios = [
  {
    name: "Goku",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/goku.png"
  },
  {
    name: "Vegeta",
    race: "Saiyan",
    bio: "A balanced fighter with good offensive and defensive capabilities"
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
  }
];

var teams = [];

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
