import { useNavigate, useLocation } from "react-router-dom";
import Task1Template from "../components/task1/Task1Template";
import CssTask1Content from "../components/task1/CssTask1Content";

export default function CssHandsOn() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname.endsWith("/task-1")) {
    return (
      <Task1Template
        title="CSS Basics"
        videoId="yfoY53QXEnI"
        Content={CssTask1Content}
        storageKey="frontend-css-task-1"
        onBack={() => navigate(-1)}
      />
    );
  }

  return null;
}