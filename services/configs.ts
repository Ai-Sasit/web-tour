import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://firestore.googleapis.com/v1/projects/sridara-tour/databases/(default)/documents/",
});

export const create_data = async (endpoint: string, data: any) => {
  const response = await api.post(endpoint, data);
  return response.data;
};

export const read_all_data = async (endpoint: string) => {
  const response = await api.get(endpoint);
  return response.data.documents;
};

export const read_one_data = async (endpoint: string, id: string) => {
  const response = await api.get(`${endpoint}/${id}`);
  return response.data;
};

export const update_data = async (endpoint: string, id: string, data: any) => {
  const response = await api.patch(`${endpoint}/${id}`, data);
  return response.data;
};

export const delete_data = async (endpoint: string, id: string) => {
  const response = await api.delete(`${endpoint}/${id}`);
  return response.data;
};
