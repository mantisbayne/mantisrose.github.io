/*  @name computerChoice
    @description randomly chooses rock, paper, or scissors
*/
function computerChoice() { 

    var choice = Math.random();

        if (choice < 0.34) {
        choice = 'rock';
        } else if (choice < 0.67) {
        choice = 'paper';
        } else {
       choice = 'scissors';
        }

    return choice;

    }
/*
    @name compare
    @description compare the user choice with the computer choice
*/

function compare(choice1, choice2) {

    if (choice1 === choice2) {
        return 'The result is a tie, please try again';
    }

    if (choice1 === 'rock') {
        if (choice2 === 'scissors') {
            return 'You win!';
        } else {
            return 'You lost!';
        }
    }

    if (choice1 === 'paper') {
        if (choice2 === 'rock') {
            return 'You win!';
        } else {
            return 'You lost!';
        }
    }

    if (choice1 === 'scissors') {
        if (choice2 === 'rock') {
            return 'You lost!';
        } else {
            return 'You win!';
        }
    }
}


//JQuery for buttons
$('.button').on('click', function() {

    var myChoice = $(this).attr('id');

    var compChoice = computerChoice();

    var result = compare(myChoice, compChoice);

    $('#result').html(result);

    $('#computer-choice').html("Your opponent chose "+ compChoice);

});

/* $('#scissors').on('click', function() {

//     console.log('you clicked the scissors button');

//     var compChoice = computerChoice();

//     var result = compare('scissors', compChoice);

//     $('#result').html(result);

//     $('#computer-choice').html("Your opponent chose "+ compChoice);

// });

// $('#paper').on('click', function() {

//     var compChoice = computerChoice();

//     var result = compare('paper', compChoice);

//     $('#result').html(result);

//     $('#computer-choice').html("Your opponent chose "+ compChoice);

// });