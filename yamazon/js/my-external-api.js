function execYahooKeywordApi(){
    
    var retValue = "";
	$.ajax({
        type: 'POST',
        data: 'xml',
        url: 'yahoo_helper.php',
        data: '',
        async: false,
        success: function(response){
            retValue = $.parseJSON(response);
        },
        error: function(response) {
        }
    });
    
    return retValue;
}

function execAmazonApiGetList(keywords,itemPage){

	var retValue = "";
	urlParams = getUrlParams();
    if(keywords == "" && urlParams['Keywords']){
        keywords = urlParams['Keywords'];
    }
    keywords = encodeURI(keywords);
    keywords = keywords.replace('%20', '%20%7C%20');
    keywords = $.trim(keywords);
    console.log(keywords);
    $('#loading').html('<img src="images/loading-35.gif" />');
    
    $.ajax({
        type: 'POST',
        data: 'json',
        url: 'amazon_helper.php',
        data: 'ItemPage='+itemPage+'&ResponseGroup=Large&Keywords='+keywords,
        async: false,
        success: function(response){
            retValue = $.parseJSON(response);
        },
        error: function(response) {
            retValue = execAmazonApiGetList();
        },
        complete : function(response) {
              $('#loading').html('');
         }
    });
    
    return retValue;
}


function getUrlParams(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

