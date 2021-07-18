import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
} from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = { name, number };

    dispatch(addContactRequest());
    return axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error)));
  };

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  return axios
    .delete("/contacts/" + id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

const fetchContact = () => (dispatch) => {
  dispatch(fetchContactRequest());
  return axios
    .get("/contacts")
    .then((response) => dispatch(fetchContactSuccess(response.data)))
    .catch((error) => dispatch(fetchContactError(error)));
};

export { addContact, deleteContact, fetchContact };
