import React, { FC, useEffect } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import { fetchAPI } from '../lib/api';
// import { formatNumber } from '../utils/formatNumber';

const ProductOrderHistory: FC<{ productId: number }> = ({ productId }) => {
  useEffect(() => {
    const data = fetchAPI(`/orders/history/${productId}`);

    data.then((data: any) => {
      console.log('data', data);
    });
  }, [productId]);

  /*  if (!products) return null;

  const productsList = products
    .sort((a, b) => a.id - b.id)
    .map(product => {
      const { id, name, price, desc, productInventory } = product;
      return (
        <Tr key={id}>
          <Td>{id}</Td>
          <Td>{name}</Td>
          <Td>{desc}</Td>
          <Td>{formatNumber(price, '$')}</Td>
          <Td>{productInventory.quantity}</Td>
        </Tr>
      );
    });*/

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
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Inventory quantity</Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductOrderHistory;
