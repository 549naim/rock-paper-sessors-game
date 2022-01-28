// randomly  generated numbers from comoputer
const rock=document.getElementById("rock")
const paper=document.getElementById("paper")
const sciessors=document.getElementById("scissor")
let resultText=document.getElementById("results")
let user=document.getElementById("user")
let bot=document.getElementById("bot")


// let userImg=document.getElementById("user")
let userInput;

//rock click fuction
let rockfun= function myfun(){
    userInput = "ROCK"
    console.log(userInput);
    user.src="./image/rock.png"
    user.style.display="block"
    return userInput
}


//paper click
let paperfun=function myfun1(){
    userInput = "PAPER"
    console.log(userInput);
    user.src="./image/paper.png"
    user.style.display="block"
    return userInput
}


//sciessors
let sciessorsfun=function myfun2(){
    userInput = "SCIESSORS"
    console.log(userInput);
    user.src="./image/sciessors.png"
    user.style.display="block"
    return userInput
}







// building the gaming logic 

let mainlogic1= function mainlogic(){
    let randomNumber;
    let comoutput;
    function comp(){
        randomNumber =Math.random()*10;
        console.log(randomNumber);
        if(randomNumber >0.00 && randomNumber<3.33){
            comoutput ="ROCK"
            bot.src="./image/rock.png";
            bot.style.display="block"
        }
        else if(randomNumber >3.33 && randomNumber<6.66){
            comoutput ="PAPER"
            bot.src="./image/paper.png";
            bot.style.display="block"
        }
        else if(randomNumber >6.66 && randomNumber<9.99){
            comoutput ="SCIESSORS"
            bot.src="./image/sciessors.png";
            bot.style.display="block"
        }      
        console.log(comoutput);
        return comoutput;
       
    }
    comp();



    if (userInput==comoutput){
        console.log(`User give : ${userInput} and Computer give : ${comoutput}  
        The result is DRAW`);
        resultText.innerText=`IT IS A DRAW`;
        document.getElementById("output-img").src="./image/draw.gif";
        
    }
    else if (userInput=="PAPER" && comoutput =="ROCK" || userInput=="ROCK" && comoutput =="SCIESSORS" || userInput=="SCIESSORS" && comoutput =="PAPER" ){
        console.log(`User give : ${userInput} and Computer give : ${comoutput}  
        
        
        CONGRATULATIONS !!!!!! YOU WIN`);
        resultText.innerText=` CONGRATULATIONS !!!!!! YOU WIN`;
        document.getElementById("output-img").src="./image/congrats.gif";
    }
    else{
        console.log(`User give : ${userInput} and 
        Computer give : ${comoutput}  
        
        
        SORRY YOU LOSE`);
        resultText.innerText=`SORRY YOU LOSE`;
        document.getElementById("output-img").src="./image/sorry.gif";
    }
}



//cliking party
rock.addEventListener('click',rockfun);
rock.addEventListener('click',mainlogic1);
// rock.addEventListener('click',computers);

paper.addEventListener('click',paperfun);
paper.addEventListener('click',mainlogic1);
// paper.addEventListener('click',computers);

sciessors.addEventListener('click',sciessorsfun);
sciessors.addEventListener('click',mainlogic1);
// sciessors.addEventListener('click',computers);

