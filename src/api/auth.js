import axiosInstance from "../config/config";

export const getUserRegister = async (formData) => {
  try {
    const { data } = await axiosInstance.post("/api/auth/signup", formData);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserLogin = async (formData) => {
  try {
    const { data } = await axiosInstance.post("/api/auth/login", formData);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
export const getUserDetails = async () => {
  try {
    const { data } = await axiosInstance.get("/api/user/me");
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
