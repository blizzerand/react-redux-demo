import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ContactCard from './ContactCard';
import './Contacts.css';

const contactsAPI = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      searchResult: [],
      contactList: []
    }

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
  render() {


    return (
    
      <div className="row">
        <div className="col-xs-12 col-sm-offset-3 col-sm-6">
          <span className="title">Contacts</span>
          
          <SearchBar onSearch={this.handleSearch} />
         
          <ul className="list-group" id="contact-list">
            { this.returnContactList().map(
                (contact) => 
                  <li key={contact.email} className="list-group-item"> 
                    <ContactCard contact = {contact}/>
                  </li>
              )
            }
          </ul>
      
        </div>
      </div>
    
  
     
    );
  }
}

const searchContact = (contact, searchText) => (
 contact.name.toLowerCase().search(searchText.toLowerCase()) != -1 ||
 contact.surname.toLowerCase().search(searchText.toLowerCase()) != -1 ||
 contact.phone.toString().search(searchText) != -1
)

export default App;
