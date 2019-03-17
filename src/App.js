import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import carService from './service/car-service';
import Quiz from './components/Quiz';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: carService.getCars(),
    };
  }

  nextCar() {
    this.setState(() => ({
      cars: carService.getCars(),
    }));
  }

  render() {
    const { cars } = this.state;

    return (
      <div className="App">
        <div>
          <Quiz status={null} choices={cars} next={() => this.nextCar()} />
        </div>
      </div>
    );
  }
}

export default App;
