
import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CarSelector from "./Components/CarSelector"
import StarRatingWhole from "./Components/StarRatingWhole"
import SliderForText from "./Components/SliderForText"
import axios from 'axios';


function App() {
  /* const [jsonFile,setJson] = useState([{id:"1",mark:"bmw"},{id:"2",mark:"audi"}]); */
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

  let addValueToDataFormCar = (newDataName, newValueData ) =>{
    const temporaryArray = [...wholeDataFormToSendCar]
    let temporaryCheck = false;
    for(let i=0;i<temporaryArray.length;i++){
      if(temporaryArray[i].dataName ===newDataName){
        temporaryArray[i].dataName = newDataName;
        temporaryArray[i].dataValue = newValueData;
        temporaryCheck = true ;
      }
    }
    temporaryCheck ? setWholeDataFormToSendCar([...temporaryArray]) : setWholeDataFormToSendCar([...wholeDataFormToSendCar, {dataName:newDataName, dataValue:newValueData}])
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
        'http://192.168.2.174/olek/podpanel_oceny/function.php',
       /*  'http://192.168.0.80/olek/react-with-php-test/function.php', */
      );
        
      console.log(result.data)
      setJson(result.data)
      setDataAvalMark(true)
      
    };
    const fetchDataModel = async () => {
      const result = await axios(
        'http://192.168.2.174/olek/podpanel_oceny/function.php?id='+jsonFileCarSetup.id+"&whichSelector="+jsonFileCarSetup.whichSelectorToChoose,
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

  let  sendFullDataToBackend = async() =>{
    let valueCheck =  checkArraysDataBeforeSend(wholeDataFormToSendCar, wholeDataFormToSendRating, wholeDataFormToSendCons, wholeDataFormToSendPros)
    console.log(valueCheck)
   if(!valueCheck.infoBolean){
    let fullDataToSend = {car:wholeDataFormToSendCar, ratings: wholeDataFormToSendRating, cons:wholeDataFormToSendCons, pros:wholeDataFormToSendPros}
    console.log(fullDataToSend)
    const jSonToSend = JSON.stringify(fullDataToSend);
    const res = await axios.post('http://192.168.2.174/olek/podpanel_oceny/sendResponse.php', jSonToSend);
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
    console.log("clear")
  }




//czyscic dane ogolnie i gdy liczba pol zmaleje 
// zabezpiecz pola przed nie wystawieniem ocen, zabezpiecz przed zmiana danych
//dodaj do bazy i sprawdz czy sie udało i zwrotka
// pobierz wszystkie oceny do edycji

  return (
    <div className="App">
      <h1>Panel Oceny</h1>
      <div style={{display:"flex", justifyContent:"center"}}>
      <div>
      <h2>Wybierz pojazd z listy </h2>
      {dataAvalMark ?  (<CarSelector whichSelector={"Marks"} jsonFile={jsonFile} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing"   }
      {dataAvalModel ?  (<CarSelector whichSelector={"Models"} jsonFile={jsonFileModel}  onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing2"   }
      {dataAvalGeneration ?  (<CarSelector whichSelector={"Generations"} jsonFile={jsonFileGeneration} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing3"   }
      {dataAvalBody ?  (<CarSelector whichSelector={"Bodies"} jsonFile={jsonFileBody} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing4"   }
      {dataAvalEngine ?  (<CarSelector whichSelector={"Engines"} jsonFile={jsonFileEngine} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing5"   }
      {dataAvalGearbox ?  (<CarSelector whichSelector={"Gearboxes"} jsonFile={jsonFileGearbox} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataFormCar}/>) : "nothing6"   }
      </div>
      <div><h2>Edytuj Pojazd </h2> </div>

      </div>
      
      <h2>Wybierz ocene </h2>
        <StarRatingWhole  addValueToDataForm={addValueToDataFormRating}/>
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
      
       
    
      
      {wholeDataFormToSendCar.map(function(d, idx){
         return (<li key={idx}>{d.dataName}, {d.dataValue}</li>)
       })}

       <br></br>
        {wholeDataFormToSendRating.map(function(d, idx){
         return (<li key={idx}>{d.dataName}, {d.dataValue}</li>)
       })}
 <br></br>
{wholeDataFormToSendPros.map(function(d, idx){
         return (<li key={idx}>{d.name}, {d.value}</li>)
       })}
 <br></br>
{wholeDataFormToSendCons.map(function(d, idx){
         return (<li key={idx}>{d.name}, {d.value}</li>)
       })}
        <br></br>
  
 

      
    </div>
  );
}

export default App;
