import React, { Component } from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import './App.css'
import Scroll from './Scroll'
class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})})
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
            <Cardlist robots = {filteredRobots}/>

            </Scroll>
            </div>
        );
    }
    
}


export default App;