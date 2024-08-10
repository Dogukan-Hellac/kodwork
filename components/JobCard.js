import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JobCard({ name, type, locations, levels }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.type}>{type}</Text>
            <View style={styles.inner_container}>
                <Text style={styles.locations}>{locations}</Text>
            </View>
            <Text style={styles.levels}>{levels}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    type: {
        fontSize: 15
    },
    inner_container: {
        backgroundColor: 'red',
        borderRadius: 15,
        padding: 6,
        marginTop: 5
    },
    locations: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
    },
    levels: {
        fontWeight: 'bold',
        color: 'red',
        alignSelf: 'flex-end'
    }
})