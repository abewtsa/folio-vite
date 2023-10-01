function Button({ text, backgroundColor, color, buttonFunc, classname, padding }) {
    const style = {
        color: color,
        backgroundColor: backgroundColor,
        padding: padding,
    };
    
    return (
        <button className={classname} style={style} onClick={buttonFunc}>
            {text}
        </button>
    );
}
export default Button;