export default function Previewer(props){
    return(
        <div className="previewer">
            <input onKeyUp={props.handleInput} placeholder="write here"/>
            <div className="copy">{props.input}</div>
        </div>
    )
}