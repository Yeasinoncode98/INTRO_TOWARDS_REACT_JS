import Book from "./book";
export default function library({ books }) {
  return (
    <div>
      <h2>My National Central Library</h2>
      <p>Books Collection: {books.length}</p>
      <p>Address: </p>
      <ul>
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </ul>
    </div>
  );
}
