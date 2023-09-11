// EnquiryForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { addEnquirySuccess } from './actions/enquiryActions';

const EnquiryForm = ({ addEnquirySuccess }) => {
  const [formData, setFormData] = useState({ name: '', courseDetails: '' });

  const handleSubmit = () => {
    // Replace this with your submission logic
    fetch('http://localhost:5000/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        addEnquirySuccess(data);
        console.log('Enquiry submitted successfully:', data);
      })
      .catch((error) => {
        console.error('Error submitting enquiry:', error);
      });
  };

  return (
    <div>
      <h2>Enquiry Form</h2>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="courseDetails">
          <Form.Label>Course Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter course details"
            value={formData.courseDetails}
            onChange={(e) =>
              setFormData({ ...formData, courseDetails: e.target.value })
            }
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit Enquiry
        </Button>
      </Form>
    </div>
  );
};

export default connect(null, { addEnquirySuccess })(EnquiryForm);
