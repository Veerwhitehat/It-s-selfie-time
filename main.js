var sr= window.webkitSpeechRecognition;
var r= new sr();

function start(){
    
    r.start()
}

r.onresult= function run(event){
    console.log(event);
    content= event.results[0][0].transcript;
    console.log(content);
    if (content =="Iron Man selfie") {

        console.log(" Iron Man selfie ---");
       speak() 
    }
  

    

    }
function speak(){
    synth= window.speechSynthesis;
    speech= "taking your Iron Man selfie in 5 seconds 5 4 3 2 1 snap";
    utter = new SpeechSynthesisUtterance(speech);
    synth.speak(utter);
    Webcam.attach(camera); 

    setTimeout(function()  {
        img_id="selfie1";
        take_snapshot();
        speak_data="Taking Your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);
 
    setTimeout(function()  {
        img_id="selfie2";
        take_snapshot();
        speak_data="Taking Your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function()  {
        img_id="selfie3";
        take_snapshot();
        
    }, 15000);
 
 

}
Webcam.set({
    width:365,
    height:250,
    image_format:"jpeg",
    jpeg_quality:100
});
camera=document.getElementById("camera");
function take_snapshot(){

    console.log(img_id);

    Webcam.snap(function(data_uri){
        
    if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML= '<img id="selfie1" src="'+data_uri+'"/>'
    }

    if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML= '<img id="selfie2" src="'+data_uri+'"/>'
    }
    
    if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML= '<img id="selfie3" src="'+data_uri+'"/>'
    }

    



    })

}

function save()
{
    link= document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
 