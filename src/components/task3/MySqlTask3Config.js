// src/components/task3/MySqlTask3Config.js
export const mySqlTask3Question = {
  description:
    "Design a basic database schema for a user management system and write SQL queries to interact with it.",

  constraints: [
    "Must create a users table",
    "Table must include id, name, email, and age columns",
    "Must define a PRIMARY KEY",
    "Must include at least one INSERT query",
    "Must include at least one SELECT query"
  ],

  validate(code) {
    if (!code || code.trim().length === 0)
      return "SQL code is required";

    if (!/create\s+table\s+users/i.test(code))
      return "CREATE TABLE users statement is required";

    if (!/id\s+int/i.test(code))
      return "id column with INT type is required";

    if (!/primary\s+key/i.test(code))
      return "PRIMARY KEY is required";

    if (!/insert\s+into\s+users/i.test(code))
      return "At least one INSERT INTO users query is required";

    if (!/select\s+.*\s+from\s+users/i.test(code))
      return "At least one SELECT query from users table is required";

    return null;
  }
};