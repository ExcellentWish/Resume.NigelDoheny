function fetchGitHubInformation(event){
// this will create a loading animation when searching for a user
    var username = $("#gh-username").val();
    if(!username){
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }
    $("#gh-user-data").html (`
    <div id="loader">
        <img src="assets/css/loader.gif" alt ="loading"/>
    </div>`)
    // everything up will create a loading animation 
}