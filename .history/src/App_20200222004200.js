import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

const state = {
    robots: robots,
    searchfield: ''
}

class App extends Component {
    render() {
        constructor() {
            super()
            this.state = {
                robots:robots,
                searchfield:''
            }
        }
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox />
                <CardList robots={robots}/>
            </div>
            
        );
    }
    
}

export default App;