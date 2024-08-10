import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useFetch from '../hooks/useFetch';
import JobCard from '../components/JobCard';

export default function JobListScreen() {
    const { data, loading, error } = useFetch()

    if (loading)
        return <ActivityIndicator size='large' />

    if (error)
        return <Text>Error: {error}</Text>

    if (!data || !data.results || data.results.length === 0) {
        return <Text>No data available</Text>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.results}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const locations = item.locations.map(location => location.name).join(', ')
                    const levels = item.levels.map(level => level.name).join(', ')
                    return (
                        <JobCard
                            name={item.name}
                            type={item.type}
                            locations={locations}
                            levels={levels} />
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