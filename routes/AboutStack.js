import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header';

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
                options={({ navigation }) => {
                    return {
                        headerTitle: () => <Header navigation={navigation} title='About Game Zone'/>
                    }
                }}/>

        </Stack.Navigator>
    
    )
}