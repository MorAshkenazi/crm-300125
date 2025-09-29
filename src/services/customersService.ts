import axios from "axios";
import Customer from "../interfaces/Customer";

const api: string = "http://localhost:8000/customers";

// get all customers
export function getAllCustomers() {
  return axios.get(api);
}

// get customer by id
export function getCustomerById(id: string) {
  return axios.get(`${api}/${id}`);
}

// delete customer by id
export function deleteCustomerById(id: string) {
  return axios.delete(`${api}/${id}`);
}

// add new customer
export function addNewCustomer(newCustomer: Customer) {
  return axios.post(api, newCustomer);
}

// update customer by id
export function updateCustomerById(id: string, updatedCustomer: Customer) {
  return axios.put(`${api}/${id}`, updatedCustomer);
}
