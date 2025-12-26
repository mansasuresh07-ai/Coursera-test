(function (window) {
  var speakWord = "Goodbye";

  var speakGoodBye = function (name) {
    console.log(speakWord + " " + name);
  };

  window.speakGoodBye = speakGoodBye;
})(window);