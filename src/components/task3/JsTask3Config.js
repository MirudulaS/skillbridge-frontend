export const jsTask3Question = {
  description:
    "Write a program that analyzes an array of numbers and prints the sum, average, count of even numbers, and count of odd numbers.",

  constraints: [
    "Must declare an array of numbers",
    "Must use a loop",
    "Must use conditionals",
    "Must calculate sum and average",
    "Must print results using console.log"
  ],

  validate(code) {
    if (!/\[.*\]/s.test(code))
      return "Array of numbers is required";

    if (!/for|while/.test(code))
      return "Loop is required";

    if (!/if\s*\(/.test(code))
      return "Conditional logic is required";

    if (!/console\.log/.test(code))
      return "console.log is required";

    if (!/sum|total/i.test(code))
      return "Sum calculation is required";

    if (!/average|avg/i.test(code))
      return "Average calculation is required";

    return null; 
  }
};
