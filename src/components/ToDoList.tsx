import { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList(){
  const toDos=useRecoilValue(toDoState);
  return (
  <div>
    <h1>Todos</h1>
    <hr/>
      <CreateToDo/>
      <ul>
        {toDos.map((todo)=><ToDo {...todo}/>)}
      </ul>
</div>)
}

export default ToDoList;