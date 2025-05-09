import React from "react";
import {Container} from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

const PageNotFound = () => (
  <Container>
    <Alert variant="warning" className={'mt-5'}>
      <h2>Oops!</h2>
      <h1>404 Page Not found</h1>
    </Alert>
  </Container>
);

export default PageNotFound