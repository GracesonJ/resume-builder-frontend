import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <Container fluid className="bg-light text-dark d-flex align-items-center justify-content-center vh-100">
      <Row className="text-center">
        <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
          <Image
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksk08zE0-KIhNxAoRgEVFqVo4YlivwUGGqQ&s"}
            alt="404 Not Found"
            fluid
            style={{ maxHeight: '350px' }}
          />
        </Col>

        <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-3 fw-bold text-primary mb-3">404</h1>
          <h2 className="fw-semibold mb-2">Oops! Page Not Found</h2>
          <p className="text-secondary mb-4 px-3">
            The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/')}
            className="px-4 py-2 shadow-sm"
          >
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
