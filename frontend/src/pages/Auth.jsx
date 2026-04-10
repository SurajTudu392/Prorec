import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Email Login (Demo)
  const handleAuth = () => {
    localStorage.setItem("user", "true");
    navigate("/");
  };

  // 🔥 Mock Google Login
  const handleGoogleLogin = () => {
    alert("Google Login (Demo)");
    localStorage.setItem("user", "google_user");
    navigate("/");
  };

  // 🔥 Mock GitHub Login
  const handleGithubLogin = () => {
    alert("GitHub Login (Demo)");
    localStorage.setItem("user", "github_user");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Welcome Back 👋" : "Create Account 🚀"}</h2>

        <input className="auth-input" type="email" placeholder="Email" />
        <input className="auth-input" type="password" placeholder="Password" />

        <button className="auth-btn" onClick={handleAuth}>
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* OAuth Buttons */}
        <button className="oauth-btn google" onClick={handleGoogleLogin}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="google"
          />
          Continue with Google
        </button>

        <button className="oauth-btn github" onClick={handleGithubLogin}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="github"
          />
          Continue with GitHub
        </button>

        <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "New here? Create an account"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Auth;