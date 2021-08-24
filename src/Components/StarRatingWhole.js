import React from 'react'
import StarRating from './StarRating'


const styles = {
    wholeContainer:{
        display:"flex",
        width:"100%",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    starRatingStyle:{
        width:"33%"
    }
}

const StarRatingWhole = ({addValueToDataForm, ratingsValuePassed}) => {
   let ratingDataTable = [["Całokształt", "rating_caloksztalt"], ["Silnik", "rating_silnik"], ["Skrzynia biegów", "rating_skrzynia_biegow"], ["Układ jezdny", "rating_uklad_jezdny"], ["Karoseria", "rating_karoseria"], ["Widoczność", "rating_widocznosc"], ["Ergonomia", "rating_ergonomia"], ["Wentylacja i Ogrzewanie", "rating_wentylacja_ogrzewanie"], ["Wyciszenie", "rating_wyciszenie"], ["Przestrzeń dla kierowcy i pasażerów", "rating_przestrzen"], ["Łatwość utrzymania( pod względem kosztów)", "rating_utrzymanie"], ["Stosunek jakość/cena", "rating_cena_jakosc"], ["Bezawaryjność(drobiazgi)", "rating_bezawaryjnosc_podstawowa"], ["Bezawaryjność(poważne usterki)", "rating_bezawaryjnosc_powazne"]]
   
    return (
        <div style={styles.wholeContainer}>
            {ratingDataTable.map((star,index)=>{

               return <StarRating addValueToDataForm={addValueToDataForm} style={styles.starRatingStyle} id={"star-rating"+ index} key={"star-rating"+ index} whichRating={ratingDataTable[index][0]} dataRating={ratingDataTable[index][1]} /* dataRatingValueEdit={ratingsValuePassed.length ===0  ? "0": ( ratingsValuePassed[index] ?  ratingsValuePassed[index].dataValue : "0") } */  />
            })}
            

        </div>
    )
}

export default StarRatingWhole
