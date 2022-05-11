import { useEffect, useState } from "react";
import WeatherData from "./WeatherData";
import ShowButton from "./ShowButton";

const CountriesView = ({ filteredCountries }) => {
  //Fill the shownCountries array with false every time the filteredCountries change
  useEffect(() => {
    setShownCountries(Array(filteredCountries.length).fill(false));
  }, [filteredCountries]);

  const [shownCountries, setShownCountries] = useState([]);
  //shown countries array of booleans[false,true,false,false,true...]

  const handleShow = (index) => {
    setShownCountries(
      shownCountries.map((shown, i) => {
        return index === i ? !shown : shown;
      })
    );
  };

  if (filteredCountries.length >= 10) {
    return <p>Too many matches, specify a longer filter</p>;
  } else if (filteredCountries.length > 1) {
    const countryList = filteredCountries.map((country, index) => {
      if (shownCountries[index]) {
        return (
          <div key={country.id}>
            <CountryView country={country}></CountryView>
            <ShowButton
              onClick={() => handleShow(index)}
              shown={shownCountries[index]}
            ></ShowButton>
          </div>
        );
      } else {
        return (
          <div key={country.id}>
            <p>{country.name}</p>
            <ShowButton
              onClick={() => handleShow(index)}
              shown={shownCountries[index]}
            ></ShowButton>
          </div>
        );
      }
    });
    return <div>{countryList}</div>;
  } else if (filteredCountries.length === 1) {
    //only one country
    const country = filteredCountries[0];
    return <DetailedCountryView country={country}></DetailedCountryView>;
  } else {
    return <p>Not found</p>;
  }
};

//Component that shows a single country
const CountryView = ({ country }) => {
  const languagesItems = Object.keys(country.languages).map((languageKey) => {
    return <li key={languageKey}>{country.languages[languageKey]}</li>;
  });

  return (
    <div>
      <h2>{country.name}</h2>
      capital:{" "}
      {country.capitals.map((capital, index) => (
        <div key={index}>{capital}</div>
      ))}
      <br />
      languages:
      <ol>{languagesItems}</ol>
      <img src={country.flagURL} alt={country.name + " flag"}></img>
    </div>
  );
};

const DetailedCountryView = ({ country }) => {
  return (
    <>
      <CountryView country={country}></CountryView>
      <WeatherData country={country}></WeatherData>
    </>
  );
};

export default CountriesView;
