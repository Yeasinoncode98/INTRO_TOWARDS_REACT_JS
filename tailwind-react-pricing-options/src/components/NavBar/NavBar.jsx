import React, { useState } from "react";
import Links from "./Links";
import { Menu, X } from "lucide-react";

const navdatas = [
  {
    name: "Home",
    path: "/",
    id: 1,
  },
  {
    name: "About",
    path: "/about",
    id: 2,
  },
  {
    name: "Services",
    path: "/services",
    id: 3,
  },
  {
    name: "Blog",
    path: "/blog",
    id: 4,
  },
  {
    name: "Contact",
    path: "/contact",
    id: 5,
  },
];

const NavBar = () => {
  const [open, SetOpen] = useState(false);

  const linkss = navdatas.map((route) => (
    <Links key={route.id} route={route} />
  ));

  return (
    <nav className="flex justify-between mx-10 mt-4">
      <span className="flex gap-5" onClick={() => SetOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul
          className={`md:hidden absolute duration-1000 ${
            open ? "top-8" : "-top-40"
          } bg-green-300`}
        >
          {linkss}
        </ul>

        <h3>My NavBar</h3>
      </span>

      <ul className="md:flex hidden">
        {/* {navdatas.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))} */}
        {linkss}
      </ul>

      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
