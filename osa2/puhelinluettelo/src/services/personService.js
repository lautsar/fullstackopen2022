import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = ( newPerson ) => {
    return axios.post(baseUrl, newPerson)
}

const deleteName = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll: getAll, create: create, deleteName: deleteName }