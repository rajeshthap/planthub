import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import "../../assets/css/Innerpages.css";

const ContactUs = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const toCamelLabel = (field) =>
    field.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());

  // ------------------------
  // VALIDATION LOGIC
  // ------------------------
  const validate = () => {
    let temp = {};

    if (!data.first_name.trim())
      temp.first_name = "First Name is required";

    if (!data.last_name.trim())
      temp.last_name = "Last Name is required";

    if (!data.email)
      temp.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email))
      temp.email = "Enter a valid email";

    if (!data.phone)
      temp.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(data.phone))
      temp.phone = "Phone number must be 10 digits";

    if (!data.subject.trim())
      temp.subject = "Subject is required";

    if (!data.message.trim())
      temp.message = "Message is required";
    else if (data.message.length < 10)
      temp.message = "Message must be at least 10 characters";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // ------------------------
  // FORM SUBMIT
  // ------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
     const response= await axios.post("https://mahadevaaya.com/youthforhimalayastrust.org/yfhtrust/backend/api/contact-us/", data);
      

       console.log("POST Response:", response.data);  //
       alert("Successfully submitted");

    setSuccessMsg("Message sent successfully!");

    // Auto-hide success alert after 4 seconds
    setTimeout(() => {
      setSuccessMsg("");
    }, 4000);

      setData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  return (
     <Container className="py-4 mt-4 pt-container">

    {successMsg && (
      <div className="alert alert-success">{successMsg}</div>
    )}

    <Row>
      {/* ------------------ LEFT SIDE: FORM (8 COL) ------------------ */}
      <Col lg={8} md={12}>
        <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-white pt-contact ">
          <h2 className="text-center mb-4">Contact Us</h2>

          <Row>
            <Col lg={6} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="br-label">First Name</Form.Label>
                <Form.Control
                  className={`br-form-control ${errors.first_name ? "is-invalid" : ""}`}
                  name="first_name"
                  type="text"
                  value={data.first_name}
                  onChange={handleChange}
                />
                {errors.first_name && <div className="invalid-feedback">{errors.first_name}</div>}
              </Form.Group>
            </Col>

            <Col lg={6} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="br-label">Last Name</Form.Label>
                <Form.Control
                  className={`br-form-control ${errors.last_name ? "is-invalid" : ""}`}
                  name="last_name"
                  type="text"
                  value={data.last_name}
                  onChange={handleChange}
                />
                {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
              </Form.Group>
            </Col>

            <Col lg={6} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="br-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  className={`br-form-control ${errors.email ? "is-invalid" : ""}`}
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </Form.Group>
            </Col>

            <Col lg={6} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="br-label">Phone</Form.Label>
                <Form.Control
                  maxLength={10}
                  type="number"
                  className={`br-form-control ${errors.phone ? "is-invalid" : ""}`}
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
              </Form.Group>
            </Col>

            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="br-label">Subject</Form.Label>
                <Form.Control
                  className={`br-form-control ${errors.subject ? "is-invalid" : ""}`}
                  name="subject"
                  value={data.subject}
                  onChange={handleChange}
                />
                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
              </Form.Group>
            </Col>

            <Col lg={12}>
              <Form.Group className="mb-3">
                <Form.Label className="br-label">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  className={`br-form-control ${errors.message ? "is-invalid" : ""}`}
                  name="message"
                  value={data.message}
                  onChange={handleChange}
                />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </Form.Group>
            </Col>
          </Row>

          <Button type="submit" className="btn btn-primary btn-lg">
            Send Message
          </Button>
        </Form>
      </Col>

      {/* ------------------ RIGHT SIDE: ADDRESS (4 COL) ------------------ */}
      <Col lg={4} md={12} className="mt-4 mt-lg-0 ">
        <div className="shadow p-4 rounded bg-white pt-address">
          <h3 className="mb-3">Our Office</h3>

          <p><strong>Address:</strong><br />
            Youth For Himalayas Trust<br />
             Uttarakhand, India
          </p>

          <p><strong>Email:</strong><br /> info@youthforhimalayastrust.org</p>

          <p><strong>Phone:</strong><br /> +91 9876543210</p>

          <p><strong>Working Hours:</strong><br /> Mon – Sat, 9:00 AM – 6:00 PM</p>
        </div>
      </Col>
    </Row>

  </Container>

  );
};

export default ContactUs;
