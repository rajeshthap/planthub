import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import "../../../src/assets/css/login.css";
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("Loading...");

        try {
            const res = await fetch(
                "https://mahadevaaya.com/youthforhimalayastrust.org/yfhtrust/backend/api/login/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                setMessage(data?.message || "Invalid credentials");
            } else {
                setMessage("Login Successful");
                navigate('/InnerDashBoard');
                console.log("User Data:", data);
            }

        } catch (error) {
            setMessage("Something went wrong, check your network.");
            console.error("Error:", error);
        }

    };
    return (
        <div>
            <Container className='py-4 mt-4 loginnew-container'>
                <Row className=' p-4 rounded bg-white pt-contact justify-content-center'>
                    <div className='col-lg-12 col-md-8 col-12'>
                        <div className='plant-main-box mt-2'>
                            <h2 className="text-center mb-3">Login</h2>

                            <div className="login-container">
                                <form onSubmit={handleSubmit} className="login-box">

                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                    <label>Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />

                                    <button type="submit">Login</button>

                                    {message && <p className="login-message">{message}</p>}
                                </form>
                            </div>

                        </div>
                    </div>
                </Row>


            </Container>
        </div>
    )
}

export default Login
