import React from 'react';
import {createGlobalStyle} from "styled-components";
import ToDoList from './components/ToDoList';
import { RecoilRoot } from "recoil";

const GlobalStyle=createGlobalStyle`
`

function App() {
  return (
    <><RecoilRoot>
      <GlobalStyle/>
      <ToDoList/>
    </RecoilRoot>
    </>
  );
}

export default App;
