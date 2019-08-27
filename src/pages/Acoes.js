import React, { useEffect, useState } from 'react'
import api from '../services/api'
import './Acoes.css'


export default function Specs({ match }) {
    const [acoes, setAcoes] = useState([])

    useEffect(() => {
        async function loadAcoes() {
            const response = await api.get(`${match.params.id}`)
            setAcoes(response.data)
        }
        loadAcoes()
    }, [])

    
    return (
        <div className='container'>
            <table>
                <tbody>
                    <tr>
                        <th>Nome: </th>
                        <td>{acoes.name}</td>
                    </tr>
                    <tr>
                        <th>Altura: </th>
                        <td>{acoes.height}</td>
                    </tr>
                    <tr>
                        <th>Peso: </th>
                        <td>{acoes.mass}</td>
                    </tr>
                    <tr>
                        <th>Cor do cabelo: </th>
                        <td>{acoes.hair_color}</td>
                    </tr>
                    <tr>
                        <th>Cor da pele: </th>
                        <td>{acoes.skin_color}</td>
                    </tr>
                    <tr>
                        <th>Cor dos olhos: </th>
                        <td>{acoes.eye_color}</td>
                    </tr>
                    <tr>
                        <th>Data de nascimento: </th>
                        <td>{acoes.birth_year}</td>
                    </tr>
                    <tr>
                        <th>Gênero: </th>
                        <td>{acoes.gender}</td>
                    </tr>
                    <tr>
                        <th>Terra natal: </th>
                        <td>{acoes.homeworld}</td>
                    </tr>
                    <tr>
                        <th>Filmes: </th>
                        <td>{acoes.films}</td>
                    </tr>
                    <tr>
                        <th>Espécie: </th>
                        <td>{acoes.species}</td>
                    </tr>
                    <tr>
                        <th>Veículo: </th>
                        <td>{acoes.vehicles}</td>
                    </tr>
                    <tr>
                        <th>Nave: </th>
                        <td>{acoes.starships}</td>
                    </tr>
                    <tr>
                        <th>Criado em: </th>
                        <td>{acoes.created}</td>
                    </tr>
                    <tr>
                        <th>Editado em: </th>
                        <td>{acoes.edited}</td>
                    </tr>
                    <tr>
                        <th>URL: </th>
                        <td>{acoes.url}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}