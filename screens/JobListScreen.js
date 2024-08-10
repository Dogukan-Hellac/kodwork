import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useFetch from '../hooks/useFetch';
import JobCard from '../components/JobCard';
import { API_URL } from '@env';

export default function JobListScreen({ navigation }) {
    const { data, loading, error } = useFetch(API_URL + '?page=0')

    if (loading)
        return <ActivityIndicator size='large' />

    if (error)
        return <Text>Error: {error}</Text>

    if (!data || !data.results || data.results.length === 0) {
        return <Text>No data available</Text>;
    }

    const handleNavigate = (id, name, locations, levels, contents) => {
        navigation.navigate('Details', { id, name, locations, levels, contents })
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    const locations = item.locations.map(location => location.name).join(', ')
                    const levels = item.levels.map(level => level.name).join(', ')
                    return (
                        <JobCard
                            name={item.name}
                            type={item.type}
                            locations={locations}
                            levels={levels}
                            onPress={() => handleNavigate(item.id, item.name, locations, levels, item.contents)} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
    }
})