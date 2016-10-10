<?php

function __autoload($class_name) {
    include(dirname(__FILE__) . '/' . str_replace('\\','/',$class_name) . '.php');
}


include('mailer.php');
include('params.php');
include('total.php');

\Stripe\Stripe::setApiKey("sk_test_Y5opqkfx2fvZ3SsOQyUBJ3vM");

$total = computeTotal($price, $package, $extra, $hdWax, $tip);

echo $total;

echo $token;

try {
    $charge = \Stripe\Charge::create(array(
    "amount" => $total * 100, // Amount in cents
    "currency" => "gbp",
    "source" => $token,
    "description" => "Car wash",
    "metadata" => array(
        "name" => $name,
        "date" => $date)
    ));

    echo "payment successful";
    echo sendMail($name, $package, $total);

} catch(\Stripe\Error\Card $e) {
    echo "payment has been rejected";
} catch (\Stripe\Error\ApiConnection $conn) {
    echo "could not connect";
}

?>