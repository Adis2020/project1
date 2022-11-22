import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerElems}>
                <h3>Home</h3>
                <h3>About me</h3>
                <h3>Skills</h3>
                <h3>Portfolio</h3>
                <h3>Contacts</h3>
            </div>
        </div>
    );
};

export default Header;