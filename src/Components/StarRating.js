import React,{useState, useEffect} from 'react'
/* import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';


import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'; */
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const StarRating = ({whichRating, dataRating, addValueToDataForm, id, /* dataRatingValueEdit */}) => {
  const [ratingValue, setRatingValue] = useState(0)
  let dataRatingNewTest = dataRating
  let addValueStar = (e) =>{
    console.log(dataRatingNewTest, e.target.value)
    addValueToDataForm(dataRatingNewTest,Number(e.target.value))
    setRatingValue(Number(e.target.value))
  }
  /* useEffect(() => {
    
    setRatingValue( Number(dataRatingValueEdit))
    console.log("TUTAJ WORKINGG")
  }, [dataRatingValueEdit]) */

    return (
        <div style={{width: "20%"}}>
     {/* {!ratingValue &&  (<h5 style={{color: "red"}}>Uzupełnij Ocene</h5>)}    */}   
        {<Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">{whichRating}</Typography>
        <Rating id={id+"-Rating"}
        value = {ratingValue}
          name={"unique-rating-"+id}
          
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          onChange={addValueStar}
        />
      </Box>}
        </div>
    )
}

export default StarRating
