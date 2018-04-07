import React, { Component } from 'react';

import Contacts from './containers/Contacts.jsx'

/*App component starts here */
class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-7 offset-sm-2">
            <span className="title">Contacts</span>
              <Contacts />
          </div>
        </div>
      </div>
    
  
     
    );
  }
}

export default App;
