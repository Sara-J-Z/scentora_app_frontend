import React, {useState} from "react";
import { updatepassword } from "../services/api";
import "../style/ProfilePage.css";

const UpdatePassword = () => {
    const [formData, setFormData] = useState({
        old_password: "",
        new_password: "",
        new_password_confirm: ""
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        try {
            const response = await updatepassword(formData);
            setMessage(response.message);
            setFormData({
                old_password: "",
                new_password: "",
                new_password_confirm: ""
            });
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.error || error.response.data.old_password || "An error occurred .");
            } else {
                setMessage("An error occurred");
            }
        }   
    }

    return (
        <div className="form-card">
            <h2 className="Page-title">Update Password</h2>
            {message && <div className="mb-4 text-green-500">{message}</div>}
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label>Old Password</label>
                    <input
                        type="password"
                        name="old_password"
                        value={formData.old_password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-wrapper">
                    <label>New Password</label>
                    <input
                        type="password"
                        name="new_password"
                        value={formData.new_password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-wrapper">
                    <label>Confirm New Password</label>
                    <input
                        type="password"
                        name="new_password_confirm"
                        value={formData.new_password_confirm}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn-primary">
                    Update Password
                </button>
            </form>
        </div>
    );
};


        
        export default UpdatePassword;