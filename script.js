var cardSuit = ["heart", "club", "spade", "diamond"];
var cardNumber = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function getCardSuit(){
    return cardSuit[Math.floor(Math.random()*cardSuit.length)];
}

function getCardNumber(){
    return cardNumber[Math.floor(Math.random()*cardNumber.length)];
}

function init(){
    var ourBeautifulCard = document.querySelector(".card");
    ourBeautifulCard.classList.add(getCardSuit());
    ourBeautifulCard.innerHTML = getCardNumber();
    //document.write("<div>" + getCardSuit() + getCardNumber() + "</div>");
}

    document.write('<div class="card"></div>');

init();