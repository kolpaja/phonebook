import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = () => axios.get(url);