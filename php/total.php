<?php

include('prices.php');

function computeTotal($price, $package, $extra, $hdWax, $tip) {
	$total = $price['package'][$package] 
		+ ($hdWax -> selected ? $price['hdWax'][$hdWax -> type] : 0)
		+ $tip;

	if ($extra) {
		foreach ($extra as $value) {
			$total += $price['extra'][$value];
		}
	}

	return $total;
}

?>