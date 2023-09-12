import React, {useState} from "react";
import './contador.css'

export default () =>{

    const [step, setStep] = useState(0)

    const handleChange = event =>{
        setStep(event.target.value)
    }

    
    const [count, setCount] = useState(0)
   
    function clickEvent (){
        
        console.log(typeof step)

        setCount((count + 1) + parseInt(step))

    }

    return(
        <div className="div-pai">
            <div className="div-step">
            <label htmlFor="step">STEP:</label>
            <input onChange={handleChange} type="number" name="step" id="step" />
            </div>
            <div className="div-count">
            <button onClick={clickEvent} className="btn-count">COUNT</button> <div className="div-count">{count}</div>
            </div>
        </div>
    )


}