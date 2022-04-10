import React, { FC, useEffect, useState } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { fetchAPI } from '../lib/api';
import { IProduct } from '../interfaces/product';
import { formatNumber } from '../utils/formatNumber';

const ProductList: FC = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const data = fetchAPI('/products');

    data.then((data: IProduct[]) => {
      setProducts(data);
    });
  }, []);

  if (!products) return null;

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
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Inventory quantity</Th>
            </Tr>
          </Thead>
          <Tbody>{productsList}</Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductList;
