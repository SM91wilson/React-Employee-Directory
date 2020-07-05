import React, { Component } from "react";
import API from "../utils/API";
import Search from "./searchForm";
import Employeetable from "./employeeTable";

class EmployeeData extends Component {
  state = {
    employees: [{}],
    filtered: [{}],
    order: 'descend',  
    headings: [
        {name: "Name", order: "descend"},
        {name: "Picture"},
        {name: "Phone"},
        {name: "Email"},
        {name: "D.O.B", order: "descend"}
    ]
  };

  componentDidMount() {
    API.getUsers()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filtered: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  handleSort = heading => {
    
  }

  handleInputChange = event => {
    const employeeSearch = event.target.value;
    const filteredEmployees = this.state.employees.filter(employee => {
        let search = employee.name.first.toLowerCase();
        if(search.indexOf(employeeSearch.toLowerCase()) !== -1){
            return employee;
        }
    })
    this.setState({filtered: filteredEmployees});
  }

  render() {
    return (
      <div>
        <Search handleInputChange={this.handleInputChange} />
        {/* <table> */}
          <Employeetable 
            employees = {this.state.filtered}
            headings = {this.state.headings} 
            />
        {/* </table> */}
      </div>
    );
  }
}

export default EmployeeData;
