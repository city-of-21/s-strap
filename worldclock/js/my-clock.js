var ctizens = new Array("auckland","sydney","tokyo","hongKong","singapore","bangkok","dubai","cairo","athens","paris","london","buenosAires","santiago","newYork","mexicoCity","losAngeles","honolulu");
var clockHandler;

$(document).ready(function(){
	
	jQuery('#vmap').attr("width",$(document).width());
    jQuery('#vmap').attr("height",300);
    
	jQuery('#vmap').vectorMap({
	    map: 'world_en',
	    backgroundColor: '#a5bfdd',
	    borderColor: '#818181',
	    borderOpacity: 0.25,
	    borderWidth: 1,
	    color: '#f4f3f0',
	    enableZoom: false,
	    hoverColor: '#f4f3f0',
	    hoverOpacity: null,
	    normalizeFunction: 'linear',
	    scaleColors: ['#b6d6ff', '#005ace'],
	    selectedColor: '#f4f3f0',
	    selectedRegion: null,
	    showTooltip: true,
	    onLabelShow: function(event, label, code){label.text("");},
	    onRegionOver: function(event, code, region){},
	    onRegionOut: function(event, code, region){},
	    onRegionClick: function(event, code, region){}
	});
	
	jQuery('#jqvmap1_auckland').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_sydney').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_tokyo').css({
		'fill': '#FA0800'
	});
	jQuery('#jqvmap1_hongKong').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_singapore').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_bangkok').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_dubai').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_cairo').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_athens').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_paris').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_london').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_buenosAires').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_santiago').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_newYork').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_mexicoCity').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_losAngeles').css({
		'fill': '#FACAC8'
	});
	jQuery('#jqvmap1_honolulu').css({
		'fill': '#FACAC8'
	});
	
	
	$('#jqvmap1_auckland').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_auckland').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Pacific/Auckland");
    });
    $('#jqvmap1_sydney').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_sydney').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Australia/Sydney");
    });
    $('#jqvmap1_tokyo').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_tokyo').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Asia/Tokyo");
    });
    $('#jqvmap1_hongKong').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_hongKong').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Asia/Hong_Kong");
    });
    $('#jqvmap1_singapore').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_singapore').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Asia/Singapore");
    });
    $('#jqvmap1_bangkok').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_bangkok').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Asia/Bangkok");
    });
    $('#jqvmap1_dubai').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_dubai').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Asia/Dubai");
    });
    $('#jqvmap1_cairo').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_cairo').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Africa/Cairo");
    });
    $('#jqvmap1_athens').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_athens').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Europe/Athens");
    });
    $('#jqvmap1_paris').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_paris').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Europe/Paris");
    });
    $('#jqvmap1_london').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_london').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Europe/London");
    });
    $('#jqvmap1_buenosAires').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_buenosAires').css({'fill': '#FA0800'});
        clockHandler.setTimezone("America/Buenos_Aires");
    });
    $('#jqvmap1_santiago').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_santiago').css({'fill': '#FA0800'});
        clockHandler.setTimezone("America/Santiago");
    });
    $('#jqvmap1_newYork').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_newYork').css({'fill': '#FA0800'});
        clockHandler.setTimezone("America/New_York");
    });
    $('#jqvmap1_mexicoCity').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_mexicoCity').css({'fill': '#FA0800'});
        clockHandler.setTimezone("America/Mexico_City");
    });
    $('#jqvmap1_losAngeles').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_losAngeles').css({'fill': '#FA0800'});
        clockHandler.setTimezone("America/Los_Angeles");
    });
    $('#jqvmap1_honolulu').on('click',function(){
		clearCitizensColor();
        $('#jqvmap1_honolulu').css({'fill': '#FA0800'});
        clockHandler.setTimezone("Pacific/Honolulu");
    });
    
    clockHandler = new ClockHandler($("#canvasClock"));
    
	updateDraw();
	clockHandler.setTimezone("Asia/Tokyo");
});

