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

const CarSelector = ({jsonFile,onSelectorClicked,whichSelector, addValueToDataForm}) => {
    const classes = useStyles();
    const [state, setState] = useState("");

    let selectorChange= (e)=>{
      
        onSelectorClicked(e.target.value,whichSelector)
        addValueToDataForm(whichSelector, e.target.value)
        console.log(e)
        setState(e.target.value)
      
    }

    useEffect(() => {
      // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
      /* setState(jsonFile[0].id) */
    },[]); // albo mozna tu załadowac zmienne ktore ma sprawdzac :*

    return (
        <div>
         <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{whichSelector}</InputLabel>
        <Select className={whichSelector}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          
          value={state}
          onChange={selectorChange}
          label={whichSelector}
          
        >
          {/* {<MenuItem value="">
            <em>None</em>
          </MenuItem>} */}
          {jsonFile.map((item,index)=>(
                <MenuItem key={"menu-item-"+item.id}  value={item.id}>{item.mark}</MenuItem>
          ))}
          {/* <MenuItem  value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
        </div>
    )
}

export default CarSelector
