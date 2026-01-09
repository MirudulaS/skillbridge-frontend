// src/components/task3/MlTask3.jsx
import HtmlTask3 from "./HtmlTask3";
import MlTask3Compiler from "./MlTask3Compiler";
import { mlTask3Question } from "./MlTask3Config";
import { useNavigate } from "react-router-dom";

export default function MlTask3() {
  const navigate = useNavigate();

  return (
    <HtmlTask3
      title="Machine Learning Task 3 – ML Pipeline Mini Project"
      description={mlTask3Question.description}
      constraints={mlTask3Question.constraints}
      Compiler={MlTask3Compiler}
      validate={mlTask3Question.validate}
      storageKey="ml-task-3-completed"
      onBack={() => navigate("/dashboard")}
    />
  );
}