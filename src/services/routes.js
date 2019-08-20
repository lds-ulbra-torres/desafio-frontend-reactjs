import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Lista from '../pages/Lista'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Lista} />
        </BrowserRouter>
    )
}