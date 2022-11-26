const Button = (props) => {
    return ( 
        <>
            <button onClick={props.func} className={props.btnColor}><i className={props.icon}></i> {props.name}</button>
        </>
     );
}
 
export default Button;