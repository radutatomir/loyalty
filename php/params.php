<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

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
$hdWax = isset($request -> hdWax) ? $request -> hdWax : null;
$tip = isset($request -> tip) ? $request -> tip : 0;

?>