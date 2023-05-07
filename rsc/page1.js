





















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
// let endereco = document.getElementById("endereco").value;
// let bairro = document.getElementById("bairro").value;
// let cidade = document.getElementById("cidade").value;
// let estado = document.getElementById("estado").value;

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
        
    }        // catch(error){
            //     if(error.status ==404){
}            //     alert("CEP Invalido");
            //     }
            //     else{
            //     alert("Erro na requisição")
            //     }
            // }
                        

            // fetch("https://brasilapi.com.br/api/cep/v1/"+cep.value)
            //     .then(response =>{           
            //         return response.json()        
            //     })
            //     .then(retCep=> {            
            //         document.getElementById("endereco").value = retCep.street;
            //         document.getElementById("bairro").value = retCep.neighborhood;
            //         document.getElementById("cidade").value = retCep.city;
            //         document.getElementById("estado").value = retCep.state;            
            //     })  
            //     .catch(error=>{
            //         if(error.status ==404){
            //         alert("CEP Invalido");
            //         }
            //         else{
            //         alert("Erro na requisição")
            //         }
            // })         
        
        
    
       
    
        


// const buscaCep=(()=>{
//     if(cep.value != ""){        
//         let urlCep= `https://brasilapi.com.br/api/cep/v1/${cep.value}`;
//         let reqApi= new XMLHttpRequest();
//         reqApi.open("GET", urlCep);
//         reqApi.send();        
//         reqApi.onload = () => {
//             if (reqApi.status === 200) {
//                 let inforApi = JSON.parse(reqApi.response);

//                 document.getElementById("endereco").value = inforApi.street;
//                 document.getElementById("bairro").value = inforApi.neighborhood;
//                 document.getElementById("cidade").value = inforApi.city;
//                 document.getElementById("estado").value = inforApi.state;

//                 // endereco = inforApi.street;
//                 // bairro = inforApi.neighborhood;
//                 // cidade = inforApi.city;
//                 // estado = inforApi.state;
                
//             } else if (reqApi.status === 404) {
//                 alert("CEP Invalido");
//             } else {
//                 alert("Erro na requisição");
//             }
//         }     

//     }     

// })
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




//*48 a 57 || 96 a 105 numeros

