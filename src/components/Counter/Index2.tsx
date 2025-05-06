import React,{useState,useEffect} from 'react';
import "./style.css";

const Index2:React.FC = () => {
    const [value, setValue] = useState<number>(0);
    useEffect(()=>{
        console.log("counter mounted");
        return function (){
            console.log("conter unmout")
        }
    },[]);
    useEffect(()=>{
        console.log("value updated");
    },[value])
    const incCount=()=>{
        return setValue(value+1);
    }
    const decCount=()=>{
        if(value===0) return;
        return setValue(value-1);
    }
  return (
    <div className="counter-container">
        <h1>{value}</h1>
        <button onClick={incCount} style={{backgroundColor:"lightgreen"}}>INC</button>
        <button onClick={decCount} style={{backgroundColor:"tomato"}}>DEC</button>
    </div>
  )
}

export default Index2