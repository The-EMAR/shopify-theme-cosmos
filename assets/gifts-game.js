const giftsGame = document.querySelector('.gifts-game');

if (giftsGame) {
  var lastTryTime = localStorage.getItem('lastTryTime');
  var remainingTime;

  function generateRandomNumbers() {
    var numbers = [];
    while (numbers.length < 6) {
      var randomNumber = Math.floor(Math.random() * 16) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    return numbers;
  }

  function checkNumbers() {
    var currentTime = new Date().getTime();
    if (lastTryTime && currentTime - parseInt(lastTryTime) < 24 * 60 * 60 * 1000) {
      remainingTime = 24 * 60 * 60 * 1000 - (currentTime - parseInt(lastTryTime));
      alert('You can try again in ' + Math.floor(remainingTime / (1000 * 60 * 60)) + ' hours ' + Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)) + ' minutes.');
    } else {
      var randomNumbers = generateRandomNumbers();
      var inputs = document.querySelectorAll('.gifts-game__inputs input');
      var selectedNumbers = [];

      inputs.forEach(function (input) {
        var number = parseInt(input.value);
        if (!isNaN(number)) {
          selectedNumbers.push(number);
        }
      });

      var correctCount = 0;
      selectedNumbers.forEach(function (number) {
        if (randomNumbers.includes(number)) {
          correctCount++;
        }
      });

      alert('You got ' + correctCount + ' correct numbers out of 6.');
      lastTryTime = new Date().getTime();
      localStorage.setItem('lastTryTime', lastTryTime);
    }
  }

  giftsGame.querySelector('#play-game').addEventListener('click', checkNumbers);


  // let randomNumbers = generateRandomNumbers();

  // console.log(randomNumbers);
}