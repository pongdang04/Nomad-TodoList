import { Categories, ITodo } from "./atoms";
import React from "react";
import { toDoState } from "./atoms";
import { useSetRecoilState } from "recoil";

const setToDos = useSetRecoilState(toDoState);

function ToDo({ text, category, id }: ITodo) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newTodo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newTodo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={"TO_DO"} onClick={onClick}>
          todo
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={"DOING"} onClick={onClick}>
          doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={"DONE"} onClick={onClick}>
          done
        </button>
      )}
    </li>
  );
}

export default ToDo;
