import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout';
import UsersList from '../components/user-list';

const UsersPage: NextPage = () => {
  return (
    <Layout>
      <UsersList />
    </Layout>
  );
};

export default UsersPage;
