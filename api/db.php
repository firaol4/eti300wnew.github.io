<?php

$host = "10.2.0.177";
$user = "apiuser";
$password = "StrongPassword123!";
$database = "homesdb";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
