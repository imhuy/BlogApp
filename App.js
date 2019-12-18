import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Stack from './src/navigation/Stack';
import { StatusBar } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="light-content" />
        <Stack />
      </React.Fragment>
    );
  }
}

export default App;
