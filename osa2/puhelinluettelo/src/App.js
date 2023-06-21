import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import Filter from './components/Filter'
import personService from './services/personService'
import './index.css'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [message, setMessage] = useState(null)
  const [filterWith, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.includes(filterWith))

   useEffect(() => { 
      personService.getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const deleteNameOf = id => {

    if (window.confirm("Delete?")) {
      setPersons(persons.filter(n => n.id !== id))

      personService.deleteName(id)

      setMessage("Name has been deleted.")
      setTimeout(() => {
        setMessage(null)
      }, 5000)
   
} 
   }

  const addName = (event) => {
    event.preventDefault()

    const existingNames = persons
    .map(obj => obj.name)

    if (existingNames.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {

      const nameObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(nameObject)
        .then(response => {
          console.log(response)
        })
      
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')

      setMessage("Name has been added.")
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)

    if (filterWith==='') {
      setShowAll(true)
    } else {
      setShowAll(false)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter handleFilter={handleFilter}/>

      <h2>Add new number</h2>
        <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
        <Persons persons={personsToShow} deleteNameOf={deleteNameOf}/>

        <Notification message={message}></Notification>
    </div>
  )

}

export default App