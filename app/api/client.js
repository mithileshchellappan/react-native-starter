import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://169.254.75.30:9000/api",
});


export default apiClient
