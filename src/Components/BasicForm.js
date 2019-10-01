import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BasicForm() {
  return (
    <div className="BasicForm">
      <Form>
        <Form.Group controlId="basicForm">
          <Form.Label>Who are you?</Form.Label>
          <Form.Control type="text" placeholder="I said who you be?"></Form.Control>
          <Form.Text className="text-muted">We will keep it a secret...shhh</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">Submit To Me</Button>
      </Form>
    </div>
  );
}

export default BasicForm;