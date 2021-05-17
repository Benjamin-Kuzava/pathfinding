import React from 'react';
import { Grid } from '../components/Grid';
import { Layout } from '../components/Layout';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <Grid />
    </Layout>
  );
};
