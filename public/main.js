var socket = io.connect(window.location.hostname);

var redBG;
var greenBG;
var blueBG;

socket.on('recieveUpdate', function(screen, red, green, blue){
	currentScreen=screen;
	redValue=red;
	greenValue=green;
	blueValue=blue;
	
	updateScreen();
});

socket.on('updateBackground', function(redBG, greenBG, blueBG){
	$('html').css('background-color', 'rgb('+redBG+','+greenBG+','+blueBG+')');
});

var currentScreen;
var redValue=3;
var greenValue=3;
var blueValue=3;

var totalRed=144;
var totalGreen=144;
var totalBlue=144;

var screens = ["<img src='images/sil1.jpg' id='bigScreen1'/>","<img src='images/sil2.jpg' id='bigScreen2'/>","<img src='images/sil3.jpg' id='bigScreen3'/>",
				"<img src='images/sil4.jpg' id='bigScreen4'/>","<img src='images/sil5.jpg' id='bigScreen5'/>","<img src='images/sil6.jpg' id='bigScreen6'/>",
				"<img src='images/sil7.jpg' id='bigScreen7'/>","<img src='images/sil8.jpg' id='bigScreen8'/>","<img src='images/sil9.jpg' id='bigScreen9'/>",
				"<img src='images/sil10.jpg' id='bigScreen10'/>","<img src='images/sil11.jpg' id='bigScreen11'/>","<img src='images/sil13.jpg' id='bigScreen13'/>",
				"<img src='images/sil14.jpg' id='bigScreen14'/>","<img src='images/sil15.jpg' id='bigScreen15'/>","<img src='images/sil16.jpg' id='bigScreen16'/>",
				"<img src='images/sil17.jpg' id='bigScreen17'/>","<img src='images/sil18.jpg' id='bigScreen18'/>","<img src='images/sil19.jpg' id='bigScreen19'/>",
				"<img src='images/sil20.jpg' id='bigScreen20'/>","<img src='images/sil21.jpg' id='bigScreen21'/>","<img src='images/sil22.jpg' id='bigScreen22'/>",
				"<img src='images/sil23.jpg' id='bigScreen23'/>","<img src='images/sil24.jpg' id='bigScreen24'/>","<img src='images/sil25.jpg' id='bigScreen25'/>"];

var legacyScreen;

var screen1="<img src='images/sil1.jpg' id='bigScreen1'/>";
var screen2="<img src='images/sil2.jpg' id='bigScreen2'/>";
var screen3="<img src='images/sil3.jpg' id='bigScreen3'/>";
var screen4="<img src='images/sil4.jpg' id='bigScreen4'/>";
var screen5="<img src='images/sil5.jpg' id='bigScreen5'/>";
var screen6="<img src='images/sil6.jpg' id='bigScreen6'/>";
var screen7="<img src='images/sil7.jpg' id='bigScreen7'/>";
var screen8="<img src='images/sil8.jpg' id='bigScreen8'/>";
var screen9="<img src='images/sil9.jpg' id='bigScreen9'/>";
var screen10="<img src='images/sil10.jpg' id='bigScreen10'/>";
var screen11="<img src='images/sil11.jpg' id='bigScreen11'/>";
var screen13="<img src='images/sil13.jpg' id='bigScreen13'/>";
var screen14="<img src='images/sil14.jpg' id='bigScreen14'/>";
var screen15="<img src='images/sil15.jpg' id='bigScreen15'/>";
var screen16="<img src='images/sil16.jpg' id='bigScreen16'/>";
var screen17="<img src='images/sil17.jpg' id='bigScreen17'/>";
var screen18="<img src='images/sil18.jpg' id='bigScreen18'/>";
var screen19="<img src='images/sil19.jpg' id='bigScreen19'/>";
var screen20="<img src='images/sil20.jpg' id='bigScreen20'/>";
var screen21="<img src='images/sil21.jpg' id='bigScreen21'/>";
var screen22="<img src='images/sil22.jpg' id='bigScreen22'/>";
var screen23="<img src='images/sil23.jpg' id='bigScreen23'/>";
var screen24="<img src='images/sil24.jpg' id='bigScreen24'/>";
var screen25="<img src='images/sil25.jpg' id='bigScreen25'/>";
	
