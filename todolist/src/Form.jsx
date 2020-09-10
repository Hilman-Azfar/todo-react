import React from 'react';

import { InputGroup, Button, Row, Col, Form } from 'react-bootstrap'

const InputForm = (props) => {
    return (
        <Row className="p-5">
            <Col xs={{span: 8, offset: 2}}>
            <InputGroup className="d-flex justify-content-center">
                <Form.Control
                  placeholder="Add a new list"
                  id="item-list"
                  value={props.value}
                  onChange={props.onChange}
                  isInvalid={props.isInvalid}
                  custom
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary"
                          onClick={
                                    (e)=>{
                                        e.persist()
                                        props.onClick(e)
                          }}>Add</Button>
                </InputGroup.Append>
                <Form.Control.Feedback type="invalid"> Must be more than 1 character and <br/>less than 200 characters </Form.Control.Feedback>
            </InputGroup>
            </Col>
        </Row>
    )
}

export default InputForm;