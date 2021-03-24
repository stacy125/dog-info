import React, { Component } from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // This is where you will create a function where you will make a fetch call to your edit route from your api.
    //  You will save all the user input  in the state and then you will then send that user input data living in state to your API
    // submitNewDog = (e) => {
    //     e.preventDefault()
    //     this.props.updateDog(this.props)
    // }


    render() {
        console.log('edit dog inside form', this.props);
        return (
            <form className="form">
                <div className="form-container">
                    <div>
                        <label for="breed">Breed:</label>
                        <input className="input" name="breed" placeholder={this.props.dogToEdit.name} />
                    </div>
                    <div>
                        <label for="life_span">Life Span:</label>
                        <input className="input2" name="life_span" placeholder={this.props.dogToEdit.name} />
                    </div>
                    <div>
                        <label for="bred_for">Bred For:</label>
                        <input className="input3" name="bred_for" placeholder={this.props.dogToEdit.name} />
                    </div>
                    <div>
                        <label for="temperament">Temperament:</label>
                        <input className="input4" name="temperament" placeholder={this.props.dogToEdit.name} />
                    </div>
                    <div>
                        <label for="weight">Weight:</label>
                        <input className="input5" name="weight" placeholder={this.props.dogToEdit.name} />
                    </div>
                    <div>
                    </div>
                    <div className="button">
                        <button className="update-dog">Update Dog</button>
                    </div>
                </div>
            </form>
        );
    }
}