import React from 'react';

import { Container } from 'react-bootstrap'
import InputForm from './Form'
import ItemList from './ItemList'
import DeletedItemList from './DeletedItemList'

// create a to-do list
// have an input field that will clear upon submitting
// • implement a length validation
// • implement inline error display
//
// have a list dynamically render
//
// add a delete function
//
// add date using momentjs
//
// lists can be editted
//
// implement expiration
//

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
        newItem: '',
        toDoList: [],
        invalidInput: false,
        deletedItemList : []
    }
  }

  handleNewItem = (e) => {
    this.setState({
        newItem: e.target.value,
    })
  }

  handleClick = (e) => {
    if (this.state.newItem.length > 1 && this.state.newItem.length < 200) {
        this.setState(prevState=>({
            toDoList: [...prevState.toDoList, this.state.newItem],
            newItem: '',
            invalidInput: false,
        }))
    } else {
        this.setState({
            invalidInput: true,
        })
    }
  }

  handleDelete = (e) => {
    console.log(e.target.id);
    this.setState(prevState=>({
        deletedItemList: [...prevState.deletedItemList, prevState.toDoList[e.target.id]],
        toDoList: prevState.toDoList.filter((item, index)=>index !== parseInt(e.target.id))
    }))
  }

  render() {
    return (
        <Container>
            <InputForm onChange={this.handleNewItem}
                  value={this.state.newItem}
                  onClick={this.handleClick}
                  isInvalid={this.state.invalidInput}/>
            <ItemList listItems={this.state.toDoList}
                      onDelete={this.handleDelete}/>
            <DeletedItemList listItems={this.state.deletedItemList}/>
        </Container>
    );
  }
}

export default TodoApp;