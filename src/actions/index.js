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