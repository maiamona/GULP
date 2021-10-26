let tela=document.getElementById('tela');
tela.focus();  


function Ce()
{
    tela.value='';    
    tela.focus();      
}
function Numero(num){
    tela.value+=num ; 
}


function igual(){
    var resultado=0;
    resultado=tela.value
    tela.value=''
    tela.value=eval(resultado) 
}

function exp(num){ 
    var resultado=0;
    resultado=tela.value
    tela.value=''
    tela.value= Math.pow(resultado,num); 
}

function raiz2(){
    var resultado=0;
    resultado=tela.value
    tela.value=''
    tela.value=Math.sqrt(resultado)
}