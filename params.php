<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$model = $_POST['model'];
$registration = $_POST['registration'];
$colour = $_POST['colour'];

$address = $_POST['address'];
$date = $_POST['date'];
$time = $_POST['time'];

$notes = isset($_POST['notes']) ? $_POST['notes'] : null; 

$package = $_POST['package'];
$extra = isset($_POST['extra']) ? $_POST['extra'] : null;
$hdWax = isset($_POST['hdWax']) ? $_POST['hdWax'] : null;
$tip = isset($_POST['tip']) ? $_POST['tip'] : null;

?>