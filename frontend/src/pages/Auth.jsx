import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();

    const url = isLogin
      ? "http://127.0.0.1:8001/login"
      : "http://127.0.0.1:8001/signup";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.session.access_token);
        localStorage.setItem("user", true);
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  // GOOGLE LOGIN
  const handleGoogleSuccess = (credentialResponse) => {
    fetch("http://127.0.0.1:8001/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: credentialResponse.credential,
      }),
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.access_token);
        navigate("/");
      });
  };

  // GITHUB LOGIN
  const handleGithubLogin = () => {
    window.location.href =
      "http://127.0.0.1:8001/auth/github";
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>
          {isLogin
            ? "Welcome Back 👋"
            : "Create Account 🚀"}
        </h2>

        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="auth-btn"
          onClick={handleAuth}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* Google Login */}
        <div style={{ marginTop: "15px" }}>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={() =>
              console.log("Login Failed")
            }
          />
        </div>

        {/* GitHub Login */}
        <button
          className="auth-btn github-btn"
          onClick={handleGithubLogin}
          style={{ marginTop: "10px" }}
        >
          Continue with GitHub
        </button>

        <p
          className="toggle-text"
          onClick={() =>
            setIsLogin(!isLogin)
          }
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