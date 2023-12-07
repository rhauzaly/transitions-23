import { runSequence, runRandomSequence } from "./shared/sequenceRunner.js";

const emptySequence = [
  "sketches/example-sequence-empty-1",
  "sketches/example-sequence-empty-2",
];

const exampleSequence = [
  "sketches/example-sequence-1",
  "sketches/example-sequence-2",
  "sketches/example-sequence-3",
];

//runSequence(exampleSequence);

const exampleSequenceObject = [
  {
    url: "sketches/example-sequence-empty",
    begin: "square",
    end: "cross",
    student: "Teo Grajqevci",
  },
  {
    url: "sketches/example-sequence-empty",
    begin: "cross",
    end: "grid",
    student: "Rosalie Girard",
  },
  {
    url: "sketches/example-sequence-empty",
    begin: "circle",
    end: "square",
    student: "Laurine Gigandet",
  },
  {
    url: "sketches/example-sequence-empty",
    begin: "cross",
    end: "square",
    student: "Andreas Abbaszadeh",
  },
];

runRandomSequence(exampleSequenceObject);
