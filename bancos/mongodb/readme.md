# Ambinte Dev MongoDB

* Autor: Ricardo Gómez
* E-mail: rickygomez.rj@gmqil.com
* Github: https://github.com/rickygomez

## Objetivo

Ambiente MongoDB e MongoDB Express, usando Docker

## Executar

~~~shell
docker compose up
~~~









## Observações

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