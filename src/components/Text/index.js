import { Text, View } from 'native-base';
import React, { Component } from 'react';
import I18n from 'react-native-i18n';

export default class reactApp extends Component {
    constructor() {
        super()
        this.state = {
            CustomizeText: '',
            style: {},
            isTranslate: false,
        }
    }

    render() {
        return (
            <View>
                <Text numberOfLines={this.props.numberOfLines} style={this.props.style}>
                    {this.props.isTranslate == true ?
                        I18n.t(this.props.children) : this.props.children}
                </Text>
            </View>
        );
    }
}