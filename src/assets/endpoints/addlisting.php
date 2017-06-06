<?php

      require_once 'config.php';

      $data = array();
      $postdata = file_get_contents("php://input");

      if(isset($postdata)){

          $request = json_decode($postdata);
          $owner = $request->owner;
          $type = $request->type;
          $category = $request->category;
          $price = $request->price;
          $location = $request->location;
          $address = $request->address;
          $description = $request->description;
          $thumbnail = "default.png";
          $available = 0;
          $created = time();



          if(empty($price) && empty($location) && empty($category) && empty($address)){
            $data = array("status" => false);
          } else {

            $query = "INSERT INTO property(owner_id, type, price, location, category, address, description, thumbnail, available, created)
            VALUES('$owner', '$type', $price,'$location','$category','$address','$description','$thumbnail','$available',$created)";
              $result = mysqli_query($link, $query);

              if($result){
                $data = array("status" => true, "role" => $role);
              } else {
                $data = array('status' => false, 'error' => mysqli_error($link));
              }
          }


      }

      echo json_encode($data);
      // close connection
      mysqli_close($link);
?>
