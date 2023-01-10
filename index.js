var checkedNumber = document.getElementById("checked-number");
checkedNumber.innerHTML = "0";

document.getElementById("1").addEventListener("click",one);
document.getElementById("2").addEventListener("click",two);
document.getElementById("3").addEventListener("click",three);
document.getElementById("4").addEventListener("click",four);
document.getElementById("5").addEventListener("click",five);

function thankYou() {
    document.getElementById("thankyou-container").classList.remove("hide");
    document.getElementById("rating-container").style.display = "none";
}

function one() {
    checkedNumber.innerHTML = "1";
}

function two() {
    checkedNumber.innerHTML = "2";
}

function three() {
    checkedNumber.innerHTML = "3";
}

function four() {
    checkedNumber.innerHTML = "4";
}

function five() {
    checkedNumber.innerHTML = "5";
}
