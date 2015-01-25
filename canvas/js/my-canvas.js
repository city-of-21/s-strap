$(document).ready(function(){
	
	var canvasHandler = new CanvasHandler($("#canvas"));
	
	if($(window).width() <= 480){
    	canvasHandler.resize(318,240);
    }else{
    	canvasHandler.resize(720,360);
    }
	$(window).on("resize", function(){
	    if($(window).width() <= 480){
	    	canvasHandler.resize(318,240);
	    }else{
	    	canvasHandler.resize(720,360);
	    }
	});
	
	
    $("#download").on("click", function(){
        canvasHandler.download();
    });
    
    $("#canvas").on("touchstart", function(event){
    	event.preventDefault();
    	var pageX = event.originalEvent.touches[0].pageX;
        var pageY = event.originalEvent.touches[0].pageY;           	
        canvasHandler.drawlineStart(pageX,pageY);
    });
    $("#canvas").on("touchmove", function(event){
    	event.preventDefault();
    	var pageX = event.originalEvent.touches[0].pageX;
        var pageY = event.originalEvent.touches[0].pageY;
        canvasHandler.drawing(pageX,pageY);
    });
    $("#canvas").on("touchend", function(){
        canvasHandler.drawlineEnd();
    });
    
    $("#canvas").on("mousedown", function(event){
    	var pageX = event.pageX;
    	var pageY = event.pageY;
        canvasHandler.drawlineStart(pageX,pageY);
    });
    $("#canvas").on("mousemove", function(event){
    	var pageX = event.pageX;
    	var pageY = event.pageY;
        canvasHandler.drawing(pageX,pageY);
    });
    $("#canvas").on("mouseup", function(){
        canvasHandler.drawlineEnd();
    });
    
    $("#size").on("change", function(){
    	canvasHandler.setLineWidth($(this).val());
    });
    $("#color").on("change", function(){
    	canvasHandler.setColor($(this).val());
    });
    
    $("#undo").on("click", function(){
        canvasHandler.undo();
    });
    $("#redo").on("click", function(){
        canvasHandler.redo();
    });
});

function CanvasHandler(canvas){
    this.canvas = canvas;
    this.canvasElement = canvas.get(0);
    this.context = this.canvasElement.getContext("2d");
    this.context.fillStyle = "black";
    this.context.strokeStyle = "black";
    this.histroy = new Array();
	this.now = 0;
	this.histroy.push(this.context.getImageData(0,0,this.canvas.width(),this.canvas.height()));
	
    this.resize = function (width,height){
        this.canvas.attr("width",width);
        this.canvas.attr("height",height);
    }
    
    //カラー
    this.setColor = function (color){
        this.context.fillStyle = color;
        this.context.strokeStyle = color;
    }
    
    //ライン
    this.fromX = 0;
    this.fromY = 0;
    this.context.lineWidth = 1;
    this.setLineWidth = function (width){
        this.context.lineWidth = width;
    }
    this.drawFlag = false;
    this.drawlineStart = function (x,y){
        this.drawFlag = true;
        this.fromX = x - this.canvas.offset().left;
        this.fromY = y - this.canvas.offset().top;
    }
    this.drawing = function (x,y){
        x = x - this.canvas.offset().left;
        y = y - this.canvas.offset().top
        if(this.drawFlag){
            this.context.beginPath();
            this.context.moveTo(this.fromX,this.fromY);
            this.context.lineTo(x,y);
            this.context.stroke();
        }
        this.fromX = x;
        this.fromY = y;
    }
    this.drawlineEnd = function (){
        this.drawFlag = false;
        this.setHistory();
    }
    
    this.setHistory = function (){
        this.histroy.push(this.context.getImageData(0,0,this.canvas.width(),this.canvas.height()));
        this.now++;
    }
    this.undo = function (){
    	if(this.now > 0){
    		this.now--;
			this.context.putImageData(this.histroy[this.now], 0, 0);
        }
    }
    this.redo = function (){
    	if(this.now < this.histroy.length - 1){
    		this.now++;
			this.context.putImageData(this.histroy[this.now], 0, 0);
        }
    }
    
    //ダウンロード
    this.mime = "image/png";
    this.download = function (){
        $("#canvas-data").val(this.canvasElement.toDataURL(this.mime));
        $("#canvas-download").submit();
    }
}