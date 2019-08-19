import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Lista() {
    const [personagem, setPersonagem] = useState([])

    useEffect(() => {
        async function loadGalera() {
            const response = await api.get('/')
            const data = response.data.results
            console.log(data)
            setPersonagem(data)
        }
        loadGalera()
    }, [])
    return (
        <div className="listaContainer">
            <h1>Lista de personagens</h1>
            {personagem.map(personagem => (<p>{personagem.name}</p>))}
        </div>
    )
}