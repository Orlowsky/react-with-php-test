import React from 'react'
import  { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: 500
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
const EditSelector = ({editData, choosenEditDatatoWork}) => {
    const classes = useStyles();
    const [state, setState] = useState("");

    let selectorChange= (e)=>{
      
        choosenEditDatatoWork(editData[e.target.value])
    
        setState(e.target.value)
      
    }

    useEffect(() => {
        console.log(editData)
      // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
      /* setState(jsonFile[0].id) */
    },[]); // albo mozna tu załadowac zmienne ktore ma sprawdzac :*
    return (
        <div>
         <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label"> Do Edycji...</InputLabel>
        <Select className={"edit-Selector"}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name="elo"
          value={state}
          onChange={selectorChange}
          label={"edit-selector"}
          
        >
          {/* {<MenuItem value="">
            <em>None</em>
          </MenuItem>} */}
          {editData.map((item,index)=>(
                <MenuItem key={"menu-item-"+index}  
                value={index} editdatatoshare={item}>
                    {item.car[0].dataRealName} 
                {item.car[1].dataRealName} {item.car[2].dataRealName} {item.car[3].dataRealName} {item.car[4].dataRealName} {item.car[5].dataRealName}
                
                </MenuItem>
          ))}
          {/* <MenuItem  value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
        </div>
    )
}

export default EditSelector
