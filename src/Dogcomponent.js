import React, { Component } from 'react';

class DogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: { ...props }
        };
    }

    render() {
        console.log(this.props.dog[0]);
        return (
            <div>
                <div>
                    <h1>{this.props.dog.name}</h1>
                </div>
                <div>
                    <header>SEARCH FOR YOUR FUTURE DOG</header>
                    <h1>{this.props.dog[0].name}</h1>
                    <p>Life Span {this.props.dog[0].life_span}</p>
                    <div>
                        Temperament
						<p>{this.props.dog[0].temperament}</p>
                    </div>
                    <p>Bred For {this.props.dog[0].bred_for}</p>
                    <p>Weight {this.props.dog[0].weight.imperial}</p>
                    <img id="update-img" src={this.props.dog[0].image.url} alt="breeds" />
                </div>
            </div>
        );
    }
}

export default DogComponent;