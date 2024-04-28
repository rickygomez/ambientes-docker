<?php
$servername = "host.docker.internal";
$username = "root";
$password = "root";
$database = "teste";
$port = 3306;

try {
    $conn = new PDO("mysql:dbname=$database;host=$servername;port=$port", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Banco de dados \"$database\" conectado com sucesso!";
} catch(PDOException $e) {
    echo "Erro ao conectar no banco \"$database\": " . $e->getMessage();
}
?>