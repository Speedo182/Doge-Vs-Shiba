// Define the game class
class DogeVsShiba {
  constructor() {
    // Set initial scores to zero
    this.dogeScore = 0;
    this.shibaScore = 0;
    
    // Define game rules
    this.rules = {
      "rock": {
        "scissors": "win",
        "paper": "lose"
      },
      "paper": {
        "rock": "win",
        "scissors": "lose"
      },
      "scissors": {
        "paper": "win",
        "rock": "lose"
      }
    };
  }
  
  // Define method to simulate a single round of the game
  playRound(dogeChoice, shibaChoice) {
    const result = this.rules[dogeChoice][shibaChoice];
    
    if (result === "win") {
      this.dogeScore++;
      return "Doge wins this round!";
    } else if (result === "lose") {
      this.shibaScore++;
      return "Shiba wins this round!";
    } else {
      return "It's a tie!";
    }
  }
  
  // Define method to simulate a full game with a given number of rounds
  playGame(numRounds) {
    // Reset scores
    this.dogeScore = 0;
    this.shibaScore = 0;
    
    // Play specified number of rounds
    for (let i = 0; i < numRounds; i++) {
      const dogeChoice = this.getRandomChoice();
      const shibaChoice = this.getRandomChoice();
      const roundResult = this.playRound(dogeChoice, shibaChoice);
      console.log(`Round ${i+1}: ${roundResult}`);
    }
    
    // Determine winner and return result
    if (this.dogeScore > this.shibaScore) {
      return "Doge wins the game!";
    } else if (this.shibaScore > this.dogeScore) {
      return "Shiba wins the game!";
    } else {
      return "It's a tie game!";
    }
  }
  
  // Define method to get a random choice for either doge or shiba
  getRandomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
}

// Create new instance of the game
const game = new DogeVsShiba();

// Play a game with 5 rounds
console.log(game.playGame(5));
