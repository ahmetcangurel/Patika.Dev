import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    infoContainer: {
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    desc: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
    },
})