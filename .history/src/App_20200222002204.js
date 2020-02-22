import React, {Fragment} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


const App = () =>{
    return(
        <div className='text'>
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
        
    )
}

export default App;