import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Tooltip } from "react-tooltip";
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
      {user && (
        <div className="user-name">
          <h2>{user.email}</h2>
          <span className="material-symbols-outlined" onClick={handleClick}>
          <a id="logout"> logout </a> 
          </span>
          <Tooltip anchorSelect="#logout" content="Logout" />
        </div>
      )}
    </div>
  );
}

export default NavigationBar;
