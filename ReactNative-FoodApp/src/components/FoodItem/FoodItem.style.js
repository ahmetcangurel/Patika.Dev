import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'space-between',
        marginVertical: 5,
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,.5)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '100%',
        textAlign: 'right',
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
})