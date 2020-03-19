import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../shared/Card';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        {title: 'Residential Evils 10', rating: 5, body: 'Just like the original!', key: '1'},
        {title: 'Red Dead Premonition', rating: 4, body: 'So scary!', key: '2'},
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Biggest Zelda game so far!', key: '3'}
    ])

    const addReview = (review) => {
        review.key = reviews.length + 1;
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        })
        setModalOpen(false)
    }
    
    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons
            name='add'
            size={24}
            onPress={() => setModalOpen(true)}
            style={styles.modalToggle}
            />
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
const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#BADA22',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 40,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }
})