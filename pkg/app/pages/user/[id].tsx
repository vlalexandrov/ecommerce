import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import UserOrderHistory from '../../components/user-order-history';

const UserPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return (
    <Layout>
      <UserOrderHistory userId={id} />
    </Layout>
  );
};

export default UserPage;
