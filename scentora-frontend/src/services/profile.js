import { ProtectedClient } from "./api";


export const ProfileData = async () => {
  try {
    const response = await ProtectedClient.get(`/profile/`);
    return response.data;
  } catch (error) {
    console.error("Error in ProfileData from the profile.js file:", error);
    throw error;
  }
};
