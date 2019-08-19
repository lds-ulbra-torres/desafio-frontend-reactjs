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

    return (
      <div className="people-info">
        <h1>{people.name}</h1>
        <p>{people}</p>
      </div>
    )
  }
}
