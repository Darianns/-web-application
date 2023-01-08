<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/Exception.php";

$mail = new PHPMailer(true);
$mail -> CharSet= "UTF-8";

$name = $_POST["name"];
$email = $_POST["email"];
$message= $_POST["message"];

$body = $name.'  '. $email.'  '.$message;
$theme = "[заявка с формы]";

$mail ->addAddres('d_smolskayaa@mail.ru');
$mail->Subject = $theme;
$mail-> Body = $body;
$mail-> send();
?>