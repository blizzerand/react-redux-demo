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
		searchText: 'a'		
	},

	ui: {
			isAddContactFormHidden: true
		}
}

export default initialState;