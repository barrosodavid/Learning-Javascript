
import { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesView from './modules/CountriesView'

const App = () => {
  const [filter, setFilter] = useState('');

  const [countries, setCountries] = useState([]);


  const handleSearch = (event) => {
    setFilter(event.target.value);
  }

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  },[]);

  return (<div> 
    <p>Country search</p>
    name: <input value={filter} onChange={handleSearch} />
    <CountriesView countries={countries} filter={filter} />
    </div>);
}

export default App;
