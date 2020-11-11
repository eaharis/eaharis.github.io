import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Card, Breadcrumb, Form, ListGroup, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPencilAlt, faUser, faPhoneAlt, faEnvelope, faUtensils, faBell, faStore, faSave } from '@fortawesome/free-solid-svg-icons'
import "./Profile.css"

import McMasterLogo from "./McMaster.png";
import CalendarIcon from "./calendar.png";

import Tags from "@yaireo/tagify/dist/react.tagify" // React-wrapper file
import "@yaireo/tagify/dist/tagify.css" // Tagify CSS
/*
 * dsjljd 
*/
const Profile = () => {
    return (
        <Container className="Profile">
            <script src="bootstrap-slider.min.js"></script>
            <link href="bootstrap-slider.min.css" rel="stylesheet" />
            <Row>
                <Col md={4} class="mb-3">
                    <Card>
                        <Card.Body class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <div class="rounded-circle" style={{ background: "url('https://in.bmscdn.com/iedb/artist/images/website/poster/large/andrew-garfield-19835-24-03-2017-13-52-23.jpg')", backgroundSize: "contain", width: "150px", height: "150px", position: "relative", textAlign: "center", overflow: "hidden" }}>
                                    <p style={{ position: "absolute", margin: "0", background: "rgba(0,0,0,0.7)", bottom: 0, width: "100%" }}>
                                        <FontAwesomeIcon icon={faCamera} color="white" />                                        </p>
                                </div>
                                <div className="mt-3">
                                    <h4>Jack Buckley</h4>
                                    <Form.Row>
                                        <Col md={12} className="mb-3">
                                            <Form.Group>
                                                <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faPencilAlt} /> Description</Form.Label>
                                                <Form.Control as="textarea" rows={3} placeholder="Enter a short description about yourself here..." style={{ resize: "none" }}></Form.Control>
                                            </Form.Group>
                                        </Col>
                                    </Form.Row>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 className="mb-0"><img width="24" height="24" src={McMasterLogo} className="mr-2" />McMaster</h6>
                                <DropdownButton title="bucklj4" variant="outline-secondary">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"><img width="24" height="24" src={CalendarIcon} class="mr-2" />External calendar</h6>
                                <DropdownButton title="Outlook" variant="outline-secondary" type="button">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                <DropdownButton title="@jack" variant="outline-secondary" type="button">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                <DropdownButton title="@jack" variant="outline-secondary" type="button">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center flex-wrap">
                                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                <DropdownButton title="@jack" variant="outline-secondary" type="button">
                                    {/* TODO: do something when clicked */}
                                </DropdownButton>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card className="mb-3">
                        <Card.Body>
                            {/* TODO: Input validation? */}
                            <Form.Row>
                                <Col md={4} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faUser} /> First name</Form.Label>
                                    <Form.Control as="input" placeholder="First name" value="Jack" required />
                                </Col>
                                <Col md={4} className="mb-3">
                                    <Form.Label className="font-weight-bold">Last name</Form.Label>
                                    <Form.Control as="input" placeholder="Last name" value="Buckley" required />
                                </Col>
                                <Col md={4} className="mb-3">
                                    <Form.Label className="font-weight-bold"> Username</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="input" placeholder="Username" value="Jack" required />
                                    </InputGroup>
                                </Col>
                            </Form.Row>
                            <hr />
                            <Form.Row>
                                {/* TODO: Validation of mobile number. Is there a React component we can use? */}
                                <Col md={6} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faPhoneAlt} /> Mobile</Form.Label>
                                    <Form.Control as="input" placeholder="(XXX) XXX-XXXX" required />
                                </Col>
                                {/* TODO: Validation of email. Is there a React component we can use? */}
                                <Col className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faEnvelope} /> Email</Form.Label>
                                    <Form.Control as="input" placeholder="email@provider.com" required />
                                </Col>
                            </Form.Row>
                            <hr />
                            <Form.Row>
                                <Col md={12} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faUtensils} /> Favourite foods and cuisines</Form.Label>
                                    {/* TODO: Fix */}
                                    <input name='tags3-1' class='countries form-control' placeholder="Enter a favourite food of yours here" />
                                </Col>
                            </Form.Row>
                            <hr />
                            <Form.Row>
                                <Col md={12} className="mb-3">
                                    <Form.Label class="font-weight-bold"><FontAwesomeIcon icon={faStore} /> Favourite restaurants</Form.Label>
                                    {/* TODO: Fix */}
                                    <input name='tags4-1' class='countries form-control' placeholder="Enter a favourite restaurant of yours here" />
                                </Col>
                            </Form.Row>
                            <hr />
                            <Form.Row>
                                <Col md={12} className="mb-3">
                                    <Form.Label className="font-weight-bold"><FontAwesomeIcon icon={faBell} /> Alerts</Form.Label>
                                    {/* TODO: Make switches work */}
                                    <Form.Switch label="Suggest me new restaurants based on my cuisine preferences" />
                                    <Form.Switch label="Alert me when my favourite restaurants have active promotions" />
                                </Col>
                                <Form.Row className="w-100">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Send me alerts by</Form.Label>
                                            <Form.Control as="select">
                                                <option>Email</option>
                                                <option>Text Message</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Label>Alert frequency</Form.Label>
                                        {/* TODO: Fix */}
                                        <input data-slider-id="freq" style={{ width: "90%" }} class="form-group" id="ex13" type="text" data-slider-ticks="[Daily, Weekly, Biweekly, Monthly]" data-slider-ticks-snap-bounds="30" data-slider-ticks-labels='["$Daily", "$Weekly", "$Biweekly", "$Monthly"]' />
                                    </Col>
                                </Form.Row>
                            </Form.Row>
                        </Card.Body>
                        <Button variant="warning" size="lg" block={true}><FontAwesomeIcon icon={faSave} /> Save</Button>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default Profile;