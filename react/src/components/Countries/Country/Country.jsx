import React from 'react';

const Country = ({country}) => {
    
    return (
        <div>
            <h3>Name: {country.name.common} </h3>
            <h4>Population {country.population.population}</h4>
            <h4>Capital: {country.capital.capital}</h4>
            <img src={country.flags.flags.png} alt="" />
        </div>
    );
};

export default Country;