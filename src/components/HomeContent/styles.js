import { Dimensions } from 'react-native';
import { gStyle, colors, device, fonts } from '../../constants';
var deviceWidth = Dimensions.get("window").width;
export default {
    view: {
        width: deviceWidth * 0.75,
        flexDirection: 'row',
        margin: 15,
    },
    image:{
        marginLeft: 10,
        height: 84,
        resizeMode: 'contain',
        width: 72
    },
    title: {
        color: colors.heading,
        fontFamily: fonts.bold,
        fontSize: 14,
        marginTop: 5,
        marginBottom: 5,

        textAlign: 'center'
    },
    content: {
        color: colors.heading,
        fontFamily: fonts.light,
        fontSize: 12,
        // textAlign: 'center'
    },
    category: {
        color: colors.heading,
        fontFamily: fonts.light,
        fontSize: 14,
    },
}