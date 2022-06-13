import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {},
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#36454f',
    },
    infoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    infoLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 5,
        color: '#ef5350',
    },
    infoValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    bodyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#36454f',
        marginVertical: 10,
        textAlign: 'center',
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})