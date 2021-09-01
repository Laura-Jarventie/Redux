import axios from "axios";
import { INIT_NOTES } from "../store/actions";

const baseUrl = "http://localhost:3001/notes";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  console.log(response.data);
  return response.data;
};

export const createNew = async (text) => {
  const object = { text, completed: false };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

export const deleteNote = async (id) => {
  const response = await axios.delete(baseUrl + "/" + id, { id });
  return response.data;
};

/*  const response = await axios.delete(baseUrl / +id).then((response) => {
    if (response.data != null) {
      alert("deleted"); */
