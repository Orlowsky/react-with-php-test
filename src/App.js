
import './App.css';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CarSelector from "./Components/CarSelector"
import CarSelectorNewCheck from "./Components/CarSelectorNewCheck"
import StarRatingWhole from "./Components/StarRatingWhole"
import SliderForText from "./Components/SliderForText"
import EditSelector from "./Components/EditSelector"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const classes = useStyles();
  /* const [jsonFile,setJson] = useState([{id:"1",mark:"bmw"},{id:"2",mark:"audi"}]); */
  /* editData */
  const [editData,setEditData] = useState(null)

  const [jsonFile,setJson] = useState(null);
  const [dataAvalMark,setDataAvalMark] = useState(false)
  const [jsonFileCarSetup,setJsonFileCarSetup] = useState({id:null,whichSelectorToChoose:null})
  
  const [jsonFileModel,setJsonModel] = useState(null);
  const [dataAvalModel,setDataAvalModel] = useState(false)

  const [jsonFileGeneration,setJsonGeneration] = useState(null);
  const [dataAvalGeneration,setDataAvalGeneration] = useState(false)

  const [jsonFileBody,setJsonBody] = useState(null);
  const [dataAvalBody,setDataAvalBody] = useState(false)

  const [jsonFileEngine,setJsonEngine] = useState(null);
  const [dataAvalEngine,setDataAvalEngine] = useState(false)

  const [jsonFileGearbox,setJsonGearbox] = useState(null);
  const [dataAvalGearbox,setDataAvalGearbox] = useState(false)

  const [wholeDataFormToSendCar, setWholeDataFormToSendCar] = useState([])
  const [wholeDataFormToSendRating, setWholeDataFormToSendRating] = useState([])
  const [wholeDataFormToSendPros,setWholeDataFormToSendPros] = useState([])
  const [wholeDataFormToSendCons,setWholeDataFormToSendCons] = useState([])

  const [sendDataInfoBack,setSendDataInfoBack] = useState(null)

  const[ratingPageDataForPageWordpress,setRatingPageDataForPageWordpress] = useState(null)

  let addValueToDataFormCar = (newDataName, newValueData, newDataRealName ) =>{
    const temporaryArray = [...wholeDataFormToSendCar]
    let temporaryCheck = false;
    for(let i=0;i<temporaryArray.length;i++){
      if(temporaryArray[i].dataName ===newDataName){
        temporaryArray[i].dataName = newDataName;
        temporaryArray[i].dataValue = newValueData;
        temporaryArray[i].dataRealName = newDataRealName;
        temporaryCheck = true ;
      }
    }
    temporaryCheck ? setWholeDataFormToSendCar([...temporaryArray]) : setWholeDataFormToSendCar([...wholeDataFormToSendCar, {dataName:newDataName, dataValue:newValueData, dataRealName:newDataRealName}])
 console.log(wholeDataFormToSendCar)
  }
  let addValueToDataFormRating = (newDataName, newValueData ) =>{
    const temporaryArray = [...wholeDataFormToSendRating]
    let temporaryCheck = false;
    for(let i=0;i<temporaryArray.length;i++){
      if(temporaryArray[i].dataName ===newDataName){
        temporaryArray[i].dataName = newDataName;
        temporaryArray[i].dataValue = newValueData;
        temporaryCheck = true ;
      }
    }
    temporaryCheck ? setWholeDataFormToSendRating([...temporaryArray]) : setWholeDataFormToSendRating([...wholeDataFormToSendRating, {dataName:newDataName, dataValue:newValueData}])
  }

  let addValueToProsAndCons=(prosOrCons, data)=>{
    if(prosOrCons === "Zalety"){
setWholeDataFormToSendPros(data)
    }else if(prosOrCons === "Wady"){
      setWholeDataFormToSendCons(data)
    }

  }

  useEffect(() => {
    
    const fetchData = async () => {
      const result = await axios(
        /* 'https://dev2.automotyw.com/addRatings/backend/function.php', */
        'http://192.168.2.174/olek/podpanel_oceny/backend/function.php',
       /*  'http://192.168.0.80/olek/react-with-php-test/function.php', */
      );
        
     
      setJson(result.data)
      setDataAvalMark(true)
      
    };
    const fetchEditData = async() => {
      const result = await axios(
        /* 'https://dev2.automotyw.com/addRatings/backend/editData.php', */
        'http://192.168.2.174/olek/podpanel_oceny/backend/editData.php',
       
      );
      console.log(result.data)
       setEditData(result.data) 

    }


    const fetchDataModel = async () => {
      const result = await axios(
        /* 'https://dev2.automotyw.com/addRatings/backend/function.php?id='+jsonFileCarSetup.id+"&whichSelector="+jsonFileCarSetup.whichSelectorToChoose, */
        'http://192.168.2.174/olek/podpanel_oceny/backend/function.php?id='+jsonFileCarSetup.id+"&whichSelector="+jsonFileCarSetup.whichSelectorToChoose,
      );
        
     /*  console.log(result.data) */
     console.log(result.data)
      /* setJsonGeneration(result.data) */
      
      return result.data
      
    };
    if(jsonFileCarSetup.whichSelectorToChoose && jsonFileCarSetup.whichSelectorToChoose==="Marks" && !dataAvalModel){
      (async function(){
        let dataToMatch = await fetchDataModel()// returnowanie własciwych wartości ?
        setJsonModel(dataToMatch)
      setDataAvalModel(true);
    })()
    }
    if(jsonFileCarSetup.whichSelectorToChoose && jsonFileCarSetup.whichSelectorToChoose==="Models" && !dataAvalGeneration){
      // returnowanie własciwych wartości ?
      (async function(){
        let dataToMatch = await fetchDataModel()
        console.log(dataToMatch)
        setJsonGeneration(dataToMatch)
        setDataAvalGeneration(true);
      })()
    }

    if(jsonFileCarSetup.whichSelectorToChoose && jsonFileCarSetup.whichSelectorToChoose==="Generations" && !dataAvalBody){
      // returnowanie własciwych wartości ?
      (async function(){
        let dataToMatch = await fetchDataModel()
        console.log(dataToMatch)
        setJsonBody(dataToMatch)
        setDataAvalBody(true);
      })()
    }
    if(jsonFileCarSetup.whichSelectorToChoose && jsonFileCarSetup.whichSelectorToChoose==="Bodies" && !dataAvalEngine){
      // returnowanie własciwych wartości ?
      (async function(){
        let dataToMatch = await fetchDataModel()
        console.log(dataToMatch)
        setJsonEngine(dataToMatch)
        setDataAvalEngine(true);
      })()
    }
    if(jsonFileCarSetup.whichSelectorToChoose && jsonFileCarSetup.whichSelectorToChoose==="Engines" && !dataAvalGearbox){
      // returnowanie własciwych wartości ?
      (async function(){
        let dataToMatch = await fetchDataModel()
        console.log(dataToMatch)
        setJsonGearbox(dataToMatch)
        setDataAvalGearbox(true);
      })()
    }


 if(!dataAvalMark){
  fetchData();
 }

 if(!editData){
  fetchEditData()
 }
    

  },[jsonFileCarSetup,dataAvalBody,dataAvalEngine, dataAvalGearbox, dataAvalGeneration, dataAvalMark, dataAvalModel]);

  let onSelectorClicked = (selectTarget, whichSelector) =>{
   
    console.log("clicked",selectTarget,whichSelector)
    if(whichSelector==="Marks"){
      //tu mozna zerowac poprzednie jbc
      setDataAvalModel(false)
      setDataAvalGeneration(false)
      setDataAvalBody(false)
      setDataAvalEngine(false)
      setDataAvalGearbox(false)
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Marks"})
    }else if(whichSelector==="Models"){
      console.log("elo")
      setDataAvalGeneration(false)
      setDataAvalBody(false)
      setDataAvalEngine(false)
      setDataAvalGearbox(false)
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Models"})
    }else if(whichSelector==="Generations"){
      console.log("elo2")
      setDataAvalBody(false)
      setDataAvalEngine(false)
      setDataAvalGearbox(false)
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Generations"})
      /* setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector}) */
    }else if(whichSelector==="Bodies"){
      setDataAvalEngine(false)
      setDataAvalGearbox(false)
     
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Bodies"})
      /* setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector}) */
    }else if(whichSelector==="Engines"){
      
      setDataAvalGearbox(false)
    
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Engines"})
      /* setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector}) */
    }else if(whichSelector==="Gearboxes"){
      console.log("Jestesmy na koncu")
      /* setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Engines"}) */
      /* setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector}) */
    }
    

  }

  let checkArraysDataBeforeSend = (car, ratings, cons,pros) => {
   if(car.length < 6 ){
    return ({info:"Brakuje Danych O pojeździe", infoBolean:true });
   }else if(ratings.length < 14){
     return ({info: "Brakuje Danych O Ocenach" , infoBolean:true });
   }else if(cons.length < 1){
    return ({info : "Brakuje Danych O Wadach" , infoBolean:true });
   }else if(pros.length < 1){
    return ({info : "Brakuje Danych O Zaletach" , infoBolean:true });
   }else{
    return({info : "GiT" , infoBolean:false })
   }
    
    
  
  }

  let newArrayStar = (data,whichdata,text)=>{
    console.log(data.ratings[whichdata].dataValue) 
    var numberTofloor = Math.floor(data.ratings[whichdata].dataValue);
    var decimalNumber = data.ratings[whichdata].dataValue - numberTofloor
   let stringFullStars  =new Array(numberTofloor).fill(null).map(el=>"<img src='https://dev.automotyw.com/wp-content/uploads/2021/08/star_gold.svg'>").join("")
   let stringhalfStar = ""
   let stringEmptyStars = ""
   if(decimalNumber> 0 ){
    stringhalfStar = `<img src='https://dev.automotyw.com/wp-content/uploads/2021/08/starf_half.svg'></img>`
    stringEmptyStars = new Array(4-numberTofloor).fill(null).map(el=>"<img src='https://dev.automotyw.com/wp-content/uploads/2021/08/star_gray.svg'>").join("")
   }else{
    stringEmptyStars = new Array(5-numberTofloor).fill(null).map(el=>"<img src='https://dev.automotyw.com/wp-content/uploads/2021/08/star_gray.svg'>").join("")
   }
    var fullString  = `<div class="rating-one" style="display: flex;justify-content: space-between;"><p class="ratingName">${text}</p><div class="ratingValue">${stringFullStars+stringhalfStar+stringEmptyStars}</div></div>`
   return  fullString
  }

  let createScriptForMarks = (fullData) =>{
   
    
      console.log(fullData)
      let array=[];
      let fullString = `
<h1>Oceny</h1>
<h2>${fullData.car[0].dataRealName} ${fullData.car[1].dataRealName} ${fullData.car[2].dataRealName} ${fullData.car[3].dataRealName} ${fullData.car[4].dataRealName} ${fullData.car[5].dataRealName}</h2>
<div id='ratingContainer' class='rating-container' style="
display: flex;  justify-content: space-between;">
<div class="leftPart-rating-container">
<div class="leftPart-one"> 
<h4>Wrażenia</h4>
${newArrayStar(fullData,0,"Całokształt")}
${newArrayStar(fullData,1,"Silnik")}
${newArrayStar(fullData,2,"Skrzynia Biegów")}
${newArrayStar(fullData,3,"Układ Jezdny")}
${newArrayStar(fullData,4,"Karoseria")}
</div> 
<div class="leftPart-one"> 
<h4>Komfort</h4>
${newArrayStar(fullData,5,"Widoczność")}
${newArrayStar(fullData,6,"Ergonomia")}
${newArrayStar(fullData,7,"Wentylacja i Ogrzewanie")}
${newArrayStar(fullData,8,"Wyciszenie")}
${newArrayStar(fullData,9,"Przestrzeń")}
</div> 
<div class="leftPart-one"> 
<h4>Ekonomiczność</h4>
${newArrayStar(fullData,10,"Łatwość Utrzymania(koszt)")}
${newArrayStar(fullData,11,"Stosunek jakość/cena")}
</div> 
<div class="leftPart-one"> 
<h4>Bezawaryjność</h4>
${newArrayStar(fullData,12,"Bezawaryjność (drobiazgi)")}
${newArrayStar(fullData,13,"Bezawaryjność (poważne usterki")}
</div> 

</div>
<div class="rightPart-rating-container">
<div class="pros-and-cons" style="display: flex; ">
<div style="width: 100%">
<img style="width: 70%;margin-left: 15%;" src='https://dev.automotyw.com/wp-content/uploads/2021/08/rekagora.svg' >
</div>
<div> <h4 style="margin-top: 1rem;">Zalety</h4>
${fullData.pros.map((el,index)=>{
    return `<p class="textfield-zalety ${el.name}">${el.value}</p>`
}).join("")}

</div>
</div>
<div class="pros-and-cons" style="display: flex;">
<div style="width: 100%">
<img style="width: 70%;margin-left: 15%;" src='https://dev.automotyw.com/wp-content/uploads/2021/08/rekadol.svg' >
</div>
<div> <h4 style="margin-top: 1rem;">Wady</h4>
${fullData.cons.map((el,index)=>{
  return `<p class="textfield-zalety ${el.name}">${el.value}</p>`
}).join("")}
</div>
</div>
</div>


</div>`;
console.log(fullString)
let fullStringWithDOMFunction =   fullString 

setRatingPageDataForPageWordpress(fullStringWithDOMFunction)
  }

  let  sendFullDataToBackend = async() =>{
    let valueCheck =  checkArraysDataBeforeSend(wholeDataFormToSendCar, wholeDataFormToSendRating, wholeDataFormToSendCons, wholeDataFormToSendPros)
    console.log(valueCheck)
   if(!valueCheck.infoBolean){
    let fullDataToSend = {car:wholeDataFormToSendCar, ratings: wholeDataFormToSendRating, cons:wholeDataFormToSendCons, pros:wholeDataFormToSendPros}
    createScriptForMarks(fullDataToSend)
    const jSonToSend = JSON.stringify(fullDataToSend);
    const res = await axios.post('http://192.168.2.174/olek/podpanel_oceny/backend/sendResponse.php', jSonToSend);
    /* const res = await axios.post('https://dev2.automotyw.com/addRatings/backend/sendResponse.php', jSonToSend); */
    console.log(valueCheck.info)
    console.log(res)
    if(res.statusText === "OK"){
      setSendDataInfoBack(res.data)
    }else{
      setSendDataInfoBack(res.data)
    }
    
    
   }else{
     console.log(valueCheck.info)
     setSendDataInfoBack(valueCheck.info)
   }
    
  /*   setSendDataInfoBack(res.data) */
  } 

  let clearAllData = () =>{
    /* console.log("clear")
    console.log(jsonFile,jsonFileModel,jsonFileGeneration,jsonFileBody,jsonFileEngine,jsonFileGearbox) */
    setJson(null)
    setJsonModel(null)
    setJsonGeneration(null)
    setJsonBody(null)
    setJsonEngine(null)
    setJsonGearbox(null)
    setDataAvalGearbox(false)
    setDataAvalEngine(false)
    setDataAvalBody(false)
    setDataAvalGeneration(false)
    setDataAvalModel(false)
    setDataAvalMark(false)
    setJsonFileCarSetup({id:null,whichSelectorToChoose:null})
  //wyczyszczenie gwiazdek poprzez funkcje do wnetrza
   
    
    
    setWholeDataFormToSendCar([])
    setWholeDataFormToSendRating([])
    setWholeDataFormToSendPros([])
    setWholeDataFormToSendCons([])
  }

  let choosenEditDatatoWork=(choosenData) => {
    console.log(choosenData)
    setWholeDataFormToSendCar(choosenData.car)
    setWholeDataFormToSendRating(choosenData.ratings)
    setWholeDataFormToSendPros(choosenData.pros)
    setWholeDataFormToSendCons(choosenData.cons)
    
  
    /* setDataAvalGeneration(true)
    setDataAvalBody(true)
    setDataAvalEngine(true)
    setDataAvalGearbox(true) */ 

 
  }




