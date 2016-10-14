<?

namespace Mailer;

class Mailer {
	public static function sendMail($to, $subject, $body) {
		mail($to, $subject, $body);
	}	
}