import React from 'react';
import {Button, Heading, HStack, ScrollView, Text, VStack} from 'native-base';
import {PlanetDetailsScreenProps} from '../routes';

type PlanetDetailsItemProps = {
  itemKey: string;
  itemValue: string;
};

function PlanetDetailsItem({itemKey, itemValue}: PlanetDetailsItemProps) {
  return (
    <HStack backgroundColor="blue.100" px="3" py="2" my="3">
      <Text fontSize="xl" color="primary.600" w="50%">
        {itemKey}
      </Text>
      <Text fontSize="xl" w="50%" textAlign="left">
        {itemValue}
      </Text>
    </HStack>
  );
}

function PlanetDetails({route, navigation}: PlanetDetailsScreenProps) {
  const {planet} = route.params;

  return (
    <ScrollView>
      <VStack>
        <HStack alignItems="center">
          <Heading my={3} fontSize="3xl">
            Planet Details
          </Heading>
          <Button
            onPress={() => navigation.goBack()}
            ml="auto"
            w="25%"
            h="50"
            size="md">
            BACK
          </Button>
        </HStack>
        <PlanetDetailsItem itemKey="Name" itemValue={planet.name} />
        <PlanetDetailsItem itemKey="Climate" itemValue={planet.climate} />
        <PlanetDetailsItem itemKey="Diameter" itemValue={planet.diameter} />
        <PlanetDetailsItem itemKey="Gravity" itemValue={planet.gravity} />
        <PlanetDetailsItem
          itemKey="Orbital Period"
          itemValue={planet.orbital_period}
        />
        <PlanetDetailsItem itemKey="Population" itemValue={planet.population} />
        <PlanetDetailsItem
          itemKey="Rotation Period"
          itemValue={planet.rotation_period}
        />
        <PlanetDetailsItem
          itemKey="Surface Water"
          itemValue={planet.surface_water}
        />
        <PlanetDetailsItem itemKey="Terrain" itemValue={planet.terrain} />
      </VStack>
    </ScrollView>
  );
}

export default PlanetDetails;
