"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const recover = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={recover}>retry</button>
    </div>
  );
};

export default Error;
