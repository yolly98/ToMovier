<?php

session_start();
    

    $user = $_SESSION['user'];
    $json_item = json_encode(test($_POST['newItem']));
    
    $name = test($json_item['name']);
    $genere = test($json_item['genre']);
    $platform = test($json_item['platform']);
    $watched = test($json_item['watched']);
    $isFilm = test($json_item['isFilm']);
    $favorite = test($json_item['favorite']);
    $rating = test($json_item['rating']);
    $url = test($json_item['urlImage']);

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

    $sql = "INSERT INTO FILM VALUES(?,?,?,?,?,?,?,?,?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssssss", 0, $name, $genre, $rating, $favorite, $platform, $watched, $isFilm, $user, $urlImage);
    $stmt->execute();
    echo 'ok';

    $conn->close();

    function test($data){

        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

?>