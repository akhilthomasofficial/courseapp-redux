import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCoursesSuccess } from './actions/courseActions';
import { Button, ListGroup, ListGroupItem, Modal, Form } from 'react-bootstrap';

const CourseList = ({ courses, fetchCoursesSuccess }) => {
  useEffect(() => {
    fetch('http://localhost:5000/courses') 
      .then((response) => response.json())
      .then((data) => fetchCoursesSuccess(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [fetchCoursesSuccess]);

  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [inquiryFormData, setInquiryFormData] = useState({ name: '', courseName: '' });

  const handleAddInquiry = (course) => {
    setSelectedCourse(course);
    setShowInquiryModal(true);
    setInquiryFormData({ name: '', courseName: course.title });
  };

  const handleSubmitInquiry = () => {
    fetch('http://localhost:5000/enquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryFormData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Inquiry submitted successfully:', data);
       
        setInquiryFormData({ name: '', courseName: '' });
        setShowInquiryModal(false);
      })
      .catch((error) => {
        console.error('Error submitting inquiry:', error);
      });
  };

  return (
    <div>
      <h2>Course List</h2>
      <ListGroup>
        {courses.map((course) => (
          <ListGroupItem key={course.id}>
            <strong>Course ID:</strong> {course.id}<br />
            <strong>Title:</strong> {course.title}<br />
            <strong>Description:</strong> {course.description}<br />
            <Button variant="primary" onClick={() => handleAddInquiry(course)}>
              Add Inquiry
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>

      <Modal show={showInquiryModal} onHide={() => setShowInquiryModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Inquiry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={inquiryFormData.name}
                onChange={(e) =>
                  setInquiryFormData({ ...inquiryFormData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="courseName">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Course Name"
                value={inquiryFormData.courseName}
                readOnly
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowInquiryModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitInquiry}>
            Submit Inquiry
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps, { fetchCoursesSuccess })(CourseList);
