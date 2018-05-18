import axios from 'axios';

export const addContact =() => {
	return {
		type: "ADD_CONTACT",
		
	}
}

export const handleInputChange = (name, value) => {
	return {

		type: "HANDLE_INPUT_CHANGE",
		payload: { [name]: value}
	}
}

export const toggleContactForm = () => {
	return {
		type: "TOGGLE_CONTACT_FORM",
	}
}


export const requestContacts = () => {
	console.log("inside requestContacts");
	return {
		type: "REQUEST_CONTACTS",
		payload: true
	}
}

export const receiveContacts = (json) => {
	return {
		type: "RECEIVE_CONTACTS",
		payload: json.contacts
	}
}

export const receiveContactsError = (err) => {
	return {
		type: "ERROR",
		payload: err
	}
}

export const fetchContacts = () => {
	return (dispatch) => {

		dispatch(requestContacts());
		return axios
			.get('https://demo1443058.mockable.io/codeproject_tutorial/api/contacts')
			.then(response => {
				dispatch(receiveContacts(response.data))
			})
			.catch ( err => {
				dispatch(receiveContactsError(err))
			})
	}
}

export const searchContacts = (searchText) => {
	return (dispatch) => {
		dispatch(handleSearchInput(searchText));
		return {
			type: "SEARCH_CONTACTS"
		}
	}
}

export const handleSearchInput = (searchText) => {
	return { 
		type: "HANDLE_SEARCH_INPUT", 
		payload: searchText
	};
}


