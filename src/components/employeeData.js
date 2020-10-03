import React, { Component } from "react";
import API from "../utils/API";
import Search from "./searchForm";
import Employeetable from "./employeeTable";

class EmployeeData extends Component {
  state = {
    employees: [{}],
    filtered: [{}],
    order: "descend",
    headings: [
      { name: "Name", order: "descend" },
      { name: "Picture", order: "descend" },
      { name: "Phone", order: "descend" },
      { name: "Email", order: "descend" },
      { name: "D.O.B", order: "descend" },
    ],
  };
  // attempt at table filter
  // handleSort = () => {
        //  sortName () {

        //  const sortedEmployees = this.state.filtered.sort(function (a, b) {
          // VV compare part of func
        //     if (a.name.first < b.name.first) {
        //       return -1;
        //     } else {
        //       return 1;
        //     }
            
        //   });
        //   this.setState({ filtered: sortedEmployees });
        //   return this.state.filtered;
        // }
        // sortName(); 
  // };
  

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

  handleInputChange = (event) => {
    const employeeSearch = event.target.value;
    const filteredEmployees = this.state.employees.filter((employee) => {
      let search = employee.name.first.toLowerCase();
      if (search.indexOf(employeeSearch.toLowerCase()) !== -1) {
        return employee;
      }
    });
    this.setState({ filtered: filteredEmployees });
  };

  render() {
    return (
      <div>
        <Search handleInputChange={this.handleInputChange} />
        {/* <table> */}
        <Employeetable
          employees={this.state.filtered}
          headings={this.state.headings}
          handleSort = {this.sortName}
        />
        {/* </table> */}
      </div>
    );
  }
}

export default EmployeeData;
