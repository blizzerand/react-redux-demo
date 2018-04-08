export const addContact =(contactObject) => {
	return {
		type: "ADD_CONTACT",
		payload: contactObject
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