$(document).ready(function(){
	$("#lightbox").click(function(){
		$("#picturePanel, #lightbox, #colorPanel").fadeOut(600);
		$("#picturePanel").empty();
	});
	
	$("#smallScreen1,#smallScreen2,#smallScreen3,#smallScreen4,#smallScreen5,#smallScreen6,#smallScreen7,#smallScreen8,#smallScreen9,#smallScreen10,#smallScreen11,#smallScreen13,#smallScreen14,#smallScreen15,#smallScreen16,#smallScreen17,#smallScreen18,#smallScreen19,#smallScreen20,#smallScreen21,#smallScreen22,#smallScreen23,#smallScreen24,#smallScreen25").click(function(event){
		if(event.target.id=="smallScreen1"){
			currentScreen=1;
			legacyScreen=screen1;
			$("#picturePanel").attr('class', 'tealScreenH');
		}else if(event.target.id=="smallScreen2"){
			currentScreen=2;
			legacyScreen=screen2;
			$("#picturePanel").attr('class', 'blueScreenV');
		}else if(event.target.id=="smallScreen3"){
			currentScreen=3;
			legacyScreen=screen3;
			$("#picturePanel").attr('class', 'greenScreenV');
		}else if(event.target.id=="smallScreen4"){
			currentScreen=4;
			legacyScreen=screen4;
			$("#picturePanel").attr('class', 'yellowScreenH');
		}else if(event.target.id=="smallScreen5"){
			currentScreen=5;
			legacyScreen=screen5;
			$("#picturePanel").attr('class', 'purpleScreenV');
		}else if(event.target.id=="smallScreen6"){
			currentScreen=6;
			legacyScreen=screen6;
			$("#picturePanel").attr('class', 'greenScreenV');
		}else if(event.target.id=="smallScreen7"){
			currentScreen=7;
			legacyScreen=screen7;
			$("#picturePanel").attr('class', 'yellowScreenH');
		}else if(event.target.id=="smallScreen8"){
			currentScreen=8;
			legacyScreen=screen8;
			$("#picturePanel").attr('class', 'purpleScreenH');
		}else if(event.target.id=="smallScreen9"){
			currentScreen=9;
			legacyScreen=screen9;
			$("#picturePanel").attr('class', 'tealScreenV');
		}else if(event.target.id=="smallScreen10"){
			currentScreen=10;
			legacyScreen=screen10;
			$("#picturePanel").attr('class', 'yellowScreenH');
		}else if(event.target.id=="smallScreen11"){
			currentScreen=11;
			legacyScreen=screen11;
			$("#picturePanel").attr('class', 'blueScreenH');
		}else if(event.target.id=="smallScreen13"){
			currentScreen=13;
			legacyScreen=screen13;
			$("#picturePanel").attr('class', 'greenScreenV');
		}else if(event.target.id=="smallScreen14"){
			currentScreen=14;
			legacyScreen=screen14;
			$("#picturePanel").attr('class', 'tealScreenH');
		}else if(event.target.id=="smallScreen15"){
			currentScreen=15;
			legacyScreen=screen15;
			$("#picturePanel").attr('class', 'greenScreenV');
		}else if(event.target.id=="smallScreen16"){
			currentScreen=16;
			legacyScreen=screen16;
			$("#picturePanel").attr('class', 'purpleScreenV');
		}else if(event.target.id=="smallScreen17"){
			currentScreen=17;
			legacyScreen=screen17;
			$("#picturePanel").attr('class', 'blueScreenH');
		}else if(event.target.id=="smallScreen18"){
			currentScreen=18;
			legacyScreen=screen18;
			$("#picturePanel").attr('class', 'yellowScreenV');
		}else if(event.target.id=="smallScreen19"){
			currentScreen=19;
			legacyScreen=screen19;
			$("#picturePanel").attr('class', 'blueScreenV');
		}else if(event.target.id=="smallScreen20"){
			currentScreen=20;
			legacyScreen=screen20;
			$("#picturePanel").attr('class', 'blueScreenH');
		}else if(event.target.id=="smallScreen21"){
			currentScreen=21;
			legacyScreen=screen21;
			$("#picturePanel").attr('class', 'purpleScreenV');
		}else if(event.target.id=="smallScreen22"){
			currentScreen=22;
			legacyScreen=screen22;
			$("#picturePanel").attr('class', 'greenScreenH');
		}else if(event.target.id=="smallScreen23"){
			currentScreen=23;
			legacyScreen=screen23;
			$("#picturePanel").attr('class', 'greenScreenH');
		}else if(event.target.id=="smallScreen24"){
			currentScreen=24;
			legacyScreen=screen24;
			$("#picturePanel").attr('class', 'blueScreenH');
		}else if(event.target.id=="smallScreen25"){
			currentScreen=25;
			legacyScreen=screen25;
			$("#picturePanel").attr('class', 'tealScreenH');
		}
		
		//legacyScreen=screens[currentScreen-1];
		$("#picturePanel").append(legacyScreen);
		$("#lightbox, #picturePanel, #colorPanel").fadeIn(600);
	});
	
	$("#B1,#B2,#B3,#B4,#B5").click(function(event){
		var elements = document.getElementsByClassName('blueSlider');
		for (var i = 0; i < elements.length; i++) {
			$(elements[i]).removeClass('blueSlider').addClass('sliderButton');
		}
		$(this).removeClass('sliderButton').addClass('blueSlider');
		
		if(event.target.id=="B1"){
			totalBlue+=10;
			blueValue=1;
		}else if(event.target.id=="B2"){
			totalBlue+=5;
			blueValue=2;
		}else if(event.target.id=="B3"){
			blueValue=3;
		}else if(event.target.id=="B4"){
			totalBlue-=5;
			blueValue=4;
		}else if(event.target.id=="B5"){
			totalBlue-=10;
			blueValue=5;
		}
		
		if(totalBlue<=0){
			totalBlue=0;
		}else if(totalBlue>=255){
			totalBlue=255;
		}
		
		//updateScreen();
		updateLightbox();
		socket.emit('sendScreenUpdate', currentScreen, redValue, greenValue, blueValue);
		socket.emit('updateBlue',totalBlue);
	});
	
	$("#G1,#G2,#G3,#G4,#G5").click(function(event){
		var elements = document.getElementsByClassName('greenSlider');
		for (var i = 0; i < elements.length; i++) {
			$(elements[i]).removeClass('greenSlider').addClass('sliderButton');
		}
		$(this).removeClass('sliderButton').addClass('greenSlider');
		
		if(event.target.id=="G1"){
			totalGreen+=10;
			greenValue=1;
		}else if(event.target.id=="G2"){
			totalGreen+=5;
			greenValue=2;
		}else if(event.target.id=="G3"){
			greenValue=3;
		}else if(event.target.id=="G4"){
			totalGreen-=5;
			greenValue=4;
		}else if(event.target.id=="G5"){
			totalGreen-=10;
			greenValue=5;
		}
		
		if(totalGreen<=0){
			totalGreen=0;
		}else if(totalGreen>=255){
			totalGreen=255;
		}
		
		//updateScreen();
		updateLightbox();
		socket.emit('sendScreenUpdate', currentScreen, redValue, greenValue, blueValue);
		socket.emit('updateGreen', totalGreen);
	});
	
	$("#R2,#R3,#R4").click(function(event){
		var elements = document.getElementsByClassName('redSlider');
		for (var i = 0; i < elements.length; i++) {
			$(elements[i]).removeClass('redSlider').addClass('sliderButton');
		}
		$(this).removeClass('sliderButton').addClass('redSlider');
		
		if(event.target.id=="R2"){
			totalRed+=10;
			redValue=2;
		}else if(event.target.id=="R3"){
			redValue=3;
		}else if(event.target.id=="R4"){
			totalRed-=10;
			redValue=4;
		}
		
		if(totalRed<=0){
			totalRed=0;
		}else if(totalRed>=255){
			totalRed=255;
		}
		
		//updateScreen();
		updateLightbox();
		socket.emit('sendScreenUpdate', currentScreen, redValue, greenValue, blueValue);
		socket.emit('updateRed', totalRed);
	});
});

