import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./users";
import Friends from "./Friends";
import "./App.css";
import { Suspense } from "react";
import Posts from "./Post";
import Players from "./Players";

// Normal basic style
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

// ....................different style............
const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

// for post
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  // Api calling by React
  const friendsPromise = fetchFriends();

  // Api calling for posts for react
  const postsPromise = fetchPosts();

  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>

      <Players></Players>

      <Suspense fallback={<h3>Loading....!</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Waiting For friends..!</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Waiting for new Posts...?</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      {/* <button onClick="handleClick">Click Me</button> */}
      <button onClick={handleClick}>Click Me1</button>
      <button
        onClick={function handleClick2() {
          alert("I am run out of enegery");
        }}
      >
        Click Me2
      </button>
      {/* we will not use this way mostly we will use arrow function */}

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => alert("Click Me 4")}>Click Me 4</button>

      <button onClick={() => handleAdd5(7)}>Click Add 5</button>
    </>
  );
}

export default App;
