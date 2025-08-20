import { useState, useEffect } from "react";
import { ProfileData } from "../services/profile";
import { useNavigate } from "react-router-dom";
import UpdatePassword from "../components/UpdatePassword";
import "../style/ProfilePage.css";

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [profData, setProfData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleProfileData = async () => {
      try {
        const data = await ProfileData();
        setProfData(data);
      } catch (err) {
        setError("Failed to load profile data.");
      }
    };

    if (user) {
      handleProfileData();
    }
  }, [user]);

  if (!user) {
    return (
      <div className="page-container">
        <h3>You must be signed in to do that!</h3>
        <button onClick={() => navigate("/signin")}>Sign In</button>
      </div>
    );
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!profData) {
    return <p className="loading">Loading profile...</p>;
  }

  return (
    <div className="page-container">
      <div className="profileData">
        <h1>{profData.username}</h1>
        <h3>{profData.email}</h3>
        <p>Date of Birth: {profData.date_of_birth}</p>
        {profData.phone_number && <p>Phone: {profData.phone_number}</p>}
        {profData.address && <p>Address: {profData.address}</p>}
        {profData.gender && (
          <p>Gender: {profData.gender === "M" ? "Male" : "Female"}</p>
        )}
      </div>
      <UpdatePassword />
    </div>
  );
};

export default Profile;
