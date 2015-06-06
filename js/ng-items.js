var domain = location.hostname;
var baseUrl = "//"+domain+"/systemware/";
var baseInfoCtrl = function($scope) {
	$scope.baseurl = baseUrl;
    $scope.companyname = "SystemWare Co. Ltd.";
    $scope.copyyear = "2014";
    $scope.term = {"href":baseUrl+"term.html","text":"利用規約"};
}
var navLoopCtrl = function($scope) {
    $scope.navitems = [
        {"class":"active","href":baseUrl,"text":"Home","_blank":"false","dropdown":"false"},
        {"class":"","href":baseUrl+"about.html","text":"会社概要","_blank":"false","dropdown":"false"},
        {"class":"","href":baseUrl+"askme.html","text":"お問い合わせ","_blank":"false","dropdown":"false"},
        {"class":"","href":"#","text":"リリースアプリ","_blank":"true","dropdown":"true","navchildren":[{"href":"https://itunes.apple.com/jp/app/practice-camera-xie-zhen-gou/id954811892?mt=8&uo=4","text":"practice-camera"},{"href":"https://itunes.apple.com/jp/app/id979555997?mt=8&ign-mpt=uo%3D4","text":"リッスン to the 外国語"}]},
        {"class":"","href":"#","text":"サンプルサイト","_blank":"false","dropdown":"true","navchildren":[{"href":baseUrl+"yamazon/","text":"yamazon"},{"href":baseUrl+"parapallax/","text":"parapallax"},{"href":baseUrl+"canvas/","text":"canvaslife"},{"href":baseUrl+"worldclock/","text":"worldclock"}]},
		{"class":"","href":"#","text":"ソーシャルメディア","_blank":"true","dropdown":"true","navchildren":[{"href":"https://twitter.com/OEDORoulette","text":"開発者Twitter"},{"href":"http://shiftswift.blogspot.jp/","text":"Swift体験記"},{"href":"http://fc-salware.blogspot.jp/","text":"FC salware"}]},
    ];
}
