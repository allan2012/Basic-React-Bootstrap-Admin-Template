import React, {useState} from "react";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Badge, Breadcrumb, Col, Dropdown, ListGroup, Placeholder, Row} from "react-bootstrap";

const BootstrapComponents = () => {

  const [collapse, setCollapse] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleToggleCollapse = () => {
    setCollapse(!collapse);
  }


  return (<div className="p-4">
    <h3>Bootstrap Components</h3>
    <p>Bootstrap features that the template supports</p>

    <Row className="row mt-5">
      <Col md={3}>
        <h3>Toggle Collapse</h3>
        <p>
          <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded={collapse} aria-controls="collapseWidthExample" onClick={handleToggleCollapse}>
            Toggle width collapse
          </button>
        </p>
        <div style={{minHeight: '120px'}}>
          <div className={`collapse collapse-horizontal ${!collapse ? 'show' : ''}`} id="collapseWidthExample">
            <div className="card card-body" style={{width: '300px'}}>
              This is some placeholder content for a horizontal collapse. It's hidden by default and shown when
              triggered.
            </div>
          </div>
        </div>
      </Col>

      <Col md={3}>
        <h3>Spinners</h3>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Col>

      <Col md={3}>
        <h3>Modals</h3>
        <div
          className="modal show"
          style={{display: 'block', position: 'initial'}}
        >
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Col>
      <Col md={3}>
        <h3>Toasts</h3>

      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <h3>Alerts</h3>
        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert—check it out!
          </Alert>
        ))}
      </Col>
      <Col md={4}>
        <h3>Progress Bars</h3>
        <ProgressBar now={60} />

        <h3 className="mt-5">List groups</h3>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>

        <h3 className="mt-5">Dropdowns</h3>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col md={4}>
        <h3>Placeholders</h3>
        <p aria-hidden="true">
          <Placeholder xs={6} />
        </p>

        <Placeholder.Button xs={4} aria-hidden="true" />

        <h3 className="mt-5">Breadcrumbs</h3>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>

        <h3 className="mt-5">Badges</h3>
        <div>
          <h1>
            Example heading <Badge bg="secondary">New</Badge>
          </h1>
          <h2>
            Example heading <Badge bg="secondary">New</Badge>
          </h2>
          <h3>
            Example heading <Badge bg="secondary">New</Badge>
          </h3>
          <h4>
            Example heading <Badge bg="secondary">New</Badge>
          </h4>
          <h5>
            Example heading <Badge bg="secondary">New</Badge>
          </h5>
          <h6>
            Example heading <Badge bg="secondary">New</Badge>
          </h6>
        </div>
      </Col>
    </Row>
  </div>)
}

export default BootstrapComponents;