import useFormValidation from "../../../hooks/useFormValidation";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate()
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
    hasErrors
  } = useFormValidation(true);

  function navigateToHomePage() {
    navigate("/home");
  }

  return (
    <form className="login-contanier">
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
      <h3>
        <button disabled={hasErrors()} onClick={navigateToHomePage}>Sign up</button>
      </h3>
      {password === confirmedPassword ? "" : "Passwords don't match"}
    </form>
  );
}

export default SignUp;
