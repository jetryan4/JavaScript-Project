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
var all_buttons_copy = [];
for (let i = 0; i < all_buttons.length; i++) {
    all_buttons_copy.push(all_buttons[i]);
}

function buttonChange(selected_val) {
    for (let i = 0; i <all_buttons.length; i++) {
        switch (selected_val) {
            case "random":
                break;
            case "red":
                all_buttons_copy[i].removeAttribute("class", all_buttons[i].getElementsByTagName(class));
                all_buttons_copy[i].setAttribute("class", "btn btn-danger");
                break;
            case "green":
                break;
            case "reset":
                break;
            default:
                break;
        }
    }
}