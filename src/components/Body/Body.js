import React from 'react';
import classes from './Body.module.css';
import CountryTable from './CountryTable/CountryTable';
import LanguageTable from './LanguageTable/LanguageTable';

function Body() {
    return (
        <section className={[classes.contentBody, 'container'].join(' ')}>			
			<div className="row">
                <CountryTable/>
                <LanguageTable/>
            </div>
        </section>
    )
}

export default Body
