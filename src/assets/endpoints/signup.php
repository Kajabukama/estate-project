<?php

      require_once 'config.php';

      $data = array();
      $postdata = file_get_contents("php://input");

      if(isset($postdata)){

      $request = json_decode($postdata);
          $userid = "";
          $firstname = $request->firstname;
          $lastname = $request->lastname;
          $sex = $request->sex;
          $dob = $request->dob;
          $phone = $request->phone;
          $email = $request->email;
          $password = $request->password;
          $avatar = "default.png";
          $role = $request->role;
          $created = time();



          if(empty($firstname) && empty($lastname) && empty($email) && empty($password)){
            $data = array("status" => false);
          } else {

            $query = "INSERT INTO users(firstname, lastname, sex, dob, phone, email, password, avatar, role, created)
            VALUES('$firstname','$lastname','$sex', $dob','$phone','$email','$password','$avatar','$role','$created')";

            $result = mysqli_query($link, $query);
            $userid = mysqli_insert_id($link);

            if($result){
              $data = array("status" => true, "id" => $userid);
            } else {
              $data = array('status' => false);
            }
          }


      }

      echo json_encode($data);
      // close connection
      mysqli_close($link);
?>
