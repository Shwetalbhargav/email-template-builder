import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchLayout = () => API.get("/getEmailLayout");
export const uploadImage = (formData) => API.post("/uploadImage", formData);
export const uploadConfig = (data) => API.post("/uploadEmailConfig", data);
export const downloadTemplate = (data) => API.post("/renderAndDownloadTemplate", data);

export default API;
