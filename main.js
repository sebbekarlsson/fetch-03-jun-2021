const button = document.getElementById("button");
const inputField = document.getElementById("input-field");
const textarea = document.getElementById("output-text");


function whenButtonPressed() {
    const inputNumber = inputField.value;

    fetch(`http://numbersapi.com/${inputNumber}`).then(function(response){
        response.text().then(function(data){
            textarea.value = data;
        })
    });
}

button.addEventListener("click", whenButtonPressed);