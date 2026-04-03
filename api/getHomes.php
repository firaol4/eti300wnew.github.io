<?php

include("db.php");

$sql = "SELECT * FROM homes";
$result = $conn->query($sql);

$homes = array();

while($row = $result->fetch_assoc()) {
    $homes[] = $row;
}

header('Content-Type: application/json');
echo json_encode($homes);

?>
