import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route }) {
    const {item} = route.params;
    console.log(item.body)
    console.log(item.title)
    console.log(item.rating)
    return (
        <View style={globalStyles.container}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
            <Text>{item.rating}</Text>
            
        </View>
    )
}