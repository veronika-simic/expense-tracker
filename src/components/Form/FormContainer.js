import Login from "./Login";
import SignUp from "./SignUp";
import "./FormContainer.css";
import { useState } from "react";
function FormContainer() {
  const [selectedButton, setSelectedButton] = useState("signup-button");
  const [title, setTitle] = useState("Sign up");
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  return (
    <div className="form-container">
      <h2>{title} Form</h2>
      <div className="buttons">
        <button
          id="login-button"
          className={selectedButton === "login-button" ? "selected" : ""}
          onClick={() => {
            handleButtonClick("login-button");
            setTitle("Login");
          }}
        >
          Login
        </button>
        <button
          id="signup-button"
          className={selectedButton === "signup-button" ? "selected" : ""}
          onClick={() => {
            handleButtonClick("signup-button");
            setTitle("Sign up");
          }}
        >
          Sign up
        </button>
      </div>
      {selectedButton === "login-button" ? <Login /> : <SignUp />}
    </div>
  );
}

export default FormContainer;
