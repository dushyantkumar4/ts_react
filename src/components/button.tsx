import React,{useState} from "react";

interface myBtnProps{
    text:string|number|boolean,
    onClick?:()=>void,
    something?:boolean
}
interface Book{
    name:string,
    price:number
}

const MyButton:React.FC<myBtnProps> = (props)=>{
    // const {text,onClick} = props
    const [value,setValue] = useState<string|undefined>();
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        return setValue(e.target.value);
    }
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(e);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" 
                placeholder="enter your name" value={value}/>
                <button type="submit">Submit</button>
                <h1>{value}</h1>
            </form>
        </div>
    )
}

export default MyButton;