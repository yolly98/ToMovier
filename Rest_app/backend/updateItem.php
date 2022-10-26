<?php

    session_start();
    $user = $_SESSION['user'];

    if($_POST['type'] == 'update'){

        $json_item = json_encode(test($_POST['newItem']));
    
        $id = test($json_item['id']);
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

        $sql="USE toMovier_db;";
        if(!$conn->query($sql)){
            echo "connection failed to db";
            return;
        }

        $sql="UPDATE FILM SET 
            name = ?, genre = ?, rating = ?, favorite = ?, platform = ?, watched = ?, isFilm = ?, urlImage = ? where user LIKE BINARY ? and id LIKE BINARY ?";
        $stmt=$conn->prepare($sql);
        $stmt->bind_param("ssssssssss",$name,$_genre,$_rating,$_favorite,$_platform,$_watched,$_isFilm,$urlImage,$user,$id);
        $stmt->execute();
        echo 'ok';

        $conn->close();
    }

    if($_POST['type']=='delete'){

        $_nome = test($_POST['id']);

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

        $sql = "DELETE FROM FILM where user LIKE BINARY ? and id LIKE BINARY ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss",$user,$id);
        $stmt->execute();
        echo 'ok';

        $conn->close();

    }

    function test($data){

        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
?>