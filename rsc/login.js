const btnCadastro = document.querySelector(".btn-cadastrar");
const btnLogin    = document.querySelector(".btn-entrar");
const inpUsuario    = document.querySelector("#usuario");
const inpSenha    = document.querySelector("#senha");

let listCadastrados = []
let observacao = document.getElementsByClassName("obs");  

function ValidarUsuario(){   
    if(inpUsuario.value.length < 5){
        observacao.item(0).innerHTML = "*Usuario invalido"
    }else{
        observacao.item(0).innerHTML = ""
    }
}

function ValidarSenha(){
    if(inpSenha.value.length < 4){
        observacao.item(1).innerHTML = "*Senha invalida"
    }else{
        observacao.item(1).innerHTML = ""
    }
}

function login(){
    ValidarUsuario()
    ValidarSenha()    
    pesquisar()
    
}
function cadastrar(){
    let regUsuario = prompt("Digite um nome de usuario: ");
    if(regUsuario && regUsuario.length >= 5){
        let regSenha = prompt("Digite uma senha: ");
        if(regSenha && regSenha.length >= 4){
            let regConfirmaSenha = prompt("Confirme sua senha: ");
            if(regSenha == regConfirmaSenha){
                alert("Cadastro efetuado com sucesso!")
                const Pessoa = {
                usuario: regUsuario,
                senha: regSenha,
                }
                listCadastrados.push(Pessoa)
                
            }else{
            alert("Senha não confere, repita o procedimento!")
            }            
        }else{
            alert("Informe uma senha válida para continuar \nMinimo de 4 caracteres")
        }        
    }else{
        alert("Informe um nome de usuario valido para continuar \nMinimo de 5 caracteres")
    } 
}
function pesquisar(){
    listCadastrados.find((e)=>{
        if(e.usuario == inpUsuario.value && e.senha == inpSenha.value){
            window.location.href = "/page1.html"
        }else{
            alert("Erro de autenticação")
        }
    })
}

btnLogin.addEventListener("click" , login)
btnCadastro.addEventListener("click", cadastrar)
