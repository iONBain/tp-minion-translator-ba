const serverURL = "https://api.funtranslations.com/translate/minion"
const inputTxt = document.getElementById("input")
const ouputTxt = document.getElementById("ouput")
const translateBtn = document.getElementById("translate")
const refreshBtn = document.getElementById("refresh")

function getURL(inputt){
    return `${serverURL}?text=${inputt}`

}
function errorHandler(error) {
    // console.log("error occured", error);
    alert("something wrong with server ! try again later");
}
function translateTxt(){
    // console.log("Hello")
    // console.log(inputTxt.value)
    var url = getURL(inputTxt.value);
    fetch(url).then(res => res.json()).then( json => {
        console.log(json.contents.translated);
        ouputTxt.value = json.contents.translated;
    }).catch(errorHandler)
}







translateBtn.addEventListener("click", translateTxt)





// https://api.funtranslations.com/translate/minion?text=Hi I am bhaskar