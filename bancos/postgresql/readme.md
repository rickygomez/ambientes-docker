# Ambinte Dev PostgreSQL

* Autor: Ricardo Gómez
* E-mail: rickygomez.rj@gmqil.com
* Github: https://github.com/rickygomez

## Objetivo

Ambiente PostgreSQL e PgAdmin4, usando Docker

## Executar

~~~shell
docker compose up
~~~

## Observações

Existe uma pasta chamada "/imports" que pode ser usada para inserir o dump de bancos em .sql para importar via terminal.

A senha do usuário root do banco esta definida no arquivo "docker-compose.yml"

E possivel acessar o pgAdmin4 pela porta 5500 que foi definada no arquivo "docker-compose.yml"

### Acessar PostgreSQL via teminal

~~~shell
psql -U root
~~~

### Importar arquivo

~~~sql
cd /imports
psql -U root -d BancoDeDados -f NomeDoArquivo.sql
~~~