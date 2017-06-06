<?php

		require_once 'config.php';

        $data = array();

        $query = "SELECT * FROM users ORDER BY id DESC";
        $result = mysqli_query($link, $query);

        if(mysqli_num_rows($result) > 0){

            while($rows = mysqli_fetch_assoc($result)){

                $data[] = array(
                   "id" => $rows['id'],
                   "firstname" => $rows['id'],
                   "lastname" => $rows['id'],
                   "sex" => $rows['sex'],
                   "dob" => $rows['dob'],
                   "phone" => $rows['phone'],
                   "email" => $rows['email'],
                   "avatar" => $rows['avatar'],
                   "role" => $rows['role'],
                   "created" => $rows['created']
                );
            }
        } else {
            $data[] = array(
                'status' => false,
                'message' => 'Sorry, there are no records'
            );
        }


		echo json_encode($data);
		mysqli_close($link);
?>
