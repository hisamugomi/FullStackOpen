import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => {
      console.log("getAll running")
      return response.data
    })
    .catch(error => {
      console.log('error', error)
    })
}



  const create = newObject => {
    return axios.post(baseUrl, newObject).then(response => response.data)
  }

  const deleteph = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
      .then(response => {
        console.log('deleted item ', response.status)
        return response
      })
  }

export default {
  getAll,
  create,
  deleteph
}
