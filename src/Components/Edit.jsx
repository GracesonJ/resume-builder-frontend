import React, { useState } from 'react'
import { RiFileEditLine } from "react-icons/ri";
import { Modal, Form, Row, Col, Stack, Button } from 'react-bootstrap';

function Edit() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className="btn btn-outline-secondary"><RiFileEditLine /></button>
            <Modal show={show} onHide={handleClose} size="lg" centered scrollable backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Edit Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* Personal Details */}
                <h5 className="mb-3">Personal Details</h5>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Full Name" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Job Title" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Location" /></Col>
                </Row>

                {/* Contact Details */}
                <h5 className="mt-4 mb-3">Contact Details</h5>
                <Row className="mb-3">
                    <Col><Form.Control type="email" placeholder="Email" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Phone Number" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Github Profile" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="LinkedIn Profile" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Portfolio Link" /></Col>
                </Row>

                {/* Education Details */}
                <h5 className="mt-4 mb-3">Education Details</h5>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Course Name" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="College Name" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="University" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Year of Passout" /></Col>
                </Row>

                {/* Work Experience */}
                <h5 className="mt-4 mb-3">Work Experience</h5>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Job / Internship" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Company Name" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Location" /></Col>
                </Row>
                <Row className="mb-3">
                    <Col><Form.Control type="text" placeholder="Duration" /></Col>
                </Row>

                {/* Skills */}
                <h5 className="mt-4 mb-3">Skills</h5>
                <Stack direction="horizontal" gap={2} className="mb-3">
                    <Form.Control type="text" placeholder="Add Skill" />
                    <Button variant="outline-primary">Add</Button>
                </Stack>

                <p className="mb-1"><strong>Selected:</strong></p>
                <Stack direction="horizontal" gap={2} className="mb-3 flex-wrap">
                    <span className="badge bg-light text-dark border">HTML</span>
                    <span className="badge bg-light text-dark border">CSS</span>
                </Stack>

                {/* Professional Summary */}
                <h5 className="mt-4 mb-2">Professional Summary</h5>
                <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Eg: I'm a passionate full-stack developer..."
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Update</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Edit