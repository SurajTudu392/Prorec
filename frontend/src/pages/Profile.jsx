import Navbar from "../components/Navbar";
import "./Profile.css";

const Profile = () => {
  const user = localStorage.getItem("user");

  return (
    <div className="page-bg">
      <Navbar />

      <div className="profile-wrapper">
        <h1>Your Profile 👤</h1>

        <div className="profile-card">
          <p><strong>Name:</strong> {user || "User"}</p>
          <p><strong>Email:</strong> user@example.com</p>

          <button className="logout-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;