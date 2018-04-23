import React from 'react';
import {render}from 'react-dom';
import App from './App';
import configureStore  from './store/configureStore';
import {toggleContactForm,
	handleInputChange} from './actions';
render(
    <App />,
  document.getElementById('root')
)

const store = configureStore();

 store.subscribe(() =>
  console.log(store.getState())
)

/* returns isContactFormHidden returns false */
store.dispatch(toggleContactForm());
/* returns isContactFormHidden returns false */
store.dispatch(toggleContactForm());
store.dispatch(handleInputChange('email', 'manjunath@redmonark.com'))

