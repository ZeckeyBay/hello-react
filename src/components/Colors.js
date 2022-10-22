import React,{useState} from "react";

function Colors(){
    const [colors,setColors] = useState(["Red","Blue","Green"]);

    return(
        <div>
        <h1>Renkler</h1>
        {colors.map((color,i)=> (
        <div key={i}>{color}</div>
        ))}
        </div>
    )
}

export default Colors;