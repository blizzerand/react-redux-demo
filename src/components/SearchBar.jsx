import React from 'react';
import '../Contacts.css';

const SearchBar = ({onSearch}) => {
	const handleChange = (e) => {
		onSearch(e.target.value);
	}
	return( 
		<div className="input-group ">
            <input onChange = {handleChange} className="form-control" type="search" placeholder="Search for a contact" id="example-search-input" />
            <button className="btn btn-default" type="button">
                <i className="fa fa-search"></i>
            </button>
        </div>
    )
}

export default SearchBar;