import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [filterWith, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])

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
        : <div>{countries.map(country => <p key={country.name.common}>{country.name.common}</p>)}</div>
      }
    </div>
  )
}

export default App