import axios from 'axios';
import moment from 'moment';

const instance = axios.create({
  baseURL: "https://swapi.co/api"
})

export function getPeople(page = 1) {
  return instance.get(`/people?page=${page}`).then(({ data }) => data)
}

export function getPersonById(id) {
  return instance.get(`/people/${id}`)
    .then(({ data }) => data)
    .then(sanitizePerson())

  function sanitizePerson() {
    return data => {
      data.created = moment(data.created).format('DD/MM/YYYY HH:mm');
      data.edited = moment(data.edited).format('DD/MM/YYYY HH:mm');
      return data;
    };
  }
}