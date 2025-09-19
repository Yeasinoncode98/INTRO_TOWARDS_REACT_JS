import React, { useState } from "react";
import "./Country.css";

const Country = ({
  country,
  handleVisitedCountries,
  handleVisitedFlags,
  visitedFlags,
  openModal,
}) => {
  const [visited, setVisited] = useState(false);

  //   console.log(country.languages.languages);

  const handleClicked = () => {
    // setVisited(true);

    // 1st.system if/else type Rendering
    // if (visited) {
    //   setVisited(false);
    // }
    // else{
    //     setVisited(true)
    // }

    // 2nd.system ternery operator
    // setVisited(visited ? false : true);

    // 3rd.system
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.png.alt} />
      {/* <h3>Name : {country.name.common}</h3> */}
      {/* <h3 onClick={() => openModal(country)} style={{ cursor: "pointer" }}>
        {country.name.common}
      </h3> */}
      <h3 onClick={() => openModal(country)} style={{ cursor: "pointer" }}>
        Name: {country.name.common}
      </h3>

      <h3>Capital: {country.capital.capital}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <p>Country Code: {country.ccn3.ccn3}</p>

      <div className="separete ">
        <button onClick={handleClicked}>
          {visited ? "visited" : "Not visited"}
        </button>

        {/* commented */}
        {/* <button
          onClick={() => {
            handleVisitedFlags(country?.flags?.flags?.png);
          }}
        >
          {VisitedFlags.includes(country?.flags?.png)
            ? "Non Visited Flags"
            : "visited Flag"}
        </button> */}

        {/* working part */}
        <button onClick={() => handleVisitedFlags(country?.flags?.flags?.png)}>
          {visitedFlags.includes(country?.flags?.flags?.png)
            ? " Visited Flag"
            : "Non Visited Flag"}
        </button>

        {/* Testing part with alert */}
        {/* 
        <button onClick={() => handleVisitedFlags(country)}>
          {visitedFlags.includes(country.flags.png)
            ? "Non-Visited Flag"
            : "Visited Flag"}
        </button> */}
        {/* .............................. */}
      </div>
    </div>
  );
};

export default Country;

/**
 * 1.inline style css
 * 2.
 */
