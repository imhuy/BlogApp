import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
var deviceWidth = Dimensions.get("window").width;
const anh = require('../../assets/images/content/good-will-hunting.jpg')
const data = [
    {
        id: '1',
        title: "Title1 Every Mobile App You’ve Ever Used Has This One Feature",
        content: 'Content Every Mobile App You’ve Ever Every Mobile App You’ve',
        image: anh
    },
    {
        id: '2',
        title: "Title2 Every Mobile App You’ve Ever Used Has This One Feature",
        content: 'Content Every Mobile App You’ve Ever Every Mobile App You’ve',
        image: anh
    },
    {
        id: '1',
        title: "Title1 Every Mobile App You’ve Ever Used Has This One Feature",
        content: 'Content Every Mobile App You’ve Ever Every Mobile App You’ve',
        image: anh
    },
]

class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }

    componentDidMount() {

    }

    onClick(id) {
        console.log('id31312312311')
        console.log(id)
    }
    render() {
        return (

            <FlatList
                data={data}
                renderItem={({ item, i }) => (
                    <TouchableOpacity activeOpacity={0.7}
                        onPress={() => this.onClick(item.image)}
                    >

                        <View style={styles.view}>
                            <View >
                                <Text style={styles.title}>{item.title} </Text>
                                <Text style={styles.content}>{item.content} </Text>
                            </View>
                            <Image source={anh} style={styles.image} />

                        </View>

                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => String(index)}
            // extraData={selected}
            />

        );
    }
}

export default HomeContent;


