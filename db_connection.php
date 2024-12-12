<?php
$servername = "localhost";
$username = "root"; // Altere para o usuário do MySQL
$password = "";     // Altere para a senha do MySQL
$dbname = "auth_system";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar se a conexão deu certo
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>
