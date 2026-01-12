//Outlet is a hole, it will be replaced by the child rout or component
import { Outlet } from "react-router-dom";
import "../styles/appLayout.css";

export default function AppLayout() {
  return (
    <>
      <header className="topbar fixed">
        <div className="brand">SkillBridge</div>
        <nav className="nav">
          <span>Dashboard</span>
          <span>Profile</span>
          <span>Skills</span>
          <span>Settings</span>
          <span className="logout">Logout</span>
        </nav>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}