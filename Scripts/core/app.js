// core module - IIFE
(function() {
  // App variables

  // STEP 1: create an XHR variable
  let XHR;


  /**
   * This function is used for Intialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-weight: bold; font-size: 20px;"
    );

    // STEP 2 - Instantiate an XMLHttpRequest object
    XHR = new XMLHttpRequest();

    Main();
  }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;");
    

    // STEP 3 - Set up an event listner / handler that
    // listens for a readystatechange and requires
    // the readyState code to be "4" and the status to be "200"
    XHR.addEventListener("readystatechange", function(){
      if((XHR.readyState === 4) && (XHR.status === 200)) {
        // responseText is the data we are recieving from the server
        console.log(XHR.responseText);
      }
    });

    // STEP 4 - use the open method of the XHR object to send a GET request
    // you need to send the URL information
    XHR.open("GET", "/Views/partials/header.html");

    // STEP 5 - complete the request with the send method
    XHR.send();
  }

  window.addEventListener("load", Start);
})();
