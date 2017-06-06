<?php

		require_once 'config.php';

		if(isset($_GET['userid']) && isset($_GET['table'])){

			$uid = $_GET['userid'];
            $table = $_GET['table'];
            $data = array();

			$query = "SELECT * FROM $table WHERE id = $uid LIMIT 1";
			$result = mysqli_query($link, $query);

			if(mysqli_num_rows($result) > 0){
				while($rows = mysqli_fetch_assoc($result)){
					$data = $rows;
				}
			}

		} else {
            $data = array(
                'status' => false,
                'message' => 'user id is not set'
            );
        }

		echo json_encode($data);
		mysqli_close($link);
?>
