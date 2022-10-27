<?php

    header("Access-Control-Allow-Origin: http://localhost:3000");

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
            item: {
                name: "name",
                genre: "genre",
                rating: "rating,
                favorite: "true",
                platform: "platform",
                watched: "watched",
                isFilm: "true",
                urlImage: "url"
            }
        }

    */

    $user = test($body->user);
    $password = test($body->passw);
    $id = 0;
    $name = test($body->item->name);
    $genere = test($body->item->genre);
    $platform = test($body->item->platform);
    $watched = test($body->item->watched);
    $isFilm = test($body->item->isFilm);
    $favorite = test($body->item->favorite);
    $rating = test($body->item->rating);
    $url = test($body->item->urlImage);

    $conn = new mysqli($IP_ADDR, $USER_DB, $PASSW_DB);
    if(!$conn){
        echo '{"status": "ERROR", "msg": "connection failed to mysql:'.$conn->connect_error.'"}';
    }    
    $sql = "USE ".$NAME_DB.";";
    if(!$conn->query($sql)){
        echo '{"status": "ERROR", "msg": "connection failed to db"}';
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
        return;
    }

    //save new item
    $sql = "INSERT INTO FILM VALUES(?,?,?,?,?,?,?,?,?,?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssssss", $id, $name, $genre, $rating, $favorite, $platform, $watched, $isFilm, $user, $urlImage);
    $stmt->execute();

    //get the id assigned to the item
    $sql = "SELECT id from FILM WHERE user LIKE BINARY ? and name LIKE BINARY ?;";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss",$user,$passw);
    $stmt->execute();
    $result = $stmt->get_result();
    if($result->num_rows<=0){
        echo '{"status": "ERROR", "msg": "something went wrong"}';
        return;
    }
    else
        while($row = $result->fetch_assoc()){
            $id = $row['id'];
        }

    echo '{"status": "SUCCESS", "id": '.$id.'}';

    $conn->close();

    function test($data){

        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


?>