<?php

    include('config.php');

    $body = json_decode($_POST['body']);
    $user = $body->user;
    $passw = $body->passw;

    if($body->type != "get-plats"){
        echo '{"status": "ERROR", "msg": "something went wrong"}';
        return;
    }

    $conn = new mysqli($IP_ADDR, $USER_DB, $PASSW_DB);
    if(!$conn){
        echo '{"status": "ERROR", "msg": "connection failed to mysql:'.$conn->connect_error.'"}';
    }    
    $sql = "USE ".$NAME_DB.";";
    if(!$conn->query($sql)){
        echo '{"status": "ERROR", "msg": "connection failed to db"}';
        $conn->close();
        return;
    }

    $sql = "SELECT*from USER WHERE user LIKE BINARY ? and passw LIKE BINARY ?;";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss",$user,$passw);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows<=0){
        echo '{"status": "ERROR", "msg": "something went wrong"}';
        $conn->close();
        return;
    }

    $sql = "SELECT*
        from PLATFORM";

    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();

    $array_data = array();
    if($result->num_rows>0){
        while($row = $result->fetch_assoc()){
            
            $newPlat = array(
                "name" => $row['name'],
                "path" => $row['path']
            );
            array_push($array_data,$newPlat);
        }
        echo '{"status": "SUCCESS", "msg": '.json_encode($array_data).'}';
    }
    else
        echo '{"status": "SUCCESS", "msg": '.json_encode(array()).'}';

    $conn->close(); 

?>