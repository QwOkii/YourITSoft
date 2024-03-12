import React from 'react';
import './index.css';
import {Header} from "./componnents/Header/Header";
import TaskContainer from "./componnents/Todos-list/Todo-list";
function App() {
  return (
    <div className="w-screen h-screen bg-indigo-200 flex flex-col items-center ">
      <Header/>
      <TaskContainer/>
    </div>
  );
}

export default App;
