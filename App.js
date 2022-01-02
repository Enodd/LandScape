import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
// import { CardStylesInterpolators, TransitionSpecs } from '@react-navigation/stack';
import HomeScreen from './components/screens/homescreen';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "horizontal",
      // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      animation: "fade"
    }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={HomeScreen} />
        <Stack.Screen name="Gallery" component={HomeScreen} />
        <Stack.Screen name="Store" component={HomeScreen} />
        <Stack.Screen name="Settings" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
