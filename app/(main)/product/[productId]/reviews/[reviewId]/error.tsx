"use client";
const error = ({ error }: { error: Error }) => {
  return <h2>{error.message}</h2>;
};

export default error;
