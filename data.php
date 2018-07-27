<?php 
header("Content-Type: application/json");
$mysqli = new mysqli("127.0.0.1", "admin", "admin", "syncstatus_");

if (!$mysqli) die("Connection failed: " . $mysqli->error);

$query = sprintf("SELECT LAST_ACK, RECORD_DATE, AMEND_BEHIND FROM MAIN WHERE NAME='CG-52'");

$result = $mysqli->query($query);

$data = array();

foreach ($result as $row) {
    $data[] = $row;
}

$result->close();

$mysqli->close();

print json_encode($data);