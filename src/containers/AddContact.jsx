import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddContactForm from '../components/AddContactForm';
import { addContact, handleInputChange, toggleContactForm } from '../actions/';


class AddContact extends Component {
	constructor(props) {
		super(props);
		
		this.showAddContactBox = this.showAddContactBox.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

	}

	showAddContactBox() {
		const { onToggle }  = this.props;
		onToggle();


	}

	handleInputChange(event) {
		const target = event.target;
    	const value = target.value;
    	const name = target.name;
    	console.log(name);

   		const { onInputChange } = this.props;
		onInputChange(name,value); 
   	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.onToggle();
		this.props.onFormSubmit();
	}
	renderForm() {
		return(
			<div className="col-sm-8 offset-sm-2">
				<AddContactForm onFormSubmit={this.handleSubmit} onInputChange={this.handleInputChange} />
 			</div>
 		)
	}
	render() {
		return(
			<div>
				
				{ this.props.isHidden === false ? this.renderForm(): <button  className="btn btn-secondary" style= {{ "marginLeft": "15px"}} type="submit" onClick={this.showAddContactBox} > Add Contact </button>}
			</div>
			)
	}
}



function mapStateToProps(state) {
    return {
        isHidden : state.ui.isAddContactFormHidden,
        newContact: state.contacts.newContact
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onFormSubmit: (newContact) => {
           dispatch(addContact(newContact));
        },
        onInputChange: (name,value) => {
    
            dispatch(handleInputChange(name,value));
        },

        onToggle: () => {
        	dispatch(toggleContactForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddContact)

