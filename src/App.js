
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

  const [wholeDataFormToSend, setWholeDataFormToSend] = useState([])
  const [wholeDataFormToSendPros,setWholeDataFormToSendPros] = useState(null)
  const [wholeDataFormToSendCons,setWholeDataFormToSendCons] = useState(null)

  let addValueToDataForm = (newDataName, newValueData ) =>{
    const temporaryArray = [...wholeDataFormToSend]
    let temporaryCheck = false;
    for(let i=0;i<temporaryArray.length;i++){
      if(temporaryArray[i].dataName ===newDataName){
        temporaryArray[i].dataName = newDataName;
        temporaryArray[i].dataValue = newValueData;
        console.log("istnieje")
        temporaryCheck = true ;
      }
    }

    if(temporaryCheck){
    setWholeDataFormToSend([...temporaryArray])
    }else{
      setWholeDataFormToSend([...wholeDataFormToSend, {dataName:newDataName, dataValue:newValueData}])
    }
    
  }

  let addValueToProsAndCons=(prosOrCons, data)=>{
    if(prosOrCons === "Zalety"){
setWholeDataFormToSendPros(data)
    }else if(prosOrCons === "Wady"){
      setWholeDataFormToSendCons(data)
    }

  }

  useEffect(() => {
    console.log(wholeDataFormToSendPros, wholeDataFormToSendCons)
    
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
    

  });

  let onSelectorClicked = (selectTarget, whichSelector) =>{
   
    console.log("clicked",selectTarget,whichSelector)
    if(whichSelector==="Marks"){
      //tu mozna zerowac poprzednie jbc
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Marks"})
    }else if(whichSelector==="Models"){
      console.log("elo")
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Models"})
    }else if(whichSelector==="Generations"){
      console.log("elo2")
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Generations"})
      /* setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector}) */
    }else if(whichSelector==="Bodies"){
      console.log("elo2")
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Bodies"})
      /* setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector}) */
    }else if(whichSelector==="Engines"){
      console.log("elo2")
      setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Engines"})
      /* setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector}) */
    }else if(whichSelector==="Gearboxes"){
      console.log("Jestesmy na koncu")
      /* setJsonFileCarSetup({id:selectTarget,whichSelectorToChoose:"Engines"}) */
      /* setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector}) */
    }
    

  }
//mozna to zrobic tak ze bedzie sprawdzał to zmienne useEffect i resetowac te powyzej i powinno byc git 
//zabezpieczenia 
//czyscic dane ogolnie i gdy liczba pol zmaleje 
//stworzyc wspolny element wysyłajacy dane  
  return (
    <div className="App">
      <h1>Panel Oceny</h1>
      <h2>Wybierz pojazd z listy </h2>
      {dataAvalMark ?  (<CarSelector whichSelector={"Marks"} jsonFile={jsonFile} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataForm}/>) : "nothing"   }
      {dataAvalModel ?  (<CarSelector whichSelector={"Models"} jsonFile={jsonFileModel}  onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataForm}/>) : "nothing2"   }
      {dataAvalGeneration ?  (<CarSelector whichSelector={"Generations"} jsonFile={jsonFileGeneration} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataForm}/>) : "nothing3"   }
      {dataAvalBody ?  (<CarSelector whichSelector={"Bodies"} jsonFile={jsonFileBody} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataForm}/>) : "nothing4"   }
      {dataAvalEngine ?  (<CarSelector whichSelector={"Engines"} jsonFile={jsonFileEngine} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataForm}/>) : "nothing5"   }
      {dataAvalGearbox ?  (<CarSelector whichSelector={"Gearboxes"} jsonFile={jsonFileGearbox} onSelectorClicked={onSelectorClicked} addValueToDataForm={addValueToDataForm}/>) : "nothing6"   }
      
      <h2>Wybierz ocene </h2>
        <StarRatingWhole  addValueToDataForm={addValueToDataForm}/>
        <h2>Podaj wady i zalety </h2>
    <div style={{display:"flex" }}>
    <SliderForText prosAndCons="Zalety" addValueToProsAndCons={addValueToProsAndCons}/>
<SliderForText prosAndCons="Wady" addValueToProsAndCons={addValueToProsAndCons} />

    </div>
        



        <Button variant="contained" color="primary">
        Wyślij
      </Button>
      
      {wholeDataFormToSend.map(function(d, idx){
         return (<li key={idx}>{d.dataName}, {d.dataValue}</li>)
       })}

      
    </div>
  );
}

export default App;
