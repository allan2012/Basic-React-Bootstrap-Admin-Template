import React, {useState} from "react";
import {Link} from "react-router-dom";
import {FaUserCircle} from "react-icons/fa";

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-light shadow-sm p-3">
      <div className="container-fluid">
        <h5 className="mb-0">Welcome, Admin!</h5>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle" onClick={toggleDropdown} id="userDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded={dropdownOpen}>
              <FaUserCircle size={24}/>
            </Link>
            <ul className={`dropdown-menu dropdown-menu-end ${dropdownOpen ? 'show' : ''}`}
                aria-labelledby="userDropdown">
              <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
              <li><Link to="/settings" className="dropdown-item">Settings</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;