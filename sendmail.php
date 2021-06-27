<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguge('ru' , 'phpmailer/language/');
    $mail->IsHTML(true);


    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.mail.ru';  						  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'web-meert1@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
    $mail->Password = 'UYaOaijRr23*'; // Ваш пароль от почты с которой будут отправляться письма
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров
    //От кого письмо
    $mail->setFrom('web-meert1@mail.ru' , 'Вася');
    //Кому
    $mail->addAddress('dubikvlad@mail.ru');
    //Тема
    $mail->Subject = "Новая заявка на сайте";

    //Тело письма

    $body = '<h1>Новая заявка</h1>';

    if(trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя: </strong> '.$_POST['name']'.</p>';
    }
    if(trim(!empty($_POST['email']))) {
        $body.='<p><strong>E-mail: </strong> '.$_POST['email']'.</p>';
    }
    if(trim(!empty($_POST['phone']))) {
        $body.='<p><strong>Телефон: </strong> '.$_POST['phone']'.</p>';
    }

    $mail->Body = $body;

    //отправка
    if(!$mail->send()) {
        $message = "Что-то почло не так";
    } else {
        $message = "Данные отправлены!";
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>
