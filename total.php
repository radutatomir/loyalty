<?php

include('prices.php');

function computeTotal($price, $package, $extra, $hdWax, $tip) {
	$total = $price['package'][$package] 
		+ ($hdWax ? $price['hdWax'][$hdWax] : 0)
		+ $tip;

	if ($extra) {
		foreach ($extra as $value) {
			$total += $price['extra'][$value];
		}
	}

	return $total;
}

?>