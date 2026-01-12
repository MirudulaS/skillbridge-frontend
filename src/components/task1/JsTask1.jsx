import Task1Template from "./Task1Template";
import JsTask1Content from "./JsTask1Content";
import { useNavigate } from "react-router-dom";

export default function JsTask1() {
  const navigate = useNavigate();

  return (
    <Task1Template
      title="JavaScript Task 1 – Introduction"
      videoId="W6NZfCO5SIk"
      Content={JsTask1Content}
      storageKey="frontend-js-task-1"
      onBack={() => navigate("/dashboard")}
    />
  );
}