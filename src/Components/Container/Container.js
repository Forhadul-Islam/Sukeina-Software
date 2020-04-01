import React, { useState } from 'react';
import './Container.css';
import LeftBar from '../LeftBar/LeftBar';
import Content from '../Content/Content';
import fakeData from '../../fakeData';
import Employee from '../Employee/Employee';

const Container = () => {
    const [profiles, setprofiles] = useState(fakeData);
    const [employee, setEmployee]= useState([]);

    const employeeHandle = (profile) =>{
        const newEmployee = [...employee, profile];
        setEmployee(newEmployee);
    }
    
    return (
        <div className="container">
            <div className="leftBar">
            <LeftBar employee = {employee} >
                <Employee employee = {employee} ></Employee>
            </LeftBar>
            </div>
            <div className="content">
                {
                    profiles.map(profile => <Content 
                    profile = {profile}
                    employeeHandle = {employeeHandle}>
                        
                    </Content>)
                }
            </div>
        </div>
    );
};

export default Container;