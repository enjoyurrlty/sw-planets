import React from 'react';
import {NativeBaseProvider, Flex} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Flex flexGrow={1}>
          <Router />
        </Flex>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
export default App;
