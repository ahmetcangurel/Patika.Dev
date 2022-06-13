import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        margin: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    desc: {
        fontSize: 14,
        color: '#000',
    },
    location: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#ef5350',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 15,
        alignSelf: 'flex-start',
        marginVertical: 5,
    },
    level:{
        fontSize: 14,
        textAlign: 'right',
        color: '#ef5350',
    },
})