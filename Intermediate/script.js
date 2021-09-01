// script
// Challenge 1: Your Age in Days

function ageInDays () {
    var birthYear = prompt("what year were you born?");
    var ageindays_value = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var ans = document.createTextNode("You are " + ageindays_value + " days old");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(ans);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}
// Challenge 2
function generateCat () {
    var img = document.createElement('img');
    var div = document.getElementById('cat-pics-container');
    img.setAttribute("src", "./images/cat.gif");
    div.appendChild(img);
}

// Challenge 3
function rpsGame (yourChoice) {
    // 0 is rock, 1 is paper, 2 is scissors
    var computers_choice = Math.floor(Math.random() * 3);
    var g_r = gameResult(computers_choice, yourChoice);
    document.getElementById("rock").src=yourChoice.src;
    var rightImage = "./images/rock.png";
    if (computers_choice == 1) {rightImage = "./images/paper.png";}
    else if (computers_choice == 2) {rightImage = "./images/scissors.png";}
    document.getElementById("scissors").src=rightImage;
    var new_ele = document.createElement("button");
    new_ele.setAttribute("class", "btn btn-danger");
    new_ele.setAttribute("id", "rps_button")
    new_ele.setAttribute("onclick", "reset_rps()");
    var ans = document.createTextNode("You " + g_r + " Press to Result");
    new_ele.appendChild(ans);
    document.getElementById("paper").replaceWith(new_ele);
}

function gameResult (c_c, y_c) {
    switch (y_c.id) {
        case "rock":
            if (c_c == 0) { return "tie";/*tie*/}
            else if (c_c == 1) { return "lose"; /*lose*/ }
            else { return "win"; /*win*/ }
        case "paper":
            if (c_c == 0) { return "win"; /*win*/}
            else if (c_c == 1) { return "tie"; /*tie*/ }
            else { return "lose"; /*lose*/ }
        case "scissors":
            if (c_c == 0) { return "lose"; /*lose*/}
            else if (c_c == 1) { return "win"; /*win*/ }
            else { return "tie"; /*tie*/ }
        default:
            console.log("error!");
            return "error";
    }
}

function reset_rps () {
    document.getElementById("rock").src="./images/rock.png";
    document.getElementById("scissors").src="./images/scissors.png";
    var img = document.createElement('img');
    img.setAttribute("id", "paper");
    img.setAttribute('height', '150');
    img.setAttribute('width', "150");
    img.setAttribute("onclick", "rpsGame(this)");
    img.setAttribute("src", "./images/paper.png");
    document.getElementById("rps_button").replaceWith(img);

}

// Challenge 4
var all_buttons = document.getElementsByTagName("button");
var random_array = ['btn-primary','btn-danger','btn-warning','btn-success'];
var all_buttons_copy = [];
for (let i = 0; i < all_buttons.length; i++) {
    all_buttons_copy.push(all_buttons[i].classList[1]);
}

function buttonChange(selected_val) {
    for (let i = 0; i <all_buttons.length; i++) {
        //console.log(all_buttons_copy[])
        all_buttons[i].classList.remove('btn-primary');
        all_buttons[i].classList.remove('btn-danger');
        all_buttons[i].classList.remove('btn-warning');
        all_buttons[i].classList.remove('btn-success');
        switch (selected_val.value) {
            case "random":
                all_buttons[i].classList.add(random_array[Math.floor(Math.random() * 4)]);
                break;
            case "red":
                all_buttons[i].classList.add('btn-danger');
                break;
            case "green":
                all_buttons[i].classList.add('btn-success');
                break;
            case "reset":
                all_buttons[i].classList.add(all_buttons_copy[i]);
                break;
            default:
                break;
        }
    }
}

// Challenge 5

// Variables
var my_score = 0;
var dealer_score = 0;
var cards_left = 52;
var ace_value = 1;
var my_turn = true;

var card_name = {
    "0":'A.png',
    "1":'2.png',
    "2":'3.png',
    "3":'4.png',
    "4":'5.png',
    "5":'6.png',
    "6":'7.png',
    "7":'8.png',
    "8":'9.png',
    "9":'10.png',
    "10":'J.png',
    "11":'Q.png',
    "12":'K.png',
};
var card_value = {
    "0":ace_value,
    "1":2,
    "2":3,
    "3":4,
    "4":5,
    "5":6,
    "6":7,
    "7":8,
    "8":9,
    "9":10,
    "10":10,
    "11":10,
    "12":10,
};
//Object Initialization
class Card {
    constructor(name,value){
        this.name = name;
        this.value = value;
    }
}
class Deck {
    constructor(){
        this.number_of_cards = 52;
        this.cards = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) {
                temp = new Card(card_name[j], card_value[j]);
                this.cards.push(temp);
            }
        }
    }
    reset_deck() {

    }
}

