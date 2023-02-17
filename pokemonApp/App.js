import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import { Provider } from 'react-redux';
import  store  from './store';
import PokemonDetail from './screens/PokemonDetail';

const Stack = createStackNavigator()

export default function App() {

  return (

    <Provider store={store} >

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>

          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} ></Stack.Screen>
          <Stack.Screen name='Pokemon Detail' component={PokemonDetail} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
