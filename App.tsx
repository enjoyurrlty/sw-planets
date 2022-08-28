import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Planets from './src/screens/Planets';

const App = () => {
  return (
    <NativeBaseProvider>
      <Planets />
    </NativeBaseProvider>
  );
};
export default App;
