<?php

      require_once 'config.php';

      $data = array();
      $postdata = file_get_contents("php://input");

      if(isset($postdata)){

          $request = json_decode($postdata);

          $cid = $request->client;
          $pid = $request->prop;
          $oid = $request->owner;
          $created = time();



          if(empty($cid) && empty($pid) && empty($oid)){
            $data = array("status" => false);
          } else {

            $query = "INSERT INTO booking(client_id, property_id, owner_id,created)
            VALUES($cid, $pid, $oid, $created)";
              $result = mysqli_query($link, $query);

              if($result){
                $data = array("status" => true);
              } else {
                $data = array('status' => false);
              }
          }


      }

      echo json_encode($data);
      // close connection
      mysqli_close($link);
?>
