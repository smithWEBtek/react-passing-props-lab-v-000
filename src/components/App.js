import React, { Component } from 'react';
import FruitBasket from './FruitBasket';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';
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
      
         <Filter filters={getFruitTypes} />

        {/*<FruitBasket />

        <FilteredFruitList />

        <Fruit /> */}
      
      </div>
    )
  }
}

export default App;
