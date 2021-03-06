<?php

include('mailer.php');
include('params.php');
include('total.php');

$total = computeTotal($price, $package, $extra, $hdWax, $tip);

if (sendMail($name, $package, $total, $date, $model, $registration, $colour, $hdWax, $extra, $tip, $address, $time, $notes, $email, $phone, "paying cash")) {
	$response = array(
		"status" => "200",
		"message" => "Message sent.");

	echo json_encode($response);
} else {
	$response = array(
		"status" => "500",
		"message" => "Error sending message");

	echo json_encode($response);
}

?>