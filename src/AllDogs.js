import React from 'react';
import { Link } from 'react-router-dom'

export default function AllDogs(props) {
    const renderSomeDogs = props.dogs.map((dog) => (
        <div className="render">
            <div>{dog.name}</div>
            <p>{dog.life_span}</p>
            <p>{dog.bred_for}</p>
            <div>
                <p> {dog.temperament}</p>
            </div>
            <p>{!dog.weight.imperial ? "" : dog.weight.imperial}</p>
            <div>
                <button onClick={() => props.deleteDog(dog)}>DELETE</button>
                <button onClick={() => props.editDog(dog)}>
            <Link to='/edit'>
                EDIT
            </Link>
                </button>
            </div>
            <img id="update-img" src={!dog.image.url ? "" : dog.image.url} alt="breeds" />
        </div>
    ));
    return (
        <div>
            <div>{renderSomeDogs}</div>
        </div>
    );
}