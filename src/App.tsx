import React,{useEffect,useState} from 'react'
import axios from 'axios';

interface todoItem {
  id:number,
  punchline:string,
  setup:string
}
const App:React.FC = () => {
  const [state,setState] =useState<todoItem>({id:1,punchline:"punchline",setup:"ans"});
  useEffect(()=>{
    axios.get<todoItem>("https://official-joke-api.appspot.com/random_joke")
    .then((response)=>setState(response.data));
    
  },[])
  return (
    <div>
      <p>{state.setup}</p>
      <p>{state.punchline}</p>
    </div>
  )
}

export default App