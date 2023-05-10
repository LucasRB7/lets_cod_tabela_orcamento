const btnCadastro = document.querySelector(".btn-cadastrar");
const btnLogin    = document.querySelector(".btn-entrar");
const inpUsuario    = document.querySelector("#usuario");
const inpSenha    = document.querySelector("#senha");

const telaCadastro = document.getElementById("tela-cadastro")
const closeBtn = document.getElementById("close-btn")
const salvarBtn= document.getElementById("salvar-btn")
let reg_usuario = document.getElementById("reg-usuario")
let reg_senha1 = document.getElementById("reg-senha1")
let reg_senha2 = document.getElementById("reg-senha2")


let listCadastrados = []
let observacao = document.getElementsByClassName("obs");  
let observacaoReg = document.querySelectorAll("#obs-reg")


function ValidarUsuario(){   
    if(inpUsuario.value.length < 5){
        observacao.item(0).innerHTML = "*Usuario invalido"          
    }else{
        observacao.item(0).innerHTML = ""
    }
}

function ValidarCadastroUsuario(){
    if(reg_usuario.value.length < 5){
        observacaoReg.item(0).innerHTML = "*Minimo: 5 Caracteres"
    }else{
        observacaoReg.item(0).innerHTML = ""        
    }
}

function ValidarCadastroSenha(){
    if(reg_senha1.value.length < 8){
        observacaoReg.item(1).innerHTML = "*Minimo: 8 Caracteres"
    }else if(reg_senha2.value.length < 8){
        observacaoReg.item(1).innerHTML = ""
        observacaoReg.item(2).innerHTML = "*Minimo: 8 Caracteres"
       
    }else{        
        observacaoReg.item(2).innerHTML = " "
        ConfereSenhas()
    }     
    

}
function ConfereSenhas(){
    if(reg_senha1.value == reg_senha2.value){
        observacaoReg.item(1).innerHTML = "*Senhas conferem"
        observacaoReg.item(2).innerHTML = "*Senhas conferem"
    }else{
        observacaoReg.item(1).innerHTML = "*Senhas não conferem"
        observacaoReg.item(2).innerHTML = "*Senhas não conferem"
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
    if(listCadastrados.length == 0){
        observacao.item(1).innerHTML = "*Dados inválidos"
        observacao.item(0).innerHTML = "*Dados inválidos"
    }else{
        ValidarUsuario()
        ValidarSenha()    
        pesquisar()
    }
}

function cadastrar(){        
    telaCadastro.style.display = "Grid";
    
    
    // if(regUsuario && regUsuario.length >= 5){
    //     let regSenha = prompt("Digite uma senha: ");
    //     if(regSenha && regSenha.length >= 4){
    //         let regConfirmaSenha = prompt("Confirme sua senha: ");
    //         if(regSenha == regConfirmaSenha){
    //             alert("Cadastro efetuado com sucesso!")
    //             const Pessoa = {
    //             usuario: regUsuario,
    //             senha: regSenha,
    //             }
    //             listCadastrados.push(Pessoa)
                
    //         }else{
    //         alert("Senha não confere, repita o procedimento!")
    //         }            
    //     }else{
    //         alert("Informe uma senha válida para continuar \nMinimo de 4 caracteres")
    //     }        
    // }else{
    //     alert("Informe um nome de usuario valido para continuar \nMinimo de 5 caracteres")
    // } 
}
function pesquisar(){
    listCadastrados.find((e)=>{
        if(e.usuario == inpUsuario.value && e.senha == inpSenha.value){
            window.location.href = "page1.html"
        }else{
            alert("Erro de autenticação")
        }
    })
}



btnLogin.addEventListener("click" , login)
btnCadastro.addEventListener("click", cadastrar)
closeBtn.addEventListener("click" , ()=>{
    telaCadastro.style.display = "none";
})
salvarBtn.addEventListener("click", ()=>{
    // if(reg_usuario.value.length > 5)
})
