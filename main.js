function rap()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/p3m53MMlM/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
  console.log("model is loaded");
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
img = document.getElementById('icon');
lion="https://www.pinclipart.com/picdir/middle/540-5400669_roaring-cartoon-lion-head-clipart.png";
cat="https://static.vecteezy.com/system/resources/previews/000/618/739/original/cute-little-kitten-vector.jpg";
snake="https://th.bing.com/th/id/R.495988887d8bc9c49e827d5b3ffbeddc?rik=hHCGU7LOeJU3VA&pid=ImgRaw&r=0";
bird="https://static.vecteezy.com/system/resources/previews/000/367/600/original/red-bird-on-white-background-vector.jpg";
dog="https://th.bing.com/th/id/OIP.7tmTyLcPv2wDhfiItaXAJgHaHa?pid=ImgDet&rs=1";
background='https://womenwholiveonrocks.com/wp-content/uploads/2014/06/Steve_Carrell_Loud_Noises_Meme.jpg';
    }
    if(results[0].label == "Lion"){
        document.getElementById("result_label").innerHTML="I can here- A Lion";
        img.src=lion;
    }
    else if(results[0].label == "Cat"){
        document.getElementById("result_label").innerHTML="I can here- A Cat";
        img.src=cat;
    }
    else if(results[0].label == "Snake"){
        document.getElementById("result_label").innerHTML="I can here- A Snake";
        img.src=snake;
    }
    else if(results[0].label == "Bird"){
        document.getElementById("result_label").innerHTML="I can here- A Bird";
        img.src=bird;
    }
    else if(results[0].label == "Dog"){
        document.getElementById("result_label").innerHTML="I can here- A Dog";
        img.src=dog;
    }
    else{
        document.getElementById("result_label").innerHTML="I can here- Background Noise";
        img.src=background;
    }
}