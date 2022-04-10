import React, { ComponentType } from 'react';
import Head from 'next/head';
import '../styles/global.scss';
import { ChakraProvider } from '@chakra-ui/react';

type ComponentTypeExtended = ComponentType & { public?: boolean };

type Props = {
  Component: ComponentTypeExtended;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  //this any type is from the "import { AppProps } from 'next/app'"
  pageProps: any;
};

const App = ({ pageProps, Component }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Ecommerce</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
