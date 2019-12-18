import React, { Component } from "react";
import { Text, View } from "native-base";
import I18n from "react-native-i18n";

export default function TextComponent(props) {
    return (
        <View>
            <Text style={props.style}>
                {props.isTranslate == true ? I18n.t(props.children) : props.children}
            </Text>
        </View>
    );
}
