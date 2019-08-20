import React, { useEffect, useState } from 'react'
import api from '../services/api'

export default function Lista() {
    const [lista, setlista] = useState([])
    let [page, setPage] = useState(1)

    useEffect(() => {
        async function fetchData() {
            const response = await api.get(`/?page=${page}`)
            setlista(response.data.results)
        }
        fetchData()
    }, [page])

    return (
        <div className='listaContainer'>
            <table>
                <thead><tr><th>Nome</th></tr></thead>
                <tbody>
                    
                    {lista.map((list, index) => (
                        <tr key={index}>
                            <td>{list.name}</td>
                            <td><button type='button'>Ver</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <button type='button' onClick={() => setPage(page - 1)}>Anterior</button>
            <span>Página {page}</span>
            <button type='button' onClick={() => setPage(page + 1)}>Próximo</button>
        </div>
    )
}
