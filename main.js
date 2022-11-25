var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
Recognition.start();
}
Recognition.onresult=function(event){
    console.log(event);
    var contant=event.results[0][0].transcipt;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak();
}
function  speak(){
    var synth=window.speechSynthesis;
    var speak_data=document.getElementById("textbox");
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera")
