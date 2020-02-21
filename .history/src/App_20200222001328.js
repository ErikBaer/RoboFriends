import React from 'react';
import CardList from './CardList';
import {robots} from './robots';


const App = () =>{
    return(
        <Fragment>
            <h1>Power-Rangers</h1>
            <CardList robots={robots}/>
        </Fragment>
        
    )
}

export default App;