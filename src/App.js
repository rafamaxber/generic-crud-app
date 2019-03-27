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

const mapStateToProps = (store, { entity }) => ({
  entity,
  saveValue: store[entity].status.save
});

const mapDispatchToProps = (dispatch, { entity }) => {
  return {
    ...bindActionByEntity(dispatch, save, entity)
  }
};

const bindActionByEntity = (dispatch, action, entity) => {
  return {
    [action.name]: (args) => dispatch(action(args, entity))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
