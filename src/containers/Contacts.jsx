import React, { Component } from 'react';
import '../Contacts.css';
import AddContact from './AddContact';
import ContactList from '../components/ContactList';
import { connect } from 'react-redux'; 
import {fetchContacts} from '../actions';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.returnContactList = this.returnContactList.bind(this);
  }

  returnContactList() {
    return this.props.contactList;
  }


  render() {

   
    return (
    	<div>
          <br />
         	<AddContact/>
         	<br />
          <ContactList contactList= {this.returnContactList()} />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactList : state.contacts.contactList,
    searchText: state.contacts.searchText,
   
    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllContacts: () => dispatch(fetchContacts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Contact);

