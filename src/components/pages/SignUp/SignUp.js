function SignUp() {
  return (
    <form className="login-contanier">
      <h2>Sign Up</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"></input>
      </div>
      <div>
        <label htmlFor="your-password">Your Password</label>
        <input type="password" id="your-password"></input>
      </div>
      <div>
        <label htmlFor="repeat-password">Repeat Password</label>
        <input type="password" id="repeat-password"></input>
      </div>
      <h3>
        <button>Sign up</button>
      </h3>
    </form>
  );
}

export default SignUp;
