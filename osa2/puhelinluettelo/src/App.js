import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => { 
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')


  const deleteNameOf = id => {

    if (window.confirm("Delete?")) {
      setPersons(persons.filter(n => n.id !== id))

      axios.delete('http://localhost:3001/persons/' + id.toString())
  }
}

  const addName = (event) => {
    event.preventDefault()
    console.log('Clicked', event.target)

    const existingNames = persons
    .map(obj => obj.name)

    if (existingNames.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {

      const nameObject = {
        name: newName,
        number: newNumber
      }

      axios
        .post('http://localhost:3001/persons', nameObject)
        .then(response => {
          console.log(response)
        })
      
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')

      console.log(persons)
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>

      <h2>Numbers</h2>
        <Persons persons={persons} deleteNameOf={deleteNameOf}/>

    </div>
  )

}

export default App