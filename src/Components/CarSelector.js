import React from 'react'
import  { useState,  } from 'react';
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

const CarSelector = ({jsonFile,onSelectorClicked,whichSelector}) => {
    const classes = useStyles();
    const [state, setState] = useState('1');

    let selectorChange= (e)=>{
        onSelectorClicked(e.target.value,whichSelector)
        console.log(e)
        setState(e.target.value)
    }

    return (
        <div>
         <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Mark</InputLabel>
        <Select className={whichSelector}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state}
          onChange={selectorChange}
          label="Age"
          
        >
          {/* {<MenuItem value="">
            <em>None</em>
          </MenuItem>} */}
          {jsonFile.map(item=>(
                <MenuItem key={item.id}  value={item.id}>{item.mark}</MenuItem>
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
