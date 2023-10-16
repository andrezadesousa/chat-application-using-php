<?php
#If it's not connect with database then it will show us error. This echo text is "Database not connected" .mysqli_connect_error()
   $hostname = "localhost";
   $username = "root";
   $password = "";
   $dbname = "chatapp";
 
   $conn = mysqli_connect($hostname, $username, $password, $dbname);
   if(!$conn){
     echo "Database connection error".mysqli_connect_error();
   }
?>