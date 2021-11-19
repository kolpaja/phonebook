import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => axios.get(url);
export const fetchOne = (id) => axios.get(`${url}/${id}`);
export const addUser = (id, userData) => axios.post(`${url}/${id}`, userData);
export const editUser = (id, userData) => axios.put(`${url}/${id}`, userData);
export const deleteUser = (id) => axios.delete(`${url}/${id}`);