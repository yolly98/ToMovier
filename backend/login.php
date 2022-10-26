<?php

    session_start();
    
if($_POST['type']=='login'){

    $user = test($_POST['user']);
    $passw = test($_POST['passw']);

    $conn = mysqli_connect('localhost','toMovier_db','');
    if(!$conn){
        echo "connection failed to mysql:".$conn->connect_error;
        return;
    }

    $sql = "USE toMovier_db;";
    if(!$conn->query($sql)){
        echo "connection failed to db";
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
        echo 0;
    }
    else{
        echo "user name or password not correct";
    }

    $conn->close();

}

if($_POST['type']=='reg'){

    $user = test($_POST['user']);
    $passw = test($_POST['passw']);


    $conn = mysqli_connect('localhost','toMovier_db','');
    if(!$conn){
            echo "connection failed to mysql:".$conn->connect_error;
    }

    $sql = "USE toMovier_db;";
    if(!$conn->query($sql)){
        echo "connection failed to db";
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

        echo 0;
    }
    else{
        echo "Username already exists";
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