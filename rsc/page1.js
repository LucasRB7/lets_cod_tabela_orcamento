const valorServico = document.getElementById("servicos");    
const valorPecas = document.getElementById("pecas");
const valorTotal = document.getElementById("total");
const btnTotal = document.getElementById("btn-resultado");
const inputs = [...document.querySelectorAll("input"), ...document.querySelectorAll("textarea")];
const conteudoArea = [...document.querySelectorAll("textarea")];
const btnApagar = document.getElementById("btn-limpar");

let [obj] = [1,2,3];
console.log(obj);

let cep = document.getElementById("cep");

const buscarCepFetch = async ()=>{
    if(cep.value !==""){
        if(cep.value.length == 8){
                          
            const response = fetch("https://brasilapi.com.br/api/cep/v1/"+cep.value)
            const response2 = fetch("https://brasilapi.com.br/api/cep/v1/15503022")
            const response3 = fetch("https://brasilapi.com.br/api/cep/v1/64006700")
            const [resposta1, resposta2, resposta3] = await Promise.all([response, response2, response3]);
            const [consultaCep, consultaCep2, consultaCep3] = await Promise.all([
                resposta1.json(), resposta2.json(), resposta3.json()
            ])
            if(response.status == 404){ 
                alert("CEP Invalido");
            }
            //const consultaCep = await response.json();
            console.log({consultaCep, consultaCep2, consultaCep3})
            document.getElementById("endereco").value = consultaCep.street;
            document.getElementById("bairro").value = consultaCep.neighborhood;
            document.getElementById("cidade").value = consultaCep.city;
            document.getElementById("estado").value = consultaCep.state;

            
        }
        
    }        
            
}          
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
cep.addEventListener("blur", buscarCepFetch);
