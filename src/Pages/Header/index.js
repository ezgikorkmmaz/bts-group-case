import React from 'react';
import "./style.scss";

const Header = () => {

    return (
        <div className="header">
            <span className='title'>CaseStudy</span>
            <div className='content'>
            <span onClick={() =>  window.location.href='/'}>User List</span> 
            <span onClick={() =>  window.location.href='/queryBuilder'}>Query Builder</span>
            </div>
        </div>
    );
};

export default Header;