import HtmlTask3 from "./HtmlTask3";
import DlTask3Compiler from "./DlTask3Compiler";
import { dlTask3Question } from "./DlTask3Config";
import { useNavigate } from "react-router-dom";

export default function DlTask3() {
  const navigate = useNavigate();

  return (
    <HtmlTask3
      title="Digital Logic Task 3 – Logic Gates Mini Project"
      description={dlTask3Question.description}
      constraints={dlTask3Question.constraints}
      Compiler={DlTask3Compiler}
      validate={dlTask3Question.validate}
      storageKey="frontend-digital-logic-task-3"
      onBack={() => navigate("/dashboard")}
    />
  );
}