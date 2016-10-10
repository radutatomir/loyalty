<?

\Stripe\Stripe::setApiKey("sk_test_Y5opqkfx2fvZ3SsOQyUBJ3vM");

$token = $_POST['stripeToken'];

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

$model = $_POST['model'];
$registration = $_POST['registration'];
$colour = $_POST['colour'];

$address = $_POST['address'];
$date = $_POST['date'];
$time = $_POST['time'];

$notes = $P_POST['notes'];

$package = $_POST['package'];
$extra = $_POST['extra'];
$hdWax = $_POST['hdWax'];
$tip = $_POST['tip'];

try {
  $charge = \Stripe\Charge::create(array(
    "amount" => $total, // Amount in cents
    "currency" => "gbp",
    "source" => $token,
    "description" => "Car wash"
    "metadata" => array("name" => $name)
    ));

  echo "payment successful";
} catch(\Stripe\Error\Card $e) {
  echo "payment has been rejected";
}