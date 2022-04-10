import React, { FC, useEffect, useState } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, TableContainer, Td } from '@chakra-ui/react';
import { fetchAPI } from '../lib/api';
import { IOrder } from '../interfaces/order';

interface IProductDetailed {
  id: number;
  name: string;
  price: number;
  quantity: number;
  season: string;
  size: string;
  sku: string;
}

const ProductOrderHistory: FC<{ productId: number }> = ({ productId }) => {
  const [product, setProduct] = useState<IProductDetailed | null>(null);
  const [orderHistory, setOrderHistory] = useState<IOrder[] | null>(null);

  useEffect(() => {
    const data = fetchAPI(`/orders/history/${productId}`);

    data.then((data: IOrder[]) => {
      setOrderHistory(data);
    });

    const productData = fetchAPI('/products/' + productId);

    productData.then((data: IProductDetailed) => {
      setProduct(data);
    });
  }, [productId]);

  if (!orderHistory || !product) return null;

  const orderList = orderHistory.map((order, idx) => {
    const { date, total, user, orderItems } = order;

    const orderItemsList = orderItems.map((item, idx) => {
      const { productName, price, quantity } = item;
      return (
        <Tr key={idx}>
          <Td>{productName}</Td>
          <Td>{price}</Td>
          <Td>{quantity}</Td>
        </Tr>
      );
    });

    return (
      <Tr key={idx}>
        <Td>{date}</Td>
        <Td>{`${user.firstName} ${user.lastName}`}</Td>
        <Td>{total}</Td>
        <Td>
          <Table size="sm" variant="simple" border={1}>
            <Thead>
              <Tr>
                <Th>Product title</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>{orderItemsList}</Tbody>
          </Table>
        </Td>
      </Tr>
    );
  });

  return (
    <Box width={'100%'}>
      <Heading mb={5} as="h4" size="md">
        {product.name} Order History
      </Heading>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Customer</Th>
              <Th>Cart total</Th>
              <Th>Products</Th>
            </Tr>
          </Thead>
          <Tbody>{orderList}</Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductOrderHistory;
