import "./App.css";
import ToDo from "./todo";
import Actor from "./actor";
import Singer from "./Singer";
import Library from "./Library";

function App() {
  // const time = 50;

  const actors = [
    "Bappa Raj",
    "Omar Sunny",
    "Salman Shah",
    "Jashim",
    "Anwar",
    "Razzak",
  ];

  // const singers = [
  //   {
  //     id: 1,
  //     name: "Dr.Mahfuz",
  //     age: 68,
  //   },
  //   {
  //     id: 2,
  //     name: "Dr.Jon",
  //     age: 60,
  //   },
  //   {
  //     id: 3,
  //     name: "xefer",
  //     age: 25,
  //   },
  // ];

  const books = [
    {
      id: 1,
      name: "physics",
      price: 300,
    },
    {
      id: 2,
      name: "chemistry",
      price: 350,
    },
    {
      id: 3,
      name: "biology",
      price: 400,
    },
    {
      id: 4,
      name: "higherMath",
      price: 800,
    },
  ];

  return (
    <>
      <h1>Introduction to React</h1>

      <Library books={books}></Library>

      {/* {singers.map((singer) => (
        <Singer key={singer.id} singer={singer}></Singer>
      ))} */}

      {actors.map((actor) => (
        <Actor actor={actor}></Actor>
      ))}

      {/* <ToDo task="Learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revise Js" isDone={false}></ToDo>
      <ToDo task="Take a Shower" isDone={true} time="100"></ToDo> */}
      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Yeasin" using_laptop="ASUS" tech="JS"></Developer>
      <Developer name="Rajon" using_laptop="ASUS" tech="Python"></Developer>
      <Developer name="Mahatir" using_laptop="ASUS" tech="react"></Developer>
      <Developer name="Kop" using_laptop="ASUS" tech="Ryzen7"></Developer>
      <Player name="Sakib" runs="10000"></Player>
      <Player name="Mushfik" runs="9000"></Player>
      <Salami event="Roja Eid" amount="500TK"></Salami>
      <Salami event="Qurbani Eid" amount="1500TK"></Salami> */}
    </>
  );
}

//.....................
function Salami({ event, amount }) {
  return (
    <div className="student">
      <p>Salami For: {event} </p>
      <p>Amount: {amount} </p>
    </div>
  );
}

// .......................
// const { name, runs } = { name: "Sakib", Runs: "10000" };

function Player({ name, runs }) {
  return (
    <div className="student">
      <h3>Name: {name} </h3>
      <p>Runs: {runs}</p>
    </div>
  );
}

function Developer(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid green",
        borderRadius: "20px",
        marginTop: "10px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>Laptop: {props.using_laptop}</p>
      <p>Technology: {props.tech}</p>
    </div>
  );
}

function Person() {
  const age = 21;
  const name = "RedWine";
  const personStyle = {
    color: "red",
    // textAlign: 'right'
  };
  // multi word mane double css likhte hole
  // textAlign er moto hole (A) boro hater dite hobe

  return (
    <p id="" title="tooltip" style={personStyle}>
      I am Yeasin Arafat {age} {name}
    </p>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  );
}

function Cat() {
  return <p>Biral</p>;
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Kola</li>
        <li>Apple</li>
        <li>Banana</li>
      </ul>
      <p>Playing and losing</p>
    </div>
  );
}

export default App;

// component is a small piece
// we will make component
// JSX (looks like HTML)
// Recat inherits Parent to child
// Cant be possible to inherit from child to Parent(for react)
