var yahooValue = "";

$(window).on('load', function(e){
    $('.fancybox').fancybox();
    $('.tab-content .active li img:eq(0)').click();
});

$(document).ready(function(){
	
    yahooValue = execYahooKeywordApi();
    $('.nav-tabs li').each(function(index){
        var text = (index + 1)+"位: "+yahooValue.channel.item[index].title;
        $(this).find('a').text(text);
        var tagerId = $(this).find('a').attr('href');
        var loadId = tagerId.replace('#', '');
        $(tagerId).html("<div>"+yahooValue.channel.item[index].description+"</div><div class='append-div'><div id='"+loadId+"-loading'></div></div><div class='button-div'></div>");
    });
    
    $('.nav-tabs li').on('click',function(){
        createTab($(this));
        var p = $("#tab-content").offset().top;
        $('html,body').animate({ scrollTop: p }, 'slow');
    });
    
    $('#tab-pane1-loading').html('<img src="images/loading-35.gif" />');
    createTab($('.nav-tabs .active'));
});

function createTab(element){
    
    var targetPane = element.find('a').attr('href');
    var keywords = element.find('a').text();
    keywords = keywords.split('位: ')[1];
    
    var responseJson;
	urlParams = getUrlParams();
    if(keywords == "" && urlParams['Keywords']){
        keywords = urlParams['Keywords'];
    }
    keywords = encodeURI(keywords);
    keywords = keywords.replace('%20', '%20%7C%20');
    keywords = $.trim(keywords);
    //console.log(keywords);
    $(targetPane+'-loading').html('<img src="images/loading-35.gif" />');
    
    $.ajax({
        type: 'POST',
        data: 'json',
        url: 'amazon_helper.php',
        data: 'ItemPage='+1+'&ResponseGroup=Large&Keywords='+keywords,
        success: function(response){
            responseJson = $.parseJSON(response);
            
            //console.log(responseJson);
			var tagerId = element.find('a').attr('href');
			
			$(tagerId).find(".button-div").html("");
			
			for(var i in responseJson.Items.Item){
		        if($('#'+responseJson.Items.Item[i].ASIN).size() == 0 && responseJson.Items.Item[i].MediumImage){
		            if(responseJson.Items.Item[i].ItemAttributes.IsAdultProduct == 1){
		            var title = responseJson.Items.Item[i].ItemAttributes.Title;
		            if(title.length > 20){
			           title = title.substring(0, 20)+'...';
		            }
			        $(tagerId).find(".append-div").append('<li class="amazon-image-li amazon-image-li-text" id="'+responseJson.Items.Item[i].ASIN+'"><a target="_balnk" href="'+responseJson.Items.Item[i].DetailPageURL+'">警告<br/>アダルト商品<br/><br/>'+title+'</a></li>');
		            }else{
		                $(tagerId).find(".append-div").append('<li class="amazon-image-li" id="'+responseJson.Items.Item[i].ASIN+'"><a id="'+responseJson.Items.Item[i].DetailPageURL+'" class="fancybox" data-fancybox-group="gallery" title="'+responseJson.Items.Item[i].ItemAttributes.Title+'"><img></a></li>');
		                $('#'+responseJson.Items.Item[i].ASIN).find('img').attr('src',responseJson.Items.Item[i].MediumImage.URL);
		                $('#'+responseJson.Items.Item[i].ASIN).find('a').attr('href',responseJson.Items.Item[i].LargeImage.URL);
		                $('#'+responseJson.Items.Item[i].ASIN).find('img').attr('width','125px');
		                $('#'+responseJson.Items.Item[i].ASIN).find('img').attr('height',responseJson.Items.Item[i].MediumImage.Height+'px');
		            }
		        }
		    }
		    
		    if(responseJson.Items.TotalPages < 1){
		    	$(tagerId).find(".append-div").html('');
		        $(tagerId).find(".append-div").append('<li class="amazon-image-li-none">検索結果がみつかりませんでした</li>');
		        $(tagerId).find(".append-div").append('<li class="amazon-image-li-none">別のワードを選択してください</li>');
		    }else{
				$(tagerId).find(".button-div").append('<a class="btn btn-default" target="_balnk" href="'+responseJson.Items.MoreSearchResultsUrl+'">検索結果をもっとみる &raquo;</a>');
		    }
        },
        error: function(response) {
            responseJson = execAmazonApiGetList();
        },
        complete : function(response) {
            $(targetPane+'-loading').html('');
        }
    });
        
}
