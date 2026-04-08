<?php

$host = "localhost";
$user = "apiuser";
$password = "StrongPassword123!";
$database = "homesdb";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
