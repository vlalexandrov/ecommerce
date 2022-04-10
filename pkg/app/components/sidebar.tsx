import React, { FC } from 'react';
import Link from 'next/link';
import { Box, VStack, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Sidebar: FC = () => {
  return (
    <VStack align="flex-start" h="full" w={'15%'} minW={200} flexShrink={0}>
      <Box w={'100%'} h="full" pr={5} borderRadius={10}>
        <MenuItem link={'/generator'} title={'Proposal Generator'} />
        <Divider mt={3} mb={3} />
        <MenuItem link={'/archive'} title={'Saved Proposals'} />
        <MenuItem link={'/faq'} title={'FAQ'} />
        <Divider mt={3} mb={3} />
        <MenuItem link={'/portfolio'} title={'Portfolio'} />
      </Box>
      <Box fontSize="sm">
        <a href="/api/auth/logout">Logout</a>
      </Box>
    </VStack>
  );
};

const MenuItem: FC<{
  link: string;
  title: string;
}> = ({ link, title }) => {
  const router = useRouter();
  const bgColor = router.pathname === link ? 'green.50' : 'transparent';
  return (
    <Box w={'100%'} fontSize="sm" p={2} pl={4} pr={4} borderRadius={5} bg={bgColor}>
      <Link href={link} passHref>
        <a>{title}</a>
      </Link>
    </Box>
  );
};

export default Sidebar;
