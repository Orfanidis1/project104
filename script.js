Webcam.set({
    width:350,
    height:300,
    image:format = 'png',
    png_quality:90
});
camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="'+data_uri+'"/>';
    });
}
    console.log('m15 version:', m15.version);

    classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/tVEMyLM8i/model.json',modelLoaded);
