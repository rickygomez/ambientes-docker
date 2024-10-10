# Ambiente Dev PHP

* Autor: Ricardo Gómez
* E-mail: rickygomez.rj@gmqil.com
* Github: https://github.com/rickygomez

## Objetivo

Ambiente Base em PHP e Xdebug, usando Docker no VS Code através o Dev Container

## Acessando via Navegador Web

Para acessa via Navegador Web usar a porta **8000** que foi definida no arquivo env em **.devcontainer/.env**, essa porta pode ser alterada nesse mesmo arquivo alterando a variável **HOST_PORT**

## Configurações

### Definido pasta do projeto

Por padrão os arquivos são carregados diretamente na pasta html do apache, porem para uma melhor organização ele podem ser incluídos e uma estrutura diferente dentro dessa pasta, para isso basta altera a variável **PROJECT_PATH** no arquivo o env em **.devcontainer/.env** incluindo as pastas relativas a serem criadas.
Essa pasta também ser utilizada como a pasta principal do workspace do devcontainer

### Modificar pasta publica do apache

Para modificar a pasta publica do apache, basta altera a variável **PROJECT_PATH_PUBLIC** no arquivo o env em **.devcontainer/.env**, incluindo as pastas relativas a serem criadas. Essa estrutura deva en consideração a estrutura aterior definida no projeto.

### Versão do PHP

Para cada versão do PHP é necessário alterar a o Xdebug compatível, alterando as variáveis  **XDEBUG_VERSION** e **PHP_APACHE_VERSION** no arquivo env em **.devcontainer/.env**

#### PHP 8.3 (Padrão)

```.env
PHP_APACHE_VERSION=8.3
XDEBUG_VERSION=3.3.1
```

#### PHP 8.2

```.env
PHP_APACHE_VERSION=8.2
XDEBUG_VERSION=3.3.1
```

#### PHP 7.4

```.env
PHP_APACHE_VERSION=7.4
XDEBUG_VERSION=3.1.1
```

### NodeJs

Para definir qual versão do NodeJs e necessário alterando a variável **NODEJS_VERSION** no arquivo env em **.devcontainer/.env**, caso não seja definido a variável **NODEJS_VERSION** NodeJs não sera instalado.

#### NodeJS 20

```.env
NODEJS_VERSION: 20
```

#### NodeJS 18

```.env
NODEJS_VERSION: 18
```

#### NodeJS 16

```.env
NODEJS_VERSION: 16
```