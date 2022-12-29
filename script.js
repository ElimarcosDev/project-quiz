function botaoclick(){
    var alert = confirm("VOCE TEM CERTEZA?")
    if (alert==true){
    var botao = document.getElementsByClassName("button")
    var reset = document.getElementById("reset")
    var opcao1 = document.getElementById("op1")
    var opcao2 = document.getElementById("op2")
    var opcao3 = document.getElementById("op3")
    var opcao4 = document.getElementById("op4")

    opcao1.style.backgroundColor= "red"
    opcao2.style.backgroundColor= "green"
    opcao3.style.backgroundColor= "red"
    opcao4.style.backgroundColor= "red"

    reset.style.display = 'block'

    }
    else{
    
    }
    

}

function resetpage(){
    window.location.reload();
}