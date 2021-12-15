import React from "react"
import Counter from "./components/Counter"
import Previewer from "./components/Previewer"

export default function App(props){
    const [count,setCount]=React.useState(0)
    function handleClick(e){
        if(e.target.className==="minus"){
            setCount(prevState=>prevState-1)
        }else if(e.target.className==="add"){
            setCount(prevState=>prevState+1)
        }
    }
    const [input, setInput]=React.useState("starting...")
    function handleInput(e){
        console.log(e.target)
        setInput(e.target.value)
    }
    return(
        <div>
            <Counter count={count} handleClick={handleClick} />
            <Previewer input={input} handleInput={handleInput} />
        </div>
    )
}