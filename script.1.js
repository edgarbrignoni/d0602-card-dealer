// JavaScript File
console.log('Card Dealer');

var pickSuit = Math.floor((Math.random() * 4));
var pickColor = (pickSuit < 2) ? 'black':'red';
var pickNumber = Math.floor((Math.random() * 13) + 1);

function getNumber(pickNumber) {
  switch(pickNumber) {
    case 1: return 'A'; break;
    case 11: return 'J'; break;
    case 12: return 'Q'; break;
    case 13: return 'K'; break;
    default: return pickNumber;
  }
}

var cardNumber = getNumber(pickNumber);
var cardSuit = ['&#9824', '&#9827', '&#9829', '&#9830'];

console.log('Card Number: ' + cardNumber);
console.log('Card  Suit: ' + pickSuit);

document.write('<div style="font-size: 100px; color: ' + pickColor + '">' + cardSuit[pickSuit] + '</div>');
document.write('<div style="font-size: 100px; color: ' + pickColor + '">' + cardNumber + '</div>');