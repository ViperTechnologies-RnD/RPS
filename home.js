//Rock - Paper - Scissors

function rpsGame(yourChoice) {
    var humanChoice, botChoice;

    humanChoice = yourChoice.id;

    botChoice = choiceArray(randomInt());
    console.log(botChoice);
    results = winnerPicker(humanChoice, botChoice);
    console.log(results);
    message = finalResult(results);
    console.log(message)

    rpsFrontEnd(yourChoice.id, botChoice, message);


    console.log(yourChoice.id);
}

function randomInt() {
    return Math.floor(Math.random()*3);
}

function choiceArray(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function winnerPicker(yourChoice, computerChoice) {
    var tmpRpsDB = {
        'rock' : {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper' : {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = tmpRpsDB[yourChoice][computerChoice];
    var computerScore = tmpRpsDB[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalResult([yourScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color':'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied', 'color': 'orange'};
    }else {
        return {'message': 'You WON!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesBD = {
        'rock': document.getElementById('rock').src,
        'scissors': document.getElementById('scissors').src,
        'paper': document.getElementById('paper').src
    };
    //remove all the images but the two choices
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesBD[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(245, 208, 0, 0.7);'>"
    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage.color + "; font-size: 60px; padding: 30px; '>" + finalMessage.message + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesBD[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 0.7);'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    document.getElementById('flex-box-rps-div').appendChild(botDiv);


   
}