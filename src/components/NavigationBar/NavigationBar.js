import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
function NavigationBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  function handleClick() {
    logout();
  }
  return (
    <div className="navigation">
      <h1>
        <Link to="/">
          EXPENSE <br></br> TRACKER
        </Link>
      </h1>
     {/*  {!user && (
        <>
          <Link to="/signup">
            <h2>Sign up</h2>
          </Link>
          <Link to="/login">
            <h2>Login</h2>
          </Link>
        </>
      )} */}

      {user && (
        <>
          <span className="material-symbols-outlined" onClick={handleClick}>
            logout
          </span>
          <h2>{user.email}</h2>
        </>
      )}
    </div>
  );
}

export default NavigationBar;
