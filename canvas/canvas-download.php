<?php
	
    $canvasData = $_POST["canvas-data"];
    $arrCanvasData = explode(",", $canvasData);
    $imgData = base64_decode($arrCanvasData[1]);
    $im = imagecreatefromstring($imgData);
    
    //画像の加工
    $x = imagesx($im);
    $y = imagesy($im);
    $copyright = imagecreatefrompng("./copyright.png");
	$ret = imagecopy($im,$copyright,$x - 150,$y - 30,0,0,146,24);
	
    $mime = substr($arrCanvasData[0],strpos($arrCanvasData[0],"image"),strpos($arrCanvasData[0],";") - strpos($arrCanvasData[0],"image"));
    
    $filename = "canvas_".date("YmdHis");
    
    header("Content-Type: ".$mime);
    header("Cache-control: no-cache");
    header("Content-Disposition: attachment; filename=".$filename);
    imagesavealpha($im, TRUE); // 透明色の有効
    imagepng($im);
    imagedestroy($im);
    
?>