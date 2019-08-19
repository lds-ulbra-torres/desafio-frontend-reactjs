import axios from 'axios';

const instance = axios.create({
  baseURL: "https://swapi.co/api"
})

export function getPeople(page = 1) {
  return instance.get(`/people?page=${page}`).then(({ data }) => data)
}

export function getPeopleById(id) {
  return instance.get(`/people/${id}`).then(({ data }) => data)
}