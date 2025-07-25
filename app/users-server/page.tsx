import React from "react";

type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

const UserServer = async () => {
  const users: Users[] = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  return (
    <>
      <h1>Server fetching</h1>
      {users.map((user) => (
        <div key={user.id}>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
        </div>
      ))}
    </>
  );
};

export default UserServer;
