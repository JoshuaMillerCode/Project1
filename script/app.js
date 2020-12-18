//Cached DOM Nodes 
const $body = $('body');
//Start Page 
const $startPage = $('.start-page');
const $startButton = $('#first-start');
//Side Panel Nodes 
const $startGameButton = $('#start-game');
const $resetGameButton = $('#reset-game');
const $commentBox = $('#hint-comment-box');
//Puzzles square that they click
const $wirePuzzle = $('#puzzle-1');
const $backAndForthPuzzle = $('#puzzle-3');
const $simonPuzzle = $('#puzzle-4');
const $numberPuzzle = $('#puzzle-5');
const $triviaPuzzle = $('#puzzle-6');
//timer countdown
const $timerSection = $('#timer-box');
let $timerDisplay = $('#timer');
//Modals that open when the puzzle square is clicked
const $wireModal = $('.puzzle1-modal');
const $backAndForthModal = $('.puzzle2-modal');
const $simonModal = $('.puzzle3-modal');
const $numberModal = $('.puzzle4-modal');
const $triviaModal = $('.puzzle5-modal');
// Close Buttons
const $wireClose = $('#close-wire-modal');
const $backForthClose = $('#close-back-forth-modal');
const $simonClose = $('#close-simon-modal');
const $numberClose = $('#close-number-modal');
const $triviaClose = $('#close-trivia-modal');
//Check is puzzles are passed
const $doneButton = $('#done');
const player = {
    level: 1
}

