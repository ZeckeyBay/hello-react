import React,{useState} from "react";

function Colors(){
    const [colors,setColors] = useState(["Red","Blue","Green"]);
    const handleClick = () => {
        setColors((prev) => [...prev,"Gri"])
    }
    return(
        <div>
        <h1>Renkler</h1>
        {colors.map((color,i)=> (
        <div key={i}>{color}</div>
        ))}
        <button onClick={handleClick}>Ekle</button>
        </div>
    )
}

export default Colors;