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
