import { runSequence } from "./shared/sequenceRunner.js";

const emptySequence = [
  "sketches/example-sequence-empty",
  "sketches/example-sequence-empty",
];

const exampleSequence = [
  "sketches/example-sequence-1",
  "sketches/example-sequence-2",
  "sketches/example-sequence-3",
];

const finalSquence = ["sketches/D1", "sketches/D2", "sketches/D3"];

runSequence(finalSquence);
