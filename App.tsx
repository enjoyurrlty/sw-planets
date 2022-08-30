import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routes';
import Layout from './src/components/Layout';

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Layout>
          <Router />
        </Layout>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
export default App;
