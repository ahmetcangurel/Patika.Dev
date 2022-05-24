import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        textAlign: 'right',
        fontSize: 14,
        fontStyle: 'italic',
    },
})