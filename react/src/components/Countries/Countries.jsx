import React, { use, useState } from 'react';
import Country from './Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);



    const [visitedFlag, setVisitedFlag] = useState([]);



    const handleVisitedCountries = ( country ) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }



    const handleVisitedFlag = (flag) => {
        const newVisitedFlags = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlags)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;

    return (
        <div>
            <h1>Visited Countries {countries.length}</h1>
            <h3>Total Country visited : {visitedCountries.length} </h3>
            <h3>Total Flags {visitedFlag.length}</h3>
        <ol>
            {
                visitedCountries.map((country, index) => <li key={index}>{country.name.common}</li>)
            }
        </ol>

        <div className='visited-flags-container'>
            {
                visitedFlag.map((flag, index) => <img key={index} src={flag}></img>)
            }
        </div>


            <div className='countries'>

            {
                countries.map((country, index) => <Country 
                key={index} 
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlag={handleVisitedFlag}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;