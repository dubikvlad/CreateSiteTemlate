<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    
    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';
    require 'phpmailer/src/SMTP.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru' , 'phpmailer/language/');
    $mail->IsHTML(true);

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.mail.ru';  						  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'web-meert1@mail.ru';               // Ваш логин от почты с которой будут отправляться письма
    $mail->Password = 'UYaOaijRr23*';                     // Ваш пароль от почты с которой будут отправляться письма
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to / этот порт может отличаться у других провайдеров    
    //От кого письмо
    $mail->setFrom('web-meert1@mail.ru' , 'WEB-партнер');
    //Кому
    $mail->addAddress('koreaminsk@mail.ru'); 
    //Тема
    $mail->Subject = 'Новая заявка на сайте';


    //Тело письма

    //$body = '<h1>Новая заявка</h1>';

    // if(trim(!empty($_POST['name']))) {
    //     $body ='<p><strong>Имя: </strong> ' .$name '.</p>';
    // }
    // if(trim(!empty($_POST['email']))) {
    //     $body ='<p><strong>E-mail: </strong> ' .$email '.</p>';
    // }
    // if(trim(!empty($_POST['phone']))) {
    //     $body ='<p><strong>Телефон: </strong> ' .$phone '.</p>';
    // }

    $mail->Body = 'Пользователь <strong>' .$name . '</strong> оставил заявку, его телефон: <br> <a  href="tel:' .$phone. '">' .$phone. '</a> 
                  <br><br><strong>Почта этого пользователя: </strong>' .$email;

    //отправка
    if($mail->send()) {
        $message = "Данные отправлены!";
    } else {
        $message = "Что-то почло не так!";
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>