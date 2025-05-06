import React,{useState}from 'react'
import Todo from './components/Todo/Index1';
import Counter from "./components/Counter/index2";

const myTodoItems=[
  {
    id:1,
    title:"i have to finish my homework",
  },
  {
    id:2,
    title:"complete the lecture"
  },
  {
    id:3,
    title:"i have to complete the project "
  }
]
const App:React.FC = () => {
  const [state,setState] =useState<boolean>(true);
  return (
    <div>
      <Todo items={myTodoItems}/>
      <button onClick={(e)=>setState(!state)}>toggle</button>
      {state&&<Counter/>}
    </div>
  )
}

export default App


