import React from 'react';

export const IsLoading = ({ condition }) => {
  if (condition) {
    return <p> Currently Loading </p>;
  } else {
    return <p> Not Loading </p>;
  }
};

const Hello = ({ name }) => {
  return <p>Hello {name}! , this is a simple hello world component</p>;
};

export default Hello;
