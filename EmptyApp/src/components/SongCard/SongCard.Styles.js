import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    infoContainer: {
        flex: 1,
        paddingLeft: 10,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    text: {
        marginRight: 5,
    },
    soldoutContainer: {
        borderWidth: 1,
        borderColor: 'red',
        padding: 4,
        borderRadius: 5,
    },
    soldoutText: {
        color: 'red',
    },
})