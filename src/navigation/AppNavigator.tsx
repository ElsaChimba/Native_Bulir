import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RestaurantesScreen from '../screens/RestaurantsScreen';
import ReservationScreen from '../screens/ReservationScreen';
import MyReservationsScreen from '../screens/MyReservationsScreen';




const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Restaurantes" component={RestaurantesScreen} />
                <Stack.Screen name="Reservation" component={ReservationScreen} />
                <Stack.Screen name="MyReservations" component={MyReservationsScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
