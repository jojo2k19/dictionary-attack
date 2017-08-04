var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true; 
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false; 
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  var password = document.getElementById("pw").value;
  for (var x = 0; x < wordsList.length; x++){
    if (password == wordsList[x]){
      document.getElementById("results").innerHTML = "This is a weak password! It's just a word from the dictionary!";
      break;
  }
    else {
      document.getElementById("results").innerHTML = "Great job! This is a strong password!";
      break;
    }

}
}
