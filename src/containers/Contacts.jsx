import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ContactCard from '../components/ContactCard';
import '../Contacts.css';
import AddContact from './AddContact';

const contactsAPI = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';
		
class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      contactList: []
    }

    this.handleNewContact = this.handleNewContact.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.returnContactList = this.returnContactList.bind(this);

  }

  handleSearch(searchText) {
   
    this.setState({searchResult: [], searchText: searchText});
    this.state.contactList.map(contact => {

      if(searchContact(contact, searchText)) {
         this.setState( prevState => ({
           searchResult: [...prevState.searchResult, contact]
         }), () => console.log(this.state.searchResult))
      }
    })
  }

  componentWillMount() {
    let init = {
         method: 'GET',
         headers: new Headers(),
         mode: 'cors',
         cache: 'default' 
      };

    fetch(contactsAPI, init)
      .then( response => response.json())
      .then( 
        data => this.setState( 
          prevState => ({
          contactList: [...data.contacts]
          }) 
        )
      )
    }

  returnContactList() {
   return this.state.searchText ? this.state.searchResult :this.state.contactList
  }

  handleNewContact(newContact) {
  	console.log("Hey00");
  	console.log(newContact);
  	this.setState( prevState => ({
  		contactList: [
  			...prevState.contactList, newContact ]
  		}), () => console.log(this.state.contactList))
  }
  render() {


    return (
    	<div>

     		<SearchBar onSearch={this.handleSearch} />
     		<br />
         	<AddContact onSubmit= {this.handleNewContact} />
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

const searchContact = (contact, searchText) => (
 contact.name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
 contact.surname.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
 contact.phone.toString().search(searchText) !== -1
)

export default Contact;

