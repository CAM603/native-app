import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const Stack = createStackNavigator()

export default AboutStack = () => {
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
                name='About' 
                component={About} 
                options={{ title: 'About' }}/>

        </Stack.Navigator>
    
    )
}