import "../../../styles/Form.css";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../../../hooks/useFormValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login() {
  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    handleEmailChange,
    handlePasswordChange,
    hasErrors,
  } = useFormValidation();

  function navigateToSignUp() {
    navigate("/signup");
  }

  function navigateToHomePage() {
    navigate("/home");
  }

  function displayLoginConfirmation() {
    toast.success("Logged in successfully");
  }

  return (
    <form className="info-container">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleEmailChange}></input>
        {emailError ? <p>{emailError}</p> : ""}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={handlePasswordChange}
        ></input>
        {passwordError ? <p>{passwordError}</p> : ""}
      </div>
      <div>
        <button
          disabled={hasErrors()}
          onClick={() => {
            displayLoginConfirmation();
            navigateToHomePage();
          }}
        >
          LOGIN
        </button>
      </div>
    </form>
  );
}

export default Login;
