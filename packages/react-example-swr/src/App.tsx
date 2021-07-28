import React from 'react';
import { Button } from '@react-mono-repo/react-common-component';

import { hot } from 'react-hot-loader/root';
import { SWRConfig } from 'swr';

import useRandomDog from './hooks/useRandomDog';

function App() {
  const { data, isError, isLoading } = useRandomDog();

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>failed to load</div>;

  return (
    <SWRConfig value={{}}>
      <div>
        <img alt="" src={data} />
      </div>
      <Button>
        <p>Hello! world</p>
      </Button>
    </SWRConfig>
  );
}

export default hot(App);
