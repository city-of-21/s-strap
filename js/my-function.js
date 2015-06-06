$(document).ready(function(){

    $('#back-to-top').on('click',function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
    });
    
    $('#work-yamazon').on('click',function(){
        location.href = "./yamazon/";
    });
    
    $('#work-parapallax').on('click',function(){
        location.href = "./parapallax/";
    });
    
    $('#work-canvas').on('click',function(){
        location.href = "./canvas/";
    });
    
    $('#work-worldclock').on('click',function(){
        location.href = "./worldclock/";
    });
    
    $('#link-twitter').on('click',function(){
        window.open("https://twitter.com/OEDORoulette");
    });
    
    $('#link-swift').on('click',function(){
        window.open("http://shiftswift.blogspot.jp/");
    });
    
    $('#link-salware').on('click',function(){
        window.open("http://fc-salware.blogspot.jp/");
    });

    $('#link-practice-camera').on('click',function(){
        window.open("https://itunes.apple.com/jp/app/practice-camera-xie-zhen-gou/id954811892?mt=8&uo=4");
    });
    
    $('#link-listen').on('click',function(){
        window.open("https://itunes.apple.com/jp/app/id979555997?mt=8&ign-mpt=uo%3D4");
    });
        
    $('.carousel').carousel();
});
