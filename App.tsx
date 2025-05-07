import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IndexScreen from './src/screens/IndexScreen';

import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

const RootNavigation = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigation.Navigator
        initialRouteName='Index'
        screenOptions={NavigatorScreenOptions}
      >
        <RootNavigation.Screen
          name='Index'
          component={IndexScreen}
          options={IndexScreenOptions}
        />
      </RootNavigation.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};

const NavigatorScreenOptions: NativeStackNavigationOptions = {
  title: 'Blogs',
};

const IndexScreenOptions: NativeStackNavigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
