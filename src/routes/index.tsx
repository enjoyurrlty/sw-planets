import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import PlanetDetails from '../screens/Details';
import Planets from '../screens/Planets';

export type RootStackParamList = {
  Planets: undefined;
  PlanetDetails: {planet: {[key: string]: any}};
};

export type PlanetsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Planets'
>;

export type PlanetDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PlanetDetails'
>;

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

function Router() {
  return (
    <Navigator initialRouteName="Planets">
      <Screen
        name="Planets"
        component={Planets}
        options={{headerShown: false, headerTitle: 'Planets App'}}
      />
      <Screen
        name="PlanetDetails"
        component={PlanetDetails}
        options={({route}) => ({
          title: route.params.planet.name,
          headerShown: false,
        })}
      />
    </Navigator>
  );
}

export default Router;
