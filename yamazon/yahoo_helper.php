<?php

$params = array();
$url = 'http://searchranking.yahoo.co.jp/rss/burst_ranking-rss.xml';

// request to amazon !!
$response = file_get_contents($url);

// response to strings.
$parsed_xml = null;
if(isset($response)){
	$parsed_xml = simplexml_load_string($response);
}

echo json_encode($parsed_xml);



?>