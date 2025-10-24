#!/bin/bash

# Script para renomear arquivos em uma pasta específica
# Uso: renomear_arquivos.sh <NomeAtual> <NovoNome> <CaminhoDaPasta>
# Exemplo: ./.devtools/renomear_arquivos.sh 'EspecialidadeMedica' 'Categoria' './test/Categoria'
# premissa: o comando 'rename' está instalado no sistema e dará permissão de execução ao script
##  /> sudo apt install rename
##  /> chmod +x .devtools/renomear_arquivos.sh

# Verifica se o comando 'rename' está instalado
if ! command -v rename &> /dev/null; then
    echo "Erro: O comando 'rename' não está instalado. Por favor, instale-o e tente novamente."
    echo "Execute: sudo apt install rename"
    exit 1
fi

# Verifica se os três argumentos foram fornecidos
if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]; then
    echo "Uso: renomear_arquivos.sh <NomeAtual> <NovoNome> <CaminhoDaPasta>"
    echo "Ex: renomear_arquivos.sh 'antigo' 'novo' './documentos/pasta'"
    exit 1
fi

NOME_ATUAL="$1"
NOVO_NOME="$2"
CAMINHO_PASTA="$3"

cd "$CAMINHO_PASTA" || { echo "Erro: Caminho '$CAMINHO_PASTA' não encontrado."; exit 1; }

# Executa o comando de renomear
# O 'find' procura por arquivos que contenham $NOME_ATUAL em qualquer parte do nome.
# O 'rename' faz a substituição.
find . -type f -name "*${NOME_ATUAL}*" -exec rename "s/${NOME_ATUAL}/${NOVO_NOME}/" {} +

echo "Renomeado com sucesso: '$NOME_ATUAL' para '$NOVO_NOME'"
