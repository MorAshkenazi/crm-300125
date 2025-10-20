import { FunctionComponent, useEffect, useState } from "react";
import Customer from "../interfaces/Customer";
import {
  deleteCustomerById,
  getAllCustomers,
} from "../services/customersService";
import { Link, useNavigate } from "react-router-dom";
import { errorMsg, successMsg } from "../services/feedbacksService";

interface CustomersProps {}

const Customers: FunctionComponent<CustomersProps> = () => {
  const navigate = useNavigate();
  const [customersArr, setCustomersArr] = useState<Customer[]>([]);
  const [customersChanged, setCustomerChanged] = useState<boolean>(false);

  useEffect(() => {
    getAllCustomers()
      .then((res) => {
        setCustomersArr(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [customersChanged]);

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
                <th></th>
                <th></th>
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
                  <td>
                    <i
                      className="fa-solid fa-user-pen text-warning"
                      onClick={() => {
                        navigate(`/update-customer/${customer.id}`);
                      }}
                    ></i>
                  </td>
                  <td>
                    <i
                      className="fa-solid fa-user-xmark text-danger"
                      onClick={() => {
                        if (window.confirm("Are you sure?")) {
                          deleteCustomerById(customer.id as string)
                            .then(() => {
                              setCustomerChanged(!customersChanged);
                              successMsg("Customer was deleted successfully!");
                            })
                            .catch((err) => {
                              console.log(err);
                              errorMsg(
                                "Ooops...something went wrong. Try again!"
                              );
                            });
                        }
                      }}
                    ></i>
                  </td>
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
