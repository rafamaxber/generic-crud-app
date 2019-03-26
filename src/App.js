import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { save } from './store/crud'

class App extends Component {
  componentDidMount() {
    console.log(this.props)

    this.props.save({ nome: 'Rafael' }, 'orders')
  }
  render() {
    return (
      <div className="App">
        app
      </div>
    );
  }
}

const mapStateToProps = store => ({
  save: store.status
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ save }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
