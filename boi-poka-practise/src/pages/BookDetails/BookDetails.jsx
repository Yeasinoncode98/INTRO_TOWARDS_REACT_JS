import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { ToastContainer, toast } from "react-toastify";
const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const { bookName, image } = singleBook || {};

  const handleMarkAsRead = (id) => {
    //store wit id
    //where to store
    //array or collection
    //if book already exists show an alert
    //if not book  not exist then push in the collection or array

    // MySwal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Your work has been saved",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });

    toast("Wow so easy!");

    addToStoredDB(id);
  };

  return (
    <div className="w-2/3 mx-auto">
      <img className="w-50" src={image} alt="" />
      <h5>{bookName}</h5>
      <ToastContainer />
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-dash btn-accent m-2"
      >
        Mark as Read
      </button>
      <button className="btn btn-dash btn-info m-2">Add to WishList</button>
    </div>
  );
};

export default BookDetails;
