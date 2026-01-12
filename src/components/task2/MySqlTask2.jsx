// src/components/task2/MySqlTask2.jsx
import { useNavigate } from "react-router-dom";
import Task2Template from "./Task2Template";
import { mySqlTask2Questions } from "./MySqlTask2Config";
import MySqlTask2Compiler from "./MySqlTask2Compiler";

export default function MySqlTask2() {
  const navigate = useNavigate();

  return (
    <Task2Template
      title="MySQL Task 2 – Writing Basic SQL Queries"
      questions={mySqlTask2Questions}
      Compiler={MySqlTask2Compiler}
      storageKey="mysql-task-2-completed"
      onBack={() => navigate(-1)}
    />
  );
}