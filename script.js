let colorName = document.querySelector('.color');
let responseJson = document.querySelector('.response');
// let colorActual = '';

function consultarColor(color) {
    var apiUrl = 'http://www.thecolorapi.com/id?hex=' + color;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            colorName.innerText = data.name.value;
            responseJson.innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            colorName.innerText = 'Hay un error';
            responseJson.innerText = error;
        });
}


function myFunction() {
    var x = document.getElementById("myColor").value;
    console.log(x);
    let colorActual = x;
    colorActual = colorActual.replace('#', '');
    consultarColor(colorActual);
  }