<?php
// Configurações do banco de dados (CONFIRA SE ESTÃO CORRETAS!)
$servername = 'Localhost';
$username = 'root';
$password = '';
$dbname = 'usuarios';

// Conexão (com tratamento de erro mais específico)
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Erro de conexão com o banco de dados: " . $conn->connect_error . "<br>Verifique as credenciais no auth_backend.php!"); // Mensagem mais informativa
}

// CORS (se necessário - descomente e ajuste o domínio se o frontend estiver em outro domínio/porta)
// header("Access-Control-Allow-Origin: *"); // Ou: header("Access-Control-Allow-Origin: http://localhost:3000");
// header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
// header("Access-Control-Allow-Headers: Content-Type");

function sanitize($conn, $data) {
    return $conn->real_escape_string(trim($data));
}

// Verifica se é registro
if (isset($_POST['register']) && $_POST['register'] == 1) {
    $full_name = sanitize($conn, $_POST['full_name']);
    $username = sanitize($conn, $_POST['username']);
    $email = sanitize($conn, $_POST['email']);
    $birth_date = sanitize($conn, $_POST['birth_date']);
    $password = password_hash(sanitize($conn, $_POST['password']), PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (full_name, username, email, birth_date, password) VALUES ('$full_name', '$username', '$email', '$birth_date', '$password')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro realizado com sucesso!";
    } else {
        echo "Erro no registro: " . $conn->error; // Mensagem de erro DO BANCO DE DADOS
    }
}

// Verifica se é login (adicionado aqui para manter o arquivo completo)
else if (isset($_POST['login']) && $_POST['login'] == 1) {
  // ... (seu código de login aqui)
}

else{ // importantissimo para diagnosticar erros
    echo "Nenhuma ação de registro ou login foi solicitada.";
}
$conn->close();
?>