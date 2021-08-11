
import './App.css';
import React, { useState, useEffect } from 'react';
import CarSelector from "./Components/CarSelector"
import StarRatingWhole from "./Components/StarRatingWhole"
import axios from 'axios';


function App() {
  const [jsonFile,setJson] = useState(null);
  const [dataAvalMark,setDataAvalMark] = useState(false)

  const [jsonFileMarkSetup,setJsonFileMarkSetup] = useState({id:null,whichSelectorToChoose:null})

  const [jsonFileModel,setJsonModel] = useState(null);
  const [dataAvalModel,setDataAvalModel] = useState(false)

  const [jsonFileModelSetup,setJsonFileModelSetup] = useState({id:null,whichSelectorToChoose:null})

  const [jsonFileGeneration,setJsonGeneration] = useState(null);
  const [dataAvalGeneration,setDataAvalGeneration] = useState(false)

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
    const fetchDataMark = async () => {
      const result = await axios(
        'http://192.168.2.174/olek/podpanel_oceny/function.php?id='+jsonFileMarkSetup.id+"&whichSelector="+jsonFileMarkSetup.whichSelectorToChoose,
      );
        
      console.log(result.data)
      setJsonModel(result.data)
      setDataAvalModel(true);
      
    };

    const fetchDataModel = async () => {
      const result = await axios(
        'http://192.168.2.174/olek/podpanel_oceny/function.php?id='+jsonFileModelSetup.id+"&whichSelector="+jsonFileModelSetup.whichSelectorToChoose,
      );
        
      console.log(result.data)
      setJsonGeneration(result.data)
      setDataAvalGeneration(true);
      
    };
    if(jsonFileMarkSetup.whichSelectorToChoose && jsonFileMarkSetup.whichSelectorToChoose==="Marks" && !dataAvalModel){
      fetchDataMark()// returnowanie własciwych wartości ?
    }
    if(jsonFileModelSetup.whichSelectorToChoose && jsonFileModelSetup.whichSelectorToChoose==="Models" && !dataAvalGeneration){
      fetchDataModel()// returnowanie własciwych wartości ?
    }


 if(!dataAvalMark){
  fetchData();
 }
    

  });

  let onSelectorClicked = (selectTarget, whichSelector) =>{
   
    console.log("clicked",selectTarget,whichSelector)
    if(whichSelector==="Marks"){
      //tu mozna zerowac poprzednie jbc
      setJsonFileMarkSetup({id:selectTarget,whichSelectorToChoose:whichSelector})
    }else if(whichSelector==="Models"){
      console.log("elo")
      setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector})
    }else if(whichSelector==="Generations"){
      console.log("elo2")
      /* setJsonFileModelSetup({id:selectTarget,whichSelectorToChoose:whichSelector}) */
    }
    

  }

  return (
    <div className="App">
      
      
      {dataAvalMark ?  (<CarSelector whichSelector={"Marks"} jsonFile={jsonFile} onSelectorClicked={onSelectorClicked}/>) : "nothing"   }
      {dataAvalModel ?  (<CarSelector whichSelector={"Models"} jsonFile={jsonFileModel} onSelectorClicked={onSelectorClicked}/>) : "nothing2"   }
      {dataAvalGeneration ?  (<CarSelector whichSelector={"Generations"} jsonFile={jsonFileGeneration} onSelectorClicked={onSelectorClicked}/>) : "nothing3"   }
      
        <StarRatingWhole />

        
      
      

      
    </div>
  );
}

export default App;
