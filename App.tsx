import React from 'react';
import {NativeBaseProvider, Flex} from 'native-base';
import Planets from './src/screens/Planets';
import AppBar from './src/components/AppBar';

const App = () => {
  return (
    <NativeBaseProvider>
      <Flex flexGrow={1}>
        <AppBar />
        <Planets />
      </Flex>
    </NativeBaseProvider>
  );
};
export default App;
