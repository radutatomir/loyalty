<?php

function __autoload($class_name) {
    include(dirname(__FILE__) . '/' . str_replace('\\', '/', $class_name) . '.php');
}

include('mailer.php');
include('params.php');
include('total.php');

\Stripe\Stripe::setApiKey("sk_test_Y5opqkfx2fvZ3SsOQyUBJ3vM");

$token = $request -> stripeToken;

$total = computeTotal($price, $package, $extra, $hdWax, $tip);

try {
    $charge = \Stripe\Charge::create(array(
    "amount" => $total * 100, // Amount in cents
    "currency" => "gbp",
    "source" => $token,
    "receipt_email" => $email,
    "description" => "Car wash",
    "metadata" => array(
        "name" => $name,
        "package" => $package,
        "tip" => $tip)
    ));

    $response = array(
        "status" => 200,
        "message" => "Payment succesful."
        );

    echo json_encode($response);

    sendMail($name, $package, $total, $date, $model, $registration, $colour, $hdWax, $extra, $tip, $address, $time, $notes, $email, $phone, "payed online");

} catch(\Stripe\Error\Card $e) {
    $response = array(
        "status" => "400",
        "message" => "Card rejected.");

    echo json_encode($response);

} catch (\Stripe\Error\ApiConnection $conn) {
    
    $response = array(
        "status" => "500",
        "message" => "Payment failed.");
    
    echo json_encode($response);
    
}

?>