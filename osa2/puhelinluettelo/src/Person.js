const Person = ({person, removeName}) => {
    return (
      <div>
        {person.name} {person.number}
        <button onClick={removeName}>Delete</button>
      </div>
    )
  }

export default Person