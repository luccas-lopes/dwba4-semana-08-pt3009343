var name = "Leonardo Gomes";
var n1 = 7;
var n2 = 8.5;
var n1Wh = n1 * 0.6;
var n2Wh = n2 * 0.4;
var sum = n1Wh + n2Wh;

function getDataStudent() {
    alert(
        "Nome do Aluno: " + name + 
        "\nNota 1: " + n1 + 
        "\nNota 2: " + n2
    );
}

function getFinalData() {
    alert (
        "Nome do Aluno: " + name +
        "\nNota Final: " + sum
    );
}

getDataStudent();
getFinalData();