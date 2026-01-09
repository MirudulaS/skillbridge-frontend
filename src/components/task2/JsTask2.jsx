import { useNavigate } from "react-router-dom";
import Task2Template from "./Task2Template";
import { jsTask2Questions } from "./JsTask2Config";
import JsTask2Compiler from "./JsTask2Compiler";

export default function JsTask2() {
  const navigate = useNavigate();

  return (
    <Task2Template
      title="JavaScript Task 2"
      questions={jsTask2Questions}
      Compiler={JsTask2Compiler}
      storageKey="js-task-2-completed"
      onBack={() => navigate(-1)}
    />
  );
}