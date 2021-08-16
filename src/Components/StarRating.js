import React from 'react'

/* import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'; */
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const StarRating = ({whichRating, dataRating, addValueToDataForm, id}) => {

  let dataRatingNewTest = dataRating
  let addValueStar = (e) =>{
    console.log(dataRatingNewTest, e.target.value)
    addValueToDataForm(dataRatingNewTest,e.target.value)
  }

    return (
        <div>
          
        {<Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">{whichRating}</Typography>
        <Rating id={id+"-Rating"}
        
          name={"unique-rating-"+id}
          defaultValue={2.5}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          onChange={addValueStar}
        />
      </Box>}
        </div>
    )
}

export default StarRating
