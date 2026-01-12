// src/components/task2/MySqlTask2Config.js
export const mySqlTask2Questions = [
  {
    description:
      "Write a SQL query to select all columns from a table named users.",
    constraints: [
      "Must use SELECT statement",
      "Must use FROM clause",
      "Table name must be users"
    ],
    validate(code) {
      if (!/select\s+\*\s+from\s+users\s*;?/i.test(code))
        return "Query must be: SELECT * FROM users";

      return "";
    }
  },
  {
    description:
      "Write a SQL query to select name and email columns from users table.",
    constraints: [
      "Must select specific columns",
      "Must use FROM users"
    ],
    validate(code) {
      if (!/select\s+name\s*,\s*email\s+from\s+users\s*;?/i.test(code))
        return "Query must select name and email from users";

      return "";
    }
  },
  {
    description:
      "Write a SQL query to filter users whose age is greater than 18.",
    constraints: [
      "Must use WHERE clause",
      "Must use comparison operator >"
    ],
    validate(code) {
      if (!/where\s+age\s*>\s*18/i.test(code))
        return "WHERE age > 18 is required";

      return "";
    }
  }
];