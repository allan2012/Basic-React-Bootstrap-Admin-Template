import React from 'react';
import {Routes, Route, Navigate, Outlet, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import BootstrapComponents from "./pages/BootstrapComponents";
import PageNotFound from "./pages/PageNotFound";

const PrivateRoutes = () => {
  const authToken = localStorage.getItem("_token") !== null;
  return authToken ? <Outlet/> : <Navigate to="/" replace/>;
}

const AnonymousRoutes = () => {
  const authToken = localStorage.getItem("_token") != null;
  return authToken ? <Navigate to="/" replace/> : <Outlet/>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>

        {/* Protected Routes Group with Layout */}
        <Route element={<PrivateRoutes />}>
          <Route element={<Layout />}>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="reports" element={<Reports/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="bootrap-components" element={<BootstrapComponents/>}/>
          </Route>
        </Route>
        {/* End of protected route */}

        {/* Catch-all route must come last */}
        <Route element={<Layout />}>
          <Route path="*" element={<PageNotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;