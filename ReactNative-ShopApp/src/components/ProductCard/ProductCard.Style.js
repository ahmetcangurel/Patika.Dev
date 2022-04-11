import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 10,
        margin: 5,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        color: '#888',
        marginVertical: 10,
    },
})