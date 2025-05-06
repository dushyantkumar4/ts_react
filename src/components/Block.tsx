import React from 'react'

interface propValue{
    value?:string|null,
    onClick?:()=>void
}
const Block:React.FC<propValue> = (props) => {
  return (
    <div onClick={props.onClick} className='block'>{props.value}</div>
  )
}

export default Block;