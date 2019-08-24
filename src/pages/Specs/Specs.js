import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import './Specs.css'

export default function Specs({ match }) {
    const [specs, setSpecs] = useState([])

    useEffect(() => {
        async function fetchSpecs() {
            const response = await api.get(`${match.params.id}`)
            setSpecs(response.data)

        }
        fetchSpecs()
    }, [])

    return (
        <div className='container'>
            <table>
                <tbody>
                    <tr>
                        <th>Nome: </th>
                        <td>{specs.name}</td>
                    </tr>
                    <tr>
                        <th>Altura: </th>
                        <td>{specs.height}</td>
                    </tr>
                    <tr>
                        <th>Peso: </th>
                        <td>{specs.mass}</td>
                    </tr>
                    <tr>
                        <th>Cor do cabelo: </th>
                        <td>{specs.hair_color}</td>
                    </tr>
                    <tr>
                        <th>Cor da pele: </th>
                        <td>{specs.skin_color}</td>
                    </tr>
                    <tr>
                        <th>Cor dos olhos: </th>
                        <td>{specs.eye_color}</td>
                    </tr>
                    <tr>
                        <th>Data de nascimento: </th>
                        <td>{specs.birth_year}</td>
                    </tr>
                    <tr>
                        <th>Gênero: </th>
                        <td>{specs.gender}</td>
                    </tr>
                    <tr>
                        <th>Terra natal: </th>
                        <td>{specs.homeworld}</td>
                    </tr>
                    <tr>
                        <th>Espécie: </th>
                        <td>{specs.species}</td>
                    </tr>
                    {/* <tr>
                        <th>Veículo: </th>
                        <td>{specs.vehicles}</td>
                    </tr>
                    <tr>
                        <th>Nave: </th>
                        <td>{specs.starships}</td>
                    </tr> */}
                    <tr>
                        <th>Criado em: </th>
                        <td>{specs.created}</td>
                    </tr>
                    <tr>
                        <th>Editado em: </th>
                        <td>{specs.edited}</td>
                    </tr>
                    <tr>
                        <th>URL: </th>
                        <td>{specs.url}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}