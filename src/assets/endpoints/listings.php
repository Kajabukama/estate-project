<?php

		require_once 'config.php';

        $data = array();

        $query = "SELECT * FROM property ORDER BY id DESC";
        $result = mysqli_query($link, $query);

        if(mysqli_num_rows($result) > 0){
            while($rows = mysqli_fetch_assoc($result)){
                $data[] = $rows;
            }
        } else {
            $data = array(
                'status' => false,
                'message' => 'Sorry, there are no records'
            );
        }


		echo json_encode($data);
		mysqli_close($link);
?>
