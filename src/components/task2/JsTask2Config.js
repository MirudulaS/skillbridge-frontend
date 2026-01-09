export const jsTask2Questions = [
  {
    description: "Create a function add(a, b) and log the result",
    constraints: [
      "Function named add is required",
      "Must use console.log",
      "Must perform addition"
    ],
    validate(code) {
      if (!/function\s+add\s*\(/.test(code))
        return "Function add(a, b) is required";

      if (!/console\.log/.test(code))
        return "console.log is required";

      if (!/\+/.test(code))
        return "Addition must be performed";

      return "";
    }
  },
  {
    description: "Declare two variables and log their sum",
    constraints: [
      "Must declare variables",
      "Must add variables",
      "Must use console.log"
    ],
    validate(code) {
      if (!/(let|const|var)\s+\w+/.test(code))
        return "Variables are required";

      if (!/\+/.test(code))
        return "Addition is required";

      if (!/console\.log/.test(code))
        return "console.log is required";

      return "";
    }
  },
  {
    description: "Create an arrow function that returns a sum and log it",
    constraints: [
      "Arrow function required",
      "Must return a value",
      "Must log the result"
    ],
    validate(code) {
      if (!/=>/.test(code))
        return "Arrow function is required";

      if (!/return/.test(code))
        return "Return statement is required";

      if (!/console\.log/.test(code))
        return "console.log is required";

      return "";
    }
  }
];