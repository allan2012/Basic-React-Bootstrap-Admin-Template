import {Link, useNavigate} from "react-router-dom";
import {logout} from "../services/Authentication";
import { TfiHome, TfiMenu, TfiSettings, TfiLayoutGrid2, TfiBarChart, TfiExchangeVertical, TfiPowerOff } from "react-icons/tfi";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the login page after logout
  };

  return (
    <div className="bg-primary text-white p-4 d-flex flex-column"
         style={{width: '250px', minHeight: '100vh', position: 'fixed'}}>
      <div>
        <h4 className="mb-4">Easy Admin</h4>
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link to="/dashboard" className="nav-link d-flex align-items-center">
              <TfiHome className="me-2" /> Dashboard
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/tables" className="nav-link d-flex align-items-center">
              <TfiMenu className="me-2"/> Tables
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/reports" className="nav-link d-flex align-items-center">
              <TfiBarChart className="me-2"/> Reports
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/settings" className="nav-link d-flex align-items-center">
              <TfiSettings className="me-2"/> Settings
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/redux" className="nav-link d-flex align-items-center">
              <TfiExchangeVertical className="me-2"/> Redux
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/bootrap-components" className="nav-link d-flex align-items-center">
              <TfiLayoutGrid2 className="me-2"/> Bootrap Components
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center"
                onClick={handleLogout}>
          <TfiPowerOff className="mr-2"/> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar