import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
const devive = Dimensions.get('window');
class Downloads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      controls: false,
      paused: true,
      currentTime: 0,
    };
  }
  onLoad(data) {
    console.log('On load fired!');
    this.setState({ duration: data.duration });
  }

  onProgress(data) {
    this.setState({ currentTime: data.currentTime });
  }



  render() {
    return (
      <View >
        <Video
          source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
          controls={true}
          rate={1}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          onProgress={({ currentTime }) => this.setState({ currentTime })}
          style={{ width: devive.width, height: 100 }}
        />
        <Text>{this.state.currentTime}</Text>
      </View>
    );
  }
}

export default Downloads;
