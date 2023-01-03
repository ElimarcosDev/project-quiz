var botao = document.getElementsByClassName("button")
var reset = document.getElementById("reset")
var next = document.getElementById("next")
var opcao1 = document.getElementById("op1")
var opcao2 = document.getElementById("op2")
var opcao3 = document.getElementById("op3")
var opcao4 = document.getElementById("op4")


/*
function botaoclick(){
    var alert = confirm("VOCE TEM CERTEZA?")
    if (alert==true){
    
    opcao1.style.backgroundColor= "red"
    opcao3.style.backgroundColor= "red"
    opcao4.style.backgroundColor= "red"
    opcao2.style.backgroundColor= "rgba(0, 255, 51, 0.697)"


    

    reset.style.display = 'block'
    

    }
    


    

}
*/
function certo(){

opcao1.style.backgroundColor= "red"
opcao3.style.backgroundColor= "red"
opcao4.style.backgroundColor= "red"
opcao2.style.backgroundColor= "rgba(0, 255, 51, 0.697)"




reset.style.display = 'block'
next.style.display = 'block'


}



function resetpage(){
    window.location.reload();
}