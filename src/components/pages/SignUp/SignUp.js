import useFormValidation from "../../../hooks/useFormValidation";
import { useNavigate } from "react-router-dom";
import "../../../styles/Form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignUp() {
  const navigate = useNavigate();
  const {
    email,
    password,
    confirmedPassword,
    emailError,
    passwordError,
    confirmedPasswordError,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmedPasswordChange,
    hasErrors,
  } = useFormValidation(true);

  function navigateToHomePage() {
    navigate("/home");
  }

  function displaySignUpInformation() {
    toast.success("User signed up!");
  }

  return (
    <form className="info-container">
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleEmailChange}></input>
        {emailError ? <p>{emailError}</p> : ""}
      </div>
      <div>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          onChange={handlePasswordChange}
        ></input>
        {passwordError ? <p>{passwordError}</p> : ""}
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          onChange={handleConfirmedPasswordChange}
        ></input>
        {confirmedPasswordError ? <p>{confirmedPasswordError}</p> : ""}
      </div>
      <div>
        <button
          disabled={hasErrors()}
          onClick={() => {
            displaySignUpInformation();
            navigateToHomePage();
          }}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
