import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import ProductList from '../components/product-list';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default IndexPage;
