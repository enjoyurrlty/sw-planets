import React from 'react';
import {StatusBar, Box, Text} from 'native-base';

function AppBar() {
  return (
    <Box>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <Box bg="#6200ee" px="1" py="3" alignItems="center" w="100%">
        <Text color="white" fontSize="20" fontWeight="bold">
          SW Planets App
        </Text>
      </Box>
    </Box>
  );
}

export default AppBar;
