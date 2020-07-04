import React from 'react';

function Search (props) {
    return (
        <form>
            <label></label>
            <input
                value = {props.search}
                name = "employeeSearch"
                type = "text"
                placeholder = "Enter Employee Name"
                id = "search"
                onChange = {props.inputChange}
            />
            <button>Search</button>
        </form>
    )
}


export default Search;