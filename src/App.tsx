import React,{ useState } from 'react'

import MyButton from './components/button';
function App() {
  return (
    <>
      <MyButton onClick={()=>alert("okay")} text="seach"/>
    </>
  )
}
export default App;
