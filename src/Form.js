import React, { Component } from 'react';


export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogToEdit: {
                weight: {
                    imperial: ""
                },
                image: {
                    url: ""
                }
            },
            newDog: {
                weight: {
                    imperial: ""
                },
                image: {
                    url: ""
                }
            },
            newDogs: []
        };
    }

    createNewDog = (e) => {
        e.preventDefault()
        const newDog = this.state.newDog
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newDog)
        }
        fetch('https://dogs-api-info.herokuapp.com/dogs', requestOptions)
            .then(res => res.json())
            .then(returnedDogs => {
                this.props.getAllDogs()
            })
    }




    formChange = (e) => {

        this.setState({
            newDog: { ...this.state.newDog, [e.target.name]: e.target.value },
        })
    }

    weightFormChange = (e) => {
        if (e.target.name === "weight") {
            this.setState({
                newDog: {
                    ...this.state.newDog,
                    weight: {
                        imperial: e.target.value
                    },
                }
            })
        }
    }
    imageFormChange = (e) => {
        if (e.target.name === "image") {
            this.setState({
                newDog: {
                    ...this.state.newDog,
                    image: {
                        url: e.target.value
                    }
                }
            })
        }
    }


    handleEditChange = (e) => {
        this.setState({
            dogToEdit: { ...this.state.dogToEdit, [e.target.name]: e.target.value }
        })
    }

    weightEditChange = (e) => {
        this.setState({
            dogToEdit: {
                ...this.state.dogToEdit,
                weight: {
                    imperial: e.target.value
                },
            }
        })
    }
    imageEditChange = (e) => {
        this.setState({
            dogToEdit: {
                ...this.state.dogToEdit,
                image: {
                    url: e.target.value
                },

            }
        })
    }
    updateDog = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.dogToEdit)
        }
        const response = await fetch('https://dogs-api-info.herokuapp.com/dogs/' + String(this.props.dogToEdit._id), requestOptions)
        const responseJson = await response.json()
        if (responseJson) {
            this.props.getAllDogs()
        }
    }


    render() {
        return (
            <div>
                <form className="form" onSubmit={this.createNewDog}>
                    <div className="form-container">
                        <div>
                            <label for="breed">Breed:</label>
                            <input className="input" name="breed" value={this.state.newDog.breed} onChange={this.formChange} />
                        </div>
                        <div>
                            <label for="life_span">Life Span:</label>
                            <input className="input2" name="life_span" value={this.state.newDog.life_span} onChange={this.formChange} />
                        </div>
                        <div>
                            <label for="bred_for">Bred For:</label>
                            <input className="input3" name="bred_for" value={this.state.newDog.bred_for} onChange={this.formChange} />
                        </div>
                        <div>
                            <label for="temperament">Temperament:</label>
                            <input className="input4" name="temperament" value={this.state.newDog.temperament} onChange={this.formChange} />
                        </div>
                        <div>
                            <label for="weight">Weight:</label>
                            <input className="input5" name="weight" value={this.state.newDog.weight.imperial} onChange={this.weightFormChange} />
                        </div>
                        <div>
                            <label for="image">Image Url:</label>
                            <input className="input6" name="image" value={this.state.newDog.image.url} onChange={this.imageFormChange} />
                        </div>
                        <div>
                        </div>
                        <div className="button">
                            <button className="update-dog" type="submit">Create Dog</button>
                        </div>
                    </div>
                </form>
                <div>
                </div>
                <div>
                    <form className="form" >
                        <div className="form-container">
                            <div>
                                <label for="name">Breed:</label>
                                <input className="input" name="name" value={this.state.dogToEdit.name} onChange={this.handleEditChange} />
                            </div>
                            <div>
                                <label for="life_span">Life Span:</label>
                                <input className="input2" name="life_span" value={this.state.dogToEdit.life_span} onChange={this.handleEditChange} />
                            </div>
                            <div>
                                <label for="bred_for">Bred For:</label>
                                <input className="input3" name="bred_for" value={this.state.dogToEdit.bred_for} onChange={this.handleEditChange} />
                            </div>
                            <div>
                                <label for="temperament">Temperament:</label>
                                <input className="input4" name="temperament" value={this.state.dogToEdit.temperament} onChange={this.handleEditChange} />
                            </div>
                            <div>
                                <label for="weight">Weight:</label>
                                <input className="input5" name="weight" value={this.state.dogToEdit.weight.imperial} onChange={this.weightEditChange} />
                            </div>
                            <div>
                                <label for="image">Image Url:</label>
                                <input className="input5" name="image" value={this.state.dogToEdit.image.url} onChange={this.imageEditChange} />
                            </div>
                            <div>
                            </div>
                            <div className="button">
                                <button className="update-dog" onClick={this.updateDog}>Edit Dog</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}