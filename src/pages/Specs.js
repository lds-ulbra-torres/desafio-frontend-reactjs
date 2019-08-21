import React, { useEffect, useState } from 'react'
import api from '../services/api'

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
        <div className='specsContainer'>
            Name: {specs.name}
            Species: {specs.species}
        </div>
    )
}