import { useState, useEffect } from 'react'
import './App.css'
import personsservice from '../services/persons.jsx'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setnewPerson] = useState('')
  const [search, setSearch] = useState('')
  const [newph, setnewph] = useState('')


  useEffect(() => {
    personsservice
      .getAll()
      .then(response => {
        setPersons(response)
      })
      .catch(error => {
        console.error("failed to fetch data\n", error)
      })
  }, []);

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
            deletePerson = {() => deletePerson(person.id)}
          />
        )}
      </div>
    )
  }

   const Person = ({ person, deletePerson }) => {
    return (
      <li>
        {person.name} {person.number}
        <button onClick={deletePerson}>delete</button>
      </li>
    )
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const deletePerson = (id) => {
    if (window.confirm(`Delete person with id ${id}?`)) {
      personsservice
        .deleteph(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          console.log('Person deleted successfully')
        })
        .catch(error => {
          console.error('Error deleting person:', error)
          alert('Failed to delete person')
        })
    }
  }
  const addPh = (event) => {
    event.preventDefault()
  const addPerson = (newph, newPerson) => {
    if (persons.map(name => name.name).find((element) => element === newPerson)) {
      alert(`${newPerson} is already added to phonebook`)
      console.log('Duplicate!')
    }
    else {
      const person = {
        name: newPerson,
        number: newph,
        id: (persons.length + 1)
      }
      setPersons(persons.concat(person))
      setnewPerson('')
      setnewph('')
    }
  
    const person = {
      name : newPerson,
      number : newph,
      id : [persons.length + 1]
    }
  }
  addPerson(newph, newPerson)
}

  const handlePersonadd = (event) => {
    setnewPerson(event.target.value)
  }

  const handlePhoneadd = (event) => {
    setnewph(event.target.value)
  }

return (
  <>
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input value={search} onChange={handleSearchChange} />
      </div>
      <form onSubmit={addPh} >
        <div>
          name: <input value={newPerson} onChange={handlePersonadd}/>
        </div>
        <div>phone number: <input value={newph} onChange={handlePhoneadd}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <FilteredDisplay persons={persons} search={search} />
    </div>
  </>
  )
}

export default App
