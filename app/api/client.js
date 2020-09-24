import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.251:7889/api",
});

export default apiClient;
