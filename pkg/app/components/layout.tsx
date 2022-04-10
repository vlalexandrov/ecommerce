import React, { FC } from 'react';
import { Grid, HStack } from '@chakra-ui/react';
import Sidebar from './sidebar';

const Layout: FC = ({ children }) => {
  return (
    <Grid minH="100vh" h="100vh" p={5} overflow={'auto'}>
      <HStack w="full" h={'100%'} spacing={2} align="flex-start" minH={0}>
        <Sidebar />
        <HStack w="full" h={'100%'} spacing={2} pr={5} align="flex-start" overflow={'auto'}>
          {children}
        </HStack>
      </HStack>
    </Grid>
  );
};

export default Layout;
