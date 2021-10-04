'use strict';
// starting  element

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// starting condition


const init = function(){
    diceEL.classList.add('hidden');

    const scores = [0, 0] 
    let currentStore = 0;
    let activeplayer = 0;
    let playing = true;
    score0EL.textContent = 0;
    score1El.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');

}



const switchPlayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentStore = 0;
    activeplayer = activeplayer === 0 ? 1:0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');

}

btnRoll.addEventListener('click', function(){
    if(playing){
    
    // choose dice at random
    const dice = Math.trunc(Math.random() * 6)+1;
    console.log(dice);

    //dice display
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;


    // check for rolled 1
if(dice !==1){
    // add dice to currentStore
    currentStore += dice;
    // current0EL.textContent = currentStore;
    document.getElementById(`current--${activeplayer}`).textContent =currentStore;

}else{
    //swich to other player
    switchPlayer();
  
}
} 
});

btnhold.addEventListener('click', function(){
    if(playing){
    // 1. add  current score to the active player
    scores[activeplayer] += currentStore;
    // scores[1] = scores[1] + currentStore
    document.getElementById(`score--${activeplayer}`).textContent =
     scores[activeplayer];

     //2. check if player's score is >= 100
     if(scores[activeplayer] >= 20){
         // finish the game
         playing = false; 
         diceEL.classList.add('hidden');
         document.querySelector(`.player--${activeplayer}`)
         .classList.add('player--winner');
         document.querySelector(`.player--${activeplayer}`)
         .classList.remove('player--active');

     }else{
         // swich to the next player
         switchPlayer();  
     }
      
    }
    
});

btnnew.addEventListener('click', function(){
    

});