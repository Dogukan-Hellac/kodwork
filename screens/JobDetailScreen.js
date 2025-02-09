import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import RenderHtml from 'react-native-render-html';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../store/reducer'

export default function JobDetailScreen({ route }) {
    const { id, name, locations, levels, contents } = route.params

    const htmlContent = contents;
    const width = Dimensions.get('window').width;

    const dispatch = useDispatch();
    const ids = useSelector(state => state.ids.value);

    const handleDispatch = () => {
        if (id) {
            if (!ids.includes(id)) {
                dispatch(add(id))
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.top_container}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.inner_container}>
                    <Text style={styles.locationsTitle}>Locations: </Text>
                    <Text style={styles.locations}>{locations}</Text>
                </View>
                <View style={styles.inner_container}>
                    <Text style={styles.levelsTitle}>Job Level: </Text>
                    <Text style={styles.levels}>{levels}</Text>
                </View>

                <Text style={styles.title}>Job Detail</Text>
            </View>
            <View style={styles.medium_container}>
                <ScrollView>
                    <RenderHtml
                        contentWidth={width}
                        source={{ html: htmlContent }}
                    />
                </ScrollView>
            </View>
            <View style={styles.bottom_container}>
                <TouchableOpacity style={styles.button_container} >
                    <Entypo name="login" size={20} color="white" />
                    <Text style={styles.button_text}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_container} onPress={handleDispatch}>
                    <Entypo name="heart" size={20} color="white" />
                    <Text style={styles.button_text}>Favorite Job</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    top_container: {
        flex: 1,
        backgroundColor: 'lightgray',
        padding: 5
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inner_container: {
        flexDirection: 'row',
        margin: 4
    },
    locationsTitle: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 13
    },
    locations: {
        fontWeight: 'bold',
        fontSize: 13
    },
    levelsTitle: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 13
    },
    levels: {
        fontWeight: 'bold',
        fontSize: 13
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        bottom: 5,
        position: 'absolute'
    },
    medium_container: {
        flex: 5,
        backgroundColor: 'white',
        borderWidth: 0.5,
        padding: 10
    },
    contents: {},
    bottom_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button_container: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
        borderRadius: 10
    },
    button_text: {
        color: 'white',
        marginLeft: 10
    }
})