let user = prompt('enter your name');
let username = document.getElementById('user-el');
username.textContent = user;
let choices = ['rock','paper','scissors']
let rock = document.getElementById('rock')
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors')
let text = document.getElementById('text')
text.style.fontFamily = 'sans-serif'
text.style.marginRight = '6%'

//computer choice
var randomItem = choices[Math.floor(Math.random()*choices.length)];
console.log(randomItem)

// user choice

function rockGame(){
    
    if (randomItem === 'rock'){
        text.textContent = 'its a tie'
        rock.style.color = 'dodgerblue'
        paper.disabled = true
        scissors.disabled = true
    } else if( randomItem === 'paper'){
        text.textContent = 'Paper beats rock.you lose.'
        rock.style.color = 'red'
        paper.disabled = true
        scissors.disabled = true
    }else if(randomItem === 'scissors'){
        text.textContent = 'Rock beats scissors.you win'
        rock.style.color = 'green'
        paper.disabled = true
        scissors.disabled = true
    }
    
}

function paperGame(){
    if(randomItem === 'paper'){
        text.textContent = 'its a tie'
        paper.style.color = 'dodgerblue'
        rock.disabled = true
        scissors.disabled = true
    }else if(randomItem === 'rock'){
        text.textContent = 'Paper beats rock.you win'
        paper.style.color = 'green'
        rock.disabled = true
        scissors.disabled = true
    }else if(randomItem === 'scissors'){
        text.textContent = 'Scissors beat paper.You lose.'
        paper.style.color = 'red'
        rock.disabled = true
        scissors.disabled = true
    }
}

function scissorsGame(){
    if(randomItem === 'scissors'){
        text.textContent = 'its a tie'
        scissors.style.color = 'dodgerblue'
        paper.disabled = true
        rock.disabled = true
    }else if(randomItem === 'rock'){
        text.textContent = 'Rock beats scissors.You lose.'
        scissors.style.color = 'red'
        paper.disabled = true
        rock.disabled = true
    }else if(randomItem === 'paper'){
        text.textContent = 'Scissors beats paper. You win.'
        scissors.style.color = 'green'
        paper.disabled = true
        rock.disabled = true
    }
}

