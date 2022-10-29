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
            type: "new",
            id: 0,
            name: "name",
            genre: "genre",
            rating: "rating,
            favorite: "true",
            platform: "platform",
            watched: "watched",
            isFilm: "true",
            urlImage: "url"
        }

    */
    
    $user = test($body->user);
    $passw = test($body->passw);
    $type = test($body->type);
    $id = test($body->id);
    $name = test($body->name);
    $genre = test($body->genre);
    $platform = test($body->platform);
    $watched = test($body->watched);
    $isFilm = test($body->isFilm);
    $favorite = test($body->favorite);
    $rating = test($body->rating);
    $urlImage = test($body->urlImage);

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

    if($type == "new"){
        //save new item
        $sql = "INSERT INTO FILM VALUES(0,?,?,?,?,?,?,?,?,?);";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssssss", $name, $genre, $rating, $favorite, $platform, $watched, $isFilm, $user, $urlImage);
        $stmt->execute();

        //echo '{"status": "ERROR", "msg": "'.$name.','.$genre.','.$rating.','.$favorite.','.$platform.','.$watched.','.$isFilm.','.$user.','.$urlImage.'"}';

        //get the id assigned to the item
        $sql = "SELECT * from FILM WHERE user LIKE BINARY ? and name LIKE BINARY ?;";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss",$user,$name);
        $stmt->execute();
        $result = $stmt->get_result();
        if($result->num_rows<=0){
            echo '{"status": "ERROR", "msg": "something went wrong"}';
            $conn->close();
            return;
        }
        else
            while($row = $result->fetch_assoc()){
                $id = $row['id'];
            }

        echo '{"status": "SUCCESS", "id": '.$id.'}';
    }
    else{
        //update the item
        $sql="UPDATE FILM SET 
            name=?,genre=?,rating=?,favorite=?,platform=?,watched=?,isFilm=?, urlImage=? WHERE id LIKE BINARY ?";
        $stmt=$conn->prepare($sql);
        $stmt->bind_param("ssssssssi",$name, $genre, $rating, $favorite, $platform, $watched, $isFilm, $urlImage, $id);
        $stmt->execute();
        
        echo '{"status": "SUCCESS"}';
    }


    $conn->close();

    function test($data){

        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

?>