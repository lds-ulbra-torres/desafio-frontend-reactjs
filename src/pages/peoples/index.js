import React, { Component } from 'react'
import api from '../../services/api'

import './styles.css'

export default class Peoples extends Component {
  state = {
    people: [],
  }

  async componentDidMount() {
    const { id } = this.props.match.params

    const response = await api.get(`/people/${id}`)

    this.setState({ people: response.data })
  }

  render() {
    const { people } = this.state
    console.log(people)
    return (
      <div className="people-info">
        <p>Nome: {people.name}</p>
        <p>Tamanho: {people.height}</p>
        <p>Peso: {people.mass}</p>
        <p>Cor do cabelo: {people.hair_color}</p>
        <p>Cor da pele: {people.skin_color}</p>
        <p>Cor dos olhos: {people.eye_color}</p>
        <p>Idade: {people.birth_year}</p>
      </div>
    )
  }
}
