import React from 'react';

import { Row, Col } from 'react-bootstrap'
import TodoItem from './TodoItem'

const DeletedItemList = (props) => {
    return (
        <Row className="pl-5 pr-5">
            <Col xs={{span: 8, offset: 2}}>
            <h6>Deleted List Items</h6> <hr/>
            {props.listItems.map((item, index)=>{
                return <TodoItem key={index} item={item} />
            })}
            </Col>
        </Row>
    )
}

export default DeletedItemList;