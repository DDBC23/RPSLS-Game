# RPSLS-Game

RPSLS (or rock, paper, scissors, lizard, Spock) is a simple and enjoyable game where the user can compete against a computer opponent in a game of chance. 

This site features an adapative layout based on the user's screen size, 2 different game modes which both use a '3 lives' system and a high scores system which the player can set out to achieve and gain bragging rights over their friends!

![Responsive Mockup](/assets/media/responsive_design.png)

## Features

### Existing Features

#### __Menu and Pop Out Windows__

- __Menu Bar__

  - The menu bar allows the user to navigate between different game modes, review rules for each mode and display the current high scores for both game mode using a drop-down style display with a hover visual effect and creates a pop out window for the selected choice.
  - This section allows for simple access to information without the need to redirect to multiple pages.

![Menu Bar](/assets/media/menu_bar.png)

- __RPSLS Rules__

  - This pop up window provides both a thematic diagram and table layout describing the rules of rock, paper, scissors, lizard, Spock. This window is hidden once the user clicks anywhere on the screen.
  - This gives the user a clear understanding of how to play the RPSLS game mode.

![RPSLS Rules](/assets/media/rpsls_rules_window.png)

- __High Scores__

  - This pop up window allows the user to check the top 3 scores for each game mode and has prepopulated information which is replaced once the user achieves a high score. This window is hidden once the user clicks anywhere on the screen.

  - This gives the user a goal to aim for and a sense of achievement for any high scores attained.

![High Scores](/assets/media/high_scores.png)

#### __Game Area__

- __Game Title__

  - The game title clearly states the current game mode being played to the user and updates based on the player's selection.

  - This section helps reaffirm the player's choice of game mode.

![Game Title](/assets/media/game_title.png)

- __Player Round Selection__

  - This section allows the player to select their choice for each round and enlarges when the player hovers over each option. Once selected, their choice will be reflected in the player choice area.

  - This fundamentally allows the user to interact with the game by providing multiple choices on how to play.

![Player Round Selection](/assets/media/player_round_selection.png)

- __Player Choice__

  - This section allows the player to confirm their selection before proceeding and has a unique caption dependent on the choice that was picked. Once an option is selected the confirm choice button is displayed.

  - This allows the user more agency over how they would like to play and adds some fun flavouring with the captions.

![Player Choice](/assets/media/player_choice.png)

- __Countdown and Computer Choice__

  - This section counts down from 3 once the user confirms their choice then confirms either a win, loss or draw and displays the computer's selection once the countdown is complete.

  - This adds suspense for the user and confirms how their selection fares against the computer's selection.

![Countdown and Computer Choice](/assets/media/countdown_and_computer_choice.png)

- __Scores and Lives__

  - This section displays the user's current score count and their 'remaining lives' by changing the visuals after each loss. Once the player has lost a 3rd time, the game is over.

  - This provides the user a sense of achievement with the score counter and adds difficulty by means of limited attempts before the game ends.

![Scores and Lives](/assets/media/scores_and_lives.png)

- __Game Over__

  - Once the user has lost 3 rounds this window displays their current score, confirms if a high score has been achieved, allows the user to input a 4 character name to display alongside their new high score and requests if the user would like to play again.

  - This provides a summary of the game played for the user and enhances the sense of accomplishment if a high score is attained.

![Game Over](/assets/media/game_over.png)

### Features Left to Implement

 - Add an 'unlimited lives' mode.

 - Add music and sound effects with the option to be toggled off.

 - Add visual animations for round win / draw / loss.

## Testing

This site has been tested on a large screen desktop device, laptop and mobile device with no evident errors appearing for visual or functional purposes. 

This site features multiple header buttons that will change appearance when hovered or focused

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fddbc23.github.io%2FRPSLS-Game%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fddbc23.github.io%2FRPSLS-Game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
  - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
    - __The following metrics were returned__
    - There are 27 functions in this file.
    - Function with the largest signature take 1 arguments, while the median is 0.
    - Largest function has 43 statements in it, while the median is 4.
    - The most complex function has a cyclomatic complexity value of 29 while the median is 1.
    - __The following warnings were returned__
    - 95: Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (roundStart)