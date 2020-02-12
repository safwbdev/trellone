import React, { Component } from 'react';
import './../App.css';
import List from './List'
import { connect } from 'react-redux'

class App extends Component{
  render(){
    const { lists } = this.props;
    
    return (
      <div className="App">
        <h2>Hell there</h2>
          { lists.map(list => <List title={list.title} cards={list.cards} />)}
      </div>
    );
  } 
}
const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
