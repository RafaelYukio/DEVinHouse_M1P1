# DEVinHouse_M1P1

Projeto 1 - 1 do curso DEVinHouse (SENAI)  
Última atualização: 14/11/2021

[to_do.html](https://rafaelyukio.github.io/DEVinHouse_M1P1/to_do.html)  
[to_do.css](https://rafaelyukio.github.io/DEVinHouse_M1P1/to_do.css)  
[to_do.js](https://rafaelyukio.github.io/DEVinHouse_M1P1/to_do.js)

## Premissas

Criação de uma aplicação web de lista de afazeres ("to-do list"), simulando uma das etapas do processo seletivo de uma grande empresa de TI.

<details>
  <summary>Requisitos</summary>
  
- Título na aba do navegador;
- Cabeçalho;
- Campo de texto para inserir a nota (afazeres);
- Botão para adicionar nova nota;
- Lista contendo notas já inseridas;
- Cada nota na lista deve conter um _checkbox_ (para que seja marcado quando realizar a tarefa) e um botão para excluir a mesma;
- A nota criada deve ter seu texto risco ao marcar como concluído (_line-through_);
- A lista criada deve ser salva no _localStorage_, sendo carregada sempre que a página for aberta;
- Codificar em html, css, js e markdown.
</details>

<details>
  <summary>Critérios para máxima avaliação</summary>
  
- Criar _icon_;
- Uso correto das _tags_, dos atributos e bom posicionamento do cabeçalho;
- Rótulo ou _placholder_ no campo de texto, indicando o conteúdo;
- Botão para apagar conteúdo com campo de texto;
- Uso correto das _tags_ e dos atributos para criação da lista;
- _line-through_ na atividade marcada pelo _checkbox_;
- Clareza (bom espaçamento) nos conteúdos da lista;
- Mensagem de confirmação antes da exclusão da nota;
- Salvar todas as alterações e conseguir carrega-las ao abrir a página;
- Design agradável e intuitivo;
- Código JS separa e bem estruturado.
</details>
<br/>

## Planejamento

- HTML
  - *div* para fazer o "to-do list";
  - Cabeçalho;
  - Separar em *sections* local de *inputs* e resultados (no caso, a lista);
  - Criação/modificação da lista conforme ações do usuário.
    - *buttons* e *checkbox*.

- JS
  - Carregar lista salva no *localstorage*;
  - Funções separadas para cada funcionalidade;
  - Salvar no *localstorage* a cada modificação no DOM;
  - Associação dos *inputs* com suas respectivas funções.

- CSS
  - Design agradável e intuitivo;
  - *fonts* externas (Google Fonts);
  - Introdução a animações;
  - Estilos específicos para navegador (Chrome ou Firefox).
