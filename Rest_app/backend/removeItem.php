<?php

    header("Access-Control-Allow-Origin: *");

    $IP_ADDR = '172.20.0.11';
    $USER_DB = 'root';
    $PASSW_DB = 'password';
    $NAME_DB = 'toMovier_db';

    $body = json_decode($_POST['body']);

    /*
        json structure

        {
            user: "user",
            passw: "password",
            id: 0
        }

    */
    
    $user = test($body->user);
    $passw = test($body->passw);
    $id = test($body->id);

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

    //authentication
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

    //remove the item
    $sql = "DELETE FROM FILM WHERE id LIKE BINARY ?;";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();

    //check if the item exists
    $sql = "SELECT * from FILM WHERE id LIKE BINARY ?;";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    if($result->num_rows > 0)
        echo '{"status": "ERROR", "msg": "something went wrong"}';
    else
       echo '{"status": "SUCCESS"}';
    
    $conn->close();

    function test($data){

        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

?>