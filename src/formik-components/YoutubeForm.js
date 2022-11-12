import { useFormik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    onSubmit: values => {
        console.log('Form data', values)
    } ,
    validate: values => {
        let errors = {}

        if(!values.name || values.name.trim === '') {
            errors.name = 'Name is Required'
        }

        if(!values.email ) {
            errors.email = 'Email is required'
        }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email format.'
        }

        if (!values.channel) {
            errors.channel = 'Channel is required'
        }
    }
  });


  return (
    <div className="container flex-column align-content-center">
      <Form className="youtube-form m-3 p-3" onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Name</Form.Label>
            <Form.Control
              id="name"
              name="name"
              required
              type="text"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              required
              type="email"
              placeholder="Email Id"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Channel</Form.Label>
            <Form.Control
              id="channel"
              name="channel"
              required
              type="text"
              placeholder="Channel"
              onChange={formik.handleChange}
              value={formik.values.channel}
            />
          </Form.Group>
        </Row>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
