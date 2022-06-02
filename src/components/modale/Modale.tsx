import ColorGenerator from "../colorGenerator/ColorGenerator";
import './Modale.css'

const Modale = (props: any) => {

  const colorsNumber = 5;
  const gridItems: any[] = []
  for (let i = 0; i < colorsNumber; i++) {
    const r: any[] = []
    gridItems.push(r)
  }
 
  const click2 = (e: any) => {
    props.pickColor(e)
    console.log('result2' + e)
  }
  return (
   
      <div className="menu" style={{ top: props.positionY, left: props.positionX }} >
        {
          gridItems.map((_cols, i) => (<ColorGenerator key={i} clickColor={(e: any) => click2(e)}  />))
        }    
    </div>
  );
}
export default Modale;




