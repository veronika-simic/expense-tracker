import useFormValidation from "../../../hooks/useFormValidation";
function SignUp() {
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
  } = useFormValidation();

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
        <button>Sign up</button>
      </h3>
    </form>
  );
}

export default SignUp;
