import Client from "./api";

export const ProfileData = async () => {
  try {
    const res = await Client.get(`/users/me/`);
    return res.data;
  } catch (error) {
    console.error("Error in ProfileData:", error);
    throw error;
  }
};
