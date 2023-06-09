import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>About Website</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Payment Methods</h5>
            <ul className="list-unstyled">
              <li>Credit Card</li>
              <li>Debit Card</li>
              <li>PayPal</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Other Information</h5>
            <ul className="list-unstyled">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>FAQs</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
