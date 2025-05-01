import {Link, useNavigate} from "react-router-dom";
import {FaAtom, FaChartBar, FaCog, FaHome, FaSignOutAlt, FaUsers} from "react-icons/fa";
import React from "react";
import {logout} from "../services/Authentication";

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
        <h4 className="mb-4">Admin Panel</h4>
        <ul className="list-unstyled">
          <li className="mb-3">
            <Link to="/dashboard" className="nav-link d-flex align-items-center">
              <FaHome className="me-2"/> Dashboard
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/users" className="nav-link d-flex align-items-center">
              <FaUsers className="me-2"/> Users
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/reports" className="nav-link d-flex align-items-center">
              <FaChartBar className="me-2"/> Reports
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/settings" className="nav-link d-flex align-items-center">
              <FaCog className="me-2"/> Settings
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/bootrap-components" className="nav-link d-flex align-items-center">
              <FaAtom className="me-2"/> Bootrap Components
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center"
                onClick={handleLogout}>
          <FaSignOutAlt className="mr-2"/> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar