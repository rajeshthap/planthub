import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "../../assets/css/Innerpages.css";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const Donation = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",

  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  // ------------------------
  // VALIDATION
  // ------------------------
  const validate = () => {
    let temp = {};

    if (!data.name.trim()) temp.name = "Name is required";

    if (!data.email) temp.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email))
      temp.email = "Enter a valid email";

    if (!data.phone) temp.phone = "Phone is required";
    else if (!/^\d{10}$/.test(data.phone))
      temp.phone = "Phone number must be 10 digits";

    if (!data.amount) temp.amount = "Amount is required";
    else if (isNaN(data.amount) || data.amount <= 0)
      temp.amount = "Enter a valid amount";



    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // ------------------------
  // SUBMIT FORM
  // ------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post(
        "https://mahadevaaya.com/youthforhimalayastrust.org/yfhtrust/backend/api/donation/",
        data
      );

      console.log("POST Response:", response.data);
      alert("Donation submitted successfully!");

      setSuccessMsg("Donation submitted successfully!");

      setTimeout(() => setSuccessMsg(""), 4000);

      setData({
        name: "",
        email: "",
        phone: "",
        amount: "",
        password: "",
      });
      setErrors({});
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
    <>

      <div className="company-banner-donation">
        <div className="site-breadcrumb-wpr">
          <h2 className="breadcrumb-title">Donation</h2>

          <ul className="breadcrumb-menu clearfix" type="none">
            <li>
              <Link to="/" className="breadcrumb-link">Home</Link>
            </li>

            <li className="px-2">/</li>

            <li>Donation</li>
          </ul>
        </div>
      </div>
      <Container className="py-4 mt-4 pt-container">
        {successMsg && (
          <div className="alert alert-success">{successMsg}</div>
        )}

        <Row>
          {/* ------------------ LEFT SIDE FORM ------------------ */}
          <Col lg={8} md={12}>
            <Form
              onSubmit={handleSubmit}
              className="shadow p-4 rounded bg-white"
            >
              <h2 className="text-center mb-4">Donation Form</h2>

              <Row>
                {/* NAME */}
                <Col lg={6} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="br-label">Name</Form.Label>
                    <Form.Control
                      className={`br-form-control ${errors.name ? "is-invalid" : ""
                        }`}
                      name="name"
                      type="text"
                      value={data.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </Form.Group>
                </Col>

                {/* EMAIL */}
                <Col lg={6} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="br-label">Email</Form.Label>
                    <Form.Control
                      type="email"
                      className={`br-form-control ${errors.email ? "is-invalid" : ""
                        }`}
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </Form.Group>
                </Col>

                {/* PHONE */}
                <Col lg={6} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="br-label">Phone</Form.Label>
                    <Form.Control
                      maxLength={10}
                      type="number"
                      className={`br-form-control ${errors.phone ? "is-invalid" : ""
                        }`}
                      name="phone"
                      value={data.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </Form.Group>
                </Col>

                {/* AMOUNT */}
                <Col lg={6} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="br-label">Amount</Form.Label>
                    <Form.Control
                      type="number"
                      className={`br-form-control ${errors.amount ? "is-invalid" : ""
                        }`}
                      name="amount"
                      value={data.amount}
                      onChange={handleChange}
                    />
                    {errors.amount && (
                      <div className="invalid-feedback">{errors.amount}</div>
                    )}
                  </Form.Group>
                </Col>


              </Row>

              <Button type="submit" className="btn btn-primary btn-donat-submit btn-sm">
                Donate Now
              </Button>
            </Form>
          </Col>

          {/* ------------------ RIGHT SIDE INFO ------------------ */}
          <Col lg={4} md={12} className="mt-4 mt-lg-0">
            <div className="shadow p-4 rounded bg-white pt-address">
              <h3 className="mb-3">Donation Support</h3>

              <p>
                <strong>Email:</strong>
                <br /> donate@youthforhimalayastrust.org
              </p>

              <p>
                <strong>Phone:</strong>
                <br /> +91 63998 00158
              </p>

              <p>
                <strong>Working Hours:</strong>
                <br /> Mon – Sat, 9:00 AM – 6:00 PM
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Donation;
