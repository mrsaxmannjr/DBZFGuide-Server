const assert = require("assert");
const code = require("../data");

var data1 = [
  {
    name: "Goku",
    bio: "The all-rounder anyone can use!  An easy to use fighter, recommended for beginners.  Use your KAMEHAMEHA to get out of a pinch!  KAMEHAMEHA can one-sidedly crush your foes!",
    image: "/Assets/Characters/Goku.jpg",
    url: "http://dragonball.wikia.com/wiki/Goku"
  }
];

var data2 = [
  {
    name: "Goku",
    Power: 4,
    Speed: 2,
    Technique: 3,
    Reach: 3,
    Energy: 3,
    StatTotal: 15,
    "Ease of use": "SS",
    StatImg: "/Assets/Character-Statsheets/gokuStats.png"
  }
];

var combinedResult = [
  {
    name: "Goku",
    bio: "The all-rounder anyone can use!  An easy to use fighter, recommended for beginners.  Use your KAMEHAMEHA to get out of a pinch!  KAMEHAMEHA can one-sidedly crush your foes!",
    image: "/Assets/Characters/Goku.jpg",
    url: "http://dragonball.wikia.com/wiki/Goku",
    Power: 4,
    Speed: 2,
    Technique: 3,
    Reach: 3,
    Energy: 3,
    StatTotal: 15,
    "Ease of use": "SS",
    StatImg: "/Assets/Character-Statsheets/gokuStats.png"
  }
];

describe("#combine", () => {
  it("should combine two sets of data", () => {
    assert.deepEqual(code.combine(data1, data2), combinedResult);
  });
});
