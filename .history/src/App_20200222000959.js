import React from 'react';
import CardList from './CardList';
import 'tachyons';
import {robots} from './robots';


const App = () =>{
    return(
        <CardList robots={robots}/>
    )
}