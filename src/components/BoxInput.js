import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './BoxInput.css'


const BoxInput = () => {
    const [box, setBox] = useState("")

    const [boxes, setBoxes] = useState([]);

    const onSubmitHandler = (event, color) => {
        event.preventDefault();
        setBox(color);
        setBoxes([...boxes, box])
        console.log(box);
        console.log(boxes);
        event.target.reset()
    }


    return (
        <div>
        <form onSubmit={onSubmitHandler}>
            <div className="box-input">
            <label>Input Your Color:  </label>
            <input type="text" onChange={(event)=>setBox(event.target.value)}/>
            <input type="submit" className="btn btn-primary" />
            </div>
        </form>
        {
        boxes.map((square, i) => {
            return <div style={{backgroundColor: square}} key={i} className="box-add">{square}</div>
        })
        }
        </div>

    )
}
export default BoxInput;