import { useNavigate } from "react-router-dom";
import Task1Template from "../components/task1/Task1Template";
import HtmlTask1Content from "../components/task1/HtmlTask1Content";
import "../styles/HtmlHandsOn.css";

export default function HtmlHandsOn() {
  const navigate = useNavigate();

  return (
    <Task1Template
      title="HTML Basics"
      videoId="pQN-pnXPaVg"
      Content={HtmlTask1Content}
      storageKey="frontend-html-task-1"
      onBack={() => navigate(-1)}
    />
  );
}
