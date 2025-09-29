import { FunctionComponent, useEffect, useState } from "react";
import Customer from "../interfaces/Customer";
import { getAllCustomers } from "../services/customersService";
import { Link } from "react-router-dom";

interface CustomersProps {}

const Customers: FunctionComponent<CustomersProps> = () => {
  const [customersArr, setCustomersArr] = useState<Customer[]>([]);
  useEffect(() => {
    getAllCustomers()
      .then((res) => {
        setCustomersArr(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h5 className="display-5 text-secondary">
        <i className="fa-solid fa-address-card"></i>CRM
      </h5>
      <div className="container text-center">
        <Link to="/add-customer" className="btn btn-success">
          Add Customer
        </Link>
        {customersArr.length ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {customersArr.map((customer: Customer) => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No customers</p>
        )}
      </div>
    </>
  );
};

export default Customers;
