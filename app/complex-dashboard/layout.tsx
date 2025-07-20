import React from "react";

const layout = ({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;   
}) => {
  return (
    <div>
      <div>{children}</div>
      <div>{revenue}</div>
      <div>{users}</div>
      <div>{notifications}</div>
    </div>
  );
};

export default layout;
