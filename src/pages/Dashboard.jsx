import React from "react";

const Dashboard = () => (
  <div className="p-4">
    <h2>Dashboard</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card bg-primary text-white mb-4">
          <div className="card-body">
            <h5 className="card-title">Total Users</h5>
            <p className="card-text display-4">1,250</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-success text-white mb-4">
          <div className="card-body">
            <h5 className="card-title">New Orders</h5>
            <p className="card-text display-4">320</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-warning text-white mb-4">
          <div className="card-body">
            <h5 className="card-title">Pending Tasks</h5>
            <p className="card-text display-4">75</p>
          </div>
        </div>
      </div>
    </div>
    <p>Welcome to the admin dashboard! Here's an overview of your system.</p>
  </div>
);

export default Dashboard