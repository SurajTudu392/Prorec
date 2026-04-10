import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = () => {
    localStorage.setItem("user", "true");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Welcome Back 👋" : "Create Account 🚀"}</h2>

        <input className="auth-input" type="email" placeholder="Email" />
        <input className="auth-input" type="password" placeholder="Password" />

        {!isLogin && (
          <input
            className="auth-input"
            type="password"
            placeholder="Confirm Password"
          />
        )}

        <button className="auth-btn" onClick={handleAuth}>
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p
          className="toggle-text"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "New here? Create an account"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Auth;