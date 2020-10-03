import React from 'react';

function Search (props) {
    return (
        <form>
            <label></label>
            <input
                value = {props.employeeSearch}
                name = "employeeSearch"
                type = "text"
                placeholder = "Enter Employee Name"
                id = "search"
                onChange = {props.handleInputChange}
            />
            <button>Search</button>
        </form>
    )
}


export default Search;