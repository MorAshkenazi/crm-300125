import React from "react";
import logo from "./logo.svg";
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import NewCustomer from "./components/NewCustomer";
import UpdateCustomer from "./components/UpdateCustomer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/add-customer" element={<NewCustomer />} />
          <Route path="/update-customer/:id" element={<UpdateCustomer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
