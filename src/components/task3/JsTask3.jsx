import HtmlTask3 from "./HtmlTask3";
import JsTask3Compiler from "./JsTask3Compiler";
import { jsTask3Question } from "./JsTask3Config";
import { useNavigate } from "react-router-dom";

export default function JsTask3() {
  const navigate = useNavigate();

  return (
    <HtmlTask3
      title="JavaScript Task 3 – Mini Project"
      description={jsTask3Question.description}
      constraints={jsTask3Question.constraints}
      Compiler={JsTask3Compiler}
      validate={jsTask3Question.validate}
      storageKey="frontend-javascript-task-3"
      onBack={() => navigate("/dashboard")}
    />
  );
}
