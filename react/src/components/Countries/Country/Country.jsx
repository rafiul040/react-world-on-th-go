import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        // console.log("Button Clicked")
        // 1st system
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)

        // }

        //snd System
        // setVisited(visited ? false : true)
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    
    return (
        // <div className={`eikhane tailwind css likhte parbo ${abar eikhane condition o dite parbo}`}
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country?.flags?.flags?.png} alt="" />
            <h3>Name: {country?.name?.common} </h3>
            <h4>Population {country.population.population}</h4>
            <h4>Capital: {country.capital.capital}</h4>
            <p>Area {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>


            <button onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Flag</button>
            
        </div>
    );
};

export default Country;