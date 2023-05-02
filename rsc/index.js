





















const valorServico = document.getElementById("servicos");    
const valorPecas = document.getElementById("pecas");
const valorTotal = document.getElementById("total");
const btnTotal = document.getElementById("btn-resultado");
const inputs = [...document.querySelectorAll("input")];
const conteudoArea = [...document.querySelectorAll("textarea")];
const btnApagar = document.getElementById("btn-limpar");

//console.log(inputs[0].value)

const apagar=()=>{
    inputs.map((el)=>{
        el.value=""
    })
    conteudoArea.map((el)=>{
        el.value=""
    })
    valorTotal.textContent=""

}

function somar(){
    valorTotal.textContent = (Number(valorServico.value) + Number(valorPecas.value));
}
function somenteNumeros(){
    let tecla = event.keyCode;
    if(tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105){
                        
    } else{
        
        alert("Somente numeros!")
    }
}


valorServico.addEventListener("keypress", somenteNumeros);
valorPecas.addEventListener("keypress", somenteNumeros)
btnTotal.addEventListener("click", somar);
btnApagar.addEventListener("click", apagar );



//*48 a 57 || 96 a 105 numeros