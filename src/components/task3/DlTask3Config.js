export const dlTask3Question = {
  description:
    "Write a program that simulates basic digital logic gates (AND, OR, NOT) and prints their truth tables using console.log.",

  constraints: [
    "Must define inputs A and B",
    "Must compute AND gate",
    "Must compute OR gate",
    "Must compute NOT gate",
    "Must use console.log to print results"
  ],

  validate(code) {
    if (!/A\s*=|B\s*=/.test(code))
      return "Inputs A and B must be defined";

    if (!/&&/.test(code))
      return "AND gate (&&) logic is required";

    if (!/\|\|/.test(code))
      return "OR gate (||) logic is required";

    if (!/!A|!B/.test(code))
      return "NOT gate logic is required";

    if (!/console\.log/.test(code))
      return "console.log output is required";

    return null;
  }
};