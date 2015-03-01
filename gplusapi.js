function pageLoaded() {
  gapi.client.setApiKey("IuvaTyY2TAE_j8XBMdkWUpA1");
  gapi.auth.authorize(
    { client_id: "714729494277-dgnajp30pp563ngcmqf0250b47o5m6nl.apps.googleusercontent.com",
      immmediate: true,
      scope: "https://www.googleapis.com/auth/plus.login" },
    signedIn
  );
}

function signedIn(resp) {
  if(typeof resp.access_token !== "undefined") {
    document.getElementById("status").textContent = "Login Successful!";
    gapi.client.load('plus', 'v1', plusLoaded);
  }
}

function plusLoaded() {
  var request = gapi.client.plus.people.get({'userId' : 'me'});
  request.then(function (resp) {
    document.getElementById("result").textContent = JSON.stringify(resp);
  }, function (reason) {
    document.getElementById("result").textContent = "Authorization failure! " + reason.body;
  });
}
