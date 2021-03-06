const withIndefiniteArticle = require("../indefiniteArticle");

describe("indefinite-ruby", () => {
  const A_WORDS = [
    "ukulele",
    "UN",
    "uk",
    "oaxaca",
    "ufo",
    "unanimous",
    "one",
    "onearmed",
    "once",
    "onetime",
    "ouija",
    "european",
    "ewe",
    "ubiquity",
    "uboat",
    "unicorn",
    "unilateral",
    "banana",
    "user",
    "useful",
    "urinologist",
    "urea",
    "b",
    "c",
    "d",
    "g",
    "j",
    "k",
    "p",
    "q",
    "t",
    "u",
    "v",
    "w",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "9",
    "10",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "g",
    "user",
    "year",
    "Testing",
    "Moose",
    "Bacon fillet",
    "Historic event",
    "U.S. Currency",
    "Unified Front",
    "a UFO",
    "CEO",
    "euro",
    "ukelele",
    "ouija bo",
    "110",
    "110000",
    "1100000",
    "110000000",
    "1100000000",
    "180",
    "180000",
    "1800000",
    "180000000",
    "1800000000",
    "1100",
    "1800",
    "17",
    "7",
  ];

  const AN_WORDS = [
    "apple",
    "unassailable",
    "ubuntu",
    "ubersexual",
    "ungrammatical",
    "unanswered",
    "unilluminated",
    "unintentional",
    "unlikely",
    "honor",
    "honorable",
    "onerous",
    "hour",
    "honest",
    "heir",
    "utter",
    "urgent",
    "a",
    "e",
    "f",
    "h",
    "i",
    "l",
    "m",
    "n",
    "o",
    "r",
    "s",
    "x",
    "8",
    "11",
    "Otter",
    "Honorable Mention",
    "apple",
    "Apple",
    "Umbrella",
    "apple",
    "IOU",
    "FFA prod",
    "UNCLE",
    "honor",
    "honor-bo",
    "hours",
    "heiresses",
    "honored",
    "hei",
    "Hour",
    "an",
    "11",
    "11000",
    "11000000",
    "11000000000",
    "18",
    "18000",
    "18000000",
    "18000000000",
    "8",
    "80",
    "800",
    "8000",
    "80000",
    "800000",
    "8000000",
    "80000000",
    "800000000",
    "8",
  ];

  describe("an words", () => {
    AN_WORDS.forEach((word) => {
      it(`should add an to ${word}`, () => {
        expect(withIndefiniteArticle(word)).toBe(`an ${word}`);
      });
    });
  });

  describe("a words", () => {
    A_WORDS.forEach((word) => {
      it(`should add a to ${word}`, () => {
        expect(withIndefiniteArticle(word)).toBe(`a ${word}`);
      });
    });
  });
});
