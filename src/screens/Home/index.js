import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Dimensions, Image, StyleSheet, ScrollView } from 'react-native';
import { gStyle, colors, device, fonts } from '../../constants';
import { Content } from 'native-base';
// import Cast from '../../components/Cast';
import HeaderHome from '../../components/HeaderHome';
import PromotionBanner from '../../components/PromotionBanner';
import ShowScroller from '../../components/ShowScroller';
const anh = require('../../assets/images/content/good-will-hunting.jpg')
import HomeContent from '../../components/HomeContent';
var deviceHeight = Dimensions.get("window").height;
var deviceWidth = Dimensions.get("window").width;


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeader: true
    };

    this.offset = 0;

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(event) {
    const { showHeader } = this.state;

    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    show = currentOffset < this.offset;

    if (show !== showHeader || this.offset <= 0) {
      // account for negative value with "bounce" offset
      if (this.offset <= 0) show = true;

      this.setState({
        showHeader: show
      });
    }

    this.offset = currentOffset;
  }

  render() {
    const navigation = this.props.navigation;
    const { showHeader } = this.state;

    return (
      <View style={gStyle.container}>
        <HeaderHome
          navigation={navigation}
          show={showHeader} />

        <Content bounces onScroll={this.onScroll} scrollEventThrottle={20}>
          {/* <Content bounces onScroll={this.onScroll} scrollEventThrottle={16}> */}
          <PromotionBanner />
          <Text style={gStyle.heading}>Previews</Text>
          <ShowScroller
            navigation={navigation} />
          <Text style={gStyle.heading}>News</Text>
          <HomeContent data='props' />
        </Content>

        {/* <Cast navigation={navigation} /> */}
      </View>
    );
  }
}

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};


export default Home;
