import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");      // ✅ ADD THIS
  const [password, setPassword] = useState(""); // ✅ ADD THIS
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Clicked", email, password);
      fetch("http://127.0.0.1:8001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("token", data.session.access_token);
          localStorage.setItem("user",true);
          navigate("/");
        })
        .catch(err => console.log(err));
    } else {
      fetch("http://127.0.0.1:8001/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    }
  };


  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Welcome Back 👋" : "Create Account 🚀"}</h2>

        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

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

//P@nd0r@_293_C0de