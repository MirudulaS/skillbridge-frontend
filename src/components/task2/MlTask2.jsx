// src/components/task2/MlTask2.jsx
import { useNavigate } from "react-router-dom";
import Task2Template from "./Task2Template";
import { mlTask2Questions } from "./MlTask2Config";
import MlTask2Compiler from "./MlTask2Compiler";

export default function MlTask2() {
  const navigate = useNavigate();

  return (
    <Task2Template
      title="Machine Learning Task 2 – ML Concepts & Workflow"
      questions={mlTask2Questions}
      Compiler={MlTask2Compiler}
      storageKey="ml-task-2-completed"
      onBack={() => navigate(-1)}
    />
  );
}