// to access all the boxes

let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset");
let newGamebutton=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#win-msg");

// alternate turns XOXOXOXO
// to tract the turn

let turn0=true;

//winning patterns

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// add event listener for boxes

const resetGame= () => {
    turn0=true;
    enableBttns();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked ");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableBttns = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBttns = ()  => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner= (winner) => {
    msg.innerText=`Player ${winner} is the Winner `;
    msgContainer.classList.remove("hide");
    disableBttns();
};

const checkwinner=() => {
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val!=""  && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner");
                showWinner(pos1Val);
            }
        }
    }
};

newGamebutton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);
