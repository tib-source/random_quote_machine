import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './scss/App.css';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'
import apiReducer from './reducers/apiReducer';

const store = createStore(apiReducer)

function mapStateToProps(state) {
  return {
    quotes: state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addQuotes: function (quotes) {
      dispatch({ type: 'ADD', quotes: quotes })
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <Container />
    {console.log("hi")}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
