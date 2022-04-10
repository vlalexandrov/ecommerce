import React from 'react';
import { NextPage } from 'next';
import ProductOrderHistory from '../../components/product-order-history';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return (
    <Layout>
      <ProductOrderHistory productId={id} />
    </Layout>
  );
};

export default ProductPage;
