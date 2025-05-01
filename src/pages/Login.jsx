import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FaLock} from "react-icons/fa";
import {authenticateUser} from "../services/Authentication";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    if (authenticateUser(username, password)) {
      navigate('/dashboard');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{width: '400px'}}>
        <h2 className="text-center mb-4">
          <FaLock className="mr-2"/> Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          {loginError
            && <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
            <div>Login Error! Please try again.</div>
          </div>}
        </form>
      </div>
    </div>
  );
};

export default Login;