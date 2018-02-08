var app = {

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    initialize: function() {
        var self = this;
        console.log("initialize");
        // compile html templates

        this.store = new MemoryStore(function() {
            //self.showAlert('Store Initialized', 'Info');
            //self.renderHomeView(); // render home html template
            //$('body').html(new Speech(self.store).render().el);
        });
    }
};


// document.addEventListener('deviceready', function () {
//   // Enable to debug issues.
//   // window.plugins.speechRecognition.setLogLevel({logLevel: 4, visualLevel: 4});
//
//
//   window.plugins.speechRecognition
//     .isRecognitionAvailable(function(available){
//     if(available){
//       app.showAlert("Speech","Available!");
//       $('.speechOutput').html("Available!");
//         // You can use the speechRecognition
//     }
//   }, function(err){
//     app.showAlert("Speech",err.ToString());
//     console.error(err);
//   });
//
//   // Call syncHashedEmail anywhere in your app if you have the user's email.
//   // This improves the effectiveness of OneSignal's "best-time" notification scheduling feature.
//   // window.plugins.OneSignal.syncHashedEmail(userEmail);
// }, false);
app.initialize();
