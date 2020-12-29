import React, { useRef } from 'react';
import {Button, Container, Form} from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function Login({submitId}) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    submitId(idRef.current.value)
  }

  function createId() {
    submitId(uuidV4())
  }

  return (
    <Container className="align-items-center d-flex" style={{ height: "100vh" }}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">Login</Button>
        <Button onClick={createId} variant="secondary">Create new ID</Button>
      </Form>
    </Container>
  );
}
