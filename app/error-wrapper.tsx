"use client";
import React, { useState } from "react";

const ErrorSimulator = ({
  message = "An error occurred",
}: {
  message: string;
}) => {
  const [error, setError] = useState<boolean>(false);
  if (error) {
    throw new Error(message);
  }
  return <button onClick={() => setError(true)}>Simulate error</button>;
};

const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children} 
      <ErrorSimulator message="Simulated error in root layout"/>
    </div>
  );
};

export default ErrorWrapper;
