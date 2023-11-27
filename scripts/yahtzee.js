 let diceArr = document.querySelectorAll('.placeholder');

diceArr.forEach((die, index) => {
  die.addEventListener('click', () => {
    toggleActive(index)
  })
})


function toggleActive(index) {
  let die = document.querySelector(`#die${index + 1}`)
    if (die.classList.contains('is-active')) {
      console.log(die)
     die.classList.remove('is-active')

  } else {
    die.classList.add('is-active')
  }
}


function rollDice() {
 

  console.log(diceArr);

  diceArr.forEach(die => {
    
    if (!die.classList.contains('is-active')) { // rerolls nonactive dice work on more once dealing in react
      var randomNumber = Math.floor(Math.random() * 6) + 1;
      die.innerHTML = randomNumber;
    }          
            
  });  
  
}
