import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import EnquiryForm from './EnquiryForm';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  useEffect(() => {
    // Replace this with your data fetching logic
    fetch(`http://localhost:5000/courses/${id}`) // Adjust the URL as needed
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  const handleEnquiry = () => {
    setShowEnquiryForm(true);
  };

  const handleEnquirySubmit = (formData) => {
    fetch('http://localhost:5000/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Enquiry submitted successfully:', data);
        setShowEnquiryForm(false);
      })
      .catch((error) => {
        console.error('Error submitting enquiry:', error);
      });
  };

  return (
    <div>
      <h2>Course Details</h2>
      {course ? (
        <Card>
          <Card.Body>
            <Card.Title>{course.title}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading course details...</p>
      )}
      {showEnquiryForm ? (
        <EnquiryForm onSubmit={handleEnquirySubmit} />
      ) : (
        <Button variant="primary" onClick={handleEnquiry}>
          Enquire
        </Button>
      )}
    </div>
  );
};

export default CourseDetail;
