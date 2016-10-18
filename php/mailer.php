<?php
	function sendMail($name, $package, $total, $date, $model, $registration, $colour, $hdWax, $extra, $tip, $address, $time, $notes, $email, $phone, $pay) {
		$headers = 'From: bookings@loyaltycarwash.co.uk ' . "\r\n"
					. 'Bcc: radu_tatomir@yahoo.com' . "\r\n";
		$to = 'radu_tatomir@yahoo.com';
		$subject = 'New booking ' . $date;
		$body = "Hello Loyalty!\n"
		. "\t You have a new booking on " . $date . "\n\n"
		. "Car type: " . $model . ", Registration: " . $registration . ", Colour: " . $colour . "Service: " . $package 
																												. ($hdWax -> selected ? "hdWax: " . $hdWax -> type . ", " : "")
																												. ($extra ? join(', ', $extra) : "") . "\n"
		. "Total: " . $total . ", of which tip: " . $tip . ", " . $pay . "\n\n"																												
		. "Car location: " . $address . ", \n"
		. "Date: " . $date . ", Interval: " . $time . "\n\n"
		. "Notes: " . $notes + "\n\n"
		. "Solicitant: " . "\n"
		. "Name: " . $name . ", Email: " . $email . ", Phone: " . $phone;

		return mail($to, $subject, $body, $headers);	
	}
?>