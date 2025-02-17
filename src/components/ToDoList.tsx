import { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const todos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(category);
  };
  return (
    <div>
      <select value={category} onInput={onInput}>
        <option value="ToDo">TO DO</option>
        <option value="Doing">DOING</option>
        <option value="Done">DONE</option>
      </select>
      <CreateToDo />
      {todos.map((todo) => (
        <ToDo {...todo} />
      ))}
    </div>
  );
}

export default ToDoList;
