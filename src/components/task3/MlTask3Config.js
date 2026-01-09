// src/components/task3/MlTask3Config.js
export const mlTask3Question = {
  description:
    "Design a complete Machine Learning pipeline for a real-world problem, including data, model choice, training, and evaluation.",

  constraints: [
    "Must define the problem statement",
    "Must describe the dataset",
    "Must choose an ML model",
    "Must explain training process",
    "Must explain evaluation metrics"
  ],

  validate(code) {
    if (!code || code.trim().length === 0)
      return "ML pipeline description is required";

    if (!/problem|objective|goal/i.test(code))
      return "Problem statement must be defined";

    if (!/data|dataset|features/i.test(code))
      return "Dataset description is required";

    if (!/model|algorithm/i.test(code))
      return "ML model or algorithm must be specified";

    if (!/train|training|fit/i.test(code))
      return "Training process must be explained";

    if (!/accuracy|precision|recall|f1|evaluate/i.test(code))
      return "Evaluation metrics must be explained";

    return null;
  }
};