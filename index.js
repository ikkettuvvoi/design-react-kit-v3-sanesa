import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { Alert, Card } from 'design-react-kit/dist/design-react-kit';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React App'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <Alert>Yo</Alert>

          <Card
            hasSpace
            hasShade
            link="#"
            title="Lorem ipsum dolor sit amet, consectetur adipiscing…"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing…"
          />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
