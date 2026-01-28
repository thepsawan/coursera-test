(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speakWord = "Goodbye";

  byeSpeaker.speak = function (name) {
    console.log(byeSpeaker.speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