//EDYCJA POla kazdego, pobieram auta ale problemy z przekazaniem zmiennych 
//czyszczenie danych, włacznie z wyczysczeniem pól po tych danych gwiazdki i wady i zalety bo pojazdy czysci FUNKCJE CZYSZCZACE OD WEWNATRZ
//poprawic nazwe silnika 


  return (
    <div className="App">
      <h1>Panel Oceny</h1>
      <div style={{display:"flex", justifyContent:"center"}}>
      <div>
      <h2>Wybierz pojazd z listy </h2>
      {/* {dataAvalMark ?  (<CarSelectorNewCheck whichSelector={"Marks"} jsonFile={jsonFile} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar} />) : "nothing"   } */}
      {dataAvalMark ?  (<CarSelector whichSelector={"Marks"} jsonFile={jsonFile} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar} />) : "nothing"   }
      {dataAvalModel ?  (<CarSelector whichSelector={"Models"} jsonFile={jsonFileModel}  onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing2"   }
      {dataAvalGeneration ?  (<CarSelector whichSelector={"Generations"} jsonFile={jsonFileGeneration} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing3"   }
      {dataAvalBody ?  (<CarSelector whichSelector={"Bodies"} jsonFile={jsonFileBody} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing4"   }
      {dataAvalEngine ?  (<CarSelector whichSelector={"Engines"} jsonFile={jsonFileEngine} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing5"   }
      {dataAvalGearbox ?  (<CarSelector whichSelector={"Gearboxes"} jsonFile={jsonFileGearbox} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing6"   }
      </div>
      <div><h2>Edytuj Pojazd </h2> 
      {editData ?(<EditSelector editData={editData} choosenEditDatatoWork={choosenEditDatatoWork}/>) : ("Loading...") }
      </div>

      </div>
      
      <h2>Wybierz ocene </h2>
        <StarRatingWhole  addValueToDataForm={addValueToDataFormRating} /* ratingsValuePassed={wholeDataFormToSendRating} *//>
        <h2>Podaj wady i zalety </h2>
    <div style={{display:"flex" }}>
    <SliderForText prosAndCons="Zalety" addValueToProsAndCons={addValueToProsAndCons}/>
<SliderForText prosAndCons="Wady" addValueToProsAndCons={addValueToProsAndCons} />

    </div>

    <div style={{display:"flex", justifyContent : 'center'}}>
    <Button variant="contained" color="primary" onClick={(e)=>{sendFullDataToBackend()}}>
        Wyślij
      </Button>
        <Button variant="contained" color="secondary" onClick={(e)=>{clearAllData()}}>
        Wyczyść dane
      </Button>
      </div>
      {sendDataInfoBack}
      <Card className={classes.root} variant="outlined">
      <CardContent>
      {ratingPageDataForPageWordpress ? (
      <Button variant="contained"
       color="secondary"
       style={{backgroundColor:"green"}} onClick={() => {navigator.clipboard.writeText(ratingPageDataForPageWordpress)}}>
       Skopiuj Element Do Schowka
      </Button>): ""}
      {ratingPageDataForPageWordpress ? (<p>{ratingPageDataForPageWordpress.substring(0, 200)+"..."}</p>): ""}
      {!ratingPageDataForPageWordpress && (wholeDataFormToSendCar.map(function(d, idx){
         return (<li key={idx}>{d.dataName}, {d.dataValue}</li>)
       }))}

       <br></br>
        { !ratingPageDataForPageWordpress && (wholeDataFormToSendRating.map(function(d, idx){
         return (<li key={idx}>{d.dataName}, {d.dataValue}</li>)
       }))}
 <br></br>
{ !ratingPageDataForPageWordpress && (wholeDataFormToSendPros.map(function(d, idx){
         return (<li key={idx}>{d.name}, {d.value}</li>)
       }))}
 <br></br>
{ !ratingPageDataForPageWordpress && (wholeDataFormToSendCons.map(function(d, idx){
         return (<li key={idx}>{d.name}, {d.value}</li>)
       }))}
        <br></br>
        </CardContent>
 </Card>

      
    </div>
  );
}

export default App;
