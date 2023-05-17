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

  function displayLoginConfirmation() {
    toast("Logged in successfully", {
      autoClose: 15000,
      position: "bottom-left",
      theme: "colored", // Set the duration to 8 seconds (8000 milliseconds)
      closeButton: false, // Disable the close button for this toast
      className: "custom-toast",
    });
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
        <ToastContainer />
        <button disabled={hasErrors()} onClick={displayLoginConfirmation}>
          LOGIN
        </button>
      </div>
      {/*   <h3>
        New user? <button onClick={navigateToSignUp}>Sign up</button>
      </h3> */}
    </form>
  );
}

export default Login;
