import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>List of Countries</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
