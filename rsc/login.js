const btnCadastro = document.querySelector(".btn-cadastrar");
const btnLogin    = document.querySelector(".btn-entrar");
const inpUsuario    = document.querySelector("#usuario");
const inpSenha    = document.querySelector("#senha");
const telaCadastro = document.getElementById("tela-cadastro")
const closeBtn = document.getElementById("close-btn")

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
    if(listCadastrados.length == 0){
        alert("Usuario não existe")
    }else{
        ValidarUsuario()
        ValidarSenha()    
        pesquisar()
    }
}

function ValidarCadastroUsuario(){
    let reg_usuario = document.getElementById("reg-usuario")
    if(reg_usuario.value.length <4){
        
    }

}

function cadastrar(){        
    telaCadastro.style.display = "Grid";
    

    // let regUsuario = prompt("Digite um nome de usuario: ");
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
console.log(telaCadastro)


btnLogin.addEventListener("click" , login)
btnCadastro.addEventListener("click", cadastrar)
closeBtn.addEventListener("click" , ()=>{
    telaCadastro.style.display = "none";
})
