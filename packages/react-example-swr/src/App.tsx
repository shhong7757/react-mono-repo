import React, { Suspense } from 'react';
import { Button } from '@react-mono-repo/react-common-component';

import { hot } from 'react-hot-loader/root';
import { SWRConfig } from 'swr';

import ErrorBoundary from './ErrorBoundary';

import RandomDogImage from './RandomDogImage';

function App() {
  return (
    <SWRConfig value={{ suspense: true }}>
      <Suspense fallback={<div>loading...</div>}>
        <ErrorBoundary fallback={<div>failed to load</div>}>
          <RandomDogImage />
        </ErrorBoundary>
      </Suspense>
      <Button>
        <p>Hello! world</p>
      </Button>
    </SWRConfig>
  );
}

export default hot(App);
