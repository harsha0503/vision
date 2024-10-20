<?php
$servername = "localhost";
$username = "harsha";
$password = "root";
$dbname = "my_database_name";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
