import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country)
    const {name,population,region, flags} = props.country;


    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt=""/>
            <h3>Population: {population}</h3>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;