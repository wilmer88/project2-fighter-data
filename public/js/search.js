let search = $("#fighterSearch");

function searchFight(){
    console.log("I am working properly")
    $.ajax({
        headers: {
            "Ocp-Apim-Subscription-Key": "1e64ad7cbbc14f04b64d7bb60c4e5846",
        },
        url: "https://api.sportsdata.io/v3/mma/scores/json/Fighters",
        method: "GET"
    }).then(function(data){
        let fighter = data[0]
        let fighterName = `${fighter.FirstName} ${fighter.LastName}`
        console.log(fighterName)
    })
}
search.on("click", searchFight)