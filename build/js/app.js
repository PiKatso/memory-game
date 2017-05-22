(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Memory() {
  this.card1 = "";
  this.card2 = "";
  this.id1 = "";
  this.id2 = ""; 
}

Memory.prototype.cardCompare = function(card1, card2) {
  if (card1 === card2) {
    return true;
  } else {
    return false;
  }
};

exports.memoryModule = Memory;

},{}],2:[function(require,module,exports){
'use strict';

/**
 * Randomize the order of the elements in a given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Boolean} [options.copy] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Array}
 */
function shuffle(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle expect an array as parameter.');
  }

  options = options || {};

  var collection = arr,
      len = arr.length,
      rng = options.rng || Math.random,
      random,
      temp;

  if (options.copy === true) {
    collection = arr.slice();
  }

  while (len) {
    random = Math.floor(rng() * len);
    len -= 1;
    temp = collection[len];
    collection[len] = collection[random];
    collection[random] = temp;
  }

  return collection;
};

/**
 * Pick one or more random elements from the given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Number} [options.picks] - Specifies how many random elements you want to pick. By default it picks 1.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Object}
 */
shuffle.pick = function(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle.pick() expect an array as parameter.');
  }

  options = options || {};

  var rng = options.rng || Math.random,
      picks = options.picks || 1;

  if (typeof picks === 'number' && picks !== 1) {
    var len = arr.length,
        collection = arr.slice(),
        random = [],
        index;

    while (picks && len) {
      index = Math.floor(rng() * len);
      random.push(collection[index]);
      collection.splice(index, 1);
      len -= 1;
      picks -= 1;
    }

    return random;
  }

  return arr[Math.floor(rng() * arr.length)];
};

/**
 * Expose
 */
