// src/components/task2/MlTask2Config.js
export const mlTask2Questions = [
  {
    description:
      "Describe the basic steps involved in a Machine Learning workflow.",
    constraints: [
      "Must mention data collection",
      "Must mention model training",
      "Must mention evaluation"
    ],
    validate(code) {
      if (!/data/i.test(code))
        return "Data collection step must be mentioned";

      if (!/train|training/i.test(code))
        return "Model training must be mentioned";

      if (!/evaluate|evaluation|accuracy/i.test(code))
        return "Model evaluation must be mentioned";

      return "";
    }
  },
  {
    description:
      "Explain the difference between supervised and unsupervised learning.",
    constraints: [
      "Must mention supervised learning",
      "Must mention unsupervised learning",
      "Must mention labels or unlabeled data"
    ],
    validate(code) {
      if (!/supervised/i.test(code))
        return "Supervised learning must be explained";

      if (!/unsupervised/i.test(code))
        return "Unsupervised learning must be explained";

      if (!/label/i.test(code))
        return "Difference based on labeled/unlabeled data must be mentioned";

      return "";
    }
  },
  {
    description:
      "Write a simple pseudo-code outline for training a machine learning model.",
    constraints: [
      "Must include data loading step",
      "Must include training step",
      "Must include prediction or evaluation step"
    ],
    validate(code) {
      if (!/load|dataset|data/i.test(code))
        return "Data loading step is required";

      if (!/train|fit/i.test(code))
        return "Training step is required";

      if (!/predict|evaluate|test/i.test(code))
        return "Prediction or evaluation step is required";

      return "";
    }
  }
];
