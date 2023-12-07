import { runSequence } from "./shared/sequenceRunner.js";

const emptySequence = [
    "sketches/example-sequence-empty-1",
    "sketches/example-sequence-empty-2",
]

const exampleSequence = [
    "sketches/example-sequence-1",
    "sketches/example-sequence-2",
    "sketches/example-sequence-3"
]

runSequence(emptySequence)