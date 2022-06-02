import Cell from '../cell/Cell';
import './Grid.css'
import React, { useState } from "react"
import Modal from '../modale/Modale';
import Modale from '../modale/Modale';
const cols = 100;
//const rows = Math.floor(window.innerHeight / (window.innerWidth / cols));
const rows = Math.floor(window.innerWidth/19.1);
console.log(' cols' + cols)
console.log(' rows' + rows)
console.log("w" + window.innerWidth)
console.log("h" + window.innerHeight)
interface colorKeyInterface { id: number, colorKey: string }
const Grid = () => {
  const [modal, setModal] = useState(false)
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [keySaved, setKeySaved] = useState("");
  const [keyTable, setKeyTable] = useState<colorKeyInterface[]>([]);

  const gridItems: any[] = []
  for (let i = 0; i < 10000; i++) {
    gridItems.push(i)
  }
  console.log('new array', gridItems)
  console.log('keySaved', keySaved)
  console.log('keyTable', keyTable)

  const openModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const keyDiv = e.target as HTMLElement;
    const keyDivCell = keyDiv.dataset.cellkey;
    setKeySaved(keyDivCell as string);
    e.preventDefault();
    const element = e.target as HTMLElement;
    if (modal !== false) {
      setModal(false)
    }
    else {

      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setModal(true)
    }
  }
  const closeModale = (e: React.MouseEvent<HTMLDivElement>) => {
   const element = e.target as HTMLElement     
    if(modal===true && element.className==="colorCell"){      
      setModal(!modal)
    }
    else{
      e.stopPropagation()      
    }  
  }

  const resultFromModal = (e: any) => {
    setXPos(e)
    setYPos(e)
    let tableKey = keyTable;
    let findedRow = tableKey.find(row => row.id == parseInt(keySaved))
    console.log('findedRow', findedRow)
    if (findedRow) {
      let indexRemove = tableKey.indexOf(findedRow)
      tableKey.splice(indexRemove, 1);
    }
    let rowKey = { id: parseInt(keySaved) as number, colorKey: e as string };
    tableKey.push(rowKey)
    setKeyTable(tableKey)
  }
  return (
    <>{
      <div className="grid-template" id="cell-grid" onContextMenu={openModal} onMouseOver={closeModale} >
        {
          gridItems.map(i => (<Cell key={i} cellKey={i} color={keyTable}
          />))
        }
        {modal && setModal ? <Modal positionX={xPos} positionY={yPos} pickColor={(result: any) => resultFromModal(result)} /> : null}
      </div>
    }
    </>
  )
}
export default Grid


