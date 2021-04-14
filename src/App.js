import { Component } from 'react';
import './App.css';
import './Dogcomponent.css';
import Nav from './Nav';
import Homepage from './Homepage';
import AllDogs from './AllDogs'
import Form from './Form'
import { Switch, Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      Loading: true,
      dogToEdit: ''
    };
  }

  componentDidMount() {
    this.getAllDogs()
  }

  getAllDogs = async () => {
    await fetch('https://dogs-api-info.herokuapp.com/dogs').then((response) => response.json()).then((data) => {
      this.setState({
        dogs: data,
        Loading: false
      });
    });
  }

  deleteDog = (_id) => {
    fetch('https://dogs-api-info.herokuapp.com/dogs/' + _id, { method: "DELETE" })
      .then(() => this.getAllDogs())
  }

  editDog = (dogToEdit) => {
    this.setState({ oneDog: dogToEdit })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {/* We now call the Switch component from react-router-dom so that we can use this to switch between different components */}
        <Switch>

          <Route exact path="/home">
            <Homepage dogs={this.state.dogs} />
          </Route>
          <Route exact path='/alldogs'>
            <AllDogs dogs={this.state.dogs} editDog={(dog) => dog !== undefined ? this.editDog(dog) : null} deleteDog={(dog) => dog !== undefined ? this.deleteDog(dog.id) : null} />
          </Route>
          <Route exact path='/edit'>
            <Form dogToEdit={this.state.oneDog} getAllDogs={this.getAllDogs} deleteDog={(dog) => dog !== undefined ? this.deleteDog(dog.id) : null} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;