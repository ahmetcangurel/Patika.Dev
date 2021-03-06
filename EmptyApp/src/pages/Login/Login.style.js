import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64b5f6',
    },
    logo: {
        height: Dimensions.get('window').height * 0.3,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white',
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
})