import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";
// useState is that updating the stuffs we have changed
// If React does not know something changed, it will not update the screen.
//useState
function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (email === "student@skillbridge.com" && password === "skill123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="landing-container">
      <video className="bg-video" autoPlay muted loop>
        <source src="/study.mp4" type="video/mp4" />
      </video>

      <div className="overlay" />

      <div className="landing-content">
        <div className="hero-text">
          <h1>
            Welcome to <span>SkillBridge</span>
          </h1>
          <p>Learn skills. Track progress. Get industry-ready.</p>
        </div>

        <div className="login-panel">
          <h2>Student Login</h2>
          <p className="login-subtext">
            student@skillbridge.com / skill123
          </p>

          <div className="login-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Login</button>
          </div>

          <div className="login-footer">
            Having trouble? <a href="#">Contact support</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;