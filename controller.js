// Função acessar define uma função, que é responsável por validar o preenchimento dos campos de login e realizar uma ação com base nessa validação.
function acessar() {

    // loginEmail e loginSenha são variáveis que armazenam os valores dos campos de entrada de email e senha, respectivamente. A função document.getElementById().value é usada para pegar o valor atual desses campos de entrada no HTML.
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // A instrução verifica se qualquer um dos campos está vazio. 
    // O operador || é um operador lógico "OU", o que significa que se qualquer campo estiver vazio, a condição geral será verdadeira.
    if (document.forms[0].loginEmail.value == "" || document.forms[0].loginEmail.value.indexOf('@') == -1 ||
        document.forms[0].loginEmail.value.indexOf('.') == -1) {
        alert("Por favor, informe um E-mail válido."); return false;
        } 

    if (!loginSenha) {
        alert("Favor preencher todos os campos.")  // Se a condição do if estiver vazio, um alerta é exibido ao usuário, pedindo para preencher todos os campos.

    } else {
        // alert("Campos preenchidos com sucesso!");    Linha criada para teste.
        window.location.href = 'cadastro.html';
    }
}

//lista global (ou array) que armazena objetos representando usuários. 
//Cada objeto contém informações como nome e e-mail.
var dadosLista = [];

//Esta função é responsável por adicionar um novo usuário à lista e atualizar a tabela HTML.
function salvarUser() {

//Obtém o valor do campo de entrada com o ID nomeUser.
    let nomeUser = document.getElementById('nomeUser').value;

//Obtém o valor do campo de entrada com o ID nomeE.
    let nomeE = document.getElementById('nomeE').value;

//Verifica se ambos os campos foram preenchidos. O operador && garante que ambos os valores sejam não vazios 
//(ou seja, não null, undefined, ou uma string vazia).
    if (nomeUser && nomeE) {

//Adiciona um novo objeto à lista dadosLista. 
//Este objeto contém as informações do usuário com as propriedades nome e email.
        dadosLista.push({ nome: nomeUser, email: nomeE });

// Chama a função criaLista() para atualizar a tabela HTML com os dados mais recentes da lista.
        criaLista();

// Limpa os campos de entrada após adicionar o usuário.
        document.getElementById('nomeUser').value = "";
        document.getElementById('nomeE').value = "";

// Se um dos campos estiver vazio, exibe um alerta solicitando que o nome e o e-mail sejam preenchidos.
    } else {
        alert("Favor, informe um nome e um E-mail para cadastro.");
    }
}

//Esta função atualiza a tabela HTML com os dados da lista dadosLista.
function criaLista() {

// Inicializa a variável tabela com o HTML de cabeçalhos para a tabela.
    let tabela = "<tr><th>Nome Usuário</th><th>E-mail</th><th>Ações</th></tr>";

// Itera sobre cada item na lista dadosLista.
    for (let i = 0; i < dadosLista.length; i++) {

//Adiciona uma linha à tabela para cada usuário, mostrando o nome, e-mail e dois botões para editar e excluir.
//O índice i é passado para as funções editar e excluir como argumento para identificar qual item deve ser editado ou excluído.
        tabela += `<tr><td>${dadosLista[i].nome}</td><td>${dadosLista[i].email}</td><td><button type='button' onclick='editar(${i})'>Editar</button><button type='button' onclick='excluir(${i})'>Excluir</button></td></tr>`;

    }
//Atualiza o conteúdo da tabela HTML com a string gerada.
    document.getElementById('tabela').innerHTML = tabela;

}

//Esta função permite editar um usuário na lista e atualizar a tabela.
function editar(i) {

//Preenche os campos de entrada com os dados do usuário selecionado para edição.
    document.getElementById('nomeUser').value = dadosLista[i].nome;
    document.getElementById('nomeE').value = dadosLista[i].email;

//Remove o item da lista dadosLista na posição i. 
//O método splice modifica a lista original, removendo o item especificado.
    dadosLista.splice(i, 1); 

//Atualiza a tabela HTML para refletir a remoção do usuário e quaisquer edições feitas.
    criaLista(); 

}
//Esta função remove um usuário da lista e atualiza a tabela.
function excluir(i) {

// Remove o item da lista dadosLista na posição i.
    dadosLista.splice(i, 1); 

// A função é responsável por atualizar a tabela após a exclusão.
    criaLista();
}