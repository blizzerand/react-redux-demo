import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ContactCard from '../components/ContactCard';
import '../Contacts.css';
import AddContact from './AddContact';
import { connect } from 'react-redux'; 
import {fetchContacts} from '../actions';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.returnContactList = this.returnContactList.bind(this);
  }

  componentWillMount() {

    this.props.fetchAllContacts();

  }

  returnContactList() {
    return this.props.contactList;
  }


  render() {

   
    return (
    	<div>

     		<SearchBar />
     		<br />
         	<AddContact/>
         	<br />
          	<ul className="list-group" id="contact-list">
           		{/*this.returnContactList().map(
                  (contact) => 
                  <li key={contact.email} className="list-group-item"> 
                    <ContactCard contact = {contact}/>
                  </li>
              	)*/}
            </ul>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactList : filterContacts(state.contacts.contactList, state.contacts.searchText),
    searchText: state.contacts.searchText,
   
    
  }
}

const filterContacts = (contacts, searchText) => {
 
  if(searchText === 'a') {
      
      return contacts
   }

   else {
    let out = [];
    contacts.map(contact => { searchContact(contact,searchText)? out.push(contact): null });
    return out;
  }

}

   


function mapDispatchToProps(dispatch) {
  return {
    fetchAllContacts: () => dispatch(fetchContacts())
  }
}


const searchContact = (contact, searchText) => {
   if (contact.name.toLowerCase().search(searchText.toLowerCase()) != -1 ||
 contact.surname.toLowerCase().search(searchText.toLowerCase()) != -1 ||
 contact.phone.toString().search(searchText) != -1
) return true}

export default connect(mapStateToProps, mapDispatchToProps) (Contact);

