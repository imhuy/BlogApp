import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors, images } from '../../constants';
import { withNavigation } from 'react-navigation';


const myList = [
  {
    "id": 1,
    "image": "americanGangster",
    "title": "American Gangster"
  },
  {
    "id": 2,
    "image": "breakingBad",
    "title": "Breaking Bad"
  },
  {
    "id": 3,
    "image": "starwarsJedi",
    "title": "Star Wars: The Last Jedi"
  },
  {
    "id": 4,
    "image": "guardians2",
    "title": "Guardians of the Galaxy, Vol.2"
  },
  {
    "id": 5,
    "image": "darkKnight",
    "title": "The Dark Knight"
  },
  {
    "id": 6,
    "image": "blackPanther",
    "title": "Black Panther"
  }
]


class ShowScroller extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

    console.log('thispropsss31321')
    console.log(this.props)
  }
  render() {
    const dataArray = Object.values(myList);
    return (
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 4 }}
        data={dataArray}
        horizontal
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => {
          let renderItem = <View style={styles.round} />;

          if (item.image) {
            renderItem = (
              <TouchableOpacity activeOpacity={0.7}
                onPress={() => this.props.navigation.navigate('Content')}
              >
                <Image source={images[item.image]} style={styles.roundImage} />
              </TouchableOpacity >
            );
          }

          return renderItem;
        }}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}


ShowScroller.defaultProps = {
  dataset: 'dumbData',
  type: 'rectangle'
};

ShowScroller.propTypes = {
  // optional
  dataset: PropTypes.string,
  type: PropTypes.string
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.infoGrey,
    height: 131,
    marginRight: 8,
    width: 91
  },
  rectangleImage: {
    height: 131,
    marginRight: 8,
    resizeMode: 'contain',
    width: 91
  },
  round: {
    backgroundColor: colors.infoGrey,
    borderRadius: 48,
    height: 96,
    marginRight: 8,
    width: 96
  },
  roundImage: {
    height: 96,
    marginRight: 8,
    resizeMode: 'contain',
    width: 96
  }
});

// export default withNavigation(ShowScroller);
export default ShowScroller;
