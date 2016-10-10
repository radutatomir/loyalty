<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$token = $request -> stripeToken;

$name = $request -> name;
$email = $request -> email;
$phone = $request -> phone;

$model = $request -> model;
$registration = $request -> registration;
$colour = $request -> colour;

$address = $request -> address;
$date = $request -> date;
$time = $request -> time;

$notes = $request -> notes; 

$package = $request -> package;
$extra = $request -> extra;
$hdWax = $request -> hdWax;
$tip = $request -> tip;


// $name = $_POST['name'];
// $email = $_POST['email'];
// $phone = $_POST['phone'];

// $model = $_POST['model'];
// $registration = $_POST['registration'];
// $colour = $_POST['colour'];

// $address = $_POST['address'];
// $date = $_POST['date'];
// $time = $_POST['time'];

// $notes = isset($_POST['notes']) ? $_POST['notes'] : null; 

// $package = $_POST['package'];
// $extra = isset($_POST['extra']) ? $_POST['extra'] : null;
// $hdWax = isset($_POST['hdWax']) ? $_POST['hdWax'] : null;
// $tip = isset($_POST['tip']) ? $_POST['tip'] : null;

?>