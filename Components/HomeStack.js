import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home';
import Header from './Header';
const Stack = createStackNavigator();
export default function HomeStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home}
                options={{
                    headerTitle: () => <Header navigation={navigation} />,
                    headerStyle: {
                        backgroundColor: '#4267B2',
                    },
                    headerLeft:false
                }
                }
            />
        </Stack.Navigator>
    )
}
