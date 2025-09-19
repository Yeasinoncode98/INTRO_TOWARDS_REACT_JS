// export default function ToDo({ task,isDone }) {
//   return <li>Task : {task}</li>;
// }

// export default function ToDo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Done: {task}</li>;
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//   if (isDone === true) {
//     return (
//       <li>
//         Done: {task} Duration: {time}
//       </li>
//     );
//   }
//   return <li>To Be Done: {task}</li>;
// }

// conditional rendering

// Ternery operator.................................

// condition ? true : false

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>
//       Done : {task} time:{time}
//     </li>
//   ) : (
//     <li>Not Done: {task}</li>
//   );
// }

// ...........................................

// conditional rendering : 4 && just show if it is truth
// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone && (
//       <li>
//         Done Tasks : {task} time:{time}
//       </li>
//     )
//   );
// }

// conditional rendering : 5 || just show if it is false
// ....................................................
// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone || (
//       <li>
//         Not Done Tasks : {task} time:{time}
//       </li>
//     )
//   );
// }

//.............................................................
// conditional rendering : 6 Use Varible

export default function ToDo({ task, isDone, time }) {
  const displayTime = time ? time : 100;
  let listItem;

  if (isDone === true) {
    listItem = (
      <li>
        Done: {task} time:{displayTime}
      </li>
    );
  } else {
    listItem = <li>Pending: {task}</li>;
  }
  return listItem;
}
