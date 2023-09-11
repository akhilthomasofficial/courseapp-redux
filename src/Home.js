// Home.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to the Course App</h1>
        <p className="lead">Learn React with our awesome courses.</p>
      </div>
    </Container>
  );
};

export default Home;
