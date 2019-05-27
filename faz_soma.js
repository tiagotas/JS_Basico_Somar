
window.onload = function() {
    
    somar();
}


function somar() {

    document.getElementById("meu_form").onsubmit = function() {

        var num1 = parseInt(document.getElementById("numero1").value);
        var num2 = parseInt(document.getElementById("numero2").value);
        var res = document.getElementById("res");

        res.value = num1+num2;
        
        return false;
    }

}