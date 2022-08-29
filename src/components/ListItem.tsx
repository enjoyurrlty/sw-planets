import React from 'react';
import {Box} from 'native-base';
import {Link} from '@react-navigation/native';

type ListItemProps = {[key: string]: any};

function ListItem({item}: ListItemProps) {
  return (
    <Box
      alignItems="center"
      px={5}
      py={2}
      w="1/2"
      rounded="md"
      bg="primary.300"
      my={2}
      mx="auto">
      <Link to={{screen: 'PlanetDetails', params: {planet: item}}}>
        {item.name}
      </Link>
    </Box>
  );
}

export default ListItem;
