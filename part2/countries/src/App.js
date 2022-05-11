
import { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesView from './modules/CountriesView'

const App = () => {
  const [filter, setFilter] = useState('');

  const [countries, setCountries] = useState([]);

  const [filteredCountries, setFilteredCountries] = useState([]);
  /*[{
    index: 1,
    shown: false
  },{...}]*/

  const getFilteredCountries = (filter) => {
    let filteredCountries = []
    const filterName = filter.toLowerCase();
    countries.forEach(country => {
      console.log(filter);
      const countryName = country.name.common;
      const newFilteredCountry = {
        name: countryName,
        id: country.cca2,
        capitals: country.capital,
        flagURL: country.flags.png,
        languages: country.languages,
        shown: false
      };
      if (countryName.toLowerCase().indexOf(filterName) > -1) 
        filteredCountries.push(newFilteredCountry);
    });
    //Check for exact name match(useful for cases like choosing between United States and United States Virgin Islands)
    const exactMatch = filteredCountries.filter(country => country.name.toLowerCase() === filterName);
    if (exactMatch.length > 0) return exactMatch;

    return filteredCountries;
  };

  const handleSearch = (event) => {
    setFilter(event.target.value);
    setFilteredCountries(getFilteredCountries(event.target.value));
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (<div>
    <p>Country search</p>
    name: <input value={filter} onChange={handleSearch} />
    <CountriesView filteredCountries={filteredCountries} filter={filter} />
  </div>);
}

export default App;
