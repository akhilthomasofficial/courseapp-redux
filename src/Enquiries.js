import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const EnquiriesList = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/enquiries')
      .then((response) => response.json())
      .then((data) => {
        setEnquiries(data);
      })
      .catch((error) => console.error('Error fetching inquiries:', error));
  }, []);

  return (
    <div>
      <h2>Enquiries List</h2>
      <ListGroup>
        {enquiries.map((enquiry) => (
          <ListGroupItem key={enquiry.id}>
            <Card>
              <Card.Body>
                <Card.Title>{enquiry.name}</Card.Title>
                <Card.Text>
                  <strong>Course Name:</strong> {enquiry.courseName}<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default EnquiriesList;
