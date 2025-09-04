import React from "react";
import "boxicons/css/boxicons.min.css";

export default function AuthForm() {
  return (
    <div className="auth-page">
      <div className="container">
        {/* Left Side */}
        <div className="left-box">
          <h2>Welcome Back!</h2>
          <p>Enter your personal details to use all of site features.</p>
          <button>SIGN IN</button>
        </div>

        {/* Right Side */}
        <div className="right-box">
          <h2>Create Account</h2>

          {/* Social Logins */}
          <div className="socials">
            <a href="#fa"><i className="bx bxl-google"></i></a>
            <a href="#go"><i className="bx bxl-facebook"></i></a>
            <a href="#li"><i className="bx bxl-linkedin"></i></a>
          </div>

          <form>
            <div className="input-box">
              <input type="text" placeholder="Name" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <i className="bx bxs-lock-alt"></i>
            </div>
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
}
