let container = document.querySelector(".container");
let button = document.querySelectorAll(".press");
let newg = document.querySelector(".newg");
let newgame = document.querySelector("#newgame");
let messge = document.querySelector("#winner");
let refresh = document.querySelector(".refresh");
let pattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],

];
let value = true;
button.forEach((num) => {
    num.addEventListener("click", () => {
        if (value == true) {
            num.innerText = "O";
            console.log(num.innerText);
            value = false;


        }
        else {
            num.innerText = "X";
            console.log(num.innerText);
            value = true;

        }
        num.disabled = true;
        app();

    });

});
let newgamestart = () => {
    for (let btn of button) {
        btn.disabled = false;
        btn.innerText = "";
    }
    messge.innerText = "";
    newgame.style.visibility = "hidden";
    value = true;
};
let reset = () => {
    newgamestart();

}
let notablebtn = () => {
    for (let btn of button) {
        btn.disabled = true;

    }
};
let winner = (first) => {
    messge.innerText = `Congratulation ${first} win the game`;
    messge.style.fontSize = "30px";
    newgame.style.visibility = "visible";
    notablebtn();



};
let app = () => {
    for (let i = 0; i < pattern.length; i++) {
        let nwt = pattern[i];
        let a = nwt[0];
        let b = nwt[1];
        let c = nwt[2];
        let first = button[a].innerText;
        let second = button[b].innerText;
        let third = button[c].innerText;
        if (first != "" && second != "" && third != "") {
            if (first === second && second === third) {
                console.log("Winner", first);
                winner(first);
            }
        }


    }
};
newgame.addEventListener("click", newgamestart);
refresh.addEventListener("click", newgamestart);


