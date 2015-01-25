$(document).ready(function(){
	
	var goal = $(window).width() * 3 / 4;
	$("#goal").css("left",goal+"px");
	$(".star").css("display","none");
	
	var rate = 1;
	if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0){
		rate = 2;
	}
	
	var number = 4;
	var speeds = new Array();
	for(var i = 0; i < number; i++){
		var speed = Math.floor(Math.random() * 10) + 1;
		speeds.push(speed);
	}
	
	var ranks = new Array();
	for(var i = 0; i < number; i++){
	    var lose = 0;
	    for(var j = 0; j < number; j++){
	    	if(i != j){
	    		if(speeds[j] < speeds[i]){
		    		lose++;
	    		}
	    	}
	    }
		ranks.push(lose + 1);
	}
	
    $(window).on('scroll',function(){
    	
    	var scrollY = $(this).scrollTop();
        $(".actor").css("top",(scrollY)+"px");
        
    	var lefts = new Array();
    	for(var i = 0; i < number; i++){
    		left = scrollY * rate / speeds[i];
    		lefts.push(left);
    	}
    	
        for(var i = 0; i < number; i++){
        	if(lefts[i] > goal + 10){
	        	$("#actor"+i).css("left",(goal + 10)+"px");
	        	$("#star"+i).css("display","inline-block");
	        	$("#star"+i).text(ranks[i]);
        	}else{
    			$("#actor"+i).css("left",lefts[i]+"px");
    			$("#star"+i).css("display","none");
        	}
		}
		
		var continueFlag = false
		for(var i = 0; i < number; i++){
			if($("#star"+i).css("display") == "none"){
				continueFlag = true;
				break;
			}
		}
		if(continueFlag){
			$("#restart").css("display","none");
		}else{
			$("#restart").css("display","block");
		}
    });
    
});
