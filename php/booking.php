<?php

include('mailer.php');
include('params.php');
include('total.php');

echo 'hdwax ' . $hdWax -> selected;

$total = computeTotal($price, $package, $extra, $hdWax, $tip);

echo sendMail($name, $package, $total);

?>