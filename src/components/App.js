import React, { Component } from 'react';
import FruitBasket from './FruitBasket';
import Filter from './Filter';

import { getFruitTypes } from '../fruit'

class App extends Component {
  constructor(){
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null,
    }
  }

  render() {
    return (
      <div>
        <FruitBasket filters={getFruitTypes} />      
      </div>
    )
  }
}

export default App;
