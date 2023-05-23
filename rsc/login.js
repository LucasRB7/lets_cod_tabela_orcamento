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
let confirmacao = document.getElementById("confirmacao")
let negacao = document.getElementById("negacao")
let isUsuarioOk= false;
let isSenhaOk = false;


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
    if(reg_usuario.value.length == 0){
        observacaoReg.item(0).innerHTML = ""
        isUsuarioOk = false;  
    }
    else if(reg_usuario.value.length < 5){
        observacaoReg.item(0).innerHTML = "*Minimo: 5 Caracteres"
        isUsuarioOk = false;
    }else{
        observacaoReg.item(0).innerHTML = ""        
        isUsuarioOk = true;
    }
    liberarBotaoSalvar()
}

function ValidarCadastroSenha(){
    if(reg_senha1.value.length < 8){
        observacaoReg.item(1).innerHTML = "*Minimo: 8 Caracteres"
        isSenhaOk=false;
    }else if(reg_senha2.value.length < 8){
        observacaoReg.item(1).innerHTML = ""
        observacaoReg.item(2).innerHTML = "*Minimo: 8 Caracteres"
        isSenhaOk=false;
       
    }else {        
        observacaoReg.item(2).innerHTML = " "
        ConfereSenhas()
    }       
    liberarBotaoSalvar()
}
function ConfereSenhas(){
    if(reg_senha1.value == reg_senha2.value){
        observacaoReg.item(1).innerHTML = "*Senhas conferem"
        observacaoReg.item(2).innerHTML = "*Senhas conferem"
        isSenhaOk = true;
    }else{
        observacaoReg.item(1).innerHTML = "*Senhas não conferem"
        observacaoReg.item(2).innerHTML = "*Senhas não conferem"
        isSenhaOk = false;
    }   
    liberarBotaoSalvar()
}

function ValidarSenha(){
    if(inpSenha.value.length < 8){
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

function pesquisar(){
    listCadastrados.find((e)=>{
        if(e.usuario == inpUsuario.value && e.senha == inpSenha.value){
            window.location.href = "page1.html"
        }else{
            alert("Erro de autenticação")
        }
    })
}

function liberarBotaoSalvar(){
    if(isUsuarioOk && isSenhaOk){
        salvarBtn.removeAttribute("disabled")
    }else{
        salvarBtn.setAttribute("disabled",true)
    }
}

function SalvarDados(){
    const dados = listCadastrados.map((el)=>{
           return el.usuario
        })
    
    if(reg_usuario.value == dados){
        negacao.style.display = "Flex";
        negacao.style.color = "red"; 
        setTimeout(()=>{
            reg_usuario.value = ""
            reg_senha1.value = ""
            reg_senha2.value = ""
            negacao.style.display = "none";             
        },3000)
        observacaoReg.item(1).innerHTML = ""
        observacaoReg.item(2).innerHTML = ""
    }else{
        const Pessoa = {
            usuario :  reg_usuario.value,
            senha : reg_senha1.value,
        }
        listCadastrados.push(Pessoa)
        confirmacao.style.display = "Flex";      
        setTimeout(()=>{
            confirmacao.style.display = "none";
            telaCadastro.style.display = "none";  
        },3000)
        
    }
    
}

function btnClose(){
    telaCadastro.style.display = "none";
    reg_usuario.value = ""
    reg_senha1.value = ""
    reg_senha2.value = ""
    observacaoReg.item(0).innerHTML = ""
    observacaoReg.item(1).innerHTML = ""
    observacaoReg.item(2).innerHTML = ""
}

function bntCadastrar(){
    reg_usuario.value = ""
    reg_senha1.value = ""
    reg_senha2.value = ""
    observacaoReg.item(0).innerHTML = ""
    observacaoReg.item(1).innerHTML = ""
    observacaoReg.item(2).innerHTML = ""
    telaCadastro.style.display = "Grid";
}

btnLogin.addEventListener("click" , login)
btnCadastro.addEventListener("click", bntCadastrar )
closeBtn.addEventListener("click",btnClose)
salvarBtn.addEventListener("click", SalvarDados)
