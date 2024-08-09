// Função para validar o acesso.
 
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos.")
    }else{
        // alert("Campos preenchidos com sucesso!");    
        window.location.href = 'cadastro.html';
    }
}
 
// Função para armazenar os nomes em ARRAY
var dadosLista = []; 
 
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
 
    if(nomeUser){
        dadosLista.push(nomeUser);
        //console.log(dadosLista);  
        criaLista();
        document.getElementById('nomeUser').value = ""; 
    }else{
        alert("Favor, informe um nome para cadastro.");
    }
}
// Função para criar uma lista de usuários
function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário.</th><th>Ações.</th></tr>"; 
    for(let i=0;i <= (dadosLista.length -1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>"; 
        document.getElementById('tabela').innerHTML = tabela;
    }
 
}
 
//Função para editar os nomes das listas.
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1)   
}
 
// Função para excluir o nome da lista.
function excluir(i){
    dadosLista.splice((i - 1), 1); 
    document.getElementById('tabela').deleteRow(i);
}