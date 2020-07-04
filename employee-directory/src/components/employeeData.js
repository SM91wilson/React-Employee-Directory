import React, { useEffect, useState, Component } from "react";
import API from "../utils/API";
import Search from "./searchForm";
import Employeetable from "./employeeTable";

class EmployeeData extends Component {
  state = {
    employees: [{}],
    filtered: [{}],
    order: 'descend'
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

  render() {
    return (
      <div>
        <Search />
        {/* <table> */}
          <Employeetable 
            employees ={this.state.employees} />
        {/* </table> */}
      </div>
    );
  }
}

export default EmployeeData;
