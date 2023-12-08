import {
  runSequence,
  runRandomSequence,
  loadSequenceMetadata,
} from "./shared/sequenceRunner.js";

const emptySequence = [
  "sketches/example-sequence-empty",
  "sketches/example-sequence-empty",
];

const exampleSequence = ["sketches/D1", "sketches/D2", "sketches/D3"];

loadSequenceMetadata(exampleSequence).then((sequenceData) => {
  console.log(sequenceData);
  runRandomSequence(sequenceData);
});

// const exampleSequenceObject = [
//     {
//         url: "all/teo-day1",
//         begin: "square",
//         end: "cross",
//         student: "Teo Grajqevci",
//     },
//     {
//         url: "all/teo-day2",
//         begin: "cross",
//         end: "grid",
//         student: "Rosalie Girard",
//     },
//     {
//         url: "all/teo-day3",
//         begin: "circle",
//         end: "square",
//         student: "Laurine Gigandet",
//     },
//     {
//         url: "all/teo-day4",
//         begin: "cross",
//         end: "square",
//         student: "Andreas Abbaszadeh",
//     },
//     {
//         url: "all/laurine-day1",
//         begin: "square",
//         end: "cross",
//         student: "Teo Grajqevci",
//     },
//     {
//         url: "all/laurine-day2",
//         begin: "cross",
//         end: "grid",
//         student: "Rosalie Girard",
//     },
//     {
//         url: "all/laurine-day3",
//         begin: "circle",
//         end: "square",
//         student: "Laurine Gigandet",
//     },
//     {
//         url: "all/laurine-day4",
//         begin: "cross",
//         end: "square",
//         student: "Andreas Abbaszadeh",
//     },
// ];
