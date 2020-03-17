import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/Card';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {title: 'Residential Evils 10', rating: 5, body: 'Just like the original!', key: '1'},
        {title: 'Red Dead Premonition', rating: 4, body: 'So scary!', key: '2'},
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Biggest Zelda game so far!', key: '3'}
    ])
    
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', {item})}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            
        </View>
    )
}