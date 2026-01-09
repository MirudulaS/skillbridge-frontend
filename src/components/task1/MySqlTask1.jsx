import Task1Template from "./Task1Template";
import MySqlTask1Content from "./MySqlTask1Content";
import { useNavigate } from "react-router-dom";

export default function MySqlTask1() {
  const navigate = useNavigate();

  return (
    <Task1Template
      title="MySQL Task 1 – Introduction to Databases"
      videoId="7S_tz1z_5bA"
      Content={MySqlTask1Content}
      storageKey="mysql-sqlbasics-task-1"
      onBack={() => navigate("/dashboard")}
    />
  );
}