function updateScreen(){
	var day;
	var season;
	
	var smallScreen="#smallScreen"+currentScreen;
	var bigScreen="#bigScreen"+currentScreen;
	
	if(blueValue==1){
		day="Night";
	}else if(blueValue==2){
		day="Dusk";
	}else if(blueValue==4){
		day="Dawn";
	}else if(blueValue==5){
		day="Day";
	}
	if(greenValue==1){
		season="summer";
	}else if(greenValue==2){
		season="spring";
	}else if(greenValue==4){
		season="fall";
	}else if(greenValue==5){
		season="winter";
	}
	
	if(redValue==2){
		screens[currentScreen]="<img src='images/apoc"+currentScreen+".jpg' id='bigScreen"+currentScreen+"'/>";
		$(smallScreen).attr('src', 'images/apoc'+currentScreen+'.jpg');
		$(bigScreen).attr('src', 'images/apoc'+currentScreen+'.jpg');
	}else if(redValue==3){
		if(blueValue!=3 && greenValue!=3){
			screens[currentScreen]="<img src'images/"+season+day+currentScreen+".jpg' id='bigScreen"+currentScreen+"'/>";
			$(smallScreen).attr('src', 'images/'+season+day+currentScreen+'.jpg');
			$(bigScreen).attr('src', 'images/'+season+day+currentScreen+'.jpg');
		}else{
			screens[currentScreen]="<img src'images/sil"+currentScreen+".jpg' id='bigScreen"+currentScreen+"'/>";
			$(smallScreen).attr('src', 'images/sil'+currentScreen+'.jpg');
			$(bigScreen).attr('src', 'images/sil'+currentScreen+'.jpg');
		}
	}else if(redValue==4){
		screens[currentScreen]="<img src='images/cave.jpg' id='bigScreen"+currentScreen+"'/>";
		$("#bigScreen1, #smallScreen1").attr('src', 'images/cave'+currentScreen+'.jpg');
	}
}

function updateLightbox(){
	var RGB="rgb("+(redValue*51)+", "+(greenValue*51)+", "+(blueValue*51)+")";
	$('#lightbox').css('background-color', RGB);
}