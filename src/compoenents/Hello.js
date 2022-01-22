import React from "react";

export function IsLoading({ condition }) {
  if (condition) {
    return <p> Currently Loading </p>;
  } else {
    return <p> Here’s your content </p>;
  }
}

export default function Hello({ name }) {
  return <p>Hello {name}!, this is a simple hello world component</p>;
}
