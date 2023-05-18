import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const Person = (props) => {
    return (
      <div>
        {props.name}
      </div>
    )
  } 

  const addName = (event) => {
    event.preventDefault()
    console.log('Clicked', event.target)

    const existingNames = persons
    .map(obj => obj.name)

    if (existingNames.includes(newName)) {
      alert(newName.concat(" is alredy added"))
    } else {

      const nameObject = {
        name: newName
      }

      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      {persons.map(person =>
        <Person key={person.name} name={person.name} />
        )}
      </div>
    </div>
  )

}

export default App