class Shrugman {
  constructor(secretWord) {
    this.secretWord = secretWord.toLowerCase();
    this.maskedWord = this.secretWord.replace(/[a-z]/g, "_");
    this.guessedLetters = [];
    this.shrugEmoji = "¯\\_(:/)_/¯";
    this.guessesLeft = this.shrugEmoji.length;
    this.gamesPlayed = [];
  }
  guess(letter) {
    if (this.guessedLetters.includes(letter)) {
      console.log(
        "You already guessed this letter. Please choose another one."
      );
      return;
    }
    this.guessedLetters.push(letter);
    if (this.secretWord.includes(letter)) {
      for (let i = 0; i < this.secretWord.length; i++) {
        if (this.secretWord[i] === letter) {
          this.maskedWord =
            this.maskedWord.substr(0, i) +
            letter +
            this.maskedWord.substr(i + 1);
        }
      }
      console.log("Correct! The word is now: " + this.maskedWord);
      if (!this.maskedWord.includes("_")) {
        console.log(
          "Congratulations, you won the game! The secret word was '" +
            this.secretWord +
            "'"
        );
        this.gamesPlayed.push({ word: this.secretWord, outcome: "win" });
        return;
      }
    } else {
      this.guessesLeft--;
      console.log(
        "Sorry, the word does not contain that letter. You have " +
          this.guessesLeft +
          " attempts left."
      );
      if (this.guessesLeft === 0) {
        console.log(
          "Sorry, you lost the game. The secret word was '" +
            this.secretWord +
            "'."
        );
        this.gamesPlayed.push({ word: this.secretWord, outcome: "loss" });
        return;
      }
    }
  }
  displayGamesPlayed() {
    console.log("List of games played:");
    for (let game of this.gamesPlayed) {
      console.log(game.word + " - " + game.outcome);
    }
  }
}

let game = new Shrugman("Movie");
game.guess("");
