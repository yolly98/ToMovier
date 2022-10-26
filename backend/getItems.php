<?php

    session_start();
    $user = $_SESSION['user'];  

    $conn = new mysqli('localhost','toMovier_db','');
    if(!$conn){
        echo("connection failed to mysql:".$conn->connect_error);
    }    
    $sql = "USE toMovier_db;";
    if(!$conn->query($sql)){
        echo "connection failed to db";
        return;
    }
    

    $sql = "SELECT*
        from FILM
        where user LIKE BINARY ?;";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s",$user);
    $stmt->execute();
    $result = $stmt->get_result();

    $array_dati = array();
    if($result->num_rows>0){
        while($row = $result->fetch_assoc()){
            
            array_push($array_dati,array());
            array_push($array_dati[count($array_dati)-1],
                $row['name'],
                $row['genre'],
                $row['rating'],
                $row['favorite'],
                $row['platform'],
                $row['watched'],
                $row['isFilm'],
                $row['urlImage']
            );
        }
        echo json_encode($array_dati);
    }
    else
        echo -1;

    $conn->close(); 

?>