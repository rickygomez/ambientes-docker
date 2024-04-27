# Ambinte Dev MySql 5.7

* Autor: Ricardo Gómez
* E-mail: rickygomez.rj@gmqil.com
* Github: https://github.com/rickygomez

## Objetivo

ambiente MySql, usando Docker

## Executar

~~~shell
docker compose up
~~~

## Observações

Existe uma pasta chamada "/imports" que pode ser usada para inserir o dump de bancos em .sql para importar via terminal.
A senha do usaurio root do banco esta definida no arquivo "docker-compose.yml"
E possivel acessar o phpmyadmin pela porta 8888 que foi definada no arquivo "docker-compose.yml"

### Acessar mysql via teminal

~~~shell
mysql -u root -p
~~~

### Importar arquivo

~~~sql
use NomeDoBancp;
source /imports/NomeDoArquivo.sql;
~~~
