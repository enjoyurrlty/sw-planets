import React from 'react';
import {StatusBar, Box, Text} from 'native-base';

type AppBarProps = {
  title?: string;
};

const AppBar = ({title}: AppBarProps) => {
  return (
    <Box>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <Box bg="#6200ee" px="1" py="3" alignItems="center" w="100%">
        <Text color="white" fontSize="20" fontWeight="bold">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default AppBar;
