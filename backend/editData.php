<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/* $mysqli = new mysqli('omlcsplvskdev2am.mysql.db','omlcsplvskdev2am','AUTmodev2baza2021hahatra','omlcsplvskdev2am' ) or die(mysqli_error($mysqli));
$mysqli->set_charset("utf8mb4"); */
$mysqli = new mysqli('localhost','root','','omlcsplvskdev2am' ) or die(mysqli_error($mysqli));
/* $mysqli = new mysqli('omlcsplvskdev2am.mysql.db','omlcsplvskdev2am','AUTmodev2baza2021hahatra','omlcsplvskdev2am' ) or die(mysqli_error($mysqli)); */
$mysqli->set_charset("utf8mb4");



$myJSON = null;
$arrayOfMarks = [];

$checkResult = $mysqli->query("SELECT * FROM oceny  ORDER BY id ASC") or die($mysqli1->error);

				 while ($checkRow2 = $checkResult->fetch_assoc()){
               $data = new stdClass();

               $mark_id = $checkRow2["mark_id"];
               $model_id = $checkRow2["model_id"];
               $generation_id = $checkRow2["generation_id"];
               $body_id = $checkRow2["body_id"];
               $engine_id = $checkRow2["engine_id"];
               $gearbox_id = $checkRow2["gearbox_id"];
               $mark_name = "";
               $model_name = "";
               $generation_name = "";
               $body_name = "";
               $engine_name = "";
               $gearbox_name = "";

               $InnerQuerry = $mysqli->query("SELECT marks.mark as mark,models.model as model,generations.generation as generation,bodies.body as body,engines.engine_full_name as engine, gearboxes.gearbox as gearbox FROM gearboxes
               JOIN engines ON engines.id = gearboxes.idOfEngine
               JOIN bodies ON bodies.id = engines.idOfBody
               JOIN generations ON generations.id = bodies.idOfGeneration
               JOIN models ON models.id = generations.idOfModel
               JOIN marks ON marks.id = models.idOfMark
               WHERE (gearboxes.id='$gearbox_id') AND (engines.id='$engine_id') AND(bodies.id='$body_id') AND(generations.id='$generation_id' )  AND (models.id='$model_id') AND (marks.id='$mark_id' )") or die($mysqli1->error);
              while ($checkData = $InnerQuerry->fetch_assoc()){
               $mark_name = $checkData["mark"];
               $model_name = $checkData["model"];
               $generation_name = $checkData["generation"];
               $body_name = $checkData["body"];
               $engine_name = $checkData["engine"];
               $gearbox_name = $checkData["gearbox"];

              }

                    $car = [];
                    $ratings = [];
                    $myObj = new stdClass();
                    $myObj->dataName = "Marks";
                    $myObj->dataValue = $checkRow2["mark_id"];
                    $myObj->dataRealName = $mark_name;
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Models";
                    $myObj->dataValue = $checkRow2["model_id"];
                    $myObj->dataRealName = $model_name;
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Generations";
                    $myObj->dataValue = $checkRow2["generation_id"];
                    $myObj->dataRealName =  $generation_name;
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Bodies";
                    $myObj->dataValue = $checkRow2["body_id"];
                    $myObj->dataRealName = $body_name;
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Engines";
                    $myObj->dataValue = $checkRow2["engine_id"];
                    $myObj->dataRealName = $engine_name;
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Gearboxes";
                    $myObj->dataValue = $checkRow2["gearbox_id"];
                    $myObj->dataRealName = $gearbox_name;
                    array_push($car, $myObj);

                    $myObj = new stdClass();
                    $myObj->dataName = "rating_caloksztalt";
                    $myObj->dataValue = $checkRow2["rating_caloksztalt"];
                    array_push($ratings, $myObj);

                    $myObj = new stdClass();
                    $myObj->dataName = "rating_silnik";
                    $myObj->dataValue = $checkRow2["rating_silnik"];
                    array_push($ratings, $myObj);

                    $myObj = new stdClass();
                    $myObj->dataName = "rating_skrzynia_biegow";
                    $myObj->dataValue = $checkRow2["rating_skrzynia_biegow"];
                    array_push($ratings, $myObj);

                    $myObj = new stdClass();
                    $myObj->dataName = "rating_uklad_jezdny";
                    $myObj->dataValue = $checkRow2["rating_uklad_jezdny"];
                    array_push($ratings, $myObj);

                    $myObj = new stdClass();
                    $myObj->dataName = "rating_karoseria";
                    $myObj->dataValue = $checkRow2["rating_karoseria"];
                    array_push($ratings, $myObj);

                    $myObj = new stdClass();
                    $myObj->dataName = "rating_widocznosc";
                    $myObj->dataValue = $checkRow2["rating_widocznosc"];
                    array_push($ratings, $myObj);

                    $myObj = new stdClass();
                    $myObj->dataName = "rating_ergonomia";
                    $myObj->dataValue = $checkRow2["rating_ergonomia"];
                    array_push($ratings, $myObj);

                    $myObj = new stdClass();
                    $myObj->dataName = "rating_wentylacja_ogrzewanie";
                    $myObj->dataValue = $checkRow2["rating_wentylacja_ogrzewanie"];
                    array_push($ratings, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "rating_wyciszenie";
                    $myObj->dataValue = $checkRow2["rating_wyciszenie"];
                    array_push($ratings, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "rating_przestrzen";
                    $myObj->dataValue = $checkRow2["rating_przestrzen"];
                    array_push($ratings, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "rating_utrzymanie";
                    $myObj->dataValue = $checkRow2["rating_utrzymanie"];
                    array_push($ratings, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "rating_cena_jakosc";
                    $myObj->dataValue = $checkRow2["rating_cena_jakosc"];
                    array_push($ratings, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "rating_bezawaryjnosc_podstawowa";
                    $myObj->dataValue = $checkRow2["rating_bezawaryjnosc_podstawowa"];
                    array_push($ratings, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "rating_bezawaryjnosc_powazne";
                    $myObj->dataValue = $checkRow2["rating_bezawaryjnosc_powazne"];
                    array_push($ratings, $myObj);

                    $pros = $checkRow2["rating_pozytywny"];
                    $cons = $checkRow2["rating_negatywny"];
                    
                   



                    $data->car = $car;
                    $data->ratings = $ratings;
                    $data->pros = json_decode($pros);
                    $data->cons = json_decode($cons);
                    
                   /*  echo '<pre>' , var_dump($data) , '</pre>'; */
                    
                    /* array_push($arrayOfMarks, $myObj); */

                   array_push($arrayOfMarks, $data);
        
                 }

echo(json_encode($arrayOfMarks));


?>