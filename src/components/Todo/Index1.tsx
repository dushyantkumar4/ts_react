import React from 'react'
import Index from "./TodoItem/intex";


interface todoTypes{
    id:number,
    title:string,
}

interface todoItems{
    items:todoTypes[]
}
const Index1:React.FC<todoItems> = (props) => {
  return (
    <div>
        <ol>
            {props.items.map(item=><Index key={item.id} title={item.title}/>)}
        </ol>
    </div>
  )
}

export default Index1