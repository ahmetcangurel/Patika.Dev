import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        padding: 10,
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.width / 3,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    desc: {
        marginVertical: 5,
        fontStyle: 'italic',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'right',
    },
})