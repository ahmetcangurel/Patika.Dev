import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './SongCard.Styles'

const SongCard = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.title}>{props.song.title}</Text>
                </View>
                <View style={styles.section}>
                    <View>
                        <Text style={styles.text}>{props.song.album}</Text>
                        <Text>{props.song.year}</Text>
                    </View>
                    {props.song.isSoldOut &&
                        <View style={styles.soldoutContainer}>
                            <Text style={styles.soldoutText}>SoldOut</Text>
                        </View>}
                </View>
            </View>
        </View>
    )
}

export default SongCard