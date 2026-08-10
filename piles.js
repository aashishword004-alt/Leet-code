/* Alice and Bob continue their games with piles of stones. 
There are a number of piles arranged in a row, and each pile
 has a positive integer number of stones piles[i]. The objective
  of the game is to end with the most stones.

Alice and Bob take turns, with Alice starting first. */

// let piles = [5,3,2,1]
// function stoneGame() {

//     let bob = params(' take the stones');
//     let alice = params(' take the stones');
  
//     console.log('Bob took ' + bob + ' stones');
//     console.log('Alice took ' + alice + ' stones');

// }

// stoneGame(piles);

let prompt = require('prompt-sync')();

let bob = prompt();

console.log('Bob took ' + bob + ' stones');