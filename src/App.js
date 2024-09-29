
import { useEffect, useState } from 'react';
import './App.css';
import CountryBox from './components/CountryBox';

function App() {

  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])


  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("error");
        }
        const jsonData = await response.json();
        console.log(jsonData[0].name)
        setCountries(jsonData);
        setFilteredCountries(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [])


  const handleInputChange = event => {
    const query = event.target.value;
    if (query == "") setFilteredCountries(countries)
    else {
      const filteredData = countries.filter(country => {
        return country.name.common.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredCountries(filteredData)
    }
    //console.log(filteredCountries)
  };


  return (
    <div className='App'>
      <input type='text' onChange={handleInputChange}></input>
      <div className="App-main">
        {filteredCountries.map((ele, idx) => { console.log(ele.flags.png); return <CountryBox name={ele.name.common} img={ele.flags.png} key={idx} /> })}
      </div></div>
  );
}

export default App;
