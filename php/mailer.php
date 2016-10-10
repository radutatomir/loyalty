<?php
	function sendMail($name, $package, $total) {
		$headers = 'From: webmaster@example.com' . "\r\n";
		$to = 'radu_tatomir@yahoo.com';
		$subject = 'new booking';
		$body = $name . ' ' . $package . ' ' . $total;
		return mail($to, $subject, $body, $headers);	
	}
?>