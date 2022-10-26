<?php

    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");

    $body = json_decode($_POST['body']);

if($body->type =='login'){

    $user = test($body->user);
    $passw = test($body->passw);
    
    if($user == "" || $passw == ""){
        echo '{"status": "ERROR", "msg": "empty values"}';
        return;
    }

    $conn = mysqli_connect('localhost','toMovier_db','');
    if(!$conn){
        echo '{"status": "ERROR", "msg": "connection failed to mysql:'.$conn->connect_error.'"}';
        return;
    }

    $sql = "USE toMovier_db;";
    if(!$conn->query($sql)){
        echo '{"status": "ERROR", "msg": "connection failed to db"}';
        return;
    }

    $passwMD5=md5($passw);

    $sql = "SELECT*from USER WHERE user LIKE BINARY ? and passw LIKE BINARY ?;";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss",$user,$passwMD5);
    $stmt->execute();
    $result = $stmt->get_result();

    if($result->num_rows>0){
        $_SESSION['user']=$user;
        echo '{"status": "SUCCESS"}';
    }
    else{
        echo '{"status": "ERROR", "msg": "user name or password not correct"}';
    }

    $conn->close();

}

if($body->type=='signup'){

    $user = test($body->user);
    $passw = test($body->passw);

    if($user == "" || $passw == ""){
        echo '{"status": "ERROR", "msg": "empty values"}';
        return;
    }

    $conn = mysqli_connect('localhost','toMovier_db','');
    if(!$conn){
        echo '{"status": "ERROR", "msg": "connection failed to mysql:'.$conn->connect_error.'"}';
    }

    $sql = "USE toMovier_db;";
    if(!$conn->query($sql)){
        echo '{"status": "ERROR", "msg": "connection failed to db"}';
    }

    $sql = "SELECT*from USER WHERE user LIKE BINARY ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s",$user);
    $stmt->execute();
    $result = $stmt->get_result();
   
    if($result->num_rows==0){

        $sql="INSERT into USER values(?,?)";
        $stmt = $conn->prepare($sql);
        $passw = md5($passw);
        $stmt->bind_param("ss",$user,$passw);
        $stmt->execute();

        echo '{"status": "SUCCESS"}';
    }
    else{
        echo '{"status": "ERROR", "msg": "Username already exists"}';
    }

    $conn->close();

}

function test($data){

    $data=trim($data);
    $data=stripslashes($data);
    $data=htmlspecialchars($data);
    return $data;
}

?>