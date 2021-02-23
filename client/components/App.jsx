// top level component -- create more as needed!
// For reference: server POST expects these parameter names: type, quantity, sprinkles, price
import React from 'react';
import ReactDOM from 'react-dom';
import dummydata from './dummydata.js';
import DonutList from './DonutList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donuts: []
    };
  }

  componentDidMount() {
    this.getAllDonuts();
  }

  getAllDonuts() {
    axios.get('/donuts')
    .then(donuts => {
      this.setState({ donuts: donuts.data })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
    <div>
      <DonutList dummydata={this.state.donuts}/>
    </div>);
  }
}

export default App;
