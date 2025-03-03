import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  id: number;
  category: Categories;
}
export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export const toDoState = atom<ITodo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
