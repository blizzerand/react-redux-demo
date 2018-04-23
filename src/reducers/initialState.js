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
			isContactFormHidden: true
		}
}

export default initialState;