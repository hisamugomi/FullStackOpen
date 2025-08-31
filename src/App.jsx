import { useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
// import Note from "./components/Note"

console.log("This is app jsx")


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
  console.log('effect')
  axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
}

useEffect(hook, [])



  return (
    <>
      <div>

      </div>

    </>
  )
}

export default App
