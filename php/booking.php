<?php

include('mailer.php');
include('params.php');
include('total.php');

$total = computeTotal($price, $package, $extra, $hdWax, $tip);

echo sendMail($name, $package, $total);

?>