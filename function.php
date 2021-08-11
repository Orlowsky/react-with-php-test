<?php
header("Access-Control-Allow-Origin: *");
/* $mysqli = new mysqli('omlcsplvskdev2am.mysql.db','omlcsplvskdev2am','AUTmodev2baza2021hahatra','omlcsplvskdev2am' ) or die(mysqli_error($mysqli));
$mysqli->set_charset("utf8mb4"); */
$mysqli = new mysqli('localhost','root','','omlcsplvskdev2am' ) or die(mysqli_error($mysqli));
$mysqli->set_charset("utf8mb4");

if(count($_GET)==0){
$arrayOfMarks = [];
$checkResult = $mysqli->query("SELECT id,url,mark,photo_url FROM marks WHERE status=1 ORDER BY mark ASC") or die($mysqli1->error);
				 while ($checkRow2 = $checkResult->fetch_assoc()){
                    
                    /* foreach ($checkRow2 as $key => $value) {
                      $fullContentBody = $fullContentBody ."<td scope='col'>".$value."</td> ";
                      } */
                      
                        $myObj = new stdClass();
                    

                    $myObj->id = $checkRow2["id"];
                    $myObj->mark = $checkRow2["mark"];

                    array_push($arrayOfMarks, $myObj);

                   /*    $fullContentBody = $fullContentBody ."<div class='car-model-one' data-id='".$checkRow2['id']."'> ";
                      $fullContentBody = $fullContentBody ."<a href='https://automotyw.com/katalog-samochodow/".$checkRow2['url']."'>";
                      $fullContentBody = $fullContentBody ."<div class='logo-div'><img class='logo-inside' alt='".$checkRow2['model']." ".$markOfCar ."' src='" . ($resultSrc= ($checkRow2['photo_url']!=="") ? ("https://automotyw.com/wp-content/uploads/".$checkRow2['photo_url']):('https://automotyw.com/katalog-samochodow/auto1_template.jpg') ). "' /></div>";
                      $fullContentBody = $fullContentBody ."<span class='name-inside'>".$checkRowPreviousMark." ".$checkRow2['model']."</span>";
                      $fullContentBody = $fullContentBody ."</a></div>"
                      ; */
        
                 }
                 $myJSON = json_encode($arrayOfMarks);

                 echo $myJSON;
                }elseif ((count($_GET)!=0) && (isset($_GET['whichSelector'])) && (isset($_GET['id'])) && $_GET['whichSelector']==="Marks"){
                    $get_id =$_GET['id'] ;
                    $arrayOfMarks = [];
                    $checkResult = $mysqli->query("SELECT id,url,model,photo_url FROM models WHERE (idOfMark='$get_id' AND status=1) ORDER BY model ASC ") or die($mysqli1->error);
				 while ($checkRow2 = $checkResult->fetch_assoc()){
                    
                    /* foreach ($checkRow2 as $key => $value) {
                      $fullContentBody = $fullContentBody ."<td scope='col'>".$value."</td> ";
                      } */

                      $myObj = new stdClass();
                    

                      $myObj->id = $checkRow2["id"];
                      $myObj->mark = $checkRow2['model'];
  
                      array_push($arrayOfMarks, $myObj);


                      
        
                 }




                 $myJSON = json_encode($arrayOfMarks);

                 echo $myJSON;

                }elseif ((count($_GET)!=0) && (isset($_GET['whichSelector'])) && (isset($_GET['id'])) && $_GET['whichSelector']==="Models"){
                    $get_id =$_GET['id'] ;
                    $arrayOfMarks = [];
                    $checkResult = $mysqli->query("SELECT id,url,generation,photo_url,start,end FROM generations WHERE idOfModel='$get_id' AND status=1 ORDER BY start ASC") or die($mysqli1->error);
				 while ($checkRow2 = $checkResult->fetch_assoc()){
                    
                    /* foreach ($checkRow2 as $key => $value) {
                      $fullContentBody = $fullContentBody ."<td scope='col'>".$value."</td> ";
                      } */

                      $myObj = new stdClass();
                    

                      $myObj->id = $checkRow2["id"];
                      $myObj->mark = $checkRow2['generation'];
  
                      array_push($arrayOfMarks, $myObj);


                      
        
                 }




                 $myJSON = json_encode($arrayOfMarks);

                 echo $myJSON;

                }




?>