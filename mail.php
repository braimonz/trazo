<?php
header('Content-Type: application/json; charset=UTF-8');

// Dirección del correo de destino
$to = "sandra@trazodesarrollo.com";

// Verificar si se envió por POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitizar los campos
    $name = htmlspecialchars(trim($_POST["name"] ?? ""));
    $email = htmlspecialchars(trim($_POST["email"] ?? ""));
    $interest = htmlspecialchars(trim($_POST["interest"] ?? ""));
    $service = htmlspecialchars(trim($_POST["service"] ?? ""));
    $message = htmlspecialchars(trim($_POST["message"] ?? ""));

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["success" => false, "error" => "Faltan campos obligatorios."]);
        exit;
    }

    // Asunto y cuerpo del correo
    $subject = "Nuevo mensaje desde el formulario de contacto - Trazo Desarrollo";
    $body = "Has recibido un nuevo mensaje desde tu sitio web:\n\n" .
            "Nombre: $name\n" .
            "Correo: $email\n" .
            "Interés: $interest\n" .
            "Servicio: $service\n\n" .
            "Mensaje:\n$message";

    // Cabeceras
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar correo
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "error" => "Error al enviar el correo."]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Método inválido."]);
}
?>
