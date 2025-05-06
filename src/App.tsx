import React from 'react'
import Index1 from './components/Todo/index1';


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
  return (
    <div>
      <Index1 items={myTodoItems}/>
    </div>
  )
}

export default App


