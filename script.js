const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function printInitText(text) {
//создает div с классом result и выводит в него текст из json файла 
    const initText = `<div class="result">
        ${text.text[0]}<br>
        ${text.text[1]}<br>
        ${text.text[2]}<br>
        ${text.text[3]}<br>
        ${text.text[4]}<br>
        ${text.text[5]}<br>
        ${text.text[6]}<br>
        ${text.text[7]}</div>`
    const $initText = $(initText);
    $initText.appendTo(document.body);
};


/*function clearFields() {
//очищение полей формы
    document.getElementById("var1").value = "";
    document.getElementById("var2").value = "";
    document.getElementById("var3").value = "";
    document.getElementById("var4").value = "";
    document.getElementById("var5").value = "";
    document.getElementById("var6").value = "";
    document.getElementById("speech").value = "";
};*/

function noEmptyField() {
//проверяет есть ли пустые поля
    if (($("#var1").val() != "") && ($("#var2").val() != "") && ($("#var3").val() != "") && ($("#var4").val() != "") && ($("#var5").val() != "") && ($("#var6").val() != "") && ($("#speech").val() != "")) {return true} 
    else {return false};
};
 
function printResultText(text) {
//заменяет текст и выводит его в ранее созданный div с классом result
    const taleText = text.text;
    taleText.forEach(function(item, index) {
    item = item.replace("{var1}", $('#var1').val());
    item = item.replace("{var2}", $('#var2').val());
    item = item.replace("{var3}", $('#var3').val());
    item = item.replace("{var4}", $('#var4').val());
    item = item.replace("{var5}", $('#var5').val());
    item = item.replace("{var6}", $('#var6').val());
    item = item.replace("{speach}", $('#speech').val());
    taleText[index] = item;
    });
    $(".result").empty();
    $(".error").empty();
    const resultText = `
        ${taleText[0]}<br>
        ${taleText[1]}<br>
        ${taleText[2]}<br>
        ${taleText[3]}<br>
        ${taleText[4]}<br>
        ${taleText[5]}<br>
        ${taleText[6]}<br>
        ${taleText[7]}`;
    $(".result").append(resultText);
};

$(document).ready(function() {
    $.getJSON(dataURL, printInitText);
});

$(".create").click(function() {
   
    if (noEmptyField()) {$.getJSON(dataURL, printResultText);} 
    else {$(".error").empty();
          $(".error").append("Заполните все поля");}
 });

/*$('.clear').click(function() {
    clearFields();
});*/