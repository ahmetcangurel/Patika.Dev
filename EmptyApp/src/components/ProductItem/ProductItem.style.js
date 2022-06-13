import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    subContainer: {
        flex: 1,
        justifyContent:'space-between',
        margin: 5,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    price: {
        textAlign: 'right',
    },
})