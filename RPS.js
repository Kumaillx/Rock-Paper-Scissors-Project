


document.querySelector('.start-btn').addEventListener('click', () => {
  alert('Enjoy Your Game !');
});

// document.querySelector('.start-btn').addEventListener('click', () => {
//   alert(`You ${score}!`);
// });


    //Variable to save score
    const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    var isAnimationRunning = true
  //Connecting Javascript with Html
  updateScoreElement();


//()=>{} arrow function
var animationInterval = setInterval(()=>{
  var options = ['Rock', 'Paper', 'Scissors']
  const rand1 = Math.floor(Math.random() * 3);
  console.log("rand1: ", rand1)
  var selected_computer_option = options[rand1]
  document.querySelector(`.js-moves`).innerHTML = 
  `You 
  <img src="images/Qmark.png" alt="?" class="move-icon">
  Computer
  <img src="images/${selected_computer_option}-sign.png" class="move-icon">
  `;

}, 100)


  //function 1
  function playgame(playermove) 
  {
    clearInterval(animationInterval)
    const computerMove = pickComputerMove();     
    
    let result = '';

    //for scissors
    if (playermove === 'Scissors') 
    {
        if (computerMove === 'Rock') 
      {
        result = 'You Lose';
      }
      else if (computerMove === 'Paper') 
      {
        result = 'You Win';
      }
      else if (computerMove === 'Scissors') 
      {
        result = 'Tie';
      }
    } 
    
    //For Paper
    else if (playermove === 'Paper') 
    {
      
      if (computerMove === 'Rock') 
      {
        result = 'You Win';
      }
      else if (computerMove === 'Paper') 
      {
        result = 'Tie';
      }
      else if (computerMove === 'Scissors') 
      {
        result = 'You Lose';
      }
    }
    
    //For Rock
    else if (playermove === 'Rock') 
    {
      
      if (computerMove === 'Rock') 
      {
        result = 'Tie';
      }
      else if (computerMove === 'Paper') 
      {
        result = 'You Lose';
      }
      else if (computerMove === 'Scissors') 
      {
        result = 'You Win';
      }
    }

    //Score Tracking and Update
    if (result === 'You Win') 
    {
      score.wins += 1; 
      
    }
    else if (result === 'You Lose') 
    {
      score.losses += 1;
      
    }
    else if (result === 'Tie') 
    {
      score.ties += 1;
      
    }

    localStorage.setItem('score', JSON.stringify(score));

    //for updates on the innerHtml
    updateScoreElement();


    //for results
    document.querySelector('.js-result').innerHTML = result;

    //for moves on web
    document.querySelector('.js-moves').innerHTML = 
    `You 
    <img src="images/${playermove}-sign.png" class="move-icon">
    <img src="images/${computerMove}-sign.png" class="move-icon">
    Computer`;
  }

  //Updating Score using Qurey Selector
  function updateScoreElement() 
  {
    document.querySelector(".js-score")
      .innerHTML = `Wins:${score.wins}, 
      Losses:${score.losses}, Ties:${score.ties}`; 
  }


  //A function that picks computer move
  function pickComputerMove() 
  {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) 
    {
      computerMove = 'Rock'; 
    } 
    else if (randomNumber >= 1/3 && randomNumber < 2/3 ) 
    {
      computerMove = 'Paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1 ) 
    {
      computerMove = 'Scissors';
    }

     return computerMove;

  }


  