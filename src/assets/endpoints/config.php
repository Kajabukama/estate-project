<?php

	// Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    // database constants

    define(DB_SERVER, "localhost");
    define(DB_USER, "infocons_realest");
    define(DB_PASSWORD, "realest2017*&");
    define(DB_NAME, "infocons_realestate");

    // establish database connection

    $link = mysqli_connect(DB_SERVER,DB_USER,DB_PASSWORD,DB_NAME);
    if(!$link){
      die('Error : ' + mysqli_error($link));
    }

?>
