import React, { Suspense } from 'react';
import { Button } from '@react-mono-repo/react-common-component';

import { hot } from 'react-hot-loader/root';
import { SWRConfig } from 'swr';

import ErrorBoundary from './ErrorBoundary';

import useRandomDog from './hooks/useRandomDog';

function App() {
  const { data } = useRandomDog();

  return (
    <SWRConfig value={{ suspense: true }}>
      <ErrorBoundary fallback={<div>failed to load</div>}>
        <Suspense fallback={<div>loading...</div>}>
          <div>
            <img alt="" src={data} />
          </div>
        </Suspense>
      </ErrorBoundary>
      <Button>
        <p>Hello! world</p>
      </Button>
    </SWRConfig>
  );
}

export default hot(App);
