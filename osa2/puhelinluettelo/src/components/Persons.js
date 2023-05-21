import Person from './Person'

const Persons = ({persons, deleteNameOf}) => {
return (
    <div>
    {persons.map(person =>
      <Person
        key={person.name}
        person={person}
        removeName={() => deleteNameOf(person.id)}/>
      )}
    </div>
  )
}

export default Persons