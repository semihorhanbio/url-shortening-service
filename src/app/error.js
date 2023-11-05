"use client";

import { useEffect } from "react";

import React from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  const retryRequestHandler = () => {
    reset();
  };
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={retryRequestHandler}>Retry</button>
    </div>
  );
};

export default Error;
