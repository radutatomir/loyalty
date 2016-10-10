<?php
	function sendMail($to, $subject, $body) {
		$headers = 'From: webmaster@example.com' . "\r\n";
		return mail($to, $subject, $body, $headers);	
	}
?>