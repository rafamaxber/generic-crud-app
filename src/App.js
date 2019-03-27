import React, { Component } from 'react';
import { connect } from 'react-redux';
import { save } from './store/crud'

class App extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.save({ nome: 'Rafael' })
  }
  render() {
    return (
      <div className="App">
        app
      </div>
    );
  }
}

const mapStateToProps = (store, { entity }) => {
  return {
    entity,
    saveValue: store[entity].status.save
  }
};

const mapDispatchToProps = (dispatch, { entity }) => {
  const actionCreator = bindEntityActionCreator(entity, dispatch);
  return {
    save: actionCreator(save)
  }
};

const bindEntityActionCreator = (entity, dispatch) => (action, key = null) => {
  return (...rest) => dispatch(action(...rest, entity))
}

export default connect(null, mapDispatchToProps)(App);
