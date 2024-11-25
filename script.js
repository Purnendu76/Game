let userscor=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userpara=document.querySelector("#user-score")
const compara=document.querySelector("#comp-score")


const getCompChoice=()=>{
const option=["rock","paper","Scissor"]
const randomeindx=Math.floor(Math.random()*3);
return  option[randomeindx];

}
const drowGame=()=>{
    console.log("game was drow")
    msg.style.backgroundColor="orange"
}

const showWinner=(userwin) =>{
    if(userwin){
       userscor++;
       userpara.innerText=userscor;
        msg.innerText="you win!";
        msg.style.backgroundColor="green"
    }else{
        compscore++
        compara.innerText=compscore
        msg.innerText="you loose!";
        msg.style.backgroundColor="red"
    }
}


const playGame=( userChoice)=>{
    console.log("user choice = ",userChoice)
    const ComChoice= getCompChoice();
    console.log(" ComChoice= ",ComChoice)
 //draw game
 if  (userChoice ===ComChoice){
    console.log("drow game");
    msg.innerText="drow game";
    drowGame()
 }else{
    let  userwin=true;
    if( userChoice==="rock"){
        //scissor , paper
        userwin=ComChoice==="paper"?false:true;
    }else if( userChoice="paper"){
            //rock ,scissor 
            userwin=ComChoice==="Scissor"?false:true;
    }else{
    ( userChoice="Scissor")
        // rock , paper
        userwin=ComChoice==="rock"?false:true;
    }
    showWinner(userwin);
 }
 


 }


choices.forEach(( choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id")
        playGame(userChoice);
    });

})