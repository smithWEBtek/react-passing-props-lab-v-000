import React, { Component } from 'react';

class Filter extends Component {
  // constructor(props) {
    // super(props);

  //   this.state = {
  //     filters: []
  //   };
  // }

  // componentWillMount() {
  //   this.fetchFilters();
  // }

  // fetchFilters = () => {
  //   fetch('/api/fruit_types')
  //     .then(response => response.json())
  //     .then(filters => this.setState({ filters }));
  // }

  
  //instead of fetching filters, we pass an array of filters 
  // changed default prop filters: to []
  
  handleChange = () => {
    debugger
  }


    //do something because the filter was changed
    //use 'event' to identify the value of the filter choice
    // console.log(e.target.value)
// when filter chosen, handleChange calls FruitBasket component with props:
    // fruit: [],
    // filters: [],
    // currentFilter: "",
    // updateFilterCallback: ""


  
  render() {
    const filters = this.props.filters()
    // debugger

    return (
      <select onChange={this.props.handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
    );
  }
}

Filter.defaultProps = {
  filters: [], 
  handleChange: null
}

export default Filter;
