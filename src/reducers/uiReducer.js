import initialState from './initialState';

/* A reducer explicitly for the UI. */
export default function uiReducer(state = initialState.ui, action) {
	switch(action.type) {
		case "TOGGLE_CONTACT_FORM": {
				return {
					...state, isAddContactFormHidden: !state.isAddContactFormHidden
					}
				
			}
		default: return state;
	}
}
