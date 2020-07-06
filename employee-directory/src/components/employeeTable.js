import React from 'react';



function Employeetable(props) {
    console.log(props);
    
    return(
        // <ul>
        //     {props.employees.map(( employee, i ) => 
        //         <li key={i}>
        //             {employee && employee.name
        //                 ? employee.name.first + " " + employee.name.last
        //                 : <></>}
        //         </li>)}
        // </ul>
    
        <table>
            <tbody>
                <tr>
                    {props.headings.map((heading, i) => 
                    <th key ={i}>
                        {heading && heading.name
                        ?heading.name
                        :<></>}
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
                            {console.log(JSON.stringify((employee.dob)))};
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