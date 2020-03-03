
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import Header from '../../../src/components/Header';

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  OpenWebView() {
    return <WebView source={{ uri: 'https://trends.google.com/trends/hottrends/visualize' }} />;
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <WebView source={{ uri: 'https://trends.google.com/trends/hottrends/visualize?nrow=5&ncol=5&pn=p28' }} />
      </React.Fragment>
    );
  }
}

export default More;
