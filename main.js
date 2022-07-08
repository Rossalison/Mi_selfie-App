var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    setTimeout(function(){
        recognition.start();  
    }, 1000);
}

recognition.onresult = function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML =  Content;
    if(Content=="Toma mi selfie"){
        console.log("Tomando selfie");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Tomando su selfie en cinco segundos"
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
}
Webcam.set({
    width:320,
    height:240,
    image_format:'jpeg',
    jpeg_quality:90
});

camera = document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+ data_uri +'">';
    });
    function save(){
        link = documnet.getElementById("link");
        image = document.getElementById("selfie_image").src;
        link.href = image;
        link.click();
    }
}