import initialState from './initialState';


export default function contactReducer(state = initialState.contacts, action) {
    switch(action.type) {
        
        /* Add contacts to the state array */
     
		case "ADD_CONTACT": {
			return {
				...state,
				contactList: [...state.contactList, state.newContact]
			}
		}
        
        /* Handle input for the contact form. 
        The payload (input changes) gets merged with the newContact object
        */

		case "HANDLE_INPUT_CHANGE": {
			
			return {
				...state, newContact: {
					...state.newContact, ...action.payload }
			}
		}

		default: return state;
	}
}