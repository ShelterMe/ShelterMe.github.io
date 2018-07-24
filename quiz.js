var cat = 0;
var dog = 0;

function tally(){
  for(var i =1; i <6; i++){
    var elem = 'q'+i;
    //console.log(elem);
    console.log(document.getElementById(elem).getElementsByTagName("input")[1].value);
    var answers = document.getElementById(elem).getElementsByTagName("input");
    for(var j = 0; j<answers.length; j++){
      if(answers[j].checked){
        if(answers[j].value == "a"){
          dog+=1;
          console.log(dog);
        }
        if(answers[j].value == "b"){
          cat+=1;
          console.log(cat);
        }
      }
    }
  }
  output();
}


function output(){
  if(cat>dog){
    document.write("<center>" + "You're a cat person!" + "</center>")
  }
  else if (cat<dog){
    document.write("<center>" + "You're a dog person!" + "</center>")
  }
}

document.getElementById("button").addEventListener("click", function(event){
  event.preventDefault();
  tally();
});
