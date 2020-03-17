import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator()

export default HomeStack = () => {
    return (
    
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'orange'
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen 
                name='Home' 
                component={Home} 
                options={{ title: 'Game Zone' }}/>
            <Stack.Screen 
                name='ReviewDetails' 
                component={ReviewDetails} 
                options={{ title: 'Reviews' }} />

        </Stack.Navigator>
    
    )
}