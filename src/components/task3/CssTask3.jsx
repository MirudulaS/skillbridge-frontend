import HtmlTask3 from "./HtmlTask3";
import CssTask3Compiler from "./CssTask3Compiler";
import { cssTask3Question } from "./CssTask3Config";
import { useNavigate } from "react-router-dom";

export default function CssTask3() {
  const navigate = useNavigate();

  return (
    <HtmlTask3
      title="CSS Task 3 – Mini Project"
      description={cssTask3Question.description}
      constraints={cssTask3Question.constraints}
      Compiler={CssTask3Compiler}
      validate={cssTask3Question.validate}
      storageKey="frontend-css-task-3"
      onBack={() => navigate("/dashboard")}
      initialCode={{ html: "", css: "" }}
    />
  );
}