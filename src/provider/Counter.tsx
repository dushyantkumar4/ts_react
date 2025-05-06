import React, { createContext,useState } from 'react'

const CouterContext = createContext<number|null>(null);

interface counterProvideProps{
    children:React.ReactNode
}
export const CounterProvider:React.FC <counterProvideProps>= (props) => {
    const [count,setCount]=useState<number>(1)
  return (
    <CouterContext.Provider value={1}>
        {props.children}
    </CouterContext.Provider>
  )
}
