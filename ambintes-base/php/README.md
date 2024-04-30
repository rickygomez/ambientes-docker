# Ambiente Dev PHP

* Autor: Ricardo Gómez
* E-mail: rickygomez.rj@gmqil.com
* Github: https://github.com/rickygomez

## Objetivo

Ambiente Base em PHP e Xdebug, usando Docker no VS Code através o Dev Container

## Configurações

Para cada versão do PHP é necessário alterar a o Xdebug compativel, aterando ow argumento XDEBUG_VERSION e PHP_APACHE_VERSION no arquivo "docker-compose.yml"

### PHP 8.3

* PHP_APACHE_VERSION: 8.3
* XDEBUG_VERSION: 3.3.1

### PHP 8.2

* PHP_APACHE_VERSION: 8.2
* XDEBUG_VERSION: 3.3.1

### PHP 7.4

* PHP_APACHE_VERSION: 7.4
* XDEBUG_VERSION: 3.1.1