class Player {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

var deck = {
    "0":4,
    "1":4,
    "2":4,
    "3":4,
    "4":4,
    "5":4,
    "6":4,
    "7":4,
    "8":4,
    "9":4,
    "10":4,
    "11":4,
    "12":4,
};

// on click reset game
function reset_bj_game() {
    //calculate_score();
    deck = {
        "0":4,
        "1":4,
        "2":4,
        "3":4,
        "4":4,
        "5":4,
        "6":4,
        "7":4,
        "8":4,
        "9":4,
        "10":4,
        "11":4,
        "12":4,
    };
    //reset the scores to 0
    my_score = 0;
    dealer_score = 0;
    cards_left = 52;
    my_turn = true;
    document.getElementById("your-bj-score").innerHTML = my_score;
    document.getElementById("dealer-bj-score").innerHTML = dealer_score;
    //clear the field of cards
    document.getElementById("your-score-box").innerHTML = '<h2>You: <span id="your-bj-score">0</span></h2>';
    document.getElementById("dealer-score-box").innerHTML = '<h2>Dealer: <span id="dealer-bj-score">0</span></h2>';
}

function switch_A() {
    if (ace_value === 1){
        ace_value = 11;
        document.getElementById("a-low-high").innerHTML = 'A is High';
    }
    else {
        ace_value = 1;
        document.getElementById("a-low-high").innerHTML = 'A is Low';
    }
    card_value["0"] = ace_value;
}

function hit_button() {
    //pick a random card from deck
    if (cards_left === 0 ){
        return;
    }
    var card = Math.floor(Math.random() * 13);
    while (deck[card] === 0 && cards_left > 0) {
        card = Math.floor(Math.random() * 13);
    }
    deck[card]--;
    cards_left--;
    var whos_turn;
    if (my_turn) {
        whos_turn = 'your-score-box';
        my_score = card_value[card] + my_score;
    }
    else {
        whos_turn = 'dealer-score-box';
        dealer_score = card_value[card] + dealer_score;
    }

    //place card on screen
    var img = document.createElement('img');
    var div = document.getElementById(whos_turn);
    var file_card = "./images/" + card_name[card];
    img.setAttribute("src", file_card);
    div.appendChild(img);
    //update score on screen
    if(my_score > 21 && my_turn) {
        //Display bust
        document.getElementById("your-bj-score").innerHTML = 'BUST';
        calculate_score();
        return;
    }
    else if (my_score <= 21 && my_turn){
        document.getElementById("your-bj-score").innerHTML = my_score;
        return;
    }
    else if (dealer_score > 21 && !my_turn) {
        document.getElementById("dealer-bj-score").innerHTML = 'BUST';
        calculate_score();
        return;
    }
    else if (dealer_score <= 21 && !my_turn){
        document.getElementById("dealer-bj-score").innerHTML = dealer_score;
        return;
    }
    //console.log(card);
    //console.log(deck);

}

function stand_next() {
    if (document.getElementById("dealer-bj-score").innerHTML > 0 && document.getElementById("your-bj-score").innerHTML > 0) {
        calculate_score();
    }
    my_turn = !my_turn;
}

function calculate_score() {
    if (document.querySelector('#your-bj-score').innerHTML === 'BUST') {
        //add win to dealer
        document.getElementById("loses").innerHTML++;
    }
    else if (document.querySelector('#dealer-bj-score').innerHTML === 'BUST') {
        //add win
        document.getElementById("wins").innerHTML++;
    }
    else if (document.querySelector('#your-bj-score').innerHTML === document.querySelector('#dealer-bj-score').innerHTML) {
        // add tie
        document.getElementById("draws").innerHTML++;
    }
    else if (document.querySelector('#your-bj-score').innerHTML > document.querySelector('#dealer-bj-score').innerHTML) {
        // add win
        document.getElementById("wins").innerHTML++;
    }
    else {
        // add loss
        document.getElementById("loses").innerHTML++;
    }
}
