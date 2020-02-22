import React, {Fragment} from 'react';
import CardList from './CardList';
import {robots} from './robots';


const App = () =>{
    return(
        <Fragment>
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </Fragment>
        
    )
}

export default App;