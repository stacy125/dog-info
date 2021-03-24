import React, { Component } from 'react';
import DogComponent from './DogComponent.js'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            oneDog: ''
        }
    }

    getDog = (e, dogName) => {
        const dogInput = dogName
        const dog = this.props.dogs.filter(dog => {
            return dog.name.toLowerCase() === dogInput.toLowerCase()
        })
        this.setState({ oneDog: dog })
    }

    handleBreed = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <div>
                <header className="header">WELCOME TO THE COMPLETE GUIDE TO DOGS FROM AROUND THE WORLD!!!</header>

                <button className="submit" onClick={(e) => this.getDog(e, this.state.value)}>
                    Click to get dog info
				</button>
                <div className="search-container">
                    <input
                        className="search"
                        type="text"
                        placeholder="search breed"
                        value={this.state.value}
                        onChange={this.handleBreed}
                    />
                </div>
                {this.state.oneDog.length !== 0 ? <DogComponent dog={this.state.oneDog} /> : null}
            </div>
        );
    }
}