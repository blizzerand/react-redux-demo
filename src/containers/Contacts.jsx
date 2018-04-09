import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ContactCard from '../components/ContactCard';
import '../Contacts.css';
import AddContact from './AddContact';
import { connect } from 'react-redux'; 

class Contact extends Component {

  constructor(props) {
    super(props);
    this.returnContactList = this.returnContactList.bind(this);
  }


  returnContactList() {
    return this.props.contactlist;
  }


  render() {


    return (
    	<div>

     		<SearchBar />
     		<br />
         	<AddContact/>
         	<br />
          	<ul className="list-group" id="contact-list">
           		{ this.returnContactList().map(
                  (contact) => 
                  <li key={contact.email} className="list-group-item"> 
                    <ContactCard contact = {contact}/>
                  </li>
              	)}
            </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactlist : state.contacts.contactList
  }
}


export default connect(mapStateToProps) (Contact);

