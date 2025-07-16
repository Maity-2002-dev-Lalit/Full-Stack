let innsert=document.querySelector(".win");
let userp=document.querySelector("#zero");
let comp=document.querySelector("#czero");
let i=0;
let j=0;
let computerch=()=>{
    let options=["paper","scissors","rock"];
    let m=Math.floor(Math.random()*3);
    return options[m];
}
let show=(userwin,computerchoice,user)=>{
     if(userwin==true){
        i++;
        comp.innerText=i;
        console.log("Computer win");
         innsert.innerText=`Computer Win ${computerchoice} beats ${user}`;
         innsert.style.backgroundColor="aqua";
     }
     else{
        j++;
        userp.innerText=j;
         innsert.innerText=`You win ${user} beats ${computerchoice}`;
         innsert.style.backgroundColor="yellow";
     }
}

let userchoice=(user)=>{
    console.log("Human choice:",user);
    let computerchoice=computerch();
    console.log("Computer Choice:",computerchoice);

    if(user==computerchoice){
          innsert.innerText="Draw";
           innsert.style.backgroundColor="#FE7743";
    }
    else{
        let userwin=true;
        if(user=="rock"){
            userwin=(computerchoice=="paper")?true:false;
        }
        else if(user=="paper"){
             userwin=(computerchoice=="scissors")?true:false;
        }
           else if(user=="scissors"){
             userwin=(computerchoice=="rock")?true:false;
        }
        show(userwin,computerchoice,user);

    }

} 



let choice=document.querySelectorAll(".choice");
choice.forEach((val)=>{
    val.addEventListener("click",()=>{
        let user=val.getAttribute("id");
        userchoice(user);
    });
});