import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Casino.css'
const dataArray = [
  { id: 1, content: 'Content for Column 1' },
  { id: 2, content: 'Content for Column 2' },
  { id: 3, content: 'Content for Column 3' },
  { id: 4, content: 'Content for Column 4' },
  
];

function Casino() {
  return (
    <div className='all-casino'>
      <div className='top-content'>
        <div className='top-content-title'>
        TABS
        </div>
        
      </div>
    <Container >
      <Row>
        {dataArray.map((data) => (
          <Col key={data.id}  xs={6} sm={4} lg={3}>
            {data.content}
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    
  );
}

export default Casino;
