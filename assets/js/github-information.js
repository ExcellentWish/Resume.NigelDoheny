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
    // Below is promises 
    $.when(
        $.getJson(`https://api.github.com/${username}`)
     ).then(
        function(response){
            var userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));
        }, function(erroResponse){
            if(erroResponse.status === 404){

            $("#gh-user-data").html(`<h2>No info found for user ${username}</h2>`);

            }else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h2> Error: ${erroResponse.responseJSON.message}</h2>`
                )
            }
        }
    )
}