(function (window) {
  var speakWord = "Hello";

  var speakHello = function (name) {
    console.log(speakWord + " " + name);
  };

  window.speakHello = speakHello;
})(window);