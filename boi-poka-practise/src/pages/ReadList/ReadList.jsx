import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  //worst case we will take from DataBase

  const [readList, setReadList] = useState([]);

  const [sort, setSort] = useState("");

  const data = useLoaderData();
  //   console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    // console.log(storedBookData);

    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));
    // console.log(ConvertedStoredBooks);

    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  //   handle function

  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === "ratings") {
      const sortedByrating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByrating);
    }
  };

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort by : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li onClick={() => handleSort("pages")}>
            <a>Pages</a>
          </li>
          <li onClick={() => handleSort("ratings")}>
            <a>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="  grid grid-cols-3 gap-5">
            Book I Read:{readList.length}
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </h2>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
