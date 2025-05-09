import React from "react";
import {Col, Row} from "react-bootstrap";

const Dashboard = () => (
  <Row className="p-4">
    <h2>Dashboard</h2>
    <Row>
      <Col md={4}>
        <div className="card text-black mb-4">
          <div className="card-body">
            <h5 className="card-title">Total Users</h5>
            <p className="card-text display-6">1,250</p>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="card text-black mb-4">
          <div className="card-body">
            <h5 className="card-title">New Orders</h5>
            <p className="card-text display-6">320</p>
          </div>
        </div>
      </Col>
      <Col md={4}>
        <div className="card text-black mb-4">
          <div className="card-body">
            <h5 className="card-title">Pending Tasks</h5>
            <p className="card-text display-6">75</p>
          </div>
        </div>
      </Col>
    </Row>
    <p>Welcome to the admin dashboard! Here's an overview of your system.</p>
  </Row>
);

export default Dashboard