// src/pages/CssTask2.jsx
import Task2Template from "../components/task2/Task2Template";
import CssTask2Compiler from "../components/task2/CssTask2Compiler";
import { cssTask2Questions } from "../components/task2/CssTask2Questions";
import { useNavigate } from "react-router-dom";

export default function CssTask2() {
  const navigate = useNavigate();

  return (
    <Task2Template
      title="CSS Task 2"
      questions={cssTask2Questions}
      Compiler={CssTask2Compiler}
      storageKey="frontend-css-task-2"
      onBack={() => navigate("/dashboard")}
    />
  );
}