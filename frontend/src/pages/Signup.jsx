import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    // Demo login
    localStorage.setItem("user", user.name);
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create your account 🚀</h2>
        <p className="subtitle">Start building projects smarter</p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input-field"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="input-field"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          onChange={handleChange}
        />

        <button className="signup-btn" onClick={handleSignup}>
          Sign Up
        </button>

        <div className="divider">OR</div>

        <button className="google-btn">Continue with Google</button>
        <button className="github-btn">Continue with GitHub</button>

        <p className="login-link" onClick={() => navigate("/auth")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Signup;