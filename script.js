'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.small').addEventListener('click', function(){
    const userInput = Number(document.querySelector('.number').value);
    
    if (!userInput){
        document.querySelector('.lable').textContent = "No Number ☹️";
        if (score > 1){
            score--;
            document.querySelector('.currentScore').textContent = score;

            document.querySelector('.lable').style.backgroundColor = '#FF8D8D';
            document.querySelector('.lable').style.border = '0.5px solid #FF1F1F';
            document.querySelector('.lable').style.boxShadow = '0 4px 4px rgba(255, 0, 0, 0.23)';
        }
        else{
            document.querySelector('.lable').textContent = "You Lost 😭";
            document.querySelector('.currentScore').textContent = 0;

            document.querySelector('.lable').style.backgroundColor = '#FF8D8D';
            document.querySelector('.lable').style.border = '0.5px solid #FF1F1F';
            document.querySelector('.lable').style.boxShadow = '0 4px 4px rgba(255, 0, 0, 0.23)';
        }
    }

    else if (userInput === randomNumber){
        document.querySelector('.lable').textContent = "You Won! 🥳";

        document.querySelector('.lable').style.backgroundColor = '#D1FFAC';
        document.querySelector('.lable').style.border = '0.5px solid #6BEE00';
        document.querySelector('.lable').style.boxShadow = '0 4px 4px rgba(45, 247, 0, 0.18)';

        if (highScore < score){
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }

    }

    else if (userInput > randomNumber){
        if (score > 1){
            document.querySelector('.lable').textContent = "Too High 📈";
            score--;
            document.querySelector('.currentScore').textContent = score;

            document.querySelector('.lable').style.backgroundColor = '#FFEE8F';
            document.querySelector('.lable').style.border = '0.5px solid #FFD900';
            document.querySelector('.lable').style.boxShadow = '0 4px 4px rgba(255, 212, 0, 0.23)';
        }
        else{
            document.querySelector('.lable').textContent = "You Lost 😭";
            document.querySelector('.currentScore').textContent = 0;

            document.querySelector('.lable').style.backgroundColor = '#FF8D8D';
            document.querySelector('.lable').style.border = '0.5px solid #FF1F1F';
            document.querySelector('.lable').style.boxShadow = '0 4px 4px rgba(255, 0, 0, 0.23)';
        }
    }
        

    else if (userInput < randomNumber){
        if (score > 1){
            document.querySelector('.lable').textContent = "Too Low 📈";
            score--;
            document.querySelector('.currentScore').textContent = score;

            document.querySelector('.lable').style.backgroundColor = '#FFEE8F';
            document.querySelector('.lable').style.border = '0.5px solid #FFD900';
            document.querySelector('.lable').style.boxShadow = '0 4px 4px rgba(255, 212, 0, 0.23)';
        }
        else{
            document.querySelector('.lable').textContent = "You Lost 😭";
            document.querySelector('.currentScore').textContent = 0;

            document.querySelector('.lable').style.backgroundColor = '#FF8D8D';
            document.querySelector('.lable').style.border = '0.5px solid #FF1F1F';
            document.querySelector('.lable').style.boxShadow = '0 4px 4px rgba(255, 0, 0, 0.23)';
        }
    }

});

document.querySelector('.long').addEventListener('click', function(){
    document.querySelector('.lable').textContent = "Start Guessing🤔";
    document.querySelector('.lable').style.backgroundColor = '#D1FFAC';
    document.querySelector('.lable').style.border = '0.5px solid #6BEE00';
    document.querySelector('.lable').style.boxShadow = '0 4px 4px rgba(45, 247, 0, 0.18)';
    score = 20;
    document.querySelector('.currentScore').textContent = score;
    randomNumber = Math.floor(Math.random() * 20) + 1;
})