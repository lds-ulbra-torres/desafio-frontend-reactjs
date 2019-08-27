import React, { useEffect, useState } from 'react'
import  api from '../services/api'
import './Main.css'

export default function Lista( {history} ) {
    const [nome, setNome] = useState([])
    let [page, setPage] = useState(1)

    useEffect(() => {
        async function loadList() {
            const response = await api.get(`?page=${page}`)
            setNome(response.data.results)
        }
        loadList()
    }, [page])

    function loadSpec(spec) {
        history.push(`/listagem/${spec}`)  
    }
    return (
        <>
            <div className='main-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nome.map((list, index) => {
                            return (
                                <tr key={index}>
                                    <td>{list.name}</td>
                                    <td><button type='button' id='buttonVer' onClick={() => loadSpec(index+1)}>Ver</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className='paginas'>
                <button type='button' id='pageButton' onClick={() => setPage(page - 1)}>Anterior</button>
                <button type='button' id='pageButton' onClick={() => setPage(page + 1)}>Próximo</button>
            </div>
        </>
    )
}

