import React, { Component } from 'react';
// import './../App.scss';
import List from './List'
import { connect } from 'react-redux'
import ActionButton from './ActionButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { sort } from '../actions'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flexDirection: row;
`;
class App extends Component{

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    
    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    )
  }
  render(){
    const { lists } = this.props;
    
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <h2>Trellone</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              { lists.map((list, index) => (
                <List 
                listID={list.id}
                key={list.id}
                title={list.title} 
                cards={list.cards}
                index={index} />
                ))}
                {provided.placeholder}
                <ActionButton list />
              </ListContainer>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  } 
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
