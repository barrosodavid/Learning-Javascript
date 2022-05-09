
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
    countries.forEach( country => {
      console.log(filter);
      const countryName = country.name.common;
      const filterName = filter.toLowerCase();
      const newFilteredCountry = { 
        name: countryName,
        id: country.cca2,
        capitals: country.capital,
        flagURL: country.flags.png,
        languages: country.languages,
        shown: false
      };
      if (countryName.toLowerCase() === filterName){
        filteredCountries = [newFilteredCountry];
        return filteredCountries;
      }else if (countryName.toLowerCase().indexOf(filterName) > -1){
        filteredCountries.push(newFilteredCountry);
      }
    });
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
  },[]);

  return (<div> 
    <p>Country search</p>
    name: <input value={filter} onChange={handleSearch} />
    <CountriesView filteredCountries={filteredCountries} filter={filter} />
    </div>);
}

export default App;
