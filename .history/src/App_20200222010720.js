import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

const state = {
    robots: robots,
    searchfield: ''
}

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots:robots,
            searchfield:''
        }
    }
    
    onSearchChange(event) {
        console.log(event.target.value)
        const filteredRobots = this.state.robots.filter(robot => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase)
        })
    }

    render() {
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={this.state.robots}/>
            </div>
            
        );
    }
    
}

export default App;