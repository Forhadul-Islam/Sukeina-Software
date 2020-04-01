import React from 'react';
import './LeftBar.css';
import logo from '../../images/logo.png';

const LeftBar = (props) => {
    console.log(props.employee.length)

    var cSalary = 0;
    for (let i = 0; i < props.employee.length; i++) {
        let newSalary = props.employee[i].salary;
        cSalary = parseFloat(cSalary) + parseFloat(newSalary);
    }

    const vat = (cSalary*5)/100;
    return (
        <div className="leftBar1">

            <nav>
                <img src={logo} alt="" />
                <a href="/Home">Home</a>
                <a href="/Services">Services</a>
                <a href="/Blog">Blog</a>
                <a href="/Contact">Contact</a>
                <a href="/SignUp">Sign up</a>
                <a href="/HireNow">Hire Now</a>
            </nav>


            <div className="salary">
                <h2>Total employees: {props.employee.length}</h2>
                <h3>Total salary: ${cSalary}</h3>
                <p>Tax: ${vat}</p>
                <button className="previewBtn">Preview</button>
            </div>

        </div>

    );
};

export default LeftBar;

