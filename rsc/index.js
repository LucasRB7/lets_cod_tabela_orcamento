





















const valorServico = document.getElementById("servicos");    
const valorPecas = document.getElementById("pecas");
const valorTotal = document.getElementById("total");
const btnTotal = document.getElementById("btn-resultado");
const inputs = [...document.querySelectorAll("input")];
const conteudoArea = [...document.querySelectorAll("textarea")];
const btnApagar = document.getElementById("btn-limpar");

let cep = document.getElementById("cep");
// let endereco = document.getElementById("endereco").value;
// let bairro = document.getElementById("bairro").value;
// let cidade = document.getElementById("cidade").value;
// let estado = document.getElementById("estado").value;


const buscaCep=(()=>{
    if(cep.value != ""){        
        let urlCep= "https://brasilapi.com.br/api/cep/v1/" + cep.value;
        let reqApi= new XMLHttpRequest();
        reqApi.open("GET", urlCep);
        reqApi.send();
        
        reqApi.onload = () => {
            if (reqApi.status === 200) {
                let inforApi = JSON.parse(reqApi.response);

                document.getElementById("endereco").value = inforApi.street;
                document.getElementById("bairro").value = inforApi.neighborhood;
                document.getElementById("cidade").value = inforApi.city;
                document.getElementById("estado").value = inforApi.state;

                // endereco = inforApi.street;
                // bairro = inforApi.neighborhood;
                // cidade = inforApi.city;
                // estado = inforApi.state;
                
            } else if (reqApi.status === 404) {
                alert("CEP Invalido");
            } else {
                alert("Erro na requisição");
            }
        }     

    } 


     

})
const apagar=()=>{
    inputs.map((el)=>{
        el.value=""
    })
    conteudoArea.map((el)=>{
        el.value=""
    })
    valorTotal.textContent=""

}

const somar=(()=>{
    valorTotal.textContent = (Number(valorServico.value) + Number(valorPecas.value));
})

const somenteNumeros=()=>{
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
cep.addEventListener("blur", buscaCep);




//*48 a 57 || 96 a 105 numeros