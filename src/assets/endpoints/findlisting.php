<?php

		require_once 'config.php';

		if(isset($_GET['lid'])){

			$lid = $_GET['lid'];
            $data = array();

			$query = "SELECT * FROM property WHERE id = $lid LIMIT 1";
			$result = mysqli_query($link, $query);

			if(mysqli_num_rows($result) > 0){
				while($rows = mysqli_fetch_assoc($result)){
					$data[] = $rows;
				}
			}

		} else {
            $data = array(
                'status' => false,
                'message' => 'user list id is not set'
            );
        }

		echo json_encode($data);
		mysqli_close($link);
?>
