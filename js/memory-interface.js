var Memory = require('./../js/memory.js').memoryModule;
var shuffle = require('shuffle-array');

imgArray = ["img/cat1.jpg","img/cat2.jpg","img/cat3.jpeg","img/cat4.jpg","img/cat5.jpg"];
clounter = 0; //click counter
memory = new Memory();

$(function(){
  shuffle(imgArray);

  $("#img1").click(function(){
    $("#img1").attr("src", imgArray[0]);
    clounter += 1;    
    if(clounter == 2){
      memory.card2 = $("#img1").attr("src");
      memory.id2 = "#img1";
      clounter = 0;
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img1").attr("src");
      memory.id1 = "#img1";
    }
});
  $("#img2").click(function(){
    $("#img2").attr("src", imgArray[1]);
    clounter += 1;    
    if(clounter == 2){
      memory.card2 = $("#img2").attr("src");
      memory.id2 = "#img2";
      clounter = 0;
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img2").attr("src");
      memory.id1 = "#img2";
    }
});
  $("#img3").click(function(){
    $("#img3").attr("src", imgArray[2]);
    clounter += 1;    
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img3").attr("src");
      memory.id2 = "#img3";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img3").attr("src");
      memory.id1 = "#img3";
    }
  });
  $("#img4").click(function(){
    $("#img4").attr("src", imgArray[3]);
    clounter += 1;    
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img4").attr("src");
      memory.id2 = "#img4";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img4").attr("src");
      memory.id1 = "#img4";
    }
  });
  $("#img5").click(function(){
    $("#img5").attr("src", imgArray[4]);
    clounter += 1;    
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img5").attr("src");
      memory.id2 = "#img5";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img5").attr("src");
      memory.id1 = "#img5";
    }
  });
  $("#img6").click(function(){
    $("#img6").attr("src", imgArray[4]);
    clounter += 1;    
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img6").attr("src");
      memory.id2 = "#img6";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img6").attr("src");
      memory.id1 = "#img6";
    }
  });
  $("#img7").click(function(){
    $("#img7").attr("src", imgArray[3]);
    clounter += 1;    
    if(clounter == 2){
      memory.card2 = $("#img7").attr("src");
      memory.id2 = "#img7";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        clounter = 0;
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img7").attr("src");
      memory.id1 = "#img7";
    }
  });
  $("#img8").click(function(){
    $("#img8").attr("src", imgArray[2]);
    clounter += 1;    
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img8").attr("src");
      memory.id2 = "#img8";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img8").attr("src");
      memory.id1 = "#img8";
    }
});
  $("#img9").click(function(){
    $("#img9").attr("src", imgArray[1]);
    clounter += 1;    
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img9").attr("src");
      memory.id2 = "#img9";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img9").attr("src");
      memory.id1 = "#img9";
    }
  });
  $("#img10").click(function(){
    $("#img10").attr("src", imgArray[0]);
    clounter += 1;    
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img10").attr("src");
      memory.id2 = "#img10";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).attr("src", "img/default.png");
        $(memory.id2).attr("src", "img/default.png");        
      }
    } else {
      memory.card1 = $("#img10").attr("src");
      memory.id1 = "#img10";
    }

  });
});
