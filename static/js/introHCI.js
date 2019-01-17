
function initializePage() {
    $("#testjs").click(function(e) {
      console.log("running");
        $('.jumbotron h1').text("Javascript is connected");
    });
    // Add any additional listeners here
    // example $("#div-id").click(functionToCall);
    $("a.thumbnail").click(projectClick);
}
  initializePage();
