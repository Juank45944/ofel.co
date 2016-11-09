<?php

  $nombre = $_POST['nombre'];
  $mail = $_POST['mail'];
  $msg = $_POST['msg'];

  $para = 'comunidadofel@gmail.com';
  $titulo = 'Nuevo mensaje de Ofel.co';
  $mensaje = 'Remitente: '.$nombre."\r\n".$msg;
  $cabecera = 'Email remitente: '.$mail;

  try {
    if (mail($para, $titulo, $mensaje, $cabecera)==true) {
      echo "OK";
    }else {
      echo "Error al enviar, inténtalo más tarde";
    }
  } catch (Exception $e) {
    echo "Error al enviar, inténtalo más tarde";
  }





 ?>
