"use client";

import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      count: {count} <br />
      <button onClick={() => setCount(count + 1)}>inc</button>
    </div>
  );
};

export default Count;
