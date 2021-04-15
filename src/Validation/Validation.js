import React from "react";

const validation = (props) => {
const inputLength = props.inputLength
if(inputLength > 5){
    return (
        <div><p>Long Enough</p></div>
    )
} else{
    return (
        <div><p>Too Short</p></div>
    )
}
}

export default validation;