import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");
const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");
const fetchContactRequest = createAction("contacts/fetchContactRequest");
const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
const fetchContactError = createAction("contacts/fetchContactError");
const filterChange = createAction("contacts/filterChange");

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
  filterChange,
};

/* import shortid from "shortid"; */
/* const contactAdd = createAction("contacts/add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
})); */

/* const contactAdd = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}); */

/* const contactDelete = createAction("contacts/delete"); */
/* const contactDelete = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
}); */
/* const filterChange = (value) => ({
  type: types.FILTER_CHANGE,
  payload: value,
}); */
