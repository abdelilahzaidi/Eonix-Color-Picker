import { useEffect, useState } from 'react';
import './ColorGenerator.css'

const ColorGenerator = (props:any) => {
const [color, setColor] = useState("#0000")
  useEffect(() => {

   
    let colorRandom = '#' + Math.random().toString(16).slice(2,8)  
    setColor(colorRandom)

  }, []
  )
  return (

    <div className="color-container">
      <div className="colorElement" onClick={()=>props.clickColor(color)}>
        {/* Div to display the color  */}
        <div
          style={{
            backgroundColor: color,
            width: 30,
            height: 30,
            border: "2px solid black",
            margin: 5
          }}
        >
        </div>
      </div>    
    </div>
  
  );
}

export default ColorGenerator
