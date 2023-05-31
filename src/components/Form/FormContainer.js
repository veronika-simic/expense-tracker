import Login from "./Login";
import SignUp from "./SignUp";
import "./FormContainer.css";
import { useState } from "react";
function FormContainer({selected}) {
  const [selectedForm, setSelectedForm] = useState("login");
  const [selectedButton, setSelectedButton] = useState("login-button");

  const handleFormChange = (form) => {
    setSelectedForm(form);
    setSelectedButton(form + "-button");
  };

  const handleButtonClick = (button_id) => {
    setSelectedButton(button_id);
  };

  return (
    <div className="form-container">
      <h2>{selectedForm === "login" ? "Login" : "Sign up"} Form</h2>
      <div className="buttons">
        <button
          id="login-button"
          className={selectedButton === "login-button" ? "selected" : ""}
          onClick={() => {
            handleButtonClick("login-button");
            handleFormChange("login");
          }}
        >
          Login
        </button>
        <button
          id="signup-button"
          className={selectedButton === "signup-button" ? "selected" : ""}
          onClick={() => {
            handleButtonClick("signup-button");
            handleFormChange("signup");
          }}
        >
          Sign up
        </button>
      </div>
      {selectedForm === "login" ? (
        <Login onFormChange={handleFormChange} />
      ) : (
        <SignUp onFormChange={handleFormChange} />
      )}
    </div>
  );
}

export default FormContainer;