function clearCitizensColor(){
	var idPrefix = '#jqvmap1_';
	for (var i = 0; i < ctizens.length; i++) {
		var id = idPrefix+ctizens[i];
		$(id).css({'fill': '#FACAC8'});
	}
}

function updateDraw(){
	
	clockHandler.dateStart = clockHandler.getTargetDate();
	
	if($(window).width() <= 480){
    	clockHandler.resize(200,200);
    }else{
    	clockHandler.resize(360,360);
    }
	
	clockHandler.drawClock();
	
	if (clockHandler.dateStart.getSeconds() == clockHandler.dateNow.getSeconds()) {
		setTimeout("updateDraw()", 100);
		return false;
	}
	
	setTimeout("updateDraw()", 100);
	return true;
}

function ClockHandler(canvas){
    this.canvas = canvas;
    this.canvasElement = canvas.get(0);
    this.context = this.canvasElement.getContext("2d");
    this.context.fillStyle = "black";
    this.context.strokeStyle = "black";
	this.centerX = 0;
	this.centerY = 0;
	this.dateStart;
	this.dateNow;
	this.timezone;
	
    this.resize = function (width,height){
        this.canvas.attr("width",width);
        this.canvas.attr("height",height);
    }
    
    //カラー
    this.setColor = function (color){
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
    }
    
    //時計描画
    this.drawClock = function (){
    	this.centerX = this.canvas.attr("width") / 2;
		this.centerY = this.canvas.attr("height") / 2;
		this.context.clearRect(0, 0, this.canvas.attr("width"), this.canvas.attr("height"));
		this.dateNow = this.getTargetDate();
		this.drawClockBase();
		this.drawClockTime();
		if($(window).width() > 480){
    		this.drawClockString();
		}else{
			$("#clockString").text(this.timezone+" "+this.formatYYYYMMDD(this.dateNow, ".")+" "+this.formatHHMMSS(this.dateNow, ":"));
		}
    }
    
    //基盤描画
    this.drawClockBase = function (){
		// 変数宣言
		var clockNumbers = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
		var roundCanvas = Math.min(this.centerX - 10, this.centerY - 10);
		var roundLineStart = roundCanvas * 0.97;
		var roundLineEndShort = roundCanvas * 0.94;
		var roundLineEndLong = roundCanvas * 0.92;
		var roundString = roundCanvas * 0.85;
		
		// 基盤の描写
		this.context.font = "normal 18px 'Futura'";
		this.context.textAlign = "center";
		this.context.textBaseline = "middle";
		this.context.beginPath();
		this.context.arc(this.centerX, this.centerY, roundCanvas, 0, Math.PI * 2, false);
		this.context.lineWidth = 15;
		this.context.stroke();
		this.setColor("white");
		this.context.fill();
		
		this.setColor("black");
		this.context.beginPath();
		this.context.lineWidth = 1;
		var i, angle;
		for (i = 0; i < 60; i++) {
			angle = Math.PI * i / 30;
			this.context.moveTo(this.centerX + Math.sin(angle) * roundLineStart, this.centerY + -Math.cos(angle) * roundLineStart);
			if (i % 5 == 0) {
				this.context.lineTo(this.centerX + Math.sin(angle) * roundLineEndLong, this.centerY + -Math.cos(angle) * roundLineEndLong);
				this.context.fillText(clockNumbers[i / 5], this.centerX + Math.sin(angle) * roundString, this.centerY + -Math.cos(angle) * roundString);
			} else {
				//this.context.lineTo(this.centerX + Math.sin(angle) * roundLineEndShort, this.centerY + -Math.cos(angle) * roundLineEndShort);
			}
		}
		this.context.stroke();
		
    }
    
    //針描画
    this.drawClockTime = function (){
		// 変数宣言
		var roundCanvas = Math.min(this.centerX - 10, this.centerY - 10);
		var roundHour = roundCanvas * 0.550;
		var roundMinute = roundCanvas * 0.800;
		var roundSecond = roundCanvas * 0.900;
		var i, uv, angle;
		
		this.context.globalAlpha = 0.6;
		
		// 時
		this.context.beginPath();
		this.setColor("black");
		this.context.lineWidth = 4;
		angle = Math.PI * (this.dateNow.getHours() % 12 + this.dateNow.getMinutes() / 60) / 6;
		this.context.moveTo(this.centerX - Math.sin(angle) * roundHour / 4, this.centerY - -Math.cos(angle) * roundHour / 5);
		this.context.lineTo(this.centerX + Math.sin(angle) * roundHour,this.centerY + -Math.cos(angle) * roundHour);
		this.context.stroke();
		// 分
		this.context.beginPath();
		this.context.lineWidth = 3;
		angle = Math.PI * (this.dateNow.getMinutes() + this.dateNow.getSeconds() / 60) / 30;
		this.context.moveTo(this.centerX - Math.sin(angle) * roundMinute / 4, this.centerY - -Math.cos(angle) * roundMinute / 5);
		this.context.lineTo(this.centerX + Math.sin(angle) * roundMinute,this.centerY + -Math.cos(angle) * roundMinute);
		this.context.stroke();
		// 秒
		this.context.beginPath();
		this.context.lineWidth = 1;
		this.setColor("red");
		angle = Math.PI * this.dateNow.getSeconds() / 30;
		this.context.moveTo(this.centerX - Math.sin(angle) * roundSecond / 4, this.centerY - -Math.cos(angle) * roundSecond / 5);
		this.context.lineTo(this.centerX + Math.sin(angle) * roundSecond,this.centerY + -Math.cos(angle) * roundSecond);
		this.context.stroke();
		
		this.context.globalAlpha = 1;
    }
    
    //文字盤描画
    this.drawClockString = function (){
		// 変数宣言
		var offset1 = 30;
		var offset2 = 60;
		var offset3 = 90;
		
		this.context.font = "italic 18px 'Futura'";
		this.context.textAlign = "center";
		this.context.textBaseline = "middle";
		this.setColor("black");
		
		// 文字盤の描写
		this.context.fillText(this.timezone, this.centerX, this.centerY + offset1);
		this.context.fillText(this.formatYYYYMMDD(this.dateNow, "."), this.centerX, this.centerY + offset2);
		this.context.fillText(this.formatHHMMSS(this.dateNow, ":"), this.centerX, this.centerY + offset3);
    }
    
    //日付フォーマット
    this.formatYYYYMMDD = function (date, separator){
        var day = new Array();
		day[0] = ("0000" + date.getFullYear()).replace(/^.*(....)$/, "$1");
		day[1] = ("00" + (date.getMonth() + 1)).replace(/^.*(..)$/, "$1");
		day[2] = ("00" + date.getDate()).replace(/^.*(..)$/, "$1");
		day[3] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
		day[4] = "";
		return day.join(".");
    }
    
    //時間フォーマット
    this.formatHHMMSS = function (date, separator){
        var time = new Array();
		time[0] = ("00" + date.getHours()).replace(/^.*(..)$/, "$1");
		time[1] = ("00" + date.getMinutes()).replace(/^.*(..)$/, "$1");
		time[2] = ("00" + date.getSeconds()).replace(/^.*(..)$/, "$1");
		return time.join(":");
    }
    
    //タイムゾーン設定
    this.setTimezone = function (timezone) {
    	this.timezone = timezone;
    }
    //タイムゾーン取得
    this.getTimezone = function () {
    	return this.timezone;
    }
    
    //ターゲットDate取得
    this.getTargetDate = function () {
    	var targetDate = "";
		
		$.ajax({
	        type: 'POST',
	        data: 'text',
	        url: 'get_worlddate.php',
	        data: 'TimeZone='+this.timezone,
	        async: false,
	        success: function(response){
	            targetDate = new Date(response);
	        },
	        error: function(response) {
	            var date = new Date();
				var utcDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0);
				targetDate = new Date(utcDate.getTime() + (3600000 * 9.0));
	        },
	        complete : function(response) {
	        }
	    });
	    
	    return targetDate;
    }
}
