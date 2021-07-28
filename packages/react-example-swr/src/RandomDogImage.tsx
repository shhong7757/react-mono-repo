import React, { Suspense } from 'react';

import useRandomDog from './hooks/useRandomDog';

function RandomDogImage() {
  const { data } = useRandomDog();

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>
        <img alt="" src={data} />
      </div>
    </Suspense>
  );
}

export default RandomDogImage;
