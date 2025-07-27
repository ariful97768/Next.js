"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const Submit = () => {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button disabled={pending} type="submit">
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default Submit;
