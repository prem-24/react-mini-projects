
import { useState } from 'react';
import './App.css'



function App() {

const[height,setHeight]=useState("");
const[weight,setWeight]=useState("");
const[bmi,setBmivalue]=useState(null);
const[bmiStatus,setBmistatus]=useState("");

function bmiCalculate(){
  if(height == "" || weight == ""){
    alert("give the valid height and weight")
  }
  if(height && weight){
    let heightMeter = height/100;
    let bmiValue = weight/(heightMeter*heightMeter);

    setBmivalue(bmiValue.toFixed(2));
   
    if(bmiValue <18.5){
      setBmistatus("underweight")
    }else if(bmiValue >=18.5 && bmiValue <24.9){
      setBmistatus("normal weight")
    }else if(bmiValue>=25 && bmiValue <29.5){
      setBmistatus("over weight")
    }else{
      setBmistatus("obese")
    }
  }else{
    setBmivalue(null);
    setBmistatus('')
  }
  
}

function clearhandle(){
  setBmivalue(null);
  setBmistatus("");
  setHeight("");
  setWeight("");

}

  return (
    <>
   

   
      <div className="app-container">
      
        <div className="container">
          <div className="box-cont">
            
          </div>
          <div className="data">
          <h1>BMI calculator</h1>
            <div className="input-cont">
              <label htmlFor="height">height(cm):</label>
              <input id="height-input" type="text" placeholder="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
            </div>

            <div className="input-cont">
              <label htmlFor="weight">weight(kg):</label>
              <input id="weight-input" onChange={(e)=>setWeight(e.target.value)} type="text" placeholder="weight" value={weight} />
            </div>
           <div className="btn-cont">
           <button className="btn" onClick={bmiCalculate}>calculate BMI</button>
            <button className="btn btn-color" onClick={clearhandle}>clear All</button>
           </div>
           {bmi !== null &&  <div className="output-data">
              <p>your BMI is : {bmi}</p>
              <p>status : {bmiStatus}</p>
            </div>}
          </div>
        </div>
      </div>
   
    </>
  );
}

export default App;
