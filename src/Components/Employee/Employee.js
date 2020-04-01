import React from 'react';

const Employee = (props) => {
    
    let salary = 0;
    for(let i = 0; i<props.employee.length; i++){
        let newSalary = salary[i];
        salary = salary + newSalary;
    }

    return (
        <div>
            <h2>Total employee: </h2>
            <h3>Total salary: </h3>
        </div>
    );
};

export default Employee;