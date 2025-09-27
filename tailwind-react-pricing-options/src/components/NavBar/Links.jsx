import React from "react";

const Links = ({ route }) => {
  return (
    <li className="mr-10 px-4">
      <a href="{route.path}">{route.name}</a>
    </li>
  );
};

export default Links;
