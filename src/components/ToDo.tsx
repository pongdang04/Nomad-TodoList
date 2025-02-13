import { ITodo } from "./atoms"

function ToDo({text}:ITodo){
  return (
  <li>
    <span>{text}</span>
    <button>todo</button>
    <button>doing</button>
    <button>done</button>
  </li>);
}

export default ToDo;