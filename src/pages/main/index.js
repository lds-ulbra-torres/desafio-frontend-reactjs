import React, { Component } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

import './styles.css'

export default class Main extends Component {
  state = {
    peoples: [],
    peopleInfo: [],
    pages: 1,
  }

  componentDidMount() {
    this.loadPeoples()
  }

  loadPeoples = async (page = 1) => {
    const response = await api.get(`/people?page=${page}`)

    const { results, ...peopleInfo } = response.data

    this.setState({ peoples: results, peopleInfo, page })
    console.log(response.data)
  }

  prevPage = () => {
    const { page } = this.state

    if (page === 1) return

    const pageNumber = page - 1

    this.loadPeoples(pageNumber)
  }

  nextPage = () => {
    const { page, peopleInfo } = this.state

    if (page === peopleInfo.pages) return

    const pageNumber = page + 1

    this.loadPeoples(pageNumber)
  }

  render() {
    const { peoples, page, peopleInfo } = this.state

    return (
      <div className="peoples-list">
        {peoples.map(people => {
          const id = people.url.substring(28).replace('/', '')

          return (<article key={id}>
            <strong>{people.name}</strong>
            <Link to={`/people/${id}`}>Ver</Link>
          </article>)
        }
        )}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === peopleInfo.page} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    )
  }
}
