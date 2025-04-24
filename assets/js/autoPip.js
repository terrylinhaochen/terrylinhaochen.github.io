// Find this line (around line 33)
navigator.mediaSession.setActionHandler('enterpictureinpicture', function() {
  // code here
});

// Change it to use a valid action like 'play' or remove it entirely:
// Valid actions are: play, pause, seekbackward, seekforward, previoustrack, nexttrack 