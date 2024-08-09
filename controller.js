// Função acessar define uma função, que é responsável por validar o preenchimento dos campos de login e realizar uma ação com base nessa validação.
function acessar(){

// loginEmail e loginSenha são variáveis que armazenam os valores dos campos de entrada de email e senha, respectivamente. A função document.getElementById().value é usada para pegar o valor atual desses campos de entrada no HTML.
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;
 
// A instrução verifica se qualquer um dos campos está vazio. 
// O operador || é um operador lógico "OU", o que significa que se qualquer campo estiver vazio, a condição geral será verdadeira.
    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos.")  // Se a condição do if estiver vazio, um alerta é exibido ao usuário, pedindo para preencher todos os campos.
       
    }else{
        // alert("Campos preenchidos com sucesso!");    Linha criada para teste.
        window.location.href = 'cadastro.html';
    }
}

 
//  cria uma lista onde será armazenado os nomes de usuários inseridos.
var dadosLista = []; 
 
// Esta função é responsável por pegar o valor inserido pelo usuário, adicionar esse valor à lista e atualizar.
function salvarUser(){

// obtém o valor atual do campo de entrada com o ID 'nomeUser'. O valor é armazenado na variável nomeUser.
    let nomeUser = document.getElementById('nomeUser').value;
 
// verifica se nomeUser não é uma string vazia. Se o campo estiver preenchido, o código dentro do bloco if é executado.    
    if(nomeUser){

// adiciona o nome fornecido à lista dadosLista.
        dadosLista.push(nomeUser);
        //console.log(dadosLista);  
        
// chama a função criaLista, que atualiza a exibição da lista na página.
        criaLista();

// limpa o campo de entrada após o nome ter sido adicionado à lista.
        document.getElementById('nomeUser').value = ""; 

// Se o campo não for preenchido, um alerta aparece para o usuário. 
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