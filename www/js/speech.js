var Speech = function(store) {

  this.render = function() {
      this.el.html(Speech.template());
          //app.showAlert('HomeView rendered', 'Info');
      return this;
  };

  this.speechSuccessCallback = function() {
    app.showAlert('speechSuccessCallback', 'Info');
  }

  this.speechErrorCallback = function() {
    app.showAlert('speechErrorCallback', 'Info');
  }

  this.speechAvailable = function() {
    console.log("speechAvailable");
    app.showAlert('Speech Available start func', 'Info');
    app.showAlert(typeof (window.plugins),"ok?");
    window.plugins.speechRecognition.isRecognitionAvailable(function(available){
      if(available){
        app.showAlert("Speech","Available!");
        $('.speechOutput').html("Available!");
          // You can use the speechRecognition
      }
    }, function(err){
      app.showAlert("Speech",err.ToString());
      console.error(err);
    });

  }

  this.initialize = function() {
    console.log("speech initialize");
    $('.speechOutput').html("SPEECH OUTPUT");
    app.showAlert('Speech Initializing...', 'Info');
      // Define a div wrapper for the view. The div wrapper is used to attach events.
      this.el = $('<div/>');
      this.el.on('click', '.speechAvailable', this.speechAvailable);
  }

  this.initialize();
}
Speech.template = Handlebars.compile($("#speech-tpl").html());
