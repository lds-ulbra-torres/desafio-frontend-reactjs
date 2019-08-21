import React, { useEffect, useState } from 'react'
import api from '../services/api'
import './Lista.css'

export default function Lista({ history }) {
    const [lista, setlista] = useState([])
    let [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/?page=${page}`)
            setlista(response.data.results)
        }
        fetchData()
    }, [page])

    function fetchSpec(id){
        history.push(`specs/${id}`)
    }

    return (
        <div className='listaContainer'>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((list, index) => (
                        <tr key={index++}>
                            <td>{list.name}</td>
                            <td><button type='button' id='buttonSpec' onClick={() => fetchSpec(index)}>Ver</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type='button' id='buttonPage' onClick={() => setPage(page - 1)}>Anterior</button>
            <button type='button' id='buttonPage' onClick={() => setPage(page + 1)}>Próximo</button>
        </div>
    )
}