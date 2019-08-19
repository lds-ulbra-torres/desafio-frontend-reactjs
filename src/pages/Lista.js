import React, { useEffect, useState } from 'react'
import api from '../services/api'
import './Lista.css'

export default function Lista() {
    const [personagem, setPersonagem] = useState([])

    useEffect(() => {
        async function loadGalera() {
            const response = await api.get('/')
            const data = response.data.results
            // console.log(data)
            setPersonagem(data)
        }
        loadGalera()
    }, [])
    return (
        <div className="listaContainer">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {personagem.map((personagem, index) => (
                        <tr key={index}>
                            <td>
                                {personagem.name}
                            </td>
                            <td>
                                <button type='button'>Ver</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}