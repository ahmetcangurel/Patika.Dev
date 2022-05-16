import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: '#4c9a2a',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    doneContainer:{
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    title: {
        color: '#fff',
        fontSize: 18,
    },
    doneTitle:{
        color: '#ddd',
        fontSize: 18,
        fontStyle: 'italic',
        textDecorationLine: 'line-through',
    },
})