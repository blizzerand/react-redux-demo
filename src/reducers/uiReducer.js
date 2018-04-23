import initialState from './initialState';



export default function uiReducer(state = initialState.ui, action) {
    switch(action.type) {
        /* Show/hide the form
        */
        case "TOGGLE_CONTACT_FORM": {
				return {
					...state, isContactFormHidden: !state.isContactFormHidden
					}
				
			}
		default: return state;
	}
}
