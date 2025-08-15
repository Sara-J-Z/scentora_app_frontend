import { useState, useEffect } from "react";
import { ProfileData } from "../services/profile"; 
import { useNavigate } from "react-router-dom";
import "../style/ProfilePage.css";

const mockProfileData = {
  username: "Guest User",
  email: "guest@example.com",
  date_of_birth: "1990-01-01",
  phone_number: "555-123-4567",
  address: "123 Main St, Anytown",
  gender: "M",
};

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [profData, setProfData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    // const handleProfileData = async () => {
    //   try {
    //     const data = await ProfileData();
    //     setProfData(data);
    //   } catch (err) {
    //     setError("Failed to load profile data.");
    //   }
    // };

    setProfData(mockProfileData);

    // This check is no longer needed since we are using mock data
    // to view the page without a signed-in user.
    // if (user) {
    //   handleProfileData();
    // }
  }, [user]);

  /*
  if (!user) {
    return (
      <div className="page-container">
        <h3>You must be signed in to do that!</h3>
        <button onClick={() => navigate("/signin")}>Sign In</button>
      </div>
    );
  }
  */

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!profData) {
    return <p className="loading">Loading profile...</p>;
  }

  return (
    <div className="page-container">
      <h1 className="Page-title">User Profile</h1>
      <div className="profile-card">
        <h1>{profData.username}</h1>
        <h3>{profData.email}</h3>
        <p>Date of Birth: {profData.date_of_birth}</p>
        {profData.phone_number && <p>Phone: {profData.phone_number}</p>}
        {profData.address && <p>Address: {profData.address}</p>}
        {profData.gender && (
          <p>Gender: {profData.gender === "M" ? "Male" : "Female"}</p>
        )}
      </div>
      <div className="ProfileActions">
        <button className="btn-primary" onClick={() => navigate("/profile/password-update")}>
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Profile;
