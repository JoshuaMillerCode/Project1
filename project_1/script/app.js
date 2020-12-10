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
    }
    openModal(){
        this.$el.on('click', () => {
            this.$modal.css('display','flex');
            $timerDisplay.css('z-index' , '3')
                .css('transform', 'translateX(30rem)');
        });
    }
    closeModal(){
        this.$closeButton.on('click', () => {
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
const timer = () => {
    counter--;
    $timerDisplay.text(`:${counter}`);
}
// let interval = setInterval(() => {
//     timer();
//     if(counter <= 0) {
//         clearInterval(interval);
//     }
// }, 1000);
////////////////////////////////////////

////////////Puzzle Functions//////////
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
        })
    }
}

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
        })
    }
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
})