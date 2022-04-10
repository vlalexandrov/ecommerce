import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from '@chakra-ui/react';
import { fetchAPI } from '../lib/api';
import { useRouter } from 'next/router';
import { IUser } from '../interfaces/user';

const UsersList: FC = () => {
  const router = useRouter();
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    const data = fetchAPI('/users');

    data.then((data: IUser[]) => {
      setUsers(data);
    });
  }, []);

  if (!users) return null;

  const usersList = users
    .sort((a, b) => a.id - b.id)
    .map(user => {
      const { id, username, firstName, lastName, email } = user;
      return (
        <Tr key={id}>
          <Td>{id}</Td>
          <Td>{username}</Td>
          <Td>{firstName}</Td>
          <Td>{lastName}</Td>
          <Td>{email}</Td>
          <Td>
            <Button
              colorScheme="blue"
              onClick={() => {
                router.push(`/user/${id}`);
              }}
            >
              View order history
            </Button>
          </Td>
        </Tr>
      );
    });

  return (
    <Box width={'100%'}>
      <Heading mb={5} as="h4" size="md">
        Product list
      </Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Username</Th>
              <Th>First name</Th>
              <Th>Last name</Th>
              <Th>Email</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>{usersList}</Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UsersList;
