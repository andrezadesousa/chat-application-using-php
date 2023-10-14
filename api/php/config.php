<?php
    #If it's not connect with database then it will show us error. This echo text is "Database not connected" .mysqli_connect_error()
    $conn = mysqli_connect("localhost", "root", "", "chat");
    if($conn){
        echo "Database connected error" . mysqli_connect_error();
    }
?>