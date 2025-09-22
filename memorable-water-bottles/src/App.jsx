import { Suspense } from "react";
import "./App.css";
import Bottles from "./Components/Bottles/Bottles";

const bottlesPromise = fetch("./bottles.json").then((res) => res.json());

// const bottlesPromise = fetch(./bottles.json).then(res =>res.json())

function App() {
  // const bottles = [
  //   {
  //     id: 1,
  //     name: "pink-nike-bottle",
  //     price: 250,
  //     color: "pink",
  //   },
  //   {
  //     id: 2,
  //     name: "pink-nike-bottle",
  //     price: 250,
  //     color: "pink",
  //   },
  //   {
  //     id: 3,
  //     name: "pink-nike-bottle",
  //     price: 250,
  //     color: "pink",
  //   },
  //   {
  //     id: 4,
  //     name: "pink-nike-bottle",
  //     price: 250,
  //     color: "pink",
  //   },
  // ];

  return (
    <>
      <h1>Buy Awesome Water Bottle Best</h1>
      {/* <Suspense fallback={<h2>Bottles are Loading Wait!!....</h2>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense> */}

      <Suspense fallback={<h2>Bottles are Loading Wait!!....</h2>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;
