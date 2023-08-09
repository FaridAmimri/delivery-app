/** @format */

import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import CartScreen from './screens/CartScreen'
import OrderPrepairingScreen from './screens/OrderPrepairingScreen'

export default function Navigation() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Restaurant' component={RestaurantScreen} />
        <Stack.Screen
          name='Cart'
          component={CartScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen
          name='OrderPrepairing'
          component={OrderPrepairingScreen}
          options={{ presentation: 'fullScreenModal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
