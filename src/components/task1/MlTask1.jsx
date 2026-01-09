import Task1Template from "./Task1Template";
import MlTask1Content from "./MlTask1Content";
import { useNavigate } from "react-router-dom";

export default function MlTask1() {
  const navigate = useNavigate();

  return (
    <Task1Template
      title="Machine Learning Task 1 – ML Foundations"
      videoId="Gv9_4yMHFhI"
      Content={MlTask1Content}
      storageKey="ml-foundations-task-1"
      onBack={() => navigate("/dashboard")}
    />
  );
}