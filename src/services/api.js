import axios from 'axios'

const api = axios.create({
    baseURL: 'https://swapi.co/api/people/'
})

export default api