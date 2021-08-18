<?php
header("Access-Control-Allow-Origin: *");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/* $mysqli = new mysqli('omlcsplvskdev2am.mysql.db','omlcsplvskdev2am','AUTmodev2baza2021hahatra','omlcsplvskdev2am' ) or die(mysqli_error($mysqli));
$mysqli->set_charset("utf8mb4"); */
$mysqli = new mysqli('localhost','root','','omlcsplvskdev2am' ) or die(mysqli_error($mysqli));
$mysqli->set_charset("utf8mb4");

echo "<h1>alles gut</h1>";
$data = new stdClass();
$myJSON = null;

$checkResult = $mysqli->query("SELECT * FROM oceny  ORDER BY id ASC") or die($mysqli1->error);
				 while ($checkRow2 = $checkResult->fetch_assoc()){
                    $car = [];
                    $ratings = [];
                    $myObj = new stdClass();
                    $myObj->dataName = "Marks";
                    $myObj->dataValue = $checkRow2["mark_id"];
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Models";
                    $myObj->dataValue = $checkRow2["model_id"];
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Generations";
                    $myObj->dataValue = $checkRow2["generation_id"];
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Bodies";
                    $myObj->dataValue = $checkRow2["body_id"];
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Engines";
                    $myObj->dataValue = $checkRow2["engine_id"];
                    array_push($car, $myObj);
                    $myObj = new stdClass();
                    $myObj->dataName = "Gearboxes";
                    $myObj->dataValue = $checkRow2["gearbox_id"];
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
                    
                    echo '<pre>' , var_dump($data) , '</pre>';
                    
                    /* array_push($arrayOfMarks, $myObj); */

                   
        
                 }

var_dump($arrayOfMarks)


?>