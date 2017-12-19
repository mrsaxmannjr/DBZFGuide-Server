const assert = require("assert");
const code = require("../data");

var data1 = [
  {
    name: "Goku",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/goku.png"
  }
];

var data2 = [
  {
    name: "Goku",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS",
  }
];

var combinedResult = [
  {
    name: "Goku",
    race: "Saiyan",
    bio: "The all-rounder anyone can use!",
    image: "Assets/goku.png",
    Power: "S",
    Speed: "B",
    Technique: "A",
    Reach: "A",
    Energy: "A",
    "Ease of use": "SS"
  }
];

describe("#combine", () => {
  it("should combine two sets of data", () => {
    assert.deepEqual(code.combine(data1, data2), combinedResult);
  });
});
