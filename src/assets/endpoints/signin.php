<?php

    require_once 'config.php';

    $data = array();
    $postdata = file_get_contents("php://input");

    if(isset($postdata)){

      $request = json_decode($postdata);
      $email = $request->email;
      $password = $request->password;


      if(empty($email) && empty($password)){
        	$data = array("status" => false, "message" => "Email and Password is empty");
      } else {
        	$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password' LIMIT 1";
          $result = mysqli_query($link, $query);

          if(mysqli_num_rows($result) > 0){
            while($rows = mysqli_fetch_assoc($result)){
              $role = $rows['role'];
              $userid = $rows['id'];
            }
            $data = array("status" => true, "role" => $role, "id" => $userid,"message" => "success");
          } else {
            $data = array("status" => false, "message" => "there was an error ".mysqli_error($link));
          }
      }
    }

    echo json_encode($data);
	  mysqli_close($link);
?>
