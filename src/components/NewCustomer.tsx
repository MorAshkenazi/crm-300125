import { useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";

interface NewCustomerProps {}

const NewCustomer: FunctionComponent<NewCustomerProps> = () => {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", phone: "", email: "" },
    validationSchema: yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      phone: yup
        .string()
        .required()
        .matches(
          /^(?:\+972|0)(?:[2-9]|5[0-9])[-\s]?\d{3}[-\s]?\d{4}$/,
          "Phone must be according to Israeli format - +972/050/../03/04"
        ),
      email: yup.string().required().email().min(4),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <h5 className="display-5 text-secondary">
        <i className="fa-solid fa-address-card"></i>CRM
      </h5>
      <div className="container text-center">
        <h5 className="display-5">New Customer</h5>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="John"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="firstName">First Name</label>
            {formik.touched.firstName && formik.errors.firstName && (
              <small className="text-danger">{formik.errors.firstName}</small>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Doe"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="lastName">Last Name</label>
            {formik.touched.lastName && formik.errors.lastName && (
              <small className="text-danger">{formik.errors.lastName}</small>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="phone"
              className="form-control"
              id="phone"
              placeholder="0526325632"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="phone">Phone</label>
            {formik.touched.phone && formik.errors.phone && (
              <small className="text-danger">{formik.errors.phone}</small>
            )}
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="john@example.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="email">Email</label>
            {formik.touched.email && formik.errors.email && (
              <small className="text-danger">{formik.errors.email}</small>
            )}
          </div>
          <button
            className="btn btn-success w-100"
            disabled={!formik.isValid || !formik.dirty}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default NewCustomer;
