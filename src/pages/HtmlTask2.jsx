import { useNavigate } from "react-router-dom";
import Task2Template from "../components/task2/Task2Template";
import HtmlTask2Compiler from "../components/task2/HtmlTask2Compiler";
import { htmlTask2Questions } from "../components/task2/HtmlTask2Config";

export default function HtmlTask2() {
  const navigate = useNavigate();

  return (
    <Task2Template
      title="HTML Task 2"
      questions={htmlTask2Questions}
      Compiler={HtmlTask2Compiler}
      storageKey="frontend-html-task-2"
      onBack={() => navigate(-1)}
    />
  );
}
