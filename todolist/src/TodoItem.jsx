import React from 'react';

import { FormControl, InputGroup, Button } from 'react-bootstrap'

const TodoItem = (props) => {
    return (
        <InputGroup className="mb-3">
          <FormControl aria-label="Item list" value={props.item} />
          <InputGroup.Append>
          { props.onDelete ?
            (<Button variant="outline-secondary"
                    id={props.id}
                    onClick={(e)=>{
                        e.persist()
                        props.onDelete(e)
                    }}>Delete</Button>) : null
          }
          </InputGroup.Append>
        </InputGroup>
    )
}

export default TodoItem;