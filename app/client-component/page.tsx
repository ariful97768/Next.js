'use client'
import React from "react";
import { useTheme } from "../components/theme-provider";

const ClientComponent = () => {
  const theme = useTheme();
  return <div style={{ color: theme.colors.primary }}>Theme color</div>;
};

export default ClientComponent;
