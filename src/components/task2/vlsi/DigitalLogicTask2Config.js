// src/components/task2/vlsi/DigitalLogicTask2Config.js

export const digitalLogicTask2Questions = [
  {
    description: "Create a NAND gate using AND and NOT gates.",
    constraints: [
      "Use AND gate",
      "Use NOT gate",
      "Exactly two gates must be placed"
    ],
    validate(gates) {
      if (!gates.includes("AND")) return "AND gate is required";
      if (!gates.includes("NOT")) return "NOT gate is required";
      if (gates.length !== 2) return "Exactly two gates required";
      return null;
    }
  },
  {
    description: "Create a NOR gate using OR and NOT gates.",
    constraints: [
      "Use OR gate",
      "Use NOT gate",
      "Exactly two gates must be placed"
    ],
    validate(gates) {
      if (!gates.includes("OR")) return "OR gate is required";
      if (!gates.includes("NOT")) return "NOT gate is required";
      if (gates.length !== 2) return "Exactly two gates required";
      return null;
    }
  },
  {
    description: "Create a combinational circuit using any two basic gates.",
    constraints: [
      "At least two gates must be placed",
      "Only basic gates allowed"
    ],
    validate(gates) {
      if (gates.length < 2)
        return "At least two gates are required";
      return null;
    }
  }
];