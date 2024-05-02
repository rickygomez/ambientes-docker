# Ambinte Dev NodeJs

* Autor: Ricardo Gómez
* E-mail: rickygomez.rj@gmqil.com
* Github: https://github.com/rickygomez

## Objetivo

Ambiente Base em NodeJs, usando Docker no VS Code através o Dev Container

## Executar

~~~shell
node serve.js
~~~

## Acessando via Navegador Web

Para acessa via Navegador Web usar a porta 3300 que foi definida no arquivo "docker-compose.yml"

## Configurações

### Versão do NodeJs

Para modificar a versão  do NodeJs é necessário alterar o argumento NODEJS_VERSION no arquivo "docker-compose.yml"

#### NodeJs 20 (Padrão)

* NODEJS_VERSION: 20

#### NodeJs 18

* NODEJS_VERSION: 18

#### NodeJs 16

* NODEJS_VERSION: 16
