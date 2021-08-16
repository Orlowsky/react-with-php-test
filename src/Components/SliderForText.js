import React, { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

const SliderForText = ({prosAndCons,addValueToProsAndCons}) => {
    const [numberInput, setNumberInput] = useState(1);
    const [dataOutput,setDataOutput] = useState([])


    let changeNumberInputs = (event,value) => {
      setNumberInput(value)
        
    }

    let onTextFieldValueChange = (e) =>{
      let newName = e.target.name
      let newValue= e.target.value
      const temporaryArray = [...dataOutput]
    let temporaryCheck = false;
    for(let i=0;i<temporaryArray.length;i++){
      if(temporaryArray[i].name ===newName){
        temporaryArray[i].name = newName;
        temporaryArray[i].value = newValue;
        console.log("istnieje wady i zalety")
        temporaryCheck = true ;
      }
    }

    if(temporaryCheck){
      setDataOutput([...temporaryArray])
    }else{
      setDataOutput([...dataOutput,{name:e.target.name,value:e.target.value}])
    }
      console.log(e.target.value, e.target.name)
      

    }

    useEffect(()=>{
      console.log(dataOutput)
      addValueToProsAndCons(prosAndCons,dataOutput)
      
    },[numberInput, dataOutput])


    return (
        <div style={{display: "flex", flexDirection:"column", width:"100%",     alignItems: "center" }}>
          <Typography id="discrete-slider" gutterBottom>
          {prosAndCons}
      </Typography>
      <Slider style={{maxWidth:500}}
        defaultValue={1}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
       
        step={1}
        marks
        min={1}
        max={5}
        onChangeCommitted={changeNumberInputs}
      />

      {[...Array(numberInput)].map((el,index)=>{
        return (<TextField key={"textfield"+index+"-"+prosAndCons} id={"textfield"+index+"-"+prosAndCons} label="Standard" name={"textfield-"+prosAndCons+"-"+index} onBlur={onTextFieldValueChange}/>)
      })
      }
      

        </div>
    )
}

export default SliderForText
