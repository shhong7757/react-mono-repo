import React from 'react';
import ExchangeRates from './components/ExchangeRates';
import { Button } from '@react-mono-repo/react-common-component';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { hot } from 'react-hot-loader/root';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ExchangeRates />
      <Button>
        <p>Hello! world</p>
      </Button>
    </ApolloProvider>
  );
}

export default hot(App);
