<?php
header("Access-Control-Allow-Origin: *");
/* $mysqli = new mysqli('omlcsplvskdev2am.mysql.db','omlcsplvskdev2am','AUTmodev2baza2021hahatra','omlcsplvskdev2am' ) or die(mysqli_error($mysqli));
$mysqli->set_charset("utf8mb4"); */

$mysqli = new mysqli('localhost','root','','omlcsplvskdev2am' ) or die(mysqli_error($mysqli));
$mysqli->set_charset("utf8mb4");
$arrayData = [];
$json = file_get_contents('php://input');
$data = json_decode($json);


/* if (isset($_POST['save']) && isset($_POST['whichTable'])){
    if($_POST['whichTable']== "marks"){
        $mark = $_POST['mark'];
        $url = $_POST['url'];
        $url_zdjecia = $_POST['url_zdjecia'];
        $markData = $_POST['markData'];
        $markHistoryData = $_POST['markHistoryData'];
        $carStatus = $_POST['carStatus'];
      
        $_SESSION['message'] = "Record has been Saved!";
        $_SESSION['msg_type'] = "success";
        
        $mysqli->query("INSERT INTO marks (mark,url,photo_url,markData,markHistoryData, status) VALUES('$mark','$url','$url_zdjecia','$markData','$markHistoryData', '$carStatus')") or die($mysqli->error);
        
          header("location:index.php?table=marks");
        
          
        
    } */
/*     echo $json;
var_dump($data[0]); */
$car_id = [];
/* $mark_id = $data->car[0]->dataValue; */
for($i = 0;$i<count($data->car);$i++){
    array_push($car_id,$data->car[$i]->dataValue);
}
$ratings_id = [];
for($i = 0;$i<count($data->ratings);$i++){
    array_push($ratings_id,$data->ratings[$i]->dataValue);
}
$pros = json_encode($data->pros);
$cons = json_encode($data->cons);



/* $mysqli->query("INSERT INTO marks (mark_id,model_id,generation_id,body_id,engine_id, gearbox_id,
rating_caloksztalt, rating_silnik, rating_skrzynia_biegow, rating_uklad_jezdny,rating_karoseria, rating_widocznosc, rating_ergonomia, rating_wentylacja_ogrzewanie,
rating_wyciszenie, rating_przestrzen, rating_utrzymanie, rating_cena_jakosc, rating_bezawaryjnosc_podstawowa, rating_bezawaryjnosc_powazne
rating_pozytywny,rating_negatywny
)
 VALUES("$car_id[0]",  "$car_id[1]", "$car_id[2]","$car_id[3]","$car_id[4]","$car_id[5]","$ratings_id[0]") or die($mysqli->error); */






echo json_encode($car_id)



?>