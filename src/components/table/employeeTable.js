import React from 'react';
import "./style.css";

function Employeetable(props) {
    console.log(props);

    return(

    
        <table>
            <tbody>
                <tr>
                    {props.headings.map((heading, i) => 
                    <th key ={i}><button 
                        // onClick={props.handleSort("name")}
                        >
                        {heading && heading.name
                        ?heading.name
                        :<></>}
                        </button>
                    </th>)}
                    
                </tr>
                    {props.employees.map(( employee, i ) =>
                    <tr key={i} >
                        <td>
                            {employee && employee.name
                            ? employee.name.first + " " + employee.name.last
                            : <></>}
                        </td>
                        <td>
                            {employee.picture
                            ? <img src={employee.picture.thumbnail} alt="profile picture" />
                            : <></>}
                        </td>
                        <td>
                            {employee.cell
                            ? employee.cell
                            :<></>}
                        </td>
                        <td>
                            {employee.email
                            ? employee.email
                            : <></>}
                        </td>
                        <td>
                            {employee && employee.dob
                            ? JSON.stringify((employee.dob)).slice(9,-25)
                            : <></>
                            }
                        </td>

                    </tr>)}
            </tbody>
        </table>
    
    )
}

export default Employeetable;