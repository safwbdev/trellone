import React, { Component } from 'react';
// import './../App.css';
import List from './List'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap';
import ActionButton from './ActionButton'

class App extends Component{
  render(){
    const { lists } = this.props;
    
    return (
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
    );
  } 
}
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
