import React from 'react';
import { Login, Recipe, Search, Settings, Bookmark } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home2"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />
                <Stack.Screen
                    name="Search"
                    component={Search}
                />
                <Stack.Screen
                    name="Bookmark"
                    component={Bookmark}
                />
                <Stack.Screen
                    name="Settings"
                    component={Settings}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;