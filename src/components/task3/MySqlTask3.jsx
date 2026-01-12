// src/components/task3/MySqlTask3.jsx
import HtmlTask3 from "./HtmlTask3";
import MySqlTask3Compiler from "./MySqlTask3Compiler";
import { mySqlTask3Question } from "./MySqlTask3Config";
import { useNavigate } from "react-router-dom";

export default function MySqlTask3() {
  const navigate = useNavigate();

  return (
    <HtmlTask3
      title="MySQL Task 3 – Database Design Mini Project"
      description={mySqlTask3Question.description}
      constraints={mySqlTask3Question.constraints}
      Compiler={MySqlTask3Compiler}
      validate={mySqlTask3Question.validate}
      storageKey="mysql-task-3-completed"
      onBack={() => navigate("/dashboard")}
    />
  );
}