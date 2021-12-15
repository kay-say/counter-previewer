export default function Counter(props){
    return(
        <div>
            <h1>Counter: {props.count}</h1>
            <button className="add" onClick={props.handleClick}>Click to add</button>
            <button className="minus" onClick={props.handleClick}>Click to subtract</button>
        </div>
    )
}