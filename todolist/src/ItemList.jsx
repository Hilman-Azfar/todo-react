import React from 'react';

import { Row, Col } from 'react-bootstrap'
import TodoItem from './TodoItem'

const ItemList = (props) => {
    return (
        <Row className="pl-5 pr-5">
            <Col xs={{span: 8, offset: 2}}>
            <h6>List Items</h6> <hr/>
            {props.listItems.length ? null : <p> ~ Add an item ~</p>}
            {props.listItems.map((item, index)=>{
                return <TodoItem key={index} id={index} item={item} onDelete={props.onDelete}/>
            })}
            </Col>
        </Row>
    )
}

export default ItemList;