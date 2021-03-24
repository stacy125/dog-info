import { Component } from 'react';
import './App.css';
import './DogComponent.css';
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
    fetch('https://dogs-api-info.herokuapp.com/dogs').then((response) => response.json()).then((data) => {
      this.setState({
        dogs: data,
        currentPage: 'search',
        Loading: false
      });
    });
  }

  editDog = (dogToEdit) => {
    console.log('edit dog', dogToEdit)


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
            <AllDogs dogs={this.state.dogs} editDog={(dog) => dog !== undefined ? this.editDog(dog) : null} />
          </Route>
          <Route exact path='/edit'>
            <Form dogToEdit={this.state.oneDog} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;