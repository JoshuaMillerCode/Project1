//Cached DOM Nodes 
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
$startGameButton.on('click', () => {
    interval = setInterval(() => {
        timer();
        if(counter <= 0) {
            clearInterval(interval);
        }
    }, 1000);
})

$resetGameButton.on('click', () => {
    counter = 45;
    $timerDisplay.text(`:${counter}`);
    clearInterval(interval);
    wire.hasPassed = false;
    backAndForth.hasPassed = false;
    simon.hasPassed = false;
    number.hasPassed = false;
    trivia.hasPassed =false;
})
////////////////////////////////////////

////////////Puzzle Functions//////////

//Components of the wire game
const $greenWire = $('#green');
const $redWire = $('#red');
const $blueWire = $('#blue');

const wireGame = () => {
    let level = player.level;
    if(level === 1){
        $redWire.on('click', () => {
            wire.hasPassed = true;
            $commentBox.text("Nice Work! You passed this module!");
            $wireModal.css('display' , 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $wirePuzzle.css('background-image' , 'url(/images/checkmark.png)');
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
            $wirePuzzle.css('background-image' , 'url(/images/checkmark.png)');

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
            $wirePuzzle.css('background-image' , 'url(/images/checkmark.png)');

        })
    }
}
//Components of the back and forth game
const $movingCirle = $('#back-forth-box');
const backAndForthGame = () => {
    let level = player.level;
    if(level === 1){
        $movingCirle.on('click', () => {
            backAndForth.hasPassed = true;
            $commentBox.text('Fast reflex!! Nice Work!! You passed this section')
            $backAndForthModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $backAndForthPuzzle.css('background-image' , 'url(/images/checkmark.png)');
        })
    }else if(level === 2){
        $movingCirle.css('animation-duration', '2.5s');
        $movingCirle.on('click', () => {
            backAndForth.hasPassed = true;
            $commentBox.text('Fast reflex!! Nice Work!! You passed this section')
            $backAndForthModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $backAndForthPuzzle.css('background-image' , 'url(/images/checkmark.png)');
        })
    }else{
        $movingCirle.css('animation-duration', '3s');
        $movingCirle.on('click', () => {
            backAndForth.hasPassed = true;
            $commentBox.text('Fast reflex!! Nice Work!! You passed this section')
            $backAndForthModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $backAndForthPuzzle.css('background-image' , 'url(/images/checkmark.png)');
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

const simonGame = () => {
    let redClicked = false;
    let greenClicked = false;
    let blueClicked = false;
    let yellowClicked = false;

    let level = player.level;
    $simonRed.on('click' , () => {
        redClicked = true;
        if(level === 1 && greenClicked === true && blueClicked === true){
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if (level === 2 && redClicked === true && yellowClicked === true && blueClicked === true){
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if(level === 3 && greenClicked === true && yellowClicked === true && blueClicked === true){
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
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
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if (level === 2 && redClicked === true && yellowClicked === true && blueClicked === true){
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if(level === 3 && greenClicked === true && yellowClicked === true && blueClicked === true){
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
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
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        } else if (level === 2 && redClicked === true && yellowClicked === true && blueClicked === true){
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if(level === 3 && greenClicked === true && yellowClicked === true && blueClicked === true){
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
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
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        } else if (level === 2 && redClicked === true && yellowClicked === true && blueClicked === true){
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
            $commentBox.text('Nice work! You passed this section.');
            redClicked = false;
            greenClicked = false;
            blueClicked = false;
            yellowClicked = false;
        }else if(level === 3 && greenClicked === true && yellowClicked === true && blueClicked === true){
            $simonModal.css('display', 'none');
            $timerDisplay.css('z-index' , '0')
                .css('transform', 'translateX(-0.1rem)');
            $simonPuzzle.css('background-image' , 'url(/images/checkmark.png)');
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

const numberGame = () => {
    $('.number').on('click', (event) => {
        
    })
}

const triviaGame = () => {
    const triviaQuestions = [
        {
            question: "alkjsdf",
            answer: "sdsfd"
        },
        {
            question: "alkjsdf",
            answer: "sdsfd"
        },
        {
            question: "alkjsdf",
            answer: "sdsfd"
        }
    ]
}

$(() => {
    startPageClose();
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
    wireGame();
    backAndForthGame();
    simonGame();
})