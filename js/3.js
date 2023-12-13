function readFile() {
    var reader = new FileReader();
    var file = document.getElementById('demo').files[0];

    reader.onload = function (e) {
        document.getElementById('result').src = e.target.result;
    }

    reader.readAsDataURL(file);
}

function getValue() {
    alert(document.getElementById('demo2').value);
}

function getRandomInit(min,max) {
    document.getElementById("demo3").innerHTML = Math.floor(Math.random() * (max -min + 1)) + min;
}

function getValue2() {
    var value = document.getElementById('sample').value;
    alert(value);
}

function getValue3() {
    var options = document.getElementById('sample2').options;
    var options_count = document.getElementById('sample2').options.length;
    var value = [];

    for (var i = 0; i < options_count; i++) {
        if (options[i].selected) {
        value.push(options[i].value);
    }
    }
    alert(JSON.stringify(value));
}

function slideUp() {
    var elem = document.getElementById("demo4");

    elem.style.maxHeight = "0px"
}

function slideDown() {
    var elem = document.getElementById("demo4");

    elem.style.maxHeight = "100px"
}

function mona() {
    var firstname = prompt("diz o teu nome?");
    if (firstname =="" || firstname == null) {
        alert("selecione o nome.");
    } else{
        alert(" ola " + firstname + ", seja bem vindo.");
    }
}

