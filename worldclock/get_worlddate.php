<?php 
    $timeZone = $_REQUEST['TimeZone'];
    date_default_timezone_set($timeZone); 
    
    echo date("Y/m/d H:i:s",time());
    
?> 
