# Login Cad 🖥

## 📄 Descrição
Este projeto feito durante as aulas de Programação Web I, é uma aplicação básica em JavaScript que gerencia um sistema de login e uma lista de usuários. Ele permite que os usuários se autentiquem e que gerenciem uma lista de nomes, com funcionalidades para adicionar, editar e excluir itens da lista.

## Funcionalidades

### 1. Autenticação de Usuário

* Função acessar(): Verifica se o email e a senha foram preenchidos antes de redirecionar o usuário para a página de cadastro.

### 2. Gerenciamento de Lista de Usuários

* Função salvarUser(): Adiciona um novo nome à lista dadosLista e atualiza a tabela HTML. Se o campo de entrada estiver vazio, exibe um alerta.
* Função criaLista(): Cria e atualiza a tabela HTML com os nomes armazenados em dadosLista. Inclui botões para editar e excluir itens.
* Função editar(i): Permite editar um nome na lista. Preenche o campo de entrada com o nome selecionado e remove o item da lista.
* Função excluir(i): Remove um item da lista e a linha correspondente da tabela HTML.

## Instruções de Uso

### 1. Autenticação

#### Para autenticar um usuário:

* Preencha o campo de email (loginEmail) e o campo de senha (loginSenha).
* Clique no botão de acesso.
* Se ambos os campos estiverem preenchidos, você será redirecionado para a página cadastro.html. Caso contrário, um alerta pedirá que você preencha todos os campos.

### 2. Gerenciamento da Lista de Usuários

#### Adicionar Usuário

* Digite um nome no campo de entrada (nomeUser).
* Clique no botão para salvar o usuário.
* O nome será adicionado à lista e exibido na tabela. O campo de entrada será limpo.

#### Editar Usuário
* Clique no botão "Editar" ao lado do nome que deseja editar.
* O nome será preenchido no campo de entrada (nomeUser), e o item será removido da lista.
* Modifique o nome e salve-o novamente se desejar.

#### Excluir Usuário
* Clique no botão "Excluir" ao lado do nome que deseja remover.
* O nome será removido da lista e da tabela HTML.

## Imagens do site 
