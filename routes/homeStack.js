import React from 'react';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const Stack = createStackNavigator()

export default HomeStack = () => {
    return (
    
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#eee',
                    height: 80
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen 
                name='Home' 
                component={Home} 
                options={({ navigation }) => {
                    return {
                        headerTitle: () => <Header navigation={navigation} title='Game Zone'/>
                    }
                }}/>
            <Stack.Screen 
                name='ReviewDetails' 
                component={ReviewDetails} 
                options={{ title: 'Reviews' }} />

        </Stack.Navigator>
    
    )
}