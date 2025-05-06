import React from 'react'
interface indexProps{
    title:string,
}
const Intex:React.FC<indexProps> = (props) => {
  return (
    <li>{props.title}</li>
  )
}

export default Intex;