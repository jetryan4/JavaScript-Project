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

function generateCat () {
    var img = document.createElement('img');
    var div = document.getElementById('cat-pics-container');
    img.setAttribute("src", "./images/cat.gif");
    div.appendChild(img);
}