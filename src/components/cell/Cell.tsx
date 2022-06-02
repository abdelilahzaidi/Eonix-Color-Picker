import React, { useState } from 'react'
function Cell(props: any) {
    let isColored = true
    const WIDTH = 1920 / 100;
    const HEIGHT = 1904 / 100;

    const setBGColor = (cellKey: any) => {
        let colorsTable = props.color;
        if (colorsTable) {//Si tableau existe et non vide         
            let colorFind = colorsTable.find((row: { id: any; }) => row.id == cellKey);
            if (colorFind){//Si on trouve une couleur
                console.log('color find'+colorFind.colorKey)                
                return colorFind.colorKey;
                }
            else
                return "green";
        }
        else
            return "green";
    }

    const setColorCells = (e: React.MouseEvent) => {
        const element = e.target as HTMLElement
        if (isColored) {           
            element.style.backgroundColor = 'purple'
            console.log('esb' + element.style.backgroundColor)
            isColored = false
        }
        else {
            element.style.backgroundColor = "green"
            isColored = true
        }
    }

    const setColor = (e: React.MouseEvent) => {
        const element = e.target as HTMLElement
        if (isColored) {
            element.style.backgroundColor = "orange"
            isColored = false
            console.log('cellKeys' + props.cellKey)
        }
        else {
            element.style.backgroundColor = "green"
            isColored = true
        }
        console.log(setBGColor(props.cellKey))
    }
    
    return (
        <div className='colorCell' onClick={setColor} onDragEnter={setColorCells} data-cellkey={props.cellKey} style={{
            width: WIDTH + "px", height: HEIGHT + "px", backgroundColor: setBGColor(props.cellKey), border: "1px solid black", flex: 1, top: 10, left: 10
        }} />

    )
}
export default Cell
