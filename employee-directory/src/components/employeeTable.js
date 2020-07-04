import React from 'react';

function Employeetable(props) {
    console.log(props);
    
    return(
        <ul>
            {props.employees.map(( employee, i ) => 
                <li key={i}>
                    {employee && employee.name
                        ? employee.name.first + " " + employee.name.last
                        : <></>}
                </li>)}
        </ul>
    
        // <tbody>
        //     <tr>
        //         <td data-th="Name">
        //             <p></p>
        //         </td>
        //     </tr>

        // </tbody>
    
    )
}

export default Employeetable;