const initialState = {
	contacts: {
		contactList: [],
		newContact: {
				name: '',
				surname: '',
				email: '',
				address: '',
				phone: ''
		},
		
	},

	ui: {
			isAddContactFormHidden: true
		}
}

export default initialState;