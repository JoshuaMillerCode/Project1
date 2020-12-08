//Cached DOM Nodes 
//Start Page 
const $startPage = $('.start-page')
//Puzzles square that they click
const $wirePuzzle = $('#puzzle-1');
const $backAndForthPuzzle = $('#puzzle-3');
const $simonPuzzle = $('#puzzle-4');
const $numberPuzzle = $('#puzzle-5')
const $triviaPuzzle = $('#puzzle-6')
//timer countdown
const $timerSection = $('#timer-modal');
const $timerDisplay = $('#timer');
//Modals that open when the puzzle square is clicked
const $wireModal = $('.puzzle1-modal')
const $backAndForthModal = $('.puzzle2-modal');
const $simonModal = $('.puzzle3-modal');
const $numberModal = $('.puzzle4-modal');
const $triviaModal = $('.puzzle5-modal');



class Puzzle {
    constructor(hasPassed, $el, $modal){
        this.hasPassed = hasPassed;
        this.$el = $el;
        this.$modal = $modal;
    }
    openModal(){
        this.$el.on('click', (event) => {
            this.$modal.css('z-index', ' ')
        })
    }
}