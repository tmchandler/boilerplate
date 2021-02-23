// top level component -- create more as needed!
// For reference: server POST expects these parameter names: type, quantity, sprinkles, price
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (<div>
      Donuts
    </div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
