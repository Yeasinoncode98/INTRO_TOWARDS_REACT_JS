import React, { use } from "react";

const Users2 = ({ usersPromise }) => {
  const users = use(usersPromise);
  console.log("users 2 suspense data load", users);

  return (
    <div>
      <h3>This is Users 2</h3>
    </div>
  );
};

export default Users2;