module.exports = shuffle;

},{}],3:[function(require,module,exports){
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
    console.log(clounter);
    if(clounter == 2){
      memory.card2 = $("#img1").attr("src");
      memory.id2 = "#img1";
      clounter = 0;
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img1").attr("src");
      memory.id1 = "#img1";
    }
});
  $("#img2").click(function(){
    $("#img2").attr("src", imgArray[1]);
    clounter += 1;
    console.log(clounter);
    if(clounter == 2){
      memory.card2 = $("#img2").attr("src");
      memory.id2 = "#img2";
      clounter = 0;
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img2").attr("src");
      memory.id1 = "#img2";
    }
});
  $("#img3").click(function(){
    $("#img3").attr("src", imgArray[2]);
    clounter += 1;
    console.log(clounter);
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img3").attr("src");
      memory.id2 = "#img3";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img3").attr("src");
      memory.id1 = "#img3";
    }
  });
  $("#img4").click(function(){
    $("#img4").attr("src", imgArray[3]);
    clounter += 1;
    console.log(clounter);
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img4").attr("src");
      memory.id2 = "#img4";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img4").attr("src");
      memory.id1 = "#img4";
    }
  });
  $("#img5").click(function(){
    $("#img5").attr("src", imgArray[4]);
    clounter += 1;
    console.log(clounter);
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img5").attr("src");
      memory.id2 = "#img5";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img5").attr("src");
      memory.id1 = "#img5";
    }
  });
  $("#img6").click(function(){
    $("#img6").attr("src", imgArray[4]);
    clounter += 1;
    console.log(clounter);
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img6").attr("src");
      memory.id2 = "#img6";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img6").attr("src");
      memory.id1 = "#img6";
    }
  });
  $("#img7").click(function(){
    $("#img7").attr("src", imgArray[3]);
    clounter += 1;
    console.log(clounter);
    if(clounter == 2){
      memory.card2 = $("#img7").attr("src");
      memory.id2 = "#img7";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        clounter = 0;
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img7").attr("src");
      memory.id1 = "#img7";
    }
  });
  $("#img8").click(function(){
    $("#img8").attr("src", imgArray[2]);
    clounter += 1;
    console.log(clounter);
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img8").attr("src");
      memory.id2 = "#img8";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img8").attr("src");
      memory.id1 = "#img8";
    }
});
  $("#img9").click(function(){
    $("#img9").attr("src", imgArray[1]);
    clounter += 1;
    console.log(clounter);
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img9").attr("src");
      memory.id2 = "#img9";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img9").attr("src");
      memory.id1 = "#img9";
    }
  });
  $("#img10").click(function(){
    $("#img10").attr("src", imgArray[0]);
    clounter += 1;
    console.log(clounter);
    if(clounter == 2){
      clounter = 0;
      memory.card2 = $("#img10").attr("src");
      memory.id2 = "#img10";
      match = memory.cardCompare(memory.card1, memory.card2);
      if(match === false) {
        $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
        $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
        console.log(clounter);
      }
    } else {
      memory.card1 = $("#img10").attr("src");
      memory.id1 = "#img10";
    }

  });
});
//   $("#img2").click(function(){
//     $("#img2").attr("src", imgArray[1]);
//     clounter += 1;
//     if(clounter == 2){
//       memory.card2 = $("#img2").attr("src");
//       memory.id2 = "#img2";
//       match = memory.cardCompare(memory.card1, memory.card2);
//       if(match === false) {
//         $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
//         $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
//         clounter = 0;
//       } else {
//         memory.card1 = $("#img2").attr("src");
//         memory.id1 = "#img2";
//       }
//     }
//   });
//   $("#img3").click(function(){
//     $("#img3").attr("src", imgArray[2]);
//     clounter += 1;
//     if(clounter == 2){
//       memory.card2 = $("#img3").attr("src");
//       memory.id2 = "#img3";
//       match = memory.cardCompare(memory.card1, memory.card2);
//       if(match === false) {
//         $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
//         $(memory.id2).delay( 1000 ).attr("src", "img/default.png");
//         clounter = 0;
//       } else {
//         memory.card1 = $("#img3").attr("src");
//         memory.id1 = "#img3";
//       }
//     }
//   });
//   $("#img4").click(function(){
//     $("#img4").attr("src", imgArray[3]);
//     clounter += 1;
//     if(clounter == 2){
//       memory.card2 = $("#img4").attr("src");
//       memory.id2 = "#img4";
//       match = memory.cardCompare(memory.card1, memory.card2);
//       if(match === false) {
//         $(memory.id1).delay( 1000 ).attr("src", "img/default.png");
//         $(memory.id2).attr("src", "img/default.png");
//         clounter = 0;
//       } else {
//         memory.card1 = $("#img4").attr("src");
//         memory.id1 = "#img4";
//       }
//     }
//   });
//   $("#img5").click(function(){
//     $("#img5").attr("src", imgArray[4]);
//     clounter += 1;
//     if(clounter == 2){
//       memory.card2 = $("#img5").attr("src");
//       memory.id2 = "#img5";
//       match = memory.cardCompare(memory.card1, memory.card2);
//       if(match === false) {
//         $(memory.id1).attr("src", "img/default.png");
//         $(memory.id2).attr("src", "img/default.png");
//         clounter = 0;
//       } else {
//         memory.card1 = $("#img5").attr("src");
//         memory.id1 = "#img5";
//       }
//     }
//   });
//   $("#img6").click(function(){
//     $("#img6").attr("src", imgArray[1]);
//     clounter += 1;
//     if(clounter == 2){
//       memory.card2 = $("#img6").attr("src");
//       memory.id2 = "#img6";
//       match = memory.cardCompare(memory.card1, memory.card2);
//       if(match === false) {
//         $(memory.id1).attr("src", "img/default.png");
//         $(memory.id2).attr("src", "img/default.png");
//         clounter = 0;
//       } else {
//         memory.card1 = $("#img6").attr("src");
//         memory.id1 = "#img6";
//       }
//     }
//   });
//   $("#img7").click(function(){
//     $("#img7").attr("src", imgArray[0]);
//     clounter += 1;
//     if(clounter == 2){
//       memory.card2 = $("#img7").attr("src");
//       memory.id2 = "#img7";
//       match = memory.cardCompare(memory.card1, memory.card2);
//       if(match === false) {
//         $(memory.id1).attr("src", "img/default.png");
//         $(memory.id2).attr("src", "img/default.png");
//         clounter = 0;
//       } else {
//         memory.card1 = $("#img7").attr("src");
//         memory.id1 = "#img7";
//       }
//     }
//   });
//   $("#img8").click(function(){
//     $("#img8").attr("src", imgArray[4]);
//     clounter += 1;
//     if(clounter == 2){
//       memory.card2 = $("#img8").attr("src");
//       memory.id2 = "#img8";
//       match = memory.cardCompare(memory.card1, memory.card2);
//       if(match === false) {
//         $(memory.id1).attr("src", "img/default.png");
//         $(memory.id2).attr("src", "img/default.png");
//         clounter = 0;
//       } else {
//         memory.card1 = $("#img8").attr("src");
//         memory.id1 = "#img8";
//       }
//     }
//   });
//   $("#img9").click(function(){
//     $("#img9").attr("src", imgArray[3]);
//     clounter += 1;
//     if(clounter == 2){
//       memory.card2 = $("#img9").attr("src");
//       memory.id2 = "#img9";
//       match = memory.cardCompare(memory.card1, memory.card2);
//       if(match === false) {
//         $(memory.id1).attr("src", "img/default.png");
//         $(memory.id2).attr("src", "img/default.png");
//         clounter = 0;
//       } else {
//         memory.card1 = $("#img9").attr("src");
//         memory.id1 = "#img9";
//       }
//     }
//   });
//   $("#img10").click(function(){
//     $("#img10").attr("src", imgArray[2]);
//     clounter += 1;
//     if(clounter == 2){
//       memory.card2 = $("#img10").attr("src");
//       memory.id2 = "#img10";
//       match = memory.cardCompare(memory.card1, memory.card2);
//       if(match === false) {
//         $(memory.id1).attr("src", "img/default.png");
//         $(memory.id2).attr("src", "img/default.png");
//         clounter = 0;
//       } else {
//         memory.card1 = $("#img10").attr("src");
//         memory.id1 = "#img10";
//       }
//     }
//   });
// });

},{"./../js/memory.js":1,"shuffle-array":2}]},{},[3]);
