const CountriesView = ({countries, filter}) => {
  /*const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().indexOf(filter.toLowerCase()) > -1;
  });*/
  //Show country when you type its exact name
  
  const getFilterCountries = () => {
    let filteredCountries = [];
    countries.forEach(country => {
      const countryName = country.name.common.toLowerCase();
      const filterName = filter.toLowerCase();
      if (countryName === filterName){
        filteredCountries = [country];
        return filteredCountries;
      }else if (countryName.indexOf(filterName) > -1){
        filteredCountries.push(country);
      }
    });
    return filteredCountries;
  }

  const filteredCountries = getFilterCountries();

  if (filteredCountries.length >= 10) {
    return <p>Too many matches, specify a longer filter</p>;
  } else if (filteredCountries.length > 1) {
    const countryNames = filteredCountries.map((country) => <p key={country.cca2}>{country.name.common}</p>);
    return <div>{countryNames}</div>;
  } else if (filteredCountries.length == 1) {
    //only one country
    const country = filteredCountries[0];
    return <CountryView country={country}></CountryView>;
  }
}

//Component that shows a single country
const CountryView = ({country}) => { 
  const languagesItems = Object.keys(country.languages).map( (languageKey) => {
    return <li key={languageKey}>{country.languages[languageKey]}</li>
  });

  return(<div>
    <h2>{country.name.common}</h2>
    capital: {country.capital.map((capital, index) => <div key={index}>{capital}</div>)}
    <br/>
    languages: 
    <ol>
      {languagesItems}
    </ol>
    <img src={country.flags.png}></img>

  </div>);
}

export default CountriesView;