import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [filterWith, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])

  const CountryList = () => {
    if (countries.length > 1) {
    return (
      <div>{countries.map(country => <p key={country.name.common}>{country.name.common}</p>)}</div>
    )
    } else {
      return (
        <Country/>
      )
    }
  }

  const Country = () => {
    return (
      <div>
        <h1>{countries[0].name.common}</h1>
        <div>Capital: {countries[0].capital}</div>
        <div>Area: {countries[0].area}</div>
        <div><b>Languages: </b>
        <ul>
          {Object.values(countries[0].languages).map(language =>
            <li key={language}>{language}</li>)}
        </ul>
        </div>
        <img src={countries[0].flags.png} alt={countries[0].flags.alt}/>
      </div>
    )
  }

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setAllCountries(response.data)
        })

  }, [])

  useEffect(() => {
    setCountries(allCountries.filter(country =>
      country.name.common.toLowerCase().includes(filterWith.toLowerCase())
    ))
  }, [allCountries, filterWith])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <div>
        Find countries <input value={filterWith} onChange={handleFilter}></input>
      </div>
      {countries.length > 10
        ? <p>Too many matches, specify another filter</p>
        : <CountryList />
      }
    </div>
  )
}

export default App