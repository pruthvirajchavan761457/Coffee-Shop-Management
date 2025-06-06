import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toast styles
import "./Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();



  // Predefined list of users
  const users = {
    "pruthvirajchavan761@gmail.com": "Pruthviraj",
    "geetachavan761@gmail.com": "Geeta",
    // Add more users as needed
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Invalid email");
      return;
    } else {
      setEmailError("");
    }

    // Basic password validation
    if (!password) {
      setPasswordError("Password is required");
      return;
    }  else {
      setPasswordError("");
    }
    const obj = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/api/auth/login", obj)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify({ email }));
        toast.success(`Welcome, ${email}!`);

        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((Err) => {
        console.log(Err);
      });
  };
  const navigatToSignin = () => {
    navigate("/Signup");
  };
  // Email validation function with .com check
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    const validDomain = /\.com$/; // Ensure email ends with .com

    return emailRegex.test(email) && validDomain.test(email); // Only pass if both conditions are true
  };
  return (
    <div className="container mt-4 " style={{ width: "500px" }}>
      <div className="row">
        <h2 className="text-white">Login User</h2>
      </div>
      <div className="input-box">
        <input
          type="text"
          className="mt-4 text-decoration-none pe-5 pb-3"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div className="error">{emailError}</div>}
        <br />
        <input
          type="password"
          className="mt-4 text-decoration-none pe-5 pb-3"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div className="error">{passwordError}</div>}
        <br />
        <button
          className="mt-4 mb-4 me-4 text-decoration-none border-none"
          onClick={handleLogin}
        >
          Log In
        </button>
        <button
          className="mt-4 mb-4 me-4 text-decoration-none border-none"
          onClick={navigatToSignin}
        >
          signup
        </button>
      </div>
      <ToastContainer /> {/* ToastContainer to show toast messages */}
    </div>
  );
}

export default Login;
