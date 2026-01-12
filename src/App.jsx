import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import SubjectModules from "./pages/SubjectModules";
import HtmlHandsOn from "./pages/HtmlHandsOn";
import HtmlTask2 from "./pages/HtmlTask2";
import HtmlTask3 from "./components/task3/HtmlTask3";
import CssTask2 from "./pages/CssTask2";
import CssHandsOn from "./pages/CssHandsOn";
import AppLayout from "./layouts/AppLayout";
import CssTask3 from "./components/task3/CssTask3";
import JsTask1 from "./components/task1/JsTask1";
import JsTask2 from "./components/task2/JsTask2";
import JsTask3 from "./components/task3/JsTask3";
import DigitalLogicTask1 from "./components/task1/vlsi/DigitalLogicTask1";
import DigitalLogicTask2 from "./components/task2/vlsi/DigitalLogicTask2";
import DigitalLogicTask3 from "./components/task3/DlTask3";
import MySqlTask1 from "./components/task1/MySqlTask1";
import MySqlTask2 from "./components/task2/MySqlTask2";
import MySqlTask3 from "./components/task3/MySqlTask3";
import MlTask1 from "./components/task1/MlTask1";
import MlTask2 from "./components/task2/MlTask2";
import MlTask3 from "./components/task3/MlTask3";
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/subject/:courseId/:subjectId"
            element={<SubjectModules />}
          />

          {/* HTML */}
          <Route path="/hands-on/html/task-1" element={<HtmlHandsOn />} />
          <Route path="/hands-on/html/task-2" element={<HtmlTask2 />} />
          <Route path="/hands-on/html/task-3" element={<HtmlTask3 />} />

          {/* CSS */}
          <Route path="/hands-on/css/task-1" element={<CssHandsOn />} />
          <Route path="/hands-on/css/task-2" element={<CssTask2 />} />
          <Route path="/hands-on/css/task-3" element={<CssTask3 />} />

          {/* JavaScript */}
          <Route path="/hands-on/js/task-1" element={<JsTask1 />} />
          <Route path="/hands-on/js/task-2" element={<JsTask2 />} />
          <Route path="/hands-on/js/task-3" element={<JsTask3 />} />

          {/* VLSI */}
          <Route
            path="/hands-on/vlsi/task-1"
            element={<DigitalLogicTask1 />}
          />
          <Route
            path="/hands-on/vlsi/task-2"
            element={<DigitalLogicTask2 />}
          />
          <Route
            path="/hands-on/vlsi/task-3"
            element={<DigitalLogicTask3 />}
          />

          {/* MySQL */}
          <Route
            path="/hands-on/mysql/task-1"
            element={<MySqlTask1 />}
          />
          <Route
            path="/hands-on/mysql/task-2"
            element={<MySqlTask2 />}
          />
          
          <Route
            path="/hands-on/mysql/task-3"
            element={<MySqlTask3 />}
          />

          {/* ML Foundations */}
          <Route
            path="/hands-on/ml/task-1"
            element={<MlTask1 />}
          />
          <Route
            path="/hands-on/ml/task-2"
            element={<MlTask2 />}
          />
          <Route
            path="/hands-on/ml/task-3"
            element={<MlTask3 />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
