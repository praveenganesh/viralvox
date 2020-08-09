import React from 'react';
import Error from 'next/error';

const Errors = () => (
  <Error statusCode={404} />
);

export default Errors;
