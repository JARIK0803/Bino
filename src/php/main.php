<?php

// $recepient = "jarik.tchuicko@gmail.com";
// $siteName = "Bino";

// $name = trim($_POST["name"]);
// $email = trim($_POST["email"]);
// $phone = trim($_POST["phone"]);
// $textarea = trim($_POST["textarea"]);
// $message = "Ім'я: $name \nEmail: $email \nТелефон: $phone \nПовідомлення: $textarea";

// $pagetitle = "Заявка с сайта \"$siteName\"";
// mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


/* https://api.telegram.org/bot1003694090:AAF1x7xBwofe1dY511VSeQsXsmXZU_CPOU4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$textarea = trim($_POST["textarea"]);
$token = "1003694090:AAF1x7xBwofe1dY511VSeQsXsmXZU_CPOU4";
$chat_id = "-467784151";
$arr = array(
  'Ім`я: ' => $name,
  'Email: ' => $email,
  'Телефон: ' => $phone,
  'Повідомлення: ' => $textarea
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }

?>