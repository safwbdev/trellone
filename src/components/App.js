import React, { Component } from 'react';
import './../App.scss';
import List from './List'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap';
import ActionButton from './ActionButton'
import { DragDropContext } from 'react-beautiful-dnd'

class App extends Component{

  onDragEnd = () => {


  }
  render(){
    const { lists } = this.props;
    
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container className="App">
          <h2>Hello there</h2>
          <Row>

          { lists.map(list => (
            <List 
            listID={list.id}
            key={list.id}
            title={list.title} 
            cards={list.cards} />
            ))}
            <ActionButton list />
          </Row>
        </Container>
      </DragDropContext>
    );
  } 
}
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
