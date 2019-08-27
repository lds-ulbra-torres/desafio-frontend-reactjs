import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Acoes from '../pages/Acoes'

export default function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component ={Main}/>
        <Route path="/listagem/:id" component={Acoes} />
        </BrowserRouter>
    )
}