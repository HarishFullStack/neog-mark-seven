var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslation(text){
    return serverURL + "?text=" + text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server try after sometime");
}

function clickHandler() {
    return function clickEventHandler() {
        var inputText = txtInput.value;

        fetch(getTranslation(inputText))
            .then(response => response.json())
            .then(json => {
                var translatedText = json.contents.translated;
                outputDiv.innerText = translatedText;
            })
            .catch(errorHandler);
    };
}

btnTranslate.addEventListener("click", clickHandler());