class Puzzle {
    constructor($el, $modal, $closeButton){
        this.hasPassed = false;
        this.$el = $el;
        this.$modal = $modal;
        this.$closeButton = $closeButton;
        this.opened = false;
    }
    openModal(){
        this.$el.on('click', () => {
            this.opened = true;
            this.$modal.css('display','flex');
            $timerDisplay.css('z-index' , '3')
                .css('transform', 'translateX(30rem)');
        });
    }
    closeModal(){
        this.$closeButton.on('click', () => {
            this.opened = false;
            this.$modal.css('display','none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
        })
    }
}
const wire = new Puzzle($wirePuzzle, $wireModal, $wireClose);
const backAndForth = new Puzzle($backAndForthPuzzle, $backAndForthModal, $backForthClose);
const simon = new Puzzle($simonPuzzle, $simonModal, $simonClose);
const number = new Puzzle($numberPuzzle, $numberModal, $numberClose);
const trivia = new Puzzle($triviaPuzzle, $triviaModal, $triviaClose);


startPageClose = () =>{
    $startButton.on('click', () => {
        $startPage.css('display' , 'none');
    })
}



/////////////Timer Functions///////////
let counter = 45;
let interval;
const timer = () => {
    counter--;
    $timerDisplay.text(`:${counter}`);
}

////////////////////////////////////////

////////////Puzzle Functions//////////

//Components of the wire game
const $greenWire = $('#green');
const $redWire = $('#red');
const $blueWire = $('#blue');

const wireGame = (level) => {
    if(level === 1){
        $redWire.on('click', () => {
            wire.hasPassed = true;
            $commentBox.text("Nice Work! You passed this module!");
            $wireModal.css('display' , 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $wirePuzzle.css('background-image' , 'url("./images/checkmark.png")');
        })
        $greenWire.on('click', () => {
            $commentBox.text("Try Again. Maybe try the color of the bomb?");
        })
        $blueWire.on('click', () => {
            $commentBox.text("Try Again. Maybe try the color of the bomb?");
        })
    }else if(level === 2){
        $redWire.on('click', () => {
            $commentBox.text("Try Again. Blue and yellow make what color?");
        })
        $greenWire.on('click', () => {
            wire.hasPassed = true;
            $commentBox.text("Nice Work! You passed this module!");
            $wireModal.css('display' , 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $wirePuzzle.css('background-image' , 'url(./images/checkmark.png)');
        })
        $blueWire.on('click', () => {
            $commentBox.text("Try Again. Blue and yellow make what color?");
        })
    }else{
        $redWire.on('click', () => {
            $commentBox.text("Try Again. Smurfs are this color");
        })
        $greenWire.on('click', () => {
            $commentBox.text("Try again! Smurfs are this color.");
        })
        $blueWire.on('click', () => { 
            wire.hasPassed = true;
            $commentBox.text("Nice Work! You passed this module!");
            $wireModal.css('display' , 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $wirePuzzle.css('background-image' , 'url(./images/checkmark.png)');

        })
    }
}
//Components of the back and forth game
const $movingCirle = $('#back-forth-box');
const backAndForthGame = (level) => {
    if(level === 1){
        $movingCirle.on('click', () => {
            backAndForth.hasPassed = true;
            $commentBox.text('Fast reflex!! Nice Work!! You passed this section')
            $backAndForthModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $backAndForthPuzzle.css('background-image' , 'url(./images/checkmark.png)');
        })
    }else if(level === 2){
        $movingCirle.css('animation-duration', '2s');
        $movingCirle.on('click', () => {
            backAndForth.hasPassed = true;
            $commentBox.text('Fast reflex!! Nice Work!! You passed this section')
            $backAndForthModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $backAndForthPuzzle.css('background-image' , 'url(./images/checkmark.png)');
        })
    }else{
        $movingCirle.css('animation-duration', '1s');
        $movingCirle.on('click', () => {
            backAndForth.hasPassed = true;
            $commentBox.text('Fast reflex!! Nice Work!! You passed this section')
            $backAndForthModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $backAndForthPuzzle.css('background-image' , 'url(./images/checkmark.png)');
        })
    }
}
//Components of the simon game 

const $simonRed = $('#simon-red');
const $simonGreen = $('#simon-green');
const $simonBlue = $('#simon-blue');
const $simonYellow = $('#simon-yellow');

const colorChagenSimon = () => {
    $simonRed.css('background-color','black');
    $simonGreen.css('background-color','black');
    $simonBlue.css('background-color','black');
    $simonYellow.css('background-color','black');
}

const simonGame = (level) => {
    let redClicked = false;
    let greenClicked = false;
    let blueClicked = false;
    let yellowClicked = false;

    
    $simonRed.on('click' , () => {
        redClicked = true;
        if(level === 1 && greenClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if (level === 2 && redClicked === true && yellowClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if(level === 3 && greenClicked === true && yellowClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }
    })
    $simonGreen.on('click' , () => {
        greenClicked = true;
        if(level === 1 && greenClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if (level === 2 && redClicked === true && yellowClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if(level === 3 && greenClicked === true && yellowClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }
    })
    $simonBlue.on('click' , () => {
        blueClicked = true;
        if(level === 1 && greenClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        } else if (level === 2 && redClicked === true && yellowClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if(level === 3 && greenClicked === true && yellowClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }
    })
    $simonYellow.on('click' , () => {
        yellowClicked = true;
        if(level === 1 && greenClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        } else if (level === 2 && redClicked === true && yellowClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if(level === 3 && greenClicked === true && yellowClicked === true && blueClicked === true){
            simon.hasPassed = true;
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }
    })
    if (level === 1){
        $simonPuzzle.on('click', () => {
            $simonGreen.css('background-color','green');
            $simonBlue.css('background-color','blue');
            setTimeout( () => {
                colorChagenSimon();
            }, 350);
            clearTimeout();
        })
    } else if (level === 2){
        $simonPuzzle.on('click', () => {
            $simonRed.css('background-color','red');
            $simonBlue.css('background-color','blue');
            $simonYellow.css('background-color','yellow');
            setTimeout( () => {
                colorChagenSimon();
            }, 200);
            clearTimeout();
        })
    } else {
        $simonPuzzle.on('click', () => {
            $simonBlue.css('background-color' , 'blue');
            $simonGreen.css('background-color', 'green');
            $simonYellow.css('background-color','yellow');
            setTimeout( () => {
                colorChagenSimon();
            }, 200);
            clearTimeout();
        })
    }
}

//Components of numbers game
const $numberdisplay = $('#numbers-display');
const $submitButton = $('#submit-button');
const numberGame = (level) => {
    $numberPuzzle.on('click', () => {
        if (player.level === 1){
            $commentBox.text('Try the first four numbers')
        }else if(player.level === 2){
            $commentBox.text('Try the last code backwards');
        }else {
            $commentBox.text('What is 400 + 711?');
        }
    })
    const rightNumbers = [1234, 4321, 1111];
    const selectedNumbers = [];
    $('.number').on('click', (event) => {
        if(selectedNumbers.length != 4){
            let selectedbutton = $(event.target).text();
            let buttonToNum = parseInt(selectedbutton);
            selectedNumbers.push(buttonToNum);
        }
        //console.log(selectedNumbers);
        let answer = selectedNumbers.reduce((acc, num) => {
            return `${acc}${num}`;
        })
        $numberdisplay.val(answer);
    }) 
    $submitButton.on('click', () => {
        let stringInDisplay = $numberdisplay.val()
        let numberInDisplay = parseInt(stringInDisplay);
        if(level === 1 &&  numberInDisplay === rightNumbers[0]){
            number.hasPassed = true;
            $numberModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $numberPuzzle.css('background-image' , 'url(./images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
        }else if (level === 2 && numberInDisplay === rightNumbers[1]){
            number.hasPassed = true;
            $numberModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $numberPuzzle.css('background-image' , 'url(./images/checkmark.png')
            $commentBox.text('Nice work! You passed this section.');
        } else if(level === 3 && numberInDisplay === rightNumbers[2]){
            number.hasPassed = true;
            $numberModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $numberPuzzle.css('background-image' , 'url(./images/checkmark.png')
            $commentBox.text('Nice work! You passed this section.');
        }
    })
}

const $question = $('#question');
const $typeAnswer = $('#answer');
const $submitAnswer = $('#trivia-submit');
const triviaGame = (level) => {
    
    const triviaQuestions = [
        {
            question: "What is the nickname of the U.S. state of Texas?",
            answer: "the lonestar state"
        },
        {
            question: "In which, U.S. state is Area 51 located?",
            answer: "nevada"
        },
        {
            question: "Who is on the $100 bill?",
            answer: "benjamin franklin"
        }
    ]
    if(level === 1){
        $question.text(triviaQuestions[0].question);
        $submitAnswer.on('click', () => {
            let currentAnswer = $typeAnswer.val()
            const fixedAnswer = currentAnswer.toLowerCase();
            console.log(fixedAnswer);
            if( fixedAnswer === triviaQuestions[0].answer){
                trivia.hasPassed = true;
                $triviaModal.css('display', 'none');
                $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
                $triviaPuzzle.css('background-image' , 'url(./images/checkmark.png')
                $commentBox.text('Nice work! You passed this section.');
            } 
        })
    } else if (level === 2){
        $question.text(triviaQuestions[1].question);
        $submitAnswer.on('click', () => {
            let currentAnswer = $typeAnswer.val()
            const fixedAnswer = currentAnswer.toLowerCase();
            console.log(fixedAnswer);
            if( fixedAnswer === triviaQuestions[1].answer){
                trivia.hasPassed = true;
                $triviaModal.css('display', 'none');
                $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
                $triviaPuzzle.css('background-image' , 'url(./images/checkmark.png')
                $commentBox.text('Nice work! You passed this section.');
            }
        })
    } else {
        $question.text(triviaQuestions[2].question);
        $submitAnswer.on('click', () => {
            let currentAnswer = $typeAnswer.val()
            const fixedAnswer = currentAnswer.toLowerCase();
            console.log(fixedAnswer);
            if( fixedAnswer === triviaQuestions[2].answer){
                trivia.hasPassed = true;
                $triviaModal.css('display', 'none');
                $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
                $triviaPuzzle.css('background-image' , 'url(./images/checkmark.png')
                $commentBox.text('Nice work! You passed this section.');
            }
        })
    }
}
const hasPassedLevel = () => {
    let levelPassed = false;
    if (wire.hasPassed === true && backAndForth.hasPassed === true && simon.hasPassed === true && number.hasPassed === true && trivia.hasPassed === true){
        levelPassed = true;
    } else {
        levelPassed = false;
    }
    return levelPassed;
}
const winScreen = () => {
    $body.empty();
    $body.css('background-image', 'url(./images/win_screen.jpeg')
        .css('background-repeat' ,'no-repeat')
        .css('background-size','cover')
        .css('flex-direction', 'column');
    const reloadWin = $('<button>').text('Start Over').appendTo($body);
    reloadWin.on('click', () => {
        location.reload();
    })
}
const gameOverScreen = () => {
    $body.empty();
    const gameOverH1 = $('<h1>').addClass('game-over-text').text('GAME OVER!!!!!').appendTo($body);
    $body.css('background-image', 'url(./images/real_nuke.jpeg')
        .css('background-repeat' ,'no-repeat')
        .css('background-size','cover');
}

const level1 = (level) => {
        $startGameButton.on('click', () => {
            level = player.level;
            interval = setInterval(() => {
                timer();
                if(counter <= 0 && hasPassedLevel() === false) {
                clearInterval(interval);
                gameOverScreen();
            }
            }, 1000);
            $startGameButton.css('display', 'none');
            $resetGameButton.css('display' , 'block');
            
                wireGame(level);
                backAndForthGame(level);
                simonGame(level);
                numberGame(level);
                triviaGame(level);
        })
}
const level2 = () => {
    $startGameButton.on('click', () => {
        level = player.level;
        interval = setInterval(() => {
            timer();
            if(counter <= 0 && hasPassedLevel() === false) {
            clearInterval(interval);
            gameOverScreen();
        }
        }, 1000);
        $startGameButton.css('display', 'none');
        $resetGameButton.css('display' , 'block');
        
            wireGame(level);
            backAndForthGame(level);
            simonGame(level);
            numberGame(level);
            triviaGame(level);
    })
}
const level3 = () => {
    $startGameButton.on('click', () => {
        level = player.level;
        interval = setInterval(() => {
            timer();
            if(counter <= 0 && hasPassedLevel() === false) {
            clearInterval(interval);
            gameOverScreen();
        }
        }, 1000);
        $startGameButton.css('display', 'none');
        $resetGameButton.css('display' , 'block');
        
            wireGame(level);
            backAndForthGame(level);
            simonGame(level);
            numberGame(level);
            triviaGame(level);
    })
}
const gameFunc = () => {
    $resetGameButton.css('display','none')
    wire.openModal();
    wire.closeModal();
    backAndForth.openModal();
    backAndForth.closeModal();
    simon.openModal();
    simon.closeModal();
    number.openModal();
    number.closeModal();
    trivia.openModal();
    trivia.closeModal();
    if (player.level === 1) {
        level1();
    }else if (player.level === 2){
        level2();
    }else {
        level3();
    }
    $resetGameButton.on('click', () => {
        if (player.level === 1){
            counter = 45;
        }else if (player.level === 2){
            counter = 60;
        }else {
            counter = 75;
        }
        $timerDisplay.text(`:${counter}`);
        clearInterval(interval);
        wire.hasPassed = false;
        backAndForth.hasPassed = false;
        simon.hasPassed = false;
        number.hasPassed = false;
        trivia.hasPassed =false;
        $resetGameButton.css('display', 'none');
        $startGameButton.css('display', 'block');
        $wirePuzzle.css('background-image', 'url(./images/wires.jpeg)');
        $backAndForthPuzzle.css('background-image', 'url(./images/back_and_forth.png)');
        $simonPuzzle.css('background-image', 'url(./images/simon.png)');
        $numberPuzzle.css('background-image', 'url(./images/number_pad.jpeg)');
        $triviaPuzzle.css('background-image', 'url("./images/trivia.png")');
    })
    $doneButton.on('click', () => {
        if (player.level === 1){
            if(counter > 0 && hasPassedLevel() === true){
                player.level = 2;
                console.log(player.level);
                counter = 60;
                $('#level-number').text('2/3');
                $timerDisplay.text(`:${counter}`);
                clearInterval(interval);
                wire.hasPassed = false;
                backAndForth.hasPassed = false;
                simon.hasPassed = false;
                number.hasPassed = false;
                trivia.hasPassed =false;
                $resetGameButton.css('display', 'none');
                $startGameButton.css('display', 'block');
                $wirePuzzle.css('background-image', 'url(./images/wires.jpeg)');
                $backAndForthPuzzle.css('background-image', 'url(./images/back_and_forth.png)');
                $simonPuzzle.css('background-image', 'url(./images/simon.png)');
                $numberPuzzle.css('background-image', 'url(./images/number_pad.jpeg)');
                $triviaPuzzle.css('background-image', 'url(./images/trivia.png)');
            } else {
                gameOverScreen();
                setTimeout(() => {
                    location.reload();
                }, 5000);

            }        
        } else if (player.level === 2){
            if(counter > 0 && hasPassedLevel() === true){
                player.level = 3;
                console.log(player.level);
                counter = 75;
                $('#level-number').text('3/3');
                $timerDisplay.text(`:${counter}`);
                clearInterval(interval);
                wire.hasPassed = false;
                backAndForth.hasPassed = false;
                simon.hasPassed = false;
                number.hasPassed = false;
                trivia.hasPassed =false;
                $resetGameButton.css('display', 'none');
                $startGameButton.css('display', 'block');
                $wirePuzzle.css('background-image', 'url(./images/wires.jpeg)');
                $backAndForthPuzzle.css('background-image', 'url(./images/back_and_forth.png)');
                $simonPuzzle.css('background-image', 'url(./images/simon.png)');
                $numberPuzzle.css('background-image', 'url(./images/number_pad.jpeg)');
                $triviaPuzzle.css('background-image', 'url(./images/trivia.png)');
            } else {
                gameOverScreen();
                setTimeout(() => {
                    location.reload();
                }, 5000);
            }        
        }else if (player.level === 3){
            if(counter > 0 && hasPassedLevel() === true){
                winScreen();
            } else {
                gameOverScreen();
                setTimeout(() => {
                    location.reload();
                }, 5000);
            }
        }
    })
}
$(() => {
    startPageClose();
    gameFunc();
})