import React from 'react';
import './Content.css';

const Content = (props) => {
    const { name, email, phone, company, salary, img } = props.profile;
    return (
        <div className="profile">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="data">
                <h3>Name: {name}</h3>
                <p>Email: {email}</p>
                <p>Mobile: {phone}</p>
                
                <p>Salary: ${salary}</p>
                <button className="addBtn" 
                        onClick = {() => props.employeeHandle(props.profile)}
                >Add</button>
            </div>
        </div>
    );
};

export default Content;