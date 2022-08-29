import React, {ReactNode} from 'react';
import {Box} from 'native-base';
import AppBar from './AppBar';

type LayoutProps = {
  children: ReactNode;
};

function Layout({children}: LayoutProps) {
  return (
    <>
      <AppBar title="SW Planets App" />
      <Box flexGrow={1} my={2} px={2} pb={6}>
        {children}
      </Box>
    </>
  );
}

export default Layout;
