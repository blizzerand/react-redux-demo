import initialState from './initialState';

export default function contactReducer(state = initialState.contacts, action) {
	switch(action.type) {
		case "ADD_CONTACT": 
			return {
				...state,
				contactList: [...state.contactList, state.newContact]
			}
		

		case "HANDLE_INPUT_CHANGE": 
			
			return {
				...state, newContact: {
					...state.newContact, ...action.payload }
			}
		

		case "REQUEST_CONTACTS":
			return {
				...state, isFetching: true
			}
		

		case "RECEIVE_CONTACTS": 
			return {
				...state, isFetching: false, contactList: action.payload
			}
	
		

		default: return state;
	}
}