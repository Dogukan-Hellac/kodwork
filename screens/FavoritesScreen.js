import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '@env';
import useFetch from '../hooks/useFetch';
import JobCard from '../components/JobCard';
import { remove } from '../store/reducer';

export default function FavoritesScreen({ navigation }) {
    const ids = useSelector(state => state.ids.value);
    const { data, loading, error } = useFetch(API_URL + '?page=0')

    const dispatch = useDispatch();

    if (loading)
        return <ActivityIndicator size='large' />

    if (error)
        return <Text>Error: {error}</Text>

    if (!data || !data.results || data.results.length === 0) {
        return <Text>No data available</Text>;
    }

    const Favorites = data.results.filter(item => ids.includes(item.id));

    const handleNavigate = (id, name, locations, levels, contents) => {
        navigation.navigate('Details', { id, name, locations, levels, contents })
    }

    const handleRemove = (id) => {
        dispatch(remove(id))
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={Favorites}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const locations = item.locations.map(location => location.name).join(', ')
                    const levels = item.levels.map(level => level.name).join(', ')
                    return (
                        <JobCard
                            name={item.name}
                            type={item.type}
                            locations={locations}
                            levels={levels}
                            onPress={() => handleNavigate(item.id, item.name, locations, levels, item.contents)}
                            favorite
                            remove={() => handleRemove(item.id)} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})