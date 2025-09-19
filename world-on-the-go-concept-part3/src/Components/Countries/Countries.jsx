import React, { useState, useEffect } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Modal State
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch countries from promise
  useEffect(() => {
    countriesPromise.then((data) => setCountries(data.countries));
  }, [countriesPromise]);

  // Toggle visited country
  const handleVisitedCountries = (country) => {
    if (visitedCountries.includes(country)) {
      setVisitedCountries(visitedCountries.filter((c) => c !== country));
      alert(`${country.name.common} is not visited`);
    } else {
      setVisitedCountries([...visitedCountries, country]);
      alert(`${country.name.common} is visited`);
    }
  };

  // Toggle visited flag
  const handleVisitedFlags = (flag) => {
    if (visitedFlags.includes(flag)) {
      setVisitedFlags(visitedFlags.filter((f) => f !== flag));
    } else {
      setVisitedFlags([...visitedFlags, flag]);
    }
  };

  // Modal Functions
  const openModal = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCountry(null);
    setIsModalOpen(false);
  };

  // Filter countries by search
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Total countries Added Here : {countries.length}</h1>
      <h2>Total Countries Visited : {visitedCountries.length}</h2>
      <h4>Total Flags Visited: {visitedFlags.length}</h4>

      <input
        className="searchTerm"
        type="text"
        placeholder="Search country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        // style={{ padding: "5px", marginBottom: "10px", width: "200px" }}
      />

      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img
            key={index}
            src={flag}
            alt="flag"
            style={{ width: "280px", height: "150px", margin: "5px" }}
          />
        ))}
      </div>

      <div className="countries">
        {filteredCountries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            visitedFlags={visitedFlags}
            openModal={openModal}
          />
        ))}
      </div>
      {/* Modal added  */}
      {isModalOpen && selectedCountry && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            {/* <h2>{selectedCountry.name.common}</h2> */}
            <h3 style={{ color: "Blue" }}> {selectedCountry.name.common}</h3>
            <img
              src={selectedCountry.flags.flags.png}
              alt={selectedCountry.name.common}
              style={{ width: "250px", height: "150px" }}
            />
            {/* <h2>
              Currencies:{" "}
              {selectedCountry.currencies
                ? Object.values(selectedCountry.currencies)
                    .map((c) => c.name)
                    .join(", ")
                : "N/A"}
            </h2> */}
            {/* <p>{selectedCountry.languages.languages}</p> */}
            <p style={{ color: "Blue" }}>
              Official Name: {selectedCountry.name.official}
            </p>
            <p style={{ color: "Blue" }}>
              Country Text Code: {selectedCountry.cca3.cca3}
            </p>
            <p style={{ color: "Blue" }}>
              Region: {selectedCountry.continents.continents}
            </p>
            <p style={{ color: "Blue" }}>
              Country Code: {selectedCountry.ccn3.ccn3}{" "}
            </p>
          </div>
        </div>
      )}

      {/* End div and added comment */}
    </div>
  );
};

export default Countries;
