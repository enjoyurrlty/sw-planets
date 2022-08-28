import React from 'react';
import {NativeBaseProvider, Flex, Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Planets from './src/screens/Planets';
import AppBar from './src/components/AppBar';

const Stack = createNativeStackNavigator();

function Test() {
  return <Text>Test</Text>;
}

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Flex flexGrow={1}>
          <AppBar />
          <Stack.Navigator>
            <Stack.Screen
              name="Planets"
              component={Planets}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Profile" component={Test} />
          </Stack.Navigator>
        </Flex>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
export default App;
