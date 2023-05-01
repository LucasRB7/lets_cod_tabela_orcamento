// let bodyWidth = document.getElementsByTagName("body").item(0).offsetWidth;
// let reportCliente = document.getElementsByTagName("textarea").item(0);
// let reportOficina = document.getElementsByTagName("textarea").item(1);

// let report = [document.getElementsByTagName("textarea")];

// if(bodyWidth < 950){

//     reportCliente.removeAttribute("cols");
//     reportCliente.setAttribute("cols","58");
//     reportOficina.removeAttribute("cols");
//     reportOficina.setAttribute("cols","58");
    
// }

// console.log(report);

const valorServico = document.getElementById("servicos");    
const valorPecas = document.getElementById("pecas");
const valorTotal = document.getElementById("total");
const btnTotal = document.getElementById("btn-resultado");

function somar(p1,p2){
    return p1 + p2;
}
function pegaTecla(){
    let tecla = event.keyCode;
    if(tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105){
                        
    } else{
        
        alert("Somente numeros!")
    }
}
valorServico.addEventListener("keyup", pegaTecla);

btnTotal.addEventListener("click", () => {
    valorTotal.textContent = somar(Number(valorServico.value), Number(valorPecas.value));
})




//*48 a 57 || 96 a 105 numeros