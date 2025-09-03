import { useState, useEffect } from 'react'
import './App.css'
import personsservice from '../services/persons.jsx'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setPerson] = useState('')
  const [search, setSearch] = useState('')


  useEffect(() => {
    personsservice
      .getAll()
      .then(response => {
        setPersons(response)
        console.log(response)
      })
      .catch(error => {
        console.error("failed to fetch data\n", error)
      })
  }, [])


  const Person = ({ person, deletePerson }) => {
    return (
      <li>
        {person.name} {person.number}
        <button onClick={deletePerson}>delete</button>
      </li>
    )
  }

  const FilteredDisplay = ({ persons, search }) => {
    const filteredNames = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <div>
        {filteredNames.map(person =>
          <Person
            key={person.id}
            person={person}
          />
        )}
      </div>
    )
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
<div>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input value={search} onChange={handleSearchChange}/>
      </div>
      <FilteredDisplay persons={persons} search={search} />
    </div>
    </>
  )
}

export default App
