import "./button.css";
function Button({className, label,setOnChange,state}) {
    // console.log('button Prop className', className)
    // console.log('button Prop className typeof', typeof className )
    // console.log('button Prop label', label)
    // console.log('button Prop setOnChange', setOnChange)
    // console.log('button Prop state', state)
    return (
        <div>
            {className == "get_users_button" ?
                <button className={typeof className === "string" ? className: ""} onClick={() => setOnChange(!state)}>{label}</button>
                :
                className == "get_products_button" ?
                    <button className={className} onClick={() => setOnChange(!state)} >{label}</button>
                    : ""
            }
        </div>
    )


}

export default